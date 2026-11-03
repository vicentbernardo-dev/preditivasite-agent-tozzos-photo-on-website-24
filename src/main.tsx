import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Páginas pré-renderizadas no build já trazem o HTML: o React só hidrata em cima.
// O app-shell (posts novos ainda sem build) vem vazio e renderiza do zero. Rotas
// legadas por hash (#blog) não batem com o HTML da URL, então também renderizam do zero.
if (container.hasChildNodes() && !window.location.hash) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
