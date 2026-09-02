import React, { useState, useEffect } from 'react';
import { ChevronLeft, Share2, Bookmark, Check, Copy } from 'lucide-react';
import { PageRoute } from './Navbar';
import { RadarNewsletter } from './RadarNewsletter';
import { client } from '../lib/sanity';
import { PortableText } from '@portabletext/react';

interface BlogPostPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  slug?: string; // Futuramente, você pode passar o slug do post clicado aqui
}

// Estilização automática para o texto vindo do Sanity
const richTextStyles = {
  block: {
    h1: ({children}: any) => <h1 className="text-4xl font-bold mt-10 mb-4 text-[#E3E3DF] tracking-tight">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-[#E3E3DF] tracking-tight">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-[#E3E3DF] tracking-tight">{children}</h3>,
    normal: ({children}: any) => <p className="text-base sm:text-lg text-[#B9CCAF] leading-relaxed mb-6">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#111815] border-l-4 border-[#0DF205] shadow-xl space-y-3 my-8">
        <p className="text-base sm:text-lg text-[#E3E3DF] italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
  },
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
  slug
}) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  
  // Estados do Sanity
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        // Se tiver slug, busca ele. Se não, busca o último post publicado para demonstração.
        const query = slug 
          ? `*[_type == "post" && slug.current == $slug][0]{..., "imageUrl": image.asset->url}`
          : `*[_type == "post"] | order(date desc)[0]{..., "imageUrl": image.asset->url}`;
        
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Erro ao buscar post completo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sidebarEmail) return;
    setSidebarSubscribed(true);
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#000604] flex items-center justify-center text-[#0DF205] uppercase tracking-widest font-bold text-sm">
        Carregando artigo...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-[#000604] flex flex-col items-center justify-center text-[#B9CCAF]">
        <p className="mb-4">Artigo não encontrado.</p>
        <button onClick={() => onNavigatePage('blog')} className="text-[#0DF205] underline">Voltar para o blog</button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen min-h-screen">
      {/* TOP NAVIGATION / BREADCRUMB */}
      <div className="bg-[#0D0F0D] border-b border-white/10 pt-28 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => onNavigatePage('blog')}
            className="inline-flex items-center gap-2 text-sm text-[#D9D9D9] hover:text-[#0DF205] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para o Blog</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#0DF205]/10 border border-[#0DF205]/30 rounded text-[#0DF205] text-[10px] font-bold uppercase tracking-wider">
              {post.category || 'GERAL'}
            </span>
            <span className="px-2.5 py-1 bg-[#333533]/40 border border-white/10 rounded text-[#B9CCAF] text-[10px] font-bold uppercase tracking-wider">
              {post.readTime || '5'} MIN READ
            </span>
          </div>
        </div>
      </div>

      {/* ARTICLE HEADER SECTION */}
      <section className="relative pt-12 pb-10 bg-[#000604]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#E3E3DF] tracking-tight leading-[1.14]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-white/10 pb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#292A28] border border-[#3B4B35]/40 flex items-center justify-center text-sm font-bold text-[#0DF205] shadow-md uppercase">
                {(post.author?.name || 'Redação').slice(0,2)}
              </div>
              <div>
                <div className="text-base font-bold text-[#E3E3DF]">
                  {post.author?.name || 'Redação Preditiva'}
                </div>
                <div className="text-xs text-[#84967C] uppercase tracking-wider font-medium">
                  {new Date(post.date || post._createdAt).toLocaleDateString('pt-BR')}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={handleCopyLink} className="p-2.5 rounded-lg bg-[#111815] border border-white/10 hover:border-[#0DF205] text-[#D9D9D9] hover:text-[#0DF205] transition-all flex items-center gap-1.5 text-xs">
                {copied ? <Check className="w-4 h-4 text-[#0DF205]" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
              <button onClick={() => setBookmarked(!bookmarked)} className={`p-2.5 rounded-lg bg-[#111815] border transition-all ${bookmarked ? 'border-[#0DF205] text-[#0DF205]' : 'border-white/10 text-[#D9D9D9] hover:border-[#0DF205] hover:text-[#0DF205]'}`}>
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-lg bg-[#111815] border border-white/10 hover:border-[#0DF205] text-[#D9D9D9] hover:text-[#0DF205] transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#3B4B35]/30 shadow-2xl bg-black h-72 sm:h-96 lg:h-[440px] flex items-center justify-center group">
            <img
              src={post.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80'}
              alt={post.title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT & SIDEBAR */}
      <section className="py-12 bg-[#000604]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* MAIN ARTICLE BODY (8 COLS) */}
            <div className="lg:col-span-8 text-[#E3E3DF]">
              {post.body ? (
                <PortableText value={post.body} components={richTextStyles} />
              ) : (
                <p className="text-[#B9CCAF]">Conteúdo não disponível.</p>
              )}
              
              <div className="pt-8 mt-12 border-t border-white/10 flex flex-wrap gap-2">
                {['#Insights', '#Preditiva', '#Digital'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#111815] border border-white/10 text-xs font-bold text-[#0DF205] hover:bg-[#0DF205]/10 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* SIDEBAR (4 COLS) */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0D0F0D] border border-[#0DF205]/30 space-y-4 shadow-xl relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0DF205]">
                  Nossa Newsletter
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#E3E3DF] leading-snug">
                  ASSINE NOSSA CURADORIA DE INTELIGÊNCIA SINTÉTICA.
                </h4>
                {sidebarSubscribed ? (
                  <div className="p-4 bg-[#0DF205]/10 border border-[#0DF205] rounded-xl text-center text-xs text-[#0DF205] font-bold">
                    <span>✓ Inscrição confirmada com sucesso!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarSubscribe} className="space-y-3">
                    <input
                      type="email" required value={sidebarEmail} onChange={(e) => setSidebarEmail(e.target.value)} placeholder="seu@email.com"
                      className="w-full bg-[#1A1C1A] border border-white/10 focus:border-[#0DF205] text-xs text-white placeholder-white/40 py-3 px-3.5 rounded-lg focus:outline-none"
                    />
                    <button type="submit" className="w-full py-3 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_0_15px_rgba(13,242,5,0.3)]">
                      INSCREVER-SE
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};