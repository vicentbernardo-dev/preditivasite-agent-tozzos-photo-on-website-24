// Feed RSS do blog em /blog/rss.xml (rewrite em public/_redirects). Ajuda
// agregadores, leitores de feed e LLMs a descobrir posts novos sem rastrear o site.
const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

exports.handler = async function () {
  const baseUrl = 'https://preditiva.co';
  const feedUrl = `${baseUrl}/blog/rss.xml`;
  const cacheControl = 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400';

  try {
    // Importação dinâmica dentro do handler para evitar erro ERR_REQUIRE_ESM
    const { createClient } = await import('@sanity/client');

    const client = createClient({
      projectId: 'ioanix6u',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2025-01-20',
    });

    // Mesma seleção de tipos do sitemap e do BlogPostPage
    const posts = await client.fetch(`*[_type in ["post", "blogPost", "article"] && defined(slug.current)]
      | order(coalesce(date, publishedAt, _createdAt) desc)[0...50] {
        "slug": slug.current,
        title,
        excerpt,
        category,
        "author": author.name,
        "publishedAt": coalesce(date, publishedAt, _createdAt)
      }`);

    const items = posts
      .filter((post) => post.slug && post.title)
      .map((post) => {
        const link = `${baseUrl}/blog/${encodeURIComponent(post.slug)}`;
        const pubDate = new Date(post.publishedAt);
        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>${
        Number.isNaN(pubDate.getTime()) ? '' : `
      <pubDate>${pubDate.toUTCString()}</pubDate>`
      }${post.excerpt ? `
      <description>${escapeXml(post.excerpt)}</description>` : ''}${post.category ? `
      <category>${escapeXml(post.category)}</category>` : ''}${post.author ? `
      <dc:creator>${escapeXml(post.author.trim())}</dc:creator>` : ''}
    </item>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Blog Preditiva</title>
    <link>${baseUrl}/blog</link>
    <description>Análises e estratégias sobre e-commerce, SEO, GEO, CRM, mídia, dados e growth.</description>
    <language>pt-BR</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': cacheControl,
      },
      body: xml,
    };
  } catch (error) {
    console.error('Erro ao gerar o RSS:', error);
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Retry-After': '300' },
      body: 'Feed temporariamente indisponível.',
    };
  }
};
