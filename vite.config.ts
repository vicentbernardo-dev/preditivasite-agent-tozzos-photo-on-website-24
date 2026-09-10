import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import sitemap from 'vite-plugin-sitemap';

import {SITEMAP_HOSTNAME} from './src/routes';
import {getSitemapData} from './scripts/sitemap-routes';

/**
 * Sitemap generation for the Preditiva site (fixes "sitemap is HTML" in
 * Google Search Console by emitting a real, physical sitemap.xml in dist/).
 *
 * All URLs come from a single generator so nothing can overwrite anything:
 *  - Static routes: src/routes.ts, the central registry of every page.
 *  - Dynamic routes: /blog/:slug and /cases/:slug, fetched from the Sanity
 *    Content Lake at build time (scripts/sitemap-routes.ts), each with its
 *    real lastmod date. If Sanity is unreachable, getSitemapData() degrades
 *    gracefully to the static routes and the build still succeeds.
 *
 * robots.txt is a real file in public/robots.txt (copied verbatim to dist/),
 * so the plugin's own robots.txt generation stays disabled to avoid a clash.
 * The _redirects SPA fallback never intercepts /sitemap.xml or /robots.txt.
 */
export default defineConfig(async () => {
  // One Sanity fetch per build, at config-resolution time (before bundling).
  const {routes, lastmod} = await getSitemapData();

  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemap({
        // Canonical base URL of the site.
        hostname: SITEMAP_HOSTNAME,
        // Every sitemap URL (static registry + Sanity posts/cases).
        dynamicRoutes: routes,
        // Never infer routes from dist/ HTML files: this is an SPA
        // (single index.html + _redirects fallback), so every URL comes
        // from the registry above.
        extensions: [],
        // The site is mostly static marketing content; the home page is
        // the highest-priority URL.
        changefreq: 'weekly',
        priority: {'*': 0.7, '/': 1},
        // Per-URL lastmod for Sanity content (posts/cases), build date
        // for everything else.
        lastmod: {'*': new Date(), ...lastmod},
        // robots.txt is a real file in public/robots.txt.
        generateRobotsTxt: false,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify-file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
