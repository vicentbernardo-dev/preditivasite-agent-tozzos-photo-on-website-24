import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Server, 
  Terminal, 
  Globe, 
  Gauge, 
  Activity, 
  GitBranch, 
  Check,
  RefreshCw
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface DevPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const DevPage: React.FC<DevPageProps> = ({
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
        company: formData.company || 'Dev Lead',
        role: formData.role || 'Dev & Infraestrutura de Alta Performance',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'Como funciona o processo de otimização em loja ativa?',
      answer:
        'Trabalhamos com workspaces isolados e ambientes de homologação estritos, realizando auditorias de código estático, tree-shaking de dependências pesadas e deploy gradual via Canary/Feature Flags para risco zero de instabilidade em produção.',
    },
    {
      id: 1,
      question: 'Garantia de estabilidade em grandes eventos (Black Friday)?',
      answer:
        'Realizamos testes de estresse de carga (Load Testing), otimização de queries GraphQL, cache de borda (CDN / Edge Caching) e plantão técnico dedicado 24/7 com tempo de resposta em minutos.',
    },
    {
      id: 2,
      question: 'Quais métricas são usadas para medir a eficácia da otimização?',
      answer:
        'Acompanhamos métricas reais de campo do Chrome User Experience Report (CrUX): LCP (Largest Contentful Paint), FID/INP (Interaction to Next Paint), CLS (Cumulative Layout Shift) e TTFB (Time to First Byte).',
    },
    {
      id: 3,
      question: 'Como personalizar a experiência do cliente durante a navegação?',
      answer:
        'Desenvolvemos componentes customizados nativos em React e VTEX IO com renderização server-side otimizada para carregar blocos personalizados sem flickering ou bloqueio de thread principal.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000604]">
        {/* Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-[#0DF205]/15 rounded-full blur-[180px] -rotate-7"
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
                DEV & INFRAESTRUTURA DE ALTA PERFORMANCE
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#E3E3DF]"
            >
              DEV & INFRAESTRUTURA DE <br className="hidden sm:block" />
              <span className="text-[#0DF205]">ALTA PERFORMANCE</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#EFEFEF] text-base sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Elimine gargalos técnicos, bugs recorrentes e o carregamento lento que mata sua conversão. Uma infraestrutura robusta construída por especialistas em performance.
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

      {/* 2. CADA SEGUNDO DE LENTIDÃO É UMA VENDA PERDIDA (White Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Cada segundo de lentidão é uma venda perdida. <br />
                <span className="text-[#027100]">Cure sua infraestrutura.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Nossa equipe de engenharia não apenas "faz código". Nós arquitetamos soluções de alta disponibilidade em VTEX IO que suportam picos de tráfego extremos enquanto mantêm a fluidez da jornada do usuário.
              </p>

              <p className="text-base sm:text-lg text-[#000604] font-medium leading-relaxed">
                Somos o braço técnico que garante que seu marketing nunca seja desperdiçado por uma loja instável.
              </p>
            </div>

            {/* Right Card with Image & Stat */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#000604] border border-[#3B4B35]/20 shadow-2xl space-y-6">
                <div className="h-[280px] sm:h-[340px] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                    alt="Dev & Infraestrutura"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent" />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-[#0DF205]/20 flex items-center justify-center text-[#0DF205] flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                      ESTATÍSTICA ATUAL
                    </div>
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      99.9% Uptime garantido
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. NOSSA ENTREGA (White Section with 5 Modular Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              NOSSA ENTREGA
            </h2>
            <p className="text-base sm:text-lg text-[#000604]">
              Módulos especializados para cada camada técnica do seu e-commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Featured Evolução VTEX IO */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/30 shadow-2xl flex flex-col justify-between space-y-6 lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase text-[#0DF205] tracking-wider">
                    CORE BUSINESS
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Evolução VTEX IO
                </h3>
                <p className="text-[#D9D9D9] text-base leading-relaxed">
                  Desenvolvimento nativo utilizando as melhores práticas do framework. Criação de componentes customizados, React Hooks otimizados e GraphQL eficiente para minimizar o payload inicial da página.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {['VTEX CMS', 'Store Framework', 'Node.js', 'React Hooks', 'GraphQL'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded bg-[#2B3733] text-white text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Core Web Vitals */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#26D3AB]/20 text-[#26D3AB] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Core Web Vitals
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Otimização rigorosa de LCP, FID e CLS. Transformamos o score do PageSpeed em vantagem competitiva e SEO.
              </p>
            </div>

            {/* Card 3: Integrações */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Integrações
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Conectividade estável entre VTEX, ERPs, CRMs e APIs de terceiros com tratamento de erros robusto.
              </p>
            </div>

            {/* Card 4: Correções Técnicas */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/20 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Correções Técnicas
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Debug profundo e resolução definitiva de conflitos de scripts, problemas de checkout e gargalos de performance.
              </p>
            </div>

            {/* Card 5: Suporte Homologado */}
            <div className="p-8 rounded-2xl bg-[#000604] text-white border border-white/10 shadow-xl space-y-4 hover:border-[#0DF205]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#26D3AB]/20 text-[#26D3AB] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Suporte Homologado
              </h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Atendimento prioritário por engenheiros sêniores. Monitoramento proativo para evitar quedas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CÓDIGO LIMPO NÃO GERA DESORGANIZAÇÃO. GERA FATURAMENTO */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Código limpo não gera <br />
                <span className="text-[#027100]">desorganização.</span> <br />
                Gera faturamento.
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                A instabilidade técnica é o ralo oculto por onde escorre o investimento de marketing de grandes marcas. Sem uma base sólida, sua taxa de conversão morre no checkout.
              </p>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-black/5 border border-black/10">
                <div className="text-5xl sm:text-6xl font-bold text-[#027100] tracking-tight">
                  1.8s
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#000604] leading-snug">
                  Tempo de carregamento ideal atingido por nossos squads.
                </div>
              </div>

              <p className="text-sm sm:text-base italic text-[#000604]/80">
                Otimizamos seus indicadores de Core Web Vitals com foco total em experiência e SEO.
              </p>
            </div>

            {/* Right Column: Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-7 rounded-2xl bg-[#000604] text-white border-l-4 border-l-[#0DF205] shadow-xl space-y-2">
                <div className="flex items-center gap-3 text-[#0DF205] text-lg font-bold">
                  <Gauge className="w-5 h-5" />
                  <span>LCP Otimizado</span>
                </div>
                <p className="text-sm text-[#D9D9D9] leading-relaxed">
                  Renderização instantânea dos elementos visuais mais pesados para reter o visitante.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#000604] text-white border-l-4 border-l-[#0DF205] shadow-xl space-y-2">
                <div className="flex items-center gap-3 text-[#0DF205] text-lg font-bold">
                  <Code2 className="w-5 h-5" />
                  <span>DRY Code & Arquitetura Limpa</span>
                </div>
                <p className="text-sm text-[#D9D9D9] leading-relaxed">
                  Eliminação de código duplicado, refatoração de legados e componentização modular escalável.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/20 shadow-xl space-y-2">
                <div className="flex items-center gap-3 text-[#0DF205] text-xl font-bold">
                  <Cpu className="w-6 h-6" />
                  <span>Engenharia de Elite</span>
                </div>
                <p className="text-sm text-[#D9D9D9] leading-relaxed">
                  Desenvolvimento voltado para conversão, tolerância a falhas e escalabilidade global.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CASE DE SUCESSO - MIAMI AD SCHOOL */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#121E1A] text-white border border-[#3B4B35]/20 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0DF205] text-[#000604] text-xs font-bold uppercase tracking-wider">
                  CASE DE SUCESSO
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#D8E6DF] leading-tight">
                  INFRAESTRUTURA QUE CONECTA TECNOLOGIA E EDUCAÇÃO GLOBAL
                </h3>

                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  Entenda como o time de Devs da Preditiva assumiu os desafios de estabilidade de um ecossistema complexo, reduzindo drasticamente o tempo de resposta e garantindo que o fluxo de matrículas globais nunca parasse.
                </p>

                <button
                  onClick={() => onOpenAuditModal()}
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] flex items-center gap-2 cursor-pointer"
                >
                  <span>VER CASE MIAMI AD SCHOOL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#0DF205]/20 shadow-2xl h-[320px]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Miami Ad School Case"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INSIGHTS */}
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
                tag: 'DEV & INFRAESTRUTURA',
                title: 'Integração de GEO em VTEX IO',
                desc: 'Otimização de rotas e micro-frontends para performance extrema.',
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'DEV & INFRAESTRUTURA',
                title: 'Automações para o pipeline de CI/CD',
                desc: 'Como diminuir o tempo de build e garantir regressão zero nos deploys.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'DEV & INFRAESTRUTURA',
                title: 'Acompanhe o relatório de Core Web Vitals',
                desc: 'Estratégias avançadas de caching e otimização de imagens de catálogo.',
                img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
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

      {/* 7. DÚVIDAS FREQUENTES */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E3E3DF]">
              Dúvidas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              Tire suas dúvidas sobre como nossos especialistas Dev podem otimizar sua Infraestrutura.
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

      {/* 8. LEAD DIAGNOSTIC FORM */}
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
                        Nossa equipe de engenharia entrará em contato em menos de 48h com o diagnóstico de Dev & Infra.
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
                            placeholder="Ex: CTO / Head de E-commerce"
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
