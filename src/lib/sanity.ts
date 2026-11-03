import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'ioanix6u',
  dataset: 'production',
  apiVersion: '2025-01-20',
  // Leitura pública via CDN (apicdn.sanity.io): mais rápida e não consome cota da API.
  // Sem token aqui: qualquer VITE_* vai parar no bundle do navegador.
  useCdn: true,
})

// GROQ query for fetching blog posts
export const postsQuery = `*[_type == "post"] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  categoryTag,
  date,
  readTime,
  image {
    alt,
    asset -> {
      url
    }
  },
  body,
  author {
    name,
    initials,
    avatar {
      asset -> {
        url
      }
    }
  }
}`

// GROQ query for fetching a single post by slug
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  category,
  categoryTag,
  date,
  readTime,
  image {
    alt,
    asset -> {
      url
    }
  },
  body,
  author {
    name,
    initials,
    avatar {
      asset -> {
        url
      }
    }
  }
}`