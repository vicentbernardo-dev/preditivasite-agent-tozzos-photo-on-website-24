// IndexNow (Bing, Yandex, Seznam, Naver; o Bing alimenta o Copilot e o ChatGPT Search).
// Função de evento do Netlify: roda sozinha a cada deploy publicado e avisa os
// buscadores das URLs novas ou atualizadas. Com o build hook do Sanity, publicar um
// post gera um deploy e o post é enviado em seguida, já com o HTML pré-renderizado.
// A chave fica em public/<chave>.txt, como o protocolo exige.
const INDEXNOW_KEY = '13087c1a369426b3221d8c1187b31fe3';
const HOST = 'preditiva.co';
const BASE_URL = `https://${HOST}`;
// Janela de "atualizado recentemente": cobre deploys espaçados sem reenviar o site inteiro
const RECENT_MS = 72 * 60 * 60 * 1000;

exports.handler = async function (event) {
  // Só o deploy de produção do domínio principal; deploy previews ficam de fora
  const payload = JSON.parse(event.body || '{}').payload || {};
  if (payload.context && payload.context !== 'production') {
    return { statusCode: 200, body: `IndexNow ignorado no contexto ${payload.context}` };
  }

  try {
    const { createClient } = await import('@sanity/client');
    const client = createClient({
      projectId: 'ioanix6u',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2025-01-20',
    });

    const since = new Date(Date.now() - RECENT_MS).toISOString();
    const slugs = await client.fetch(
      `*[_type in ["post", "blogPost", "article"] && defined(slug.current) && _updatedAt > $since].slug.current`,
      { since },
    );

    // Páginas que listam posts mudam junto com eles
    const urlList = [
      `${BASE_URL}/`,
      `${BASE_URL}/blog`,
      `${BASE_URL}/llms.txt`,
      ...slugs.map((slug) => `${BASE_URL}/blog/${encodeURIComponent(slug)}`),
    ];

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });

    console.log(`IndexNow: ${urlList.length} URLs enviadas, status ${response.status}`);
    return { statusCode: 200, body: `IndexNow ${response.status}: ${urlList.length} URLs` };
  } catch (error) {
    // Falha no IndexNow nunca deve afetar o deploy
    console.error('Erro ao enviar para o IndexNow:', error);
    return { statusCode: 200, body: 'IndexNow falhou; ver logs' };
  }
};
