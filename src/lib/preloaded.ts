// Dados do Sanity buscados no build e embutidos no HTML pré-renderizado como
// window.__PRELOADED__. Os componentes começam já com eles, então o HTML do servidor
// e a primeira renderização do navegador são iguais: a hidratação não pisca nem
// precisa buscar de novo.
type PreloadedStore = Record<string, unknown>;

declare global {
  interface Window {
    __PRELOADED__?: PreloadedStore;
  }
}

let serverStore: PreloadedStore | null = null;

// Usado só pela pré-renderização (src/entry-server.tsx), uma rota por vez
export const setServerPreloaded = (store: PreloadedStore | null) => {
  serverStore = store;
};

export const getPreloaded = <T,>(key: string): T | undefined => {
  const store = serverStore ?? (typeof window !== 'undefined' ? window.__PRELOADED__ : undefined);
  return store?.[key] as T | undefined;
};

export const normalizePostSlug = (slug?: string) =>
  slug ? decodeURIComponent(slug).replace(/^\/+|\/+$/g, '').trim() : '';

export const PRELOADED_KEYS = {
  blogPosts: 'blog:posts',
  recentPosts: 'insights:recent',
  post: (slug?: string) => `post:${normalizePostSlug(slug).toLowerCase()}`,
};
