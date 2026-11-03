// Entrada da pré-renderização: gera o HTML completo de uma rota no build
// (vite build --ssr). O scripts/prerender.ts injeta esse HTML no <div id="root"> de
// cada página e o navegador hidrata em cima dele (src/main.tsx).
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import App from './App';
import { setServerPreloaded } from './lib/preloaded';

export const render = async (path: string, preloaded: Record<string, unknown>): Promise<string> => {
  setServerPreloaded(preloaded);
  try {
    // prerender (e não renderToString) espera os componentes lazy/Suspense resolverem.
    // progressiveChunkSize infinito: por padrão o React separa blocos de Suspense
    // grandes (~12 KB) num <div hidden> movido depois por script (formato de
    // streaming). Sem JS, robôs veriam o conteúdo escondido; assim tudo sai inline.
    const { prelude } = await prerenderToNodeStream(
      <StrictMode>
        <App initialPath={path} />
      </StrictMode>,
      { progressiveChunkSize: Number.POSITIVE_INFINITY },
    );
    let html = '';
    for await (const chunk of prelude) html += chunk;
    if (html.includes('<template id="B:')) {
      throw new Error(`HTML de ${path} saiu com Suspense pendente (streaming)`);
    }
    return html;
  } finally {
    setServerPreloaded(null);
  }
};
