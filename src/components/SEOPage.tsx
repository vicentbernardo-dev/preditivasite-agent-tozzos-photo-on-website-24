import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Search, 
  Activity, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Code2, 
  Globe, 
  Bot, 
  Check, 
  ChevronRight, 
  ExternalLink,
  LineChart,
  Server
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface SEOPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const SEOPage: React.FC<SEOPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
  onLeadSuccess,
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
    if (onLeadSuccess) {
      onLeadSuccess({
        name: formData.name,
        email: formData.email,
        company: formData.company || 'SEO Lead',
        role: formData.role || 'SEO Técnico & Estratégico',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'Qual a diferença entre SEO On-page e Off-page?',
      answer:
        'SEO On-page engloba todas as otimizações técnicas e semânticas feitas diretamente dentro do seu site (Core Web Vitals, estrutura de tags, categorização, Schema Markup, velocidade e intenção de busca). O SEO Off-page abrange a autoridade externa e relevância do domínio, incluindo Link Building estratégico, citações de marca e autoridade setorial.',
    },
    {
      id: 1,
      question: 'Quanto tempo leva para ver resultados reais?',
      answer:
        'Correções de indexação crítica e Core Web Vitals costumam gerar impactos nos primeiros 30 a 60 dias. Ganhos de autoridade e tráfego orgânico exponencial em categorias de alta concorrência atingem maturação entre 3 a 6 meses de execução consistente.',
    },
    {
      id: 2,
      question: 'Como funcionam os relatórios de performance?',
      answer:
        'Disponibilizamos dashboards proprietários em tempo real integrando Google Search Console, Google Analytics 4 e rankings de palavras-chave, além de relatórios executivos mensais focados em receita orgânica, conversão e share of search.',
    },
    {
      id: 3,
      question: 'Quais são os termos de contrato e permanência?',
      answer:
        'Nossos contratos são estruturados em ciclos trimestrais ou semestrais de aceleração com roadmaps transparentes priorizados pelo impacto no faturamento e LTV da loja.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000604]">
        {/* Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-[#0DF205]/15 rounded-full blur-[180px] -rotate-12"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#26D3AB]/15 rounded-full blur-[160px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DF205]/10 border border-[#0DF205]/30 shadow-[0_0_15px_rgba(13,242,5,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0DF205] shadow-[0_0_8px_#0DF205]" />
              <span className="text-[#0DF205] text-xs sm:text-sm font-bold uppercase tracking-[1.5px]">
                PERFORMANCE SEO
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#E3E3DF]"
            >
              SEO Técnico e <span className="text-[#0DF205]">Estratégico</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#EFEFEF] text-base sm:text-xl font-normal leading-relaxed max-w-3xl"
            >
              Acelere seu site, aumente visitas e vendas com estratégias de SEO técnico, inbound marketing, tendências digitais e SEO para e-commerce.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap justify-center items-center gap-4"
            >
              <button
                onClick={onOpenAuditModal}
                className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#013A00] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onNavigatePage('home');
                  setTimeout(() => {
                    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="px-8 py-4 border border-white/20 hover:border-[#0DF205] text-[#E3E3DF] hover:text-[#0DF205] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all cursor-pointer"
              >
                Ver Cases
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SER ENCONTRADO É SÓ O COMEÇO (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Ser encontrado é <br />
                só o começo.
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                SEO para e-commerce vai muito além de palavras-chave. Envolve estrutura técnica, rastreabilidade, categorização e conteúdo que realmente ajuda o cliente na decisão de compra.
              </p>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                A gente entra pra organizar, priorizar e otimizar — página por página, tag por tag — tudo com base em dados reais de busca, intenção e concorrência. Não entregamos apenas tráfego; entregamos <span className="text-[#027100] font-bold">autoridade e conversão.</span>
              </p>
            </div>

            {/* Right Card with Image & Stat */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#000604] border border-[#3B4B35]/20 shadow-2xl space-y-6">
                <div className="h-[280px] sm:h-[340px] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="SEO Performance"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent" />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-[#0DF205]/20 flex items-center justify-center text-[#0DF205] flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                      ESTATÍSTICA ATUAL
                    </div>
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      +142% em tráfego orgânico médio
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEO QUE VAI ALÉM DO POSICIONAMENTO (Light Section with 5 Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0F172A]">
              SEO Que Vai Além do Posicionamento
            </h2>
            <p className="text-base sm:text-lg text-[#64748B]">
              Nossa entrega foca em métricas de negócio, não apenas em keywords de volume vazio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Tráfego Qualificado',
                desc: 'Pessoas prontas para a compra no seu site.',
                icon: Search,
              },
              {
                title: 'Crescimento de Conversão',
                desc: 'Mais vendas vindas do canal orgânico.',
                icon: TrendingUp,
              },
              {
                title: 'Menor Dependência de Mídia',
                desc: 'Reduza seu CAC total ao longo do tempo.',
                icon: Activity,
              },
              {
                title: 'Construção de Autoridade',
                desc: 'Torne-se a referência técnica do seu nicho.',
                icon: ShieldCheck,
              },
              {
                title: 'Escalabilidade',
                desc: 'Estrutura pronta para suportar milhares de SKUs.',
                icon: Layers,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/10 shadow-lg text-center flex flex-col items-center space-y-4 hover:border-[#0DF205] transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#000604] text-[#0DF205] flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PRINCIPAIS PROBLEMAS DE SEO QUE RESOLVEMOS (Light Section with 5 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#0F172A]">
              Principais Problemas de SEO que Resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Featured */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/30 shadow-xl flex flex-col justify-between space-y-6 lg:col-span-2">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Baixa Visibilidade Orgânica
                </h3>
                <p className="text-[#D9D9D9] text-base leading-relaxed max-w-2xl">
                  Sua loja não aparece nos resultados de busca para termos de fundo de funil, perdendo milhares de reais em vendas diárias para a concorrência direta.
                </p>
              </div>

              <div 
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-[#0DF205] font-bold text-base hover:underline cursor-pointer pt-2"
              >
                <span>Ver Solução</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2: Falhas de Indexação */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Falhas de Indexação
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Problemas técnicos que impedem o Google de encontrar e processar suas páginas de produto.
              </p>
            </div>

            {/* Card 3: Categorias Ineficientes */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Categorias Ineficientes
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Arquitetura de informação confusa que prejudica o rankeamento e a experiência do usuário.
              </p>
            </div>

            {/* Card 4: Bad Core Web Vitals */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Bad Core Web Vitals
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Sites lentos que são penalizados pelo algoritmo e frustram o consumidor moderno.
              </p>
            </div>

            {/* Card 5: Dependência de Mídia */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Dependência de Mídia
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Incapacidade de crescer sem aumentar o budget diário no Google Ads ou Meta Ads.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. COMO ATUAMOS (5 Steps Grid) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#027100]">
                METODOLOGIA
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Como atuamos
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#000604] max-w-md">
              Nossa abordagem é puramente orientada a dados, focada em remover gargalos técnicos e escalar visibilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'Auditoria técnica',
                desc: 'Escaneamento profundo de Core Web Vitals, indexação e saúde do domínio.',
              },
              {
                num: '02',
                title: 'Estrutura de categorias',
                desc: 'Arquitetura de informação inteligente para maximizar o PageRank interno.',
              },
              {
                num: '03',
                title: 'Otimização de conteúdo',
                desc: 'Ajuste fino de semântica, meta-tags e intenção de busca para conversão.',
              },
              {
                num: '04',
                title: 'Plano de conteúdos',
                desc: 'Estratégia editorial baseada em gaps de palavras-chave da concorrência.',
              },
              {
                num: '05',
                title: 'Monitoramento contínuo',
                desc: 'Dashboards em tempo real e ajustes ágeis conforme atualizações do Google.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-xl bg-[#000604] text-white flex flex-col justify-between space-y-6 shadow-xl hover:border-[#0DF205]/40 border border-transparent transition-all"
              >
                <div className="text-3xl font-bold text-[#0DF205]/60 font-mono">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#EFEFEF]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D9D9D9] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. O QUE ESTÁ INCLUSO NA CONSULTORIA SEO */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Scope */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O Que Está Incluso na <br />
                Consultoria SEO
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Um escopo completo desenhado para remover todos os gargalos orgânicos da sua operação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Auditoria Técnica Inicial',
                  'Link Building Estratégico',
                  'Mapeamento de Keywords',
                  'Otimização de Imagens',
                  'Redação Editorial',
                  'SEO para Mobile',
                  'Relatórios Executivos',
                  'Suporte ao Dev Team',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0DF205] text-black flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-[#000604]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Box */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#000604] border border-[#3B4B35]/20 shadow-2xl p-8 sm:p-12">
                <div className="p-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Relatórios em Tempo Real
                  </h3>
                  <p className="text-[#D9D9D9] text-base leading-relaxed">
                    Dashboard personalizado com integração Google Search Console e Analytics.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SEO TÉCNICO PARA ALTA PERFORMANCE (Dark Section) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              SEO Técnico para Alta Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Indexação',
                desc: 'Garanta que 100% das suas páginas rentáveis estejam no índice do Google sem erros de rastreio.',
                icon: CheckCircle2,
              },
              {
                title: 'Information Architecture',
                desc: 'Organização lógica de URLs e diretórios que facilitam a navegação do robô e do usuário.',
                icon: Layers,
              },
              {
                title: 'Structured Data',
                desc: 'Marcação Schema para Product, Review e Price para ganhar Rich Snippets nos resultados.',
                icon: Code2,
              },
              {
                title: 'Crawl Budget',
                desc: 'Otimização da frequência com que o Google lê seu site, priorizando o que realmente importa.',
                icon: Activity,
              },
              {
                title: 'Core Web Vitals',
                desc: 'Foco técnico em LCP, FID e CLS para máxima performance e vantagem competitiva.',
                icon: Zap,
              },
              {
                title: 'GEO (IA SEO)',
                desc: 'Preparação do conteúdo para ser citado por motores de busca baseados em IA (Generative Engine Optimization).',
                icon: Bot,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-[#0D0F0D] border border-white/5 hover:border-[#0DF205]/30 transition-all">
                  <div className="w-8 h-8 rounded bg-[#0DF205] text-black flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="w-4 h-4 fill-current" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#D9D9D9] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. RESULTADOS QUE O SEO PODE GERAR (3 Metric Cards) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Resultados Que o SEO Pode Gerar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '↑ 85%',
                title: 'Mais Tráfego Orgânico',
                desc: 'Média de crescimento anual para nossos clientes de e-commerce.',
              },
              {
                stat: '↓ 30%',
                title: 'Redução de CAC',
                desc: 'Otimização da média ponderada de custo por aquisição.',
              },
              {
                stat: '24/7',
                title: 'Vendas Recorrentes',
                desc: 'Sua loja vendendo sem depender de leilões de anúncios.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-10 rounded-2xl bg-[#000604] border border-[#0DF205]/25 shadow-2xl space-y-4 hover:scale-[1.02] transition-transform"
              >
                <div className="text-5xl font-bold text-[#0DF205]">
                  {card.stat}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-base text-[#D9D9D9] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INSIGHTS / BLOG PREVIEWS */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between gap-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#EFEFEF]">
              Insights
            </h2>

            <button
              onClick={() => {
                onNavigatePage('home');
                setTimeout(() => {
                  document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-[#0DF205] text-sm sm:text-base font-medium flex items-center gap-2 hover:underline cursor-pointer"
            >
              <span>Ver todas as matérias</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'SEO',
                title: 'Integração de GEO no E-commerce',
                desc: 'Como preparar suas páginas para serem citadas pelo Gemini e ChatGPT.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'SEO',
                title: 'Otimize seu site com Core Web Vitals',
                desc: 'Guia definitivo para acelerar LCP e eliminar penalizações algorítmicas.',
                img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'SEO',
                title: 'Acompanhe o relatório de Search Console',
                desc: 'Métricas que realmente revelam a saúde técnica do seu domínio.',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
              },
            ].map((art, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-[#111815] border border-white/10 group hover:border-[#0DF205]/40 transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0DF205] text-black text-xs font-bold uppercase">
                    {art.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#0DF205] transition-colors line-clamp-1">
                    {art.title}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">
                    {art.desc}
                  </p>
                  <div 
                    onClick={onOpenAuditModal}
                    className="pt-2 text-sm text-[#0DF205] font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Leia a matéria</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. DÚVIDAS FREQUENTES */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E3E3DF]">
              Dúvidas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              Transparência total sobre como escalamos seus resultados.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl bg-[#1A1C1A]/40 border border-[#3B4B35]/20 backdrop-blur-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#E3E3DF]">
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#0DF205]/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0DF205]' : ''}`}>
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-black' : 'text-[#0DF205]'}`} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. LEAD DIAGNOSTIC FORM */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#1A1C1A] border border-[#3B4B35]/20 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                  O mundo digital não <br />
                  espera. Sua empresa <br />
                  está pronta para <br />
                  dominar o mercado?
                </h2>

                <p className="text-[#0DF205] text-base sm:text-lg leading-relaxed">
                  Nossos consultores sêniores estão prontos para analisar seu cenário e traçar um plano de aceleração sob medida.
                </p>

                <div className="flex items-center gap-3 text-[#0DF205] text-sm sm:text-base font-bold pt-2">
                  <div className="w-5 h-5 rounded-full bg-[#0DF205] flex items-center justify-center text-black flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Diagnóstico 100% Gratuito para Empresas Elegíveis</span>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6">
                <div className="p-7 sm:p-9 rounded-2xl bg-[#000604] border border-white/10 shadow-2xl">
                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#0DF205]/20 border border-[#0DF205] text-[#0DF205] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Solicitação Recebida!</h3>
                      <p className="text-white/80 text-sm">
                        Nossa equipe entrará em contato em menos de 48h com o diagnóstico de SEO.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2">
                          NOME COMPLETO
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome"
                          className="w-full bg-[#000604] border border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base rounded focus:outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2">
                          E-MAIL CORPORATIVO
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@empresa.com"
                          className="w-full bg-[#000604] border border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base rounded focus:outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2">
                            EMPRESA
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Nome da empresa"
                            className="w-full bg-[#000604] border border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base rounded focus:outline-none placeholder:text-white/30"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2">
                            CARGO
                          </label>
                          <input
                            type="text"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            placeholder="Ex: Diretor de Marketing"
                            className="w-full bg-[#000604] border border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base rounded focus:outline-none placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] cursor-pointer"
                        >
                          SOLICITAR DIAGNÓSTICO ESTRATÉGICO
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
