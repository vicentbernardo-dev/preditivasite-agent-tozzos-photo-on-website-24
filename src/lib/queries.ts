// Queries GROQ compartilhadas entre o navegador e a pré-renderização do build.
// Ficam fora de lib/sanity.ts para não puxar o @sanity/client para o chunk da home.

// Lista do /blog (sem o body: a página só mostra cards)
export const BLOG_POSTS_QUERY = `*[_type == "post"] | order(date desc) {
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
  author {
    name,
    initials,
    avatar {
      asset -> {
        url
      }
    }
  }
}`;

// 3 posts mais recentes da seção Insights da home
export const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && defined(coalesce(publishedAt, date))] | order(coalesce(publishedAt, date) desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  "publishedAt": coalesce(publishedAt, date),
  category,
  categoryTag,
  excerpt,
  readTime,
  "imageUrl": coalesce(image.asset->url, mainImage.asset->url),
  "imageAlt": coalesce(image.alt, mainImage.alt)
}`;

const POST_PROJECTION = `{..., "imageUrl": image.asset->url, "imageAlt": image.alt, "body": body[]{..., _type == "image" => {"asset": asset->{url}, alt, caption}}}`;

// Post completo por slug; lower() torna a busca resiliente a variações de caixa
export const POST_BY_SLUG_QUERY = `*[_type in ["post", "blogPost", "article"] && lower(slug.current) == lower($slug)][0]${POST_PROJECTION}`;

// Todos os posts completos, com a mesma projeção: usado no build para pré-renderizar
export const ALL_POSTS_QUERY = `*[_type in ["post", "blogPost", "article"] && defined(slug.current)]${POST_PROJECTION}`;

// Sem slug: último post publicado (demonstração)
export const LATEST_POST_QUERY = `*[_type in ["post", "blogPost", "article"]] | order(coalesce(date, publishedAt, _createdAt) desc)[0]${POST_PROJECTION}`;
