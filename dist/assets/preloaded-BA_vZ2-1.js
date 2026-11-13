const o=`*[_type == "post"] | order(date desc) {
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
}`,r=`*[_type == "post" && defined(slug.current) && defined(coalesce(publishedAt, date))] | order(coalesce(publishedAt, date) desc)[0...3] {
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
}`,t='{..., "imageUrl": image.asset->url, "imageAlt": image.alt, "body": body[]{..., _type == "image" => {"asset": asset->{url}, alt, caption}}}',l=`*[_type in ["post", "blogPost", "article"] && lower(slug.current) == lower($slug)][0]${t}`,c=`*[_type in ["post", "blogPost", "article"]] | order(coalesce(date, publishedAt, _createdAt) desc)[0]${t}`,i=e=>(typeof window<"u"?window.__PRELOADED__:void 0)?.[e],s=e=>e?decodeURIComponent(e).replace(/^\/+|\/+$/g,"").trim():"",d={blogPosts:"blog:posts",recentPosts:"insights:recent",post:e=>`post:${s(e).toLowerCase()}`};export{o as B,c as L,d as P,r as R,l as a,i as g,s as n};
