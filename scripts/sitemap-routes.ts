/**
 * Sitemap routes source.
 *
 * Collects every URL that must appear in sitemap.xml:
 *
 *  1. Static routes  -> imported from src/routes.ts (single source of truth)
 *  2. Dynamic routes -> fetched from the Sanity Content Lake at build time:
 *       /blog/:slug  <- Sanity documents of type "post"
 *       /cases/:slug <- Sanity documents of type "caseStudy" (optional)
 *
 * Sanity is queried with @sanity/client using GROQ. The token is optional:
 * a sitemap only needs published (public) documents.
 *
 * Environment variables (optional, falls back to src/lib/sanity.ts values):
 *   VITE_SANITY_PROJECT_ID / SANITY_PROJECT_ID -> defaults to 'ioanix6u'
 *   VITE_SANITY_DATASET    / SANITY_DATASET    -> defaults to 'production'
 *   VITE_SANITY_TOKEN      / SANITY_TOKEN      -> only for private datasets
 *   SANITY_API_VERSION                         -> defaults to '2025-01-20'
 *
 * If Sanity is unreachable or empty, the build still succeeds and the
 * sitemap ships with the static routes only (graceful degradation).
 */
import { createClient, type SanityClient } from '@sanity/client';
import { STATIC_ROUTES } from '../src/routes';

// Mirrors the app client (src/lib/sanity.ts) but runs at build time only.
const PROJECT_ID =
  process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'ioanix6u';
const DATASET =
  process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production';
const API_VERSION = process.env.SANITY_API_VERSION || '2025-01-20';
const TOKEN = process.env.VITE_SANITY_TOKEN || process.env.SANITY_TOKEN || undefined;

let cachedClient: SanityClient | null = null;

function getSanityClient(): SanityClient {
  if (!cachedClient) {
    cachedClient = createClient({
      projectId: PROJECT_ID,
      dataset: DATASET,
      apiVersion: API_VERSION,
      useCdn: false,
      token: TOKEN,
      timeout: 15000,
    });
  }
  return cachedClient;
}

/** GROQ: published blog posts with slug and publish date. */
const POSTS_QUERY = /* groq */ `*[_type == "post" && defined(slug.current)] | order(date desc) {
  "slug": slug.current,
  "lastmod": coalesce(date, _updatedAt)
}`;

/**
 * GROQ: published case studies.
 * The "caseStudy" schema type does not exist in the studio yet; once a
 * document type with a slug field is added there, these URLs join the
 * sitemap automatically with zero code changes.
 */
const CASES_QUERY = /* groq */ `*[_type == "caseStudy" && defined(slug.current)] | order(_updatedAt desc) {
  "slug": slug.current,
  "lastmod": coalesce(date, _updatedAt)
}`;

interface SanityRouteDoc {
  slug: string;
  lastmod: string | null;
}

async function fetchRoutes(query: string): Promise<SanityRouteDoc[]> {
  try {
    const result = await getSanityClient().fetch<SanityRouteDoc[]>(query);
    return Array.isArray(result) ? result : [];
  } catch (error) {
    console.warn(
      `[sitemap] Sanity query failed (sitemap ships without these URLs): ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
    return [];
  }
}

export interface SitemapData {
  /** All sitemap URLs, root-relative (e.g. "/", "/blog/meu-post"). */
  routes: string[];
  /** Per-URL last modification date (dynamic routes only). */
  lastmod: Record<string, Date>;
}

/**
 * Returns the complete sitemap URL set plus per-URL lastmod dates.
 * Called once per build by the sitemap plugin in vite.config.ts.
 */
export async function getSitemapData(): Promise<SitemapData> {
  // 1. Static routes from the central registry.
  const staticRoutes = [...STATIC_ROUTES];

  // 2. Dynamic routes fetched from Sanity.
  const [posts, cases] = await Promise.all([fetchRoutes(POSTS_QUERY), fetchRoutes(CASES_QUERY)]);

  const lastmod: Record<string, Date> = {};

  const blogRoutes = posts
    .filter((p) => p.slug)
    .map((p) => {
      const route = `/blog/${p.slug.trim()}`;
      if (p.lastmod) {
        const date = new Date(p.lastmod);
        if (!Number.isNaN(date.getTime())) lastmod[route] = date;
      }
      return route;
    });

  const caseRoutes = cases
    .filter((c) => c.slug)
    .map((c) => {
      const route = `/cases/${c.slug.trim()}`;
      if (c.lastmod) {
        const date = new Date(c.lastmod);
        if (!Number.isNaN(date.getTime())) lastmod[route] = date;
      }
      return route;
    });

  // De-duplicate and normalize (no trailing slash except the root).
  const normalize = (route: string) =>
    route !== '/' && route.endsWith('/') ? route.slice(0, -1) : route;

  const routes = Array.from(new Set([...staticRoutes, ...blogRoutes, ...caseRoutes].map(normalize)));
  return { routes, lastmod };
}

/** Convenience wrapper: just the URL list for the sitemap. */
export async function getSitemapRoutes(): Promise<string[]> {
  const { routes } = await getSitemapData();
  return routes;
}
