import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { InsightArticle } from '../types';
import { PageRoute } from './Navbar';
import { client } from '../lib/sanity';
import { withSanityImageFormat } from '../lib/seo';

interface SanityPost {
  _id: string;
  slug: string;
  title?: string;
  publishedAt?: string;
  category?: string;
  categoryTag?: string;
  excerpt?: string;
  readTime?: number | string;
  imageUrl?: string;
  imageAlt?: string;
}

const RECENT_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && defined(coalesce(publishedAt, date))] | order(coalesce(publishedAt, date) desc)[0...3] {
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

const formatDate = (dateString?: string) => {
  if (!dateString) return 'DATA DESCONHECIDA';

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return 'DATA INVÁLIDA';

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date).toUpperCase();
};

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
  onNavigatePage?: (page: PageRoute, slug?: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ 
  onSelectArticle,
  onNavigatePage 
}) => {
  const [posts, setPosts] = useState<SanityPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isActive = true;

    const fetchRecentPosts = async () => {
      try {
        const recentPosts = await client.fetch<SanityPost[]>(RECENT_POSTS_QUERY);
        if (isActive) setPosts(recentPosts);
      } catch (error) {
        console.error('Erro ao carregar posts do Sanity para a Home:', error);
        if (isActive) setHasError(true);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchRecentPosts();
    return () => {
      isActive = false;
    };
  }, []);

  const articles: InsightArticle[] = posts.map((post) => ({
    id: post._id,
    tag: post.categoryTag || post.category || 'INSIGHTS',
    title: post.title || 'Post sem título',
    summary: post.excerpt || 'Resumo não disponível.',
    readTime: `${post.readTime || 5} min de leitura`,
    date: formatDate(post.publishedAt),
    image: withSanityImageFormat(post.imageUrl) || '',
    content: post.excerpt || '',
  }));

  return (
    <section id="insights" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-row items-center justify-between gap-4 mb-14">
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#EFEFEF] uppercase leading-tight tracking-tight">
            Insights
          </h2>

          <button
            onClick={() => {
              if (onNavigatePage) {
                onNavigatePage('blog');
              } else if (articles[0]) {
                onSelectArticle(articles[0]);
              }
            }}
            className="font-familjen text-[#0DF205] hover:text-white text-sm sm:text-base font-medium flex items-center gap-2 transition-colors cursor-pointer group"
          >
            <span>Ver todas as matérias</span>
            <div className="w-5 h-5 rounded-full bg-[#0DF205]/20 flex items-center justify-center group-hover:bg-[#0DF205] group-hover:text-black transition-colors">
              <ArrowRight className="w-3 h-3 text-[#0DF205] group-hover:text-black" />
            </div>
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? [0, 1, 2].map((index) => (
            <div
              key={index}
              aria-hidden="true"
              className="h-[490px] overflow-hidden rounded-xl border border-white/10 bg-[#111815] animate-pulse"
            >
              <div className="h-56 bg-white/10" />
              <div className="space-y-4 p-6 sm:p-7">
                <div className="h-4 w-2/5 rounded bg-white/10" />
                <div className="h-7 w-full rounded bg-white/10" />
                <div className="h-4 w-4/5 rounded bg-white/10" />
                <div className="h-4 w-3/5 rounded bg-white/10" />
              </div>
            </div>
          )) : hasError ? (
            <p role="status" className="md:col-span-3 py-8 text-center text-white/60">
              Não foi possível carregar as matérias no momento.
            </p>
          ) : articles.length === 0 ? (
            <p role="status" className="md:col-span-3 py-8 text-center text-white/60">
              Nenhuma matéria publicada no momento.
            </p>
          ) : articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('blog-post', posts[index].slug);
                } else {
                  onSelectArticle(article);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  if (onNavigatePage) {
                    onNavigatePage('blog-post', posts[index].slug);
                  } else {
                    onSelectArticle(article);
                  }
                }
              }}
              role="link"
              tabIndex={0}
              aria-label={`Leia a matéria: ${article.title}`}
              className="relative flex flex-col justify-between rounded-xl bg-[#111815] border border-white/10 overflow-hidden group hover:border-[#0DF205]/60 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div>
                {/* Image Header with Figma Badge */}
                <div className="relative h-56 overflow-hidden bg-black/40">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={posts[index].imageAlt || article.title || 'Imagem de capa do artigo'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111815] via-transparent to-black/30" />

                  {/* Badge from Figma design: Top left Neon pill with category */}
                  <div className="absolute top-4 left-4 bg-[#0DF205] text-[#000604] font-familjen text-xs font-bold px-3 py-1 rounded shadow-md">
                    {article.tag}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs text-white/50 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <div className="text-xs text-[#0DF205] font-familjen font-medium uppercase tracking-wider mb-2">
                    {article.tag}
                  </div>

                  {/* Title from Figma */}
                  <h3 className="font-familjen text-2xl sm:text-[26px] font-bold text-[#EFEFEF] group-hover:text-[#0DF205] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="font-familjen text-sm text-[#EFEFEF]/70 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom "Leia a matéria" link */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[#0DF205] font-familjen text-base font-medium group-hover:underline">
                  <span>Leia a matéria</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
