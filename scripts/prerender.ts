// Pós-build: gera um HTML por rota com <title>, description, canonical, Open Graph,
// JSON-LD e o conteúdo da página (React renderizado no build) já no HTML cru. Sem
// isso, toda URL respondia o mesmo index.html vazio com o canonical da home e o
// Google marcava as páginas como duplicadas.
// Também gera o 404.html, o app-shell.html (fallback de posts novos) e injeta as
// regras de rewrite no dist/_redirects.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createClient } from '@sanity/client';
import { buildBlogPostSchema, buildBreadcrumbSchema, getPageSeo, schemaPageKey, type ArticleSeoData } from '../src/lib/seo';
import { STATIC_PAGES, routeToPath } from '../src/lib/routes';
import { buildCaseSchema, buildFaqSchema, buildServiceSchema } from '../src/lib/schema';
import { buildLlmsFullTxt, buildLlmsTxt, type LlmsPost } from './llms';
import type { FaqEntry } from '../src/data/faqs';
import { PRELOADED_KEYS } from '../src/lib/preloaded';
import { ALL_POSTS_QUERY, BLOG_POSTS_QUERY, RECENT_POSTS_QUERY } from '../src/lib/queries';
import type { PageRoute } from '../src/components/Navbar';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const REDIRECTS_MARKER = '# @prerender-rules';
const SAFE_SLUG = /^[a-z0-9][a-z0-9-]*$/i;

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// data-page: o SPA remove o schema ao navegar para outra página (ver updatePageSeo)
const jsonLd = (id: string, data: unknown, page?: string) =>
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
  // FAQ do post (campo faq do Sanity); páginas estáticas usam PAGE_FAQS
  faq?: FaqEntry[];
  // Fallback genérico: sem canonical, para não apontar posts novos para a home
  shell?: boolean;
}

const renderHead = (template: string, { page, slug, article, faq, shell }: RenderOptions) => {
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
    if (service) schemas.push(jsonLd('schema-service', service, schemaPageKey(page)));
    const caseStudy = buildCaseSchema(page);
    if (caseStudy) schemas.push(jsonLd('schema-case', caseStudy, schemaPageKey(page)));
    const faqSchema = buildFaqSchema(page, faq);
    if (faqSchema) schemas.push(jsonLd('schema-faq', faqSchema, schemaPageKey(page, slug)));
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

// Corpo da página: HTML gerado pelo React (dist-server/entry-server.js) mais os dados do
// Sanity usados nele. Sem isso o <body> chegava vazio e Google/IAs só viam o conteúdo
// depois de executar o JS ("Detectada/Rastreada, mas não indexada").
type RenderApp = (path: string, preloaded: Record<string, unknown>) => Promise<string>;

const loadRenderer = async (): Promise<RenderApp> => {
  const entry = path.resolve(import.meta.dirname, '..', 'dist-server', 'entry-server.js');
  const mod = await import(pathToFileURL(entry).href);
  return mod.render as RenderApp;
};

const renderFailures: string[] = [];

const injectBody = async (
  html: string,
  renderApp: RenderApp,
  routePath: string,
  preloaded: Record<string, unknown> = {},
) => {
  let appHtml = '';
  try {
    appHtml = await renderApp(routePath, preloaded);
  } catch (error) {
    // Uma rota que falhe cai no comportamento antigo (corpo vazio, renderizado pelo JS)
    renderFailures.push(routePath);
    console.warn(`[prerender] Falha ao renderizar ${routePath}:`, error);
    return html;
  }
  const data = Object.keys(preloaded).length
    ? `<script>window.__PRELOADED__=${JSON.stringify(preloaded).replace(/</g, '\\u003c')}</script>`
    : '';
  return html.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>${data}`);
};

interface SanityPost {
  slug?: { current?: string };
  title?: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  publishedAt?: string;
  _createdAt?: string;
  _updatedAt?: string;
  author?: { name?: string };
  tldr?: string;
  faq?: Partial<FaqEntry>[];
}

interface SanityData {
  posts: SanityPost[];
  blogPosts?: unknown[];
  recentPosts?: unknown[];
}

// Mesmas queries do navegador (src/lib/queries.ts), para o HTML bater com a hidratação
const fetchSanityData = async (): Promise<SanityData> => {
  const client = createClient({
    projectId: 'ioanix6u',
    dataset: 'production',
    apiVersion: '2025-01-20',
    useCdn: false,
  });
  const [posts, blogPosts, recentPosts] = await Promise.all([
    client.fetch<SanityPost[]>(ALL_POSTS_QUERY),
    client.fetch<unknown[]>(BLOG_POSTS_QUERY),
    client.fetch<unknown[]>(RECENT_POSTS_QUERY),
  ]);
  return { posts, blogPosts, recentPosts };
};

const main = async () => {
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  const renderApp = await loadRenderer();
  const rules: string[] = [];

  let sanity: SanityData = { posts: [] };
  try {
    sanity = await fetchSanityData();
  } catch (error) {
    // Sem Sanity o build segue: blog e posts são renderizados pelo JS no navegador
    console.warn('[prerender] Não foi possível buscar os dados do Sanity:', error);
  }

  const pagePreloaded = (page: PageRoute): Record<string, unknown> => {
    if (page === 'home' && sanity.recentPosts) return { [PRELOADED_KEYS.recentPosts]: sanity.recentPosts };
    if (page === 'blog' && sanity.blogPosts) return { [PRELOADED_KEYS.blogPosts]: sanity.blogPosts };
    return {};
  };

  for (const page of STATIC_PAGES) {
    const routePath = routeToPath(page);
    const html = await injectBody(renderHead(template, { page }), renderApp, routePath, pagePreloaded(page));
    if (page === 'home') {
      writeFile('index.html', html);
      continue;
    }
    writeFile(`${page}.html`, html);
    rules.push(`${routePath}  /${page}.html  200`);
  }

  // app-shell (posts publicados depois do último build) continua vazio: o JS renderiza
  writeFile('app-shell.html', renderHead(template, { page: 'blog', shell: true }));
  writeFile('404.html', await injectBody(renderHead(template, { page: 'not-found' }), renderApp, '/404'));

  let postCount = 0;
  const publishedPosts: LlmsPost[] = [];
  for (const post of sanity.posts) {
    const slug = post.slug?.current;
    if (!slug || !SAFE_SLUG.test(slug) || !post.title) continue;
    const publishedAt = post.date || post.publishedAt || post._createdAt;
    const faq = (post.faq || []).filter((item): item is FaqEntry => Boolean(item.question && item.answer));
    const article: ArticleSeoData = {
      title: post.title,
      description: post.excerpt,
      image: post.imageUrl,
      publishedAt,
      modifiedAt: post._updatedAt,
      authorName: post.author?.name,
    };
    const routePath = routeToPath('blog-post', slug);
    const head = renderHead(template, { page: 'blog-post', slug, article, faq });
    writeFile(`blog/${slug}.html`, await injectBody(head, renderApp, routePath, { [PRELOADED_KEYS.post(slug)]: post }));
    rules.push(`${routePath}  /blog/${slug}.html  200`);
    publishedPosts.push({ slug, title: post.title, excerpt: post.excerpt, tldr: post.tldr, publishedAt });
    postCount++;
  }

  writeFile('llms.txt', buildLlmsTxt(publishedPosts));
  writeFile('llms-full.txt', buildLlmsFullTxt(publishedPosts));

  const redirectsPath = path.join(DIST, '_redirects');
  const redirects = fs.readFileSync(redirectsPath, 'utf8');
  if (!redirects.includes(REDIRECTS_MARKER)) {
    throw new Error(`[prerender] Marcador "${REDIRECTS_MARKER}" não encontrado em dist/_redirects`);
  }
  fs.writeFileSync(redirectsPath, redirects.replace(REDIRECTS_MARKER, rules.join('\n')));

  console.log(`[prerender] ${STATIC_PAGES.length} páginas estáticas, ${postCount} posts, 404.html, app-shell.html, llms.txt e llms-full.txt gerados.`);
  if (renderFailures.length) {
    console.warn(`[prerender] ${renderFailures.length} rota(s) sem corpo pré-renderizado: ${renderFailures.join(', ')}`);
  }
};

main()
  // O build de servidor deixa timers do React/motion pendentes; encerra explicitamente
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
