# Sanity Integration Setup Guide

## ✅ Completed Steps

### 1. **Blog Post Schema Created** ✓
   - Location: `studio-preditiva/schemaTypes/post.ts`
   - Registered in: `studio-preditiva/schemaTypes/index.ts`
   - Schema includes: title, slug, excerpt, category, image, body (with Portable Text), author info

### 2. **Sanity Packages Installed** ✓
   - `sanity` - Client library
   - `@portabletext/react` - Rich text rendering
   - Added to package.json dependencies

### 3. **Sanity Client Configuration** ✓
   - Location: `src/lib/sanity.ts`
   - Project ID: `ioanix6u`
   - Dataset: `production`
   - Includes GROQ queries for fetching posts

### 4. **PortableText Component Created** ✓
   - Location: `src/components/RichText.tsx`
   - Configured custom components for:
     - Block styles (headings, paragraphs, blockquotes)
     - Inline marks (links, bold, italic, code)
     - Lists (bullet and numbered)
     - Images with captions

### 5. **BlogPage Integration** ✓
   - Updated to fetch from Sanity via `useEffect`
   - Maps Sanity posts to existing ArticleItem interface
   - Includes fallback to demo content if Sanity unavailable
   - Maintains existing UI and styling

---

## 📋 Next Steps

### 1. **Deploy Schema to Sanity**
```bash
cd studio-preditiva
npx sanity schemas deploy
```
This uploads your schema to the Sanity Content Lake.

### 2. **Set Up Environment Variables**
Create a `.env.local` file in your app root (not checked in):
```env
VITE_SANITY_TOKEN=your_sanity_token_here
```
- Generate a token in Sanity Studio settings (Project Settings → API → Tokens)
- Only needed for authenticated requests or publishing

### 3. **Add Content in Sanity Studio**
```bash
cd studio-preditiva
npm run dev
```
Then open: `http://localhost:3000`
- Create blog posts with title, category, date, etc.
- Use rich text editor for body content
- Publish posts to make them visible in your React app

### 4. **Update BlogPage to Display Full Posts**
When clicking "Ler Mais", create a new route that:
- Fetches the full post by slug using `postBySlugQuery`
- Renders the rich text body with the `RichText` component
- Displays author and metadata

Example:
```tsx
import { RichText } from './RichText';

// In your blog post detail page:
const post = await client.fetch(postBySlugQuery, { slug: slug });

return (
  <article>
    <h1>{post.title}</h1>
    <RichText value={post.body} />
  </article>
);
```

### 5. **Run Your App**
```bash
npm run dev
```
- BlogPage will fetch posts from Sanity
- Falls back to demo content if connection fails
- Updates in real-time as you publish new posts

---

## 🎨 Schema Structure

Your blog posts now have this structure in Sanity:

```typescript
{
  title: string
  slug: { current: string }
  excerpt: string
  category: 'GESTÃO' | 'IA SEARCH' | 'CRM' | 'SEO' | ...
  categoryTag: string  // Display tag, e.g., "SEO & GESTÃO"
  date: datetime
  readTime: number     // in minutes
  image: image + { hotspot: true }
  body: array         // Portable Text with blocks and images
  author: {
    name: string
    initials: string
    avatar: image (optional)
  }
}
```

---

## 🔗 Database Connection

**Project ID:** `ioanix6u`
**Dataset:** `production`
**API Version:** `2025-01-20`

Your React app connects automatically via:
```typescript
import { client } from './lib/sanity'
```

---

## 📝 Usage Examples

### Fetch All Posts
```typescript
const posts = await client.fetch(postsQuery);
```

### Fetch Single Post by Slug
```typescript
const post = await client.fetch(postBySlugQuery, { slug: 'my-post-slug' });
```

### Render Rich Text
```tsx
<RichText value={post.body} />
```

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Portable Text Guide](https://www.sanity.io/docs/portable-text)
- [GROQ Queries](https://www.sanity.io/docs/groq)
- [next-sanity (if using Next.js)](https://www.sanity.io/docs/nextjs-integration)

---

## ⚠️ Troubleshooting

**BlogPage shows demo content instead of Sanity posts:**
- Check `src/lib/sanity.ts` has correct projectId and dataset
- Verify schema is deployed: `npx sanity schemas deploy`
- Check browser console for API errors

**Images not loading:**
- Ensure image assets are uploaded in Sanity Studio
- Check image URLs in the fetch response

**Rich text body is empty:**
- Publish the post (not just save as draft)
- Verify body content is in the Portable Text format

---

## 🚀 Studio & App Deployment

**Studio** (`studio-preditiva/`):
- Development: `npm run dev` in `studio-preditiva/`
- Deploy to Vercel, Netlify, or Sanity hosting

**React App**:
- Development: `npm run dev` in root
- Build: `npm run build`
- Deploy to Vercel, Netlify, etc.

**Keep them separate:**
- Studio runs independently for content management
- React app fetches from Sanity API
- No need to rebuild React app when content changes
