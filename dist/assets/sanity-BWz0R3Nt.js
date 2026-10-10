import{c as e}from"./sanity-vendor-DRANkc4_.js";const a=e({projectId:"ioanix6u",dataset:"production",apiVersion:"2025-01-20",useCdn:!1,token:void 0}),s=`*[_type == "post"] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  categoryTag,
  date,
  readTime,
  image {
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
}`;export{a as c,s as p};
