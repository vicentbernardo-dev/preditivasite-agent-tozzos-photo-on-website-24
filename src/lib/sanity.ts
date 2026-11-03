import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ioanix6u',
  dataset: 'production',
  apiVersion: '2025-01-20',
  // Leitura pública via CDN (apicdn.sanity.io): mais rápida e não consome cota da API.
  // Sem token aqui: qualquer VITE_* vai parar no bundle do navegador.
  useCdn: true,
})

// As queries ficam em lib/queries.ts (compartilhadas com a pré-renderização do build)
