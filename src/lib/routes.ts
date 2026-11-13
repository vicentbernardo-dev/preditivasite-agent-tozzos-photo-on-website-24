import type React from 'react';
import type { PageRoute } from '../components/Navbar';

// Páginas com URL própria (/metodologia, /blog, ...). 'blog-post' depende de slug
// e 'not-found' nunca tem URL, por isso ficam fora desta lista.
export const STATIC_PAGES = [
  'home',
  'metodologia',
  'frentes-aceleradora',
  'frentes-consultoria',
  'frentes-especialistas',
  'especialidade-seo',
  'especialidade-midia',
  'especialidade-crm',
  'especialidade-dados',
  'especialidade-dev',
  'especialidade-growth',
  'cases',
  'case-miami',
  'case-gtex',
  'case-master',
  'case-monte-carlo',
  'case-vhita',
  'case-esthera',
  'blog',
  'partners',
  'ferramentas',
  'ferramentas-vision',
  'ferramentas-alfredo',
] as const satisfies readonly PageRoute[];

export const isStaticPage = (value: string): value is (typeof STATIC_PAGES)[number] =>
  (STATIC_PAGES as readonly string[]).includes(value);

// Caminho canônico de cada rota: sem barra final (exceto a home).
export const routeToPath = (page: PageRoute, slug?: string): string => {
  if (page === 'home') return '/';
  if (page === 'blog-post') return slug ? `/blog/${encodeURIComponent(slug)}` : '/blog';
  return `/${page}`;
};

// Ctrl/Cmd/Shift + clique ou botão do meio: deixa o navegador abrir em nova aba.
export const isModifiedClick = (event: React.MouseEvent) =>
  event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
