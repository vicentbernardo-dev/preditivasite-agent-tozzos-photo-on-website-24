import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ioanix6u',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

export async function handler() {
  const baseUrl = 'https://preditiva.co';

  const staticPages = [
    '',
    '/metodologia',
    '/frentes-aceleradora',
    '/frentes-consultoria',
    '/frentes-especialistas',
    '/especialidade/seo',
    '/especialidade/midia',
    '/especialidade/crm',
    '/especialidade/dados',
    '/especialidade/dev',
    '/especialidade/growth',
    '/cases',
    '/cases/miami',
    '/cases/gtex',
    '/cases/master',
    '/blog',
    '/partners',
    '/ferramentas',
    '/ferramentas/vision',
    '/ferramentas/alfredo',
  ];

  try {
    const query = `*[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }`;
    const posts = await client.fetch(query);

    const staticXml = staticPages
      .map((route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.7'}</priority>
  </url>`)
      .join('');

    const postXml = posts
      .map((post) => {
        const lastMod = post._updatedAt ? new Date(post._updatedAt).toISOString() : new Date().toISOString();
        return `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${postXml}
</urlset>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
      body: xml.trim(),
    };
  } catch (error) {
    console.error('Erro ao gerar sitemap dinâmico:', error);
    return {
      statusCode: 500,
      body: 'Erro ao gerar sitemap',
    };
  }
}
