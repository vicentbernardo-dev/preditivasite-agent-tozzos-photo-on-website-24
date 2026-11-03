// Pós-build: gera um HTML por rota com <title>, description, canonical, Open Graph
// e JSON-LD corretos já no HTML cru. Sem isso, toda URL respondia o mesmo
// index.html com o canonical da home e o Google marcava as páginas como duplicadas.
// Também gera o 404.html, o app-shell.html (fallback de posts novos) e injeta as
// regras de rewrite no dist/_redirects.
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';
import { buildBlogPostSchema, buildBreadcrumbSchema, getPageSeo, type ArticleSeoData } from '../src/lib/seo';
import { STATIC_PAGES, routeToPath } from '../src/lib/routes';
import { buildFaqSchema, buildServiceSchema } from '../src/lib/schema';
import type { PageRoute } from '../src/components/Navbar';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const REDIRECTS_MARKER = '# @prerender-rules';
const SAFE_SLUG = /^[a-z0-9][a-z0-9-]*$/i;

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// data-page: o SPA remove o schema ao navegar para outra página (ver updatePageSeo)
const jsonLd = (id: string, data: unknown, page?: PageRoute) =>
  `<script type="application/ld+json" id="${id}"${page ? ` data-page="${page}"` : ''}>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const setMetaTag = (html: string, attr: 'name' | 'property', key: string, content: string) => {
  const tag = `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`;
  const pattern = new RegExp(`<meta\\s+${attr}="${key.replace(/:/g, '\\:')}"\\s+content="[^"]*"\\s*/?>`);
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
};

const removeTag = (html: string, pattern: RegExp) => html.replace(new RegExp(`[ \\t]*${pattern.source}\\s*\\n?`), '');

interface RenderOptions {
  page: PageRoute;
  slug?: string;
  article?: ArticleSeoData;
  // Fallback genérico: sem canonical, para não apontar posts novos para a home
  shell?: boolean;
}

const renderHead = (template: string, { page, slug, article, shell }: RenderOptions) => {
  const seo = getPageSeo(page, slug, article);
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);

  html = setMetaTag(html, 'name', 'description', seo.description);
  html = setMetaTag(html, 'property', 'og:title', seo.title);
  html = setMetaTag(html, 'property', 'og:description', seo.description);
  html = setMetaTag(html, 'property', 'og:image', seo.socialImage);
  html = setMetaTag(html, 'property', 'og:image:alt', seo.imageAlt);
  html = setMetaTag(html, 'property', 'og:type', seo.ogType);
  html = setMetaTag(html, 'name', 'twitter:title', seo.title);
  html = setMetaTag(html, 'name', 'twitter:description', seo.description);
  html = setMetaTag(html, 'name', 'twitter:image', seo.socialImage);

  const canonicalUrl = shell ? undefined : seo.canonicalUrl;
  if (canonicalUrl) {
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeAttr(canonicalUrl)}" />`);
    html = setMetaTag(html, 'property', 'og:url', canonicalUrl);
  } else {
    html = removeTag(html, /<link rel="canonical" href="[^"]*"\s*\/?>/);
    html = removeTag(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/);
  }

  if (seo.noindex) {
    html = setMetaTag(html, 'name', 'robots', 'noindex, follow');
  }

  const schemas: string[] = [];
  if (!shell) {
    const breadcrumb = buildBreadcrumbSchema(page, article?.title);
    if (breadcrumb) schemas.push(jsonLd('schema-breadcrumb-list', breadcrumb));
    if (page === 'blog-post' && article) schemas.push(jsonLd('schema-blog', buildBlogPostSchema(slug, article)));
    const service = buildServiceSchema(page);
    if (service) schemas.push(jsonLd('schema-service', service, page));
    const faq = buildFaqSchema(page);
    if (faq) schemas.push(jsonLd('schema-faq', faq, page));
  }
  if (schemas.length) {
    html = html.replace('</head>', `  ${schemas.join('\n    ')}\n  </head>`);
  }
  return html;
};

const writeFile = (relativePath: string, content: string) => {
  const target = path.join(DIST, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
};

interface SanityPost {
  slug: string;
  title?: string;
  excerpt?: string;
  imageUrl?: string;
  publishedAt?: string;
  modifiedAt?: string;
  authorName?: string;
}

// Mesma seleção de tipos e campos que o BlogPostPage usa no navegador
const fetchPosts = async (): Promise<SanityPost[]> => {
  const client = createClient({
    projectId: 'ioanix6u',
    dataset: 'production',
    apiVersion: '2025-01-20',
    useCdn: false,
  });
  return client.fetch(`*[_type in ["post", "blogPost", "article"] && defined(slug.current)]{
    "slug": slug.current,
    title,
    excerpt,
    "imageUrl": image.asset->url,
    "publishedAt": coalesce(date, publishedAt, _createdAt),
    "modifiedAt": _updatedAt,
    "authorName": author.name
  }`);
};

const main = async () => {
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const rules: string[] = [];

  for (const page of STATIC_PAGES) {
    const html = renderHead(template, { page });
    if (page === 'home') {
      writeFile('index.html', html);
      continue;
    }
    writeFile(`${page}.html`, html);
    rules.push(`${routeToPath(page)}  /${page}.html  200`);
  }

  writeFile('app-shell.html', renderHead(template, { page: 'blog', shell: true }));
  writeFile('404.html', renderHead(template, { page: 'not-found' }));

  let posts: SanityPost[] = [];
  try {
    posts = await fetchPosts();
  } catch (error) {
    // Sem Sanity o build segue: os posts caem no app-shell e o JS completa o SEO
    console.warn('[prerender] Não foi possível buscar os posts do Sanity:', error);
  }

  let postCount = 0;
  for (const post of posts) {
    if (!post.slug || !SAFE_SLUG.test(post.slug) || !post.title) continue;
    const article: ArticleSeoData = {
      title: post.title,
      description: post.excerpt,
      image: post.imageUrl,
      publishedAt: post.publishedAt,
      modifiedAt: post.modifiedAt,
      authorName: post.authorName,
    };
    writeFile(`blog/${post.slug}.html`, renderHead(template, { page: 'blog-post', slug: post.slug, article }));
    rules.push(`${routeToPath('blog-post', post.slug)}  /blog/${post.slug}.html  200`);
    postCount++;
  }

  const redirectsPath = path.join(DIST, '_redirects');
  const redirects = fs.readFileSync(redirectsPath, 'utf8');
  if (!redirects.includes(REDIRECTS_MARKER)) {
    throw new Error(`[prerender] Marcador "${REDIRECTS_MARKER}" não encontrado em dist/_redirects`);
  }
  fs.writeFileSync(redirectsPath, redirects.replace(REDIRECTS_MARKER, rules.join('\n')));

  console.log(`[prerender] ${STATIC_PAGES.length} páginas estáticas, ${postCount} posts, 404.html e app-shell.html gerados.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
