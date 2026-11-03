exports.handler = async function () {
  const baseUrl = 'https://preditiva.co';
  const cacheControl = 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400';

  try {
    // Importação dinâmica dentro do handler para evitar erro ERR_REQUIRE_ESM
    const { createClient } = await import('@sanity/client');

    const client = createClient({
      projectId: 'ioanix6u',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-01-20',
    });

    // Rotas reais do app (devem refletir STATIC_PAGES em src/lib/routes.ts)
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

    // Sem lastmod nas páginas estáticas: uma data "agora" a cada request faz o
    // Google passar a ignorar o lastmod do sitemap inteiro.
    const staticXml = staticPages
      .map(
        (route) => `
  <url>
    <loc>${baseUrl}${route || '/'}</loc>
  </url>`
      )
      .join('');

    const postXml = posts
      .map((post) => {
        // Mesmo formato do canonical (src/lib/seo.ts): sem barra final
        const lastMod = post._updatedAt ? `
    <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>` : '';
        return `
  <url>
    <loc>${baseUrl}/blog/${encodeURIComponent(post.slug)}</loc>${lastMod}
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
        'Cache-Control': cacheControl,
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
    <loc>${baseUrl}${route || '/'}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>`;
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': cacheControl,
      },
      body: fallbackXml.trim(),
    };
  }
};
