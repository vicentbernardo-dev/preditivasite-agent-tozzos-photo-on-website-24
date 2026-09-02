import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ArrowRight, ArrowUpRight, Zap, ChevronDown, Download
} from 'lucide-react';
import { PageRoute } from './Navbar';
import { RadarNewsletter } from './RadarNewsletter';
import { client, postsQuery } from '../lib/sanity';

interface BlogPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

type BlogCategory = 'TODOS' | 'CRM' | 'MÍDIA PAGA' | 'SEO' | 'SOCIAL' | 'DESIGN THINKING';

interface ArticleItem {
  id: string;
  _id?: string;
  category: string;
  categoryTag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author?: {
    name: string;
    initials: string;
    avatar?: string;
  };
}

// Formata a data (com fallback caso venha vazia)
const formatDate = (dateString: string): string => {
  if (!dateString) return 'DATA DESCONHECIDA';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit', month: 'short', year: 'numeric'
    }).format(date).toUpperCase();
  } catch (e) {
    return 'DATA INVÁLIDA';
  }
};

const getInitials = (name: string): string => {
  if (!name) return 'A';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
};

// Converte os dados brutos do Sanity para o formato do Layout com segurança
const mapSanityPostToArticle = (post: any): ArticleItem => {
  // Pega a URL da imagem (tenta 'image' ou 'mainImage' dependendo de como a IA gerou o schema)
  const imageUrl = post.image?.asset?.url || post.mainImage?.asset?.url || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80';
  
  // Pega a data (tenta 'date', 'publishedAt' ou a data de criação)
  const postDate = post.date || post.publishedAt || post._createdAt;

  return {
    id: post.slug?.current || post._id,
    _id: post._id,
    category: post.category || 'GERAL',
    categoryTag: post.categoryTag || post.category || 'GERAL',
    title: post.title || 'Post sem título',
    excerpt: post.excerpt || 'Resumo não disponível...',
    date: formatDate(postDate),
    readTime: `${post.readTime || 5} min`,
    image: imageUrl,
    author: {
      name: post.author?.name || 'Redação Preditiva',
      initials: getInitials(post.author?.name || 'Redação'),
      avatar: post.author?.avatar?.asset?.url
    }
  };
};

export const BlogPage: React.FC<BlogPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('TODOS');
  const [showMore, setShowMore] = useState(false);
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories: BlogCategory[] = [
    'TODOS', 'CRM', 'MÍDIA PAGA', 'SEO', 'SOCIAL', 'DESIGN THINKING',
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log("Buscando posts no Sanity...");
        
        // Puxa os dados reais
        const posts = await client.fetch(postsQuery);
        console.log("DADOS RECEBIDOS DO SANITY:", posts);
        
        if (posts && posts.length > 0) {
          const mappedArticles = posts.map(mapSanityPostToArticle);
          setArticles(mappedArticles);
        } else {
          setArticles([]);
        }
        setError(null);
      } catch (err: any) {
        console.error('Erro ao buscar posts:', err);
        setError(err.message || 'Erro desconhecido ao conectar com o Sanity.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const allArticlesList = showMore ? articles : articles.slice(0, 5);

  const filteredArticles = allArticlesList.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === 'TODOS' ||
      art.category.toUpperCase() === activeCategory.toUpperCase() ||
      (activeCategory === 'SEO' && art.category.toUpperCase() === 'GESTÃO');

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#000604] via-[#000604] to-[#0D0F0D]">
        <div aria-hidden="true" className="pointer-events-none absolute top-[-50px] right-[-50px] w-[650px] h-[650px] bg-[#0DF205]/10 rounded-full blur-[180px]" />
        <div aria-hidden="true" className="pointer-events-none absolute top-[200px] left-[-150px] w-[500px] h-[500px] bg-[#26D3AB]/10 rounded-full blur-[160px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="space-y-4 max-w-4xl">
            <div className="text-xs font-bold text-[#0DF205] uppercase tracking-[4.4px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0DF205] shadow-[0_0_6px_#0DF205]" />
              <span>INSIGHTS</span>
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-bold text-[#E3E3DF] tracking-tight leading-[0.95]">
              Blog<span className="text-[#0DF205]">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-[#B9CCAF] font-light leading-relaxed max-w-3xl pt-2">
              Explorando a intersecção entre dados, IA e performance digital para moldar o futuro do e-commerce.
            </p>
          </div>

          <div className="p-2 sm:p-3 bg-[#1A1C1A]/80 border border-[#3B4B35]/20 backdrop-blur-xl rounded-2xl flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 shadow-xl">
            <div className="relative flex-1 md:max-w-xs">
              <div className="relative flex items-center bg-[#0D0F0D] border border-[#3B4B35]/30 rounded-xl px-4 py-3 sm:py-3.5 shadow-inner">
                <Search className="w-4 h-4 text-[#84967C] shrink-0 mr-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar artigos..."
                  className="w-full bg-transparent text-sm text-[#E3E3DF] placeholder-[#84967C]/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#00FF00] text-[#013A00] shadow-[0_4px_16px_rgba(0,255,0,0.3)] scale-[1.02]'
                      : 'bg-[#333533]/30 border border-[#3B4B35]/20 text-[#B9CCAF] hover:text-white hover:bg-[#333533]/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATES DE LOADING E ERRO */}
      {loading && (
        <div className="py-20 text-center text-[#0DF205] text-sm tracking-widest uppercase font-bold">
          Carregando banco de dados...
        </div>
      )}
      
      {!loading && error && (
        <div className="py-20 text-center text-red-500 max-w-2xl mx-auto px-4">
          <p className="font-bold uppercase tracking-widest mb-2">Erro de conexão</p>
          <p className="text-sm opacity-80">{error}</p>
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <div className="py-20 text-center text-[#B9CCAF] max-w-2xl mx-auto px-4">
          <p className="font-bold uppercase tracking-widest mb-2">Nenhum post encontrado</p>
          <p className="text-sm opacity-80">Crie seu primeiro post no painel do Sanity Studio e publique-o.</p>
        </div>
      )}

      {/* 2. GRID PRINCIPAL (Removi a separação forçada de destaque para garantir que todos os posts apareçam na lista) */}
      {!loading && !error && articles.length > 0 && (
        <section className="py-12 bg-[#000604]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => onNavigatePage('blog-post')} // Futuramente, passe o article.id aqui
                  className="group rounded-3xl bg-[#1A1C1A] border border-[#3B4B35]/15 hover:border-[#0DF205]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden bg-black/60">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1A] via-transparent to-transparent" />
                      
                      <div className="absolute top-5 left-5 px-3 py-1 bg-[#0D0F0D]/80 backdrop-blur-md rounded border border-white/10 text-[#00FF00] text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-7 sm:p-8 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#E3E3DF] group-hover:text-[#0DF205] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#B9CCAF] leading-relaxed opacity-80 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 pt-0">
                    <div className="pt-5 border-t border-[#3B4B35]/20 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#84967C]">
                        {article.date}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00FF00] group-hover:underline">
                        <span>LER MAIS</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              {/* Special Whitepaper Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="rounded-3xl bg-[#00FF00] text-[#000604] p-8 sm:p-10 flex flex-col justify-between shadow-[0_0_30px_rgba(0,255,0,0.2)] relative overflow-hidden group"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-[#00FF00] shadow-md group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6 fill-[#00FF00]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black leading-tight tracking-tight">
                    Guia de <br /> Performance <br /> Sintética
                  </h3>
                  <p className="text-sm text-black/80 font-normal leading-relaxed">
                    O framework definitivo para escalar campanhas de mídia paga usando algoritmos preditivos de alta fidelidade em 2026.
                  </p>
                </div>
                <div className="pt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAuditModal();
                    }}
                    className="w-full py-4 bg-black text-[#00FF00] hover:bg-[#111] font-bold text-xs uppercase tracking-[2px] rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>BAIXAR WHITEPAPER</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {articles.length > 5 && (
              <div className="pt-8 flex flex-col items-center justify-center space-y-4">
                <div className="w-full h-px bg-white/10" />
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="group flex flex-col items-center gap-3 pt-6 cursor-pointer"
                >
                  <span className="text-xs font-bold uppercase tracking-[3.3px] text-[#B9CCAF] group-hover:text-[#0DF205] transition-colors">
                    {showMore ? 'MOSTRAR MENOS INSIGHTS' : 'CARREGAR MAIS INSIGHTS'}
                  </span>
                  <div className="w-14 h-14 rounded-xl border-2 border-[#3B4B35]/30 group-hover:border-[#0DF205] group-hover:bg-[#0DF205]/10 flex items-center justify-center text-[#00FF00] transition-all shadow-sm">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              </div>
            )}

            <div className="pt-10">
              <RadarNewsletter />
            </div>

          </div>
        </section>
      )}
    </div>
  );
};