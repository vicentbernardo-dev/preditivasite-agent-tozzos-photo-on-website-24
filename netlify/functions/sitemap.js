const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'ioanix6u',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-01-20',
});

const SITE_URL = 'https://preditiva.co';

// Rotas do app (devem refletir VALID_PAGES em src/App.tsx)
const staticPages = [
  '',
  '/metodologia',
  '/frentes-aceleradora',
  '/frentes-consultoria',
  '/frentes-especialistas',
  '/especialidade-seo',
  '/especialidade-midia',
  '/especialidade-crm',
  '/especialidade-dados',
  '/especialidade-dev',
  '/especialidade-growth',
  '/cases',
  '/case-miami',
  '/case-gtex',
  '/case-master',
  '/blog',
  '/partners',
  '/ferramentas',
  '/ferramentas-vision',
  '/ferramentas-alfredo',
];

exports.handler = async function () {
  const headers = {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=0, must-revalidate',
  };

  try {
    // slug.current lowercase é como os posts são publicados;
    // lower() torna a busca resiliente a variações de caixa
    const query = `*[_type in ["post", "blogPost", "article"] && defined(slug.current)] { "slug": slug.current, "_updatedAt": coalesce(_updatedAt, date, publishedAt, _createdAt) }`;
    const posts = await client.fetch(query);

    const esc = (v) =>
      String(v).replace(/[<>&'"]/g, (c) =>
        ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]),
      );

    const staticXml = staticPages
      .map((route) => {
        const loc = `${SITE_URL}${route}/`;
        const priority = route === '' ? '1.0' : route === '/blog' ? '0.9' : '0.8';
        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
      })
      .join('\n');

    const postXml = posts
      .map((post) => {
        const lastMod = post._updatedAt ? new Date(post._updatedAt).toISOString() : new Date().toISOString();
        return `  <url>
    <loc>${SITE_URL}/blog/${encodeURIComponent(post.slug)}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      })
      .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${postXml}
</urlset>`;

    return {
      statusCode: 200,
      headers,
      body: xml.trim(),
    };
  } catch (error) {
    console.error('Erro na Function do Sitemap:', error);
    return {
      statusCode: 200,
      headers,
      // Fallback: mantém o sitemap válido (estático) em caso de falha da API
      body: `<?xml version="1" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
  </url>
</urlset>`,
    };
  }
};
