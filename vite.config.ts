import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      target: 'esnext',
      minify: 'esbuild' as const,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
      // Sem imagens em base64: com o HTML pré-renderizado elas iam inline em todas as
      // páginas (a home chegava a 274 KB, com o carrossel duplicando os logos). Como
      // arquivo, ficam no cache de 1 ano de /assets/* e também saem do bundle JS.
      assetsInlineLimit: 0,
      // Build de servidor (src/entry-server.tsx) só gera o HTML no prerender: sem public/
      // nem divisão de chunks, que é otimização do navegador
      copyPublicDir: !isSsrBuild,
      rollupOptions: isSsrBuild
        ? {}
        : {
            output: {
              manualChunks: {
                'react-vendor': ['react', 'react-dom', 'react-dom/client'],
                icons: ['lucide-react'],
                'motion-vendor': ['motion', 'framer-motion'],
              },
            },
          },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
