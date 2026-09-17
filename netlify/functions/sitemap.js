exports.handler = async function () {
  const baseUrl = 'https://preditiva.co';

  try {
    // Importação dinâmica dentro do handler para evitar erro ERR_REQUIRE_ESM
    const { createClient } = await import('@sanity/client');

    const client = createClient({
      projectId: 'ioanix6u',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-01-20',
    });

    // Rotas reais do app (devem refletir VALID_PAGES em src/App.tsx)
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

    // Busca os slugs reais cadastrados no Sanity
    const query = `*[_type in ["post", "blogPost", "article"] && defined(slug.current)] {
      "slug": slug.current,
      "_updatedAt": coalesce(_updatedAt, date, publishedAt, _createdAt)
    }`;

    const posts = await client.fetch(query);

    const staticXml = staticPages
      .map(
        (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : route === '/blog' ? '0.8' : '0.7'}</priority>
  </url>`
      )
      .join('');

    const postXml = posts
      .map((post) => {
        const lastMod = post._updatedAt
          ? new Date(post._updatedAt).toISOString()
          : new Date().toISOString();
        return `
  <url>
    <loc>${baseUrl}/blog/${encodeURIComponent(post.slug)}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
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
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
      body: xml.trim(),
    };
  } catch (error) {
    console.error('Erro na Serverless Function do Sitemap:', error);
    // Nunca derruba o sitemap: devolve XML válido apenas com as rotas estáticas
    const fallbackPages = ['', '/metodologia', '/blog', '/cases', '/partners', '/ferramentas'];
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${fallbackPages
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}/</loc>
  </url>`,
  )
  .join('\n')}
</urlset>`;
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
      body: fallbackXml.trim(),
    };
  }
};
