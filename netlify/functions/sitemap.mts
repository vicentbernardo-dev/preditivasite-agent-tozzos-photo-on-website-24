import type { Config } from '@netlify/functions';

const SITE_URL = 'https://preditiva.co';
const SANITY_PROJECT_ID = 'ioanix6u';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2025-01-20';

const STATIC_PATHS = ['', '/metodologia', '/frentes-aceleradora', '/frentes-consultoria', '/frentes-especialistas', '/especialidade-seo', '/especialidade-midia', '/especialidade-crm', '/especialidade-dados', '/especialidade-dev', '/especialidade-growth', '/cases', '/case-miami', '/case-gtex', '/case-master', '/blog', '/partners', '/ferramentas'];

interface SanityPost {
  slug: string;
  date?: string;
}

const escapeXml = (value: string): string =>
  value.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });

const toLastmod = (date?: string): string | undefined => {
  if (!date) return undefined;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString().split('.')[0] + 'Z';
};

export default async (): Promise<Response> => {
  const headers = {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=0, must-revalidate',
  };

  try {
    const params = new URLSearchParams({
      query: `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "date": coalesce(date, publishedAt, _createdAt) } | order(date desc)`,
    });

    const response = await fetch(
      `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?${params.toString()}`,
      { headers: { accept: 'application/json' } },
    );

    let posts: SanityPost[] = [];
    if (response.ok) {
      const data = (await response.json()) as { result?: SanityPost[] };
      posts = Array.isArray(data.result) ? data.result : [];
    }

    const today = new Date().toISOString().split('T')[0];

    const urls = [
      ...STATIC_PATHS.map((path) => {
        const priority = path === '' ? '1.0' : path === '/blog' ? '0.9' : '0.8';
        const changeFreq = path === '' ? 'daily' : 'weekly';
        return [
          '  <url>',
          `    <loc>${SITE_URL}${path}/</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <changefreq>${changeFreq}</changefreq>`,
          `    <priority>${priority}</priority>`,
          '  </url>',
        ].join('\n');
      }),
      ...posts.map((post) => {
        const lastmod = toLastmod(post.date) ?? today;
        return [
          '  <url>',
          `    <loc>${SITE_URL}/blog/${escapeXml(post.slug)}/</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          '    <changefreq>monthly</changefreq>',
          '    <priority>0.7</priority>',
          '  </url>',
        ].join('\n');
      }),
    ];

    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      '</urlset>',
      '',
    ].join('\n');

    return new Response(xml, { status: 200, headers });
  } catch {
    const fallback = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      '  <url>',
      `    <loc>${SITE_URL}/</loc>`,
      '  </url>',
      '</urlset>',
      '',
    ].join('\n');

    return new Response(fallback, { status: 200, headers });
  }
};

export const config: Config = {
  path: '/sitemap.xml',
  preferStatic: false,
};
