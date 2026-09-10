/**
 * Central registry of all site URLs.
 *
 * This is the single source of truth for the sitemap (vite.config.ts and
 * scripts/sitemap-routes.ts) and for helpers that build real URL paths.
 *
 * Notes:
 * - `pathOf` maps the internal page state (PageRoute) to the public URL
 *   path of each page, which is exactly what goes into the sitemap.
 * - The SPA is served via the Netlify _redirects fallback (/* -> /index.html),
 *   so every URL here is served by index.html and rendered client-side.
 * - Dynamic content (blog posts, cases) is fed by the Sanity API at build
 *   time via scripts/sitemap-routes.ts (see /blog/:slug and /cases/:slug).
 */

/** Internal page identifier, mirrors the PageRoute union in Navbar.tsx. */
export type SitePage =
  | 'home'
  | 'metodologia'
  | 'frentes-aceleradora'
  | 'frentes-consultoria'
  | 'frentes-especialistas'
  | 'especialidade-seo'
  | 'especialidade-midia'
  | 'especialidade-crm'
  | 'especialidade-dados'
  | 'especialidade-dev'
  | 'especialidade-growth'
  | 'cases'
  | 'case-miami'
  | 'case-gtex'
  | 'case-master'
  | 'blog'
  | 'blog-post'
  | 'partners'
  | 'ferramentas'
  | 'ferramentas-vision'
  | 'ferramentas-alfredo';

/** Internal page identifier (must stay in sync with PageRoute in Navbar.tsx). */
export type PageRoute = SitePage;

/** Registry of every static page: internal state <-> public URL path. */
export const PAGE_ROUTES: { page: SitePage; path: string }[] = [
  { page: 'home', path: '/' },
  { page: 'metodologia', path: '/metodologia' },
  { page: 'frentes-aceleradora', path: '/frentes-aceleradora' },
  { page: 'frentes-consultoria', path: '/frentes-consultoria' },
  { page: 'frentes-especialistas', path: '/frentes-especialistas' },
  { page: 'especialidade-seo', path: '/especialidade/seo' },
  { page: 'especialidade-midia', path: '/especialidade/midia' },
  { page: 'especialidade-crm', path: '/especialidade/crm' },
  { page: 'especialidade-dados', path: '/especialidade/dados' },
  { page: 'especialidade-dev', path: '/especialidade/dev' },
  { page: 'especialidade-growth', path: '/especialidade/growth' },
  { page: 'cases', path: '/cases' },
  { page: 'case-miami', path: '/cases/miami' },
  { page: 'case-gtex', path: '/cases/gtex' },
  { page: 'case-master', path: '/cases/master' },
  { page: 'blog', path: '/blog' },
  { page: 'blog-post', path: '/blog/:slug' },
  { page: 'partners', path: '/partners' },
  { page: 'ferramentas', path: '/ferramentas' },
  { page: 'ferramentas-vision', path: '/ferramentas/vision' },
  { page: 'ferramentas-alfredo', path: '/ferramentas/alfredo' },
];

/** Parameterized routes fed from the Sanity Content Lake at build time. */
export const DYNAMIC_ROUTE_PATTERNS: { prefix: string; label: string }[] = [
  { prefix: '/blog/:slug', label: 'Blog posts (Sanity "post" documents) -> /blog/:slug' },
  { prefix: '/cases/:slug', label: 'Case pages (Sanity "caseStudy" documents) -> /cases/:slug' },
];

/** Base hostname used across the sitemap and canonical URLs. */
export const SITEMAP_HOSTNAME = 'https://preditiva.co';

/**
 * Static routes as plain paths (no parameters) — consumed by the sitemap
 * generator so every static URL comes from this single registry.
 */
export const STATIC_ROUTES: string[] = PAGE_ROUTES
  .map((r) => r.path)
  .filter((p) => !p.includes(':'));

/** Internal page state -> URL path. */
export function pathOf(page: SitePage): string {
  const found = PAGE_ROUTES.find((r) => r.page === page);
  return found ? found.path : '/';
}

/** URL path -> internal page state (best-effort match). */
export function pageForPath(path: string): SitePage | null {
  return resolvePath(path)?.page ?? null;
}

export interface PathResolution {
  page: SitePage;
  /** Dynamic segment values (e.g. { slug: "meu-post" } for /blog/:slug). */
  params: Record<string, string>;
  /** The concrete path for the URL bar (parameters already filled). */
  path: string;
}

/**
 * Resolves a URL path to a page state, including parameterized routes:
 *   /blog/<slug>  -> page "blog-post" with params.slug
 * Static paths are matched exactly against PAGE_ROUTES.
 */
export function resolvePath(path: string): PathResolution | null {
  const clean = path.split('?')[0].split('#')[0];
  const noTrailing = clean !== '/' && clean.endsWith('/') ? clean.slice(0, -1) : clean;

  // Dynamic patterns first: /blog/:slug (case pages use /cases/:slug only
  // for slugs that are not the static case pages).
  const blogMatch = noTrailing.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return { page: 'blog-post', params: { slug: decodeURIComponent(blogMatch[1]) }, path: noTrailing };
  }

  const exact = PAGE_ROUTES.find((r) => r.path === noTrailing || r.path === clean);
  if (exact) {
    return { page: exact.page, params: {}, path: exact.path };
  }
  return null;
}

/**
 * Builds the absolute URL for an internal page state.
 * Useful for canonical links and external sharing.
 */
export function hrefFor(page: SitePage): string {
  return `${SITEMAP_HOSTNAME}${pathOf(page)}`;
}
