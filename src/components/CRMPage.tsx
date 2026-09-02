import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Mail, 
  Users, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Database, 
  RefreshCw, 
  HeartHandshake,
  Bot, 
  UserCheck, 
  PieChart, 
  Sliders, 
  Crown,
  Share2,
  Activity,
  Search
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CRMPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const CRMPage: React.FC<CRMPageProps> = ({
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
        company: formData.company || 'CRM Lead',
        role: formData.role || 'CRM & Automação para Recompra',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'O que é CRM e como ele pode ajudar meu negócio?',
      answer:
        'CRM (Customer Relationship Management) é o motor estratégico de retenção do seu negócio. Ele unifica os dados transacionais e comportamentais dos seus clientes para acionar comunicações personalizadas no momento exato, aumentando a taxa de recompra e o LTV com custo de aquisição marginal.',
    },
    {
      id: 1,
      question: 'Como funciona a implementação do CRM na minha empresa?',
      answer:
        'Iniciamos com a auditoria técnica da base e integração com sua plataforma de e-commerce e ERP. Em seguida, estruturamos os fluxos fundamentais (boas-vindas, carrinho abandonado, pós-venda, reativação de inativos) e modelos de segmentação RFM (Recência, Frequência, Valor).',
    },
    {
      id: 2,
      question: 'Como o CRM ajuda a aumentar as vendas?',
      answer:
        'Ao entregar ofertas altamente personalizadas baseadas no ciclo de vida do cliente e no histórico de compra, o CRM encurta o intervalo entre compras (TBR) e eleva o ticket médio sem depender exclusivamente de anúncios pagos.',
    },
    {
      id: 3,
      question: 'Quanto tempo leva para ver resultados concretos?',
      answer:
        'Os fluxos automatizados essenciais (como abandono de carrinho e régua de boas-vindas) começam a gerar receita recuperada já nos primeiros 15 a 30 dias após o deploy.',
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
                ENTERPRISE PERFORMANCE
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#EFEFEF]"
            >
              CRM e automação <br className="hidden sm:block" />
              <span className="text-[#0DF205]">para recompra</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#D9D9D9] text-base sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Personalize a jornada, impulsione resultados. Maximize o Potencial do seu CRM. Automação, dados e relacionamento em um só lugar.
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
                className="px-8 py-4 border border-white/20 hover:border-[#0DF205] text-[#EFEFEF] hover:text-[#0DF205] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all cursor-pointer"
              >
                Ver Cases
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. VOCÊ JÁ VENDE. AGORA PRECISA FAZER VOLTAR (White Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Card with Image & Stat */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#000604] border border-[#3B4B35]/20 shadow-2xl space-y-6">
                <div className="h-[280px] sm:h-[340px] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=1200&q=80"
                    alt="CRM Performance"
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
                      3.5x LTV Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Você já vende. Agora <br />
                precisa fazer voltar.
              </h2>

              <div className="w-20 h-1 bg-[#0DF205]" />

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                CRM não é só para newsletter. É sobre transformar cliente pontual em cliente fiel. Na Preditiva, criamos jornadas automatizadas que cuidam da retenção, da recompra e do relacionamento com sua base.
              </p>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Da integração à régua de nutrição, nosso time especialista atua para ativar sua audiência com inteligência e gerar mais receita com quem já te conhece.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CRM NÃO É DISPARO DE E-MAIL. É CRESCIMENTO DE RECEITA (White Section with 6 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
              CRM Não É Disparo de E-mail. <br />
              <span className="text-[#027100]">É Crescimento de Receita.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Aumento de Recompra',
                desc: 'Redução do intervalo entre pedidos através de ofertas personalizadas.',
                icon: RefreshCw,
              },
              {
                title: 'Recuperação de Inativos',
                desc: 'Sistemas de reativação automática baseados no tempo desde a última compra.',
                icon: Users,
              },
              {
                title: 'Redução de Churn',
                desc: 'Identificação proativa de clientes em risco.',
                icon: ShieldCheck,
              },
              {
                title: 'Automação da Jornada',
                desc: 'Fluxos de boas-vindas, carrinho abandonado e pós-venda estruturados.',
                icon: Zap,
              },
              {
                title: 'Crescimento de LTV',
                desc: 'Estratégias para maximizar o lucro por cliente.',
                icon: TrendingUp,
              },
              {
                title: 'Personalização em Escala',
                desc: 'Conteúdo dinâmico adaptado a cada perfil.',
                icon: Sliders,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/15 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#0DF205]/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PRINCIPAIS PROBLEMAS DE CRM QUE RESOLVEMOS (01 - 06) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Principais Problemas de CRM que Resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Base sem segmentação',
                desc: 'O fim do "blast email". Paramos de falar a mesma coisa para públicos diferentes.',
              },
              {
                num: '02',
                title: 'Automações inexistentes',
                desc: 'Implementamos os fluxos que vendem enquanto você dorme.',
              },
              {
                num: '03',
                title: 'Baixa recompra',
                desc: 'Seu cliente compra uma vez e some? Criamos o motivo para ele voltar.',
              },
              {
                num: '04',
                title: 'Churn elevado',
                desc: 'Detectamos padrões de abandono e agimos antes de perder o cliente.',
              },
              {
                num: '05',
                title: 'Dados desconectados',
                desc: 'Integramos sua plataforma de e-commerce ao seu CRM em tempo real.',
              },
              {
                num: '06',
                title: 'Comunicação genérica',
                desc: 'Criamos réguas de relacionamento que realmente conectam e convertem.',
              },
            ].map((prob) => (
              <div
                key={prob.num}
                className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205] shadow-xl space-y-3 hover:translate-y-[-2px] transition-transform"
              >
                <div className="text-[#0DF205] text-lg font-bold font-mono">
                  {prob.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {prob.title}
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SEGMENTAÇÃO INTELIGENTE PARA MAXIMIZAR RECEITA (8 Clusters) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Segmentação Inteligente para <br />
                Maximizar Receita
              </h2>
              <p className="text-base sm:text-lg text-[#000604] max-w-xl">
                Utilizamos análise preditiva e clusters comportamentais para tratar cada cliente como único.
              </p>
            </div>

            <div className="px-5 py-2.5 rounded-xl bg-[#0DF205]/10 border border-[#0DF205]/30 text-[#027100] text-xs sm:text-sm font-bold uppercase tracking-wider">
              DATA-DRIVEN STRATEGY
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'SEGMENTAÇÃO DINÂMICA', icon: PieChart },
              { title: 'ANÁLISE DE LTV', icon: TrendingUp },
              { title: 'HIGIENIZAÇÃO', icon: ShieldCheck },
              { title: 'DASHBOARD CRM', icon: BarChart3 },
              { title: 'CHURN PREDICTION', icon: Activity },
              { title: 'CLIENTES VIP', icon: Crown },
              { title: 'REATIVAÇÃO DE BASE', icon: RefreshCw },
              { title: 'RECOMENDAÇÃO', icon: Bot },
            ].map((cluster, idx) => {
              const Icon = cluster.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/15 shadow-lg flex flex-col items-center text-center space-y-3 hover:border-[#0DF205] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase text-white tracking-wider">
                    {cluster.title}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. O QUE ESTÁ INCLUSO NA CONSULTORIA CRM */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#000604] text-white border border-white/10 shadow-2xl relative overflow-hidden space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
                O Que Está Incluso na Consultoria CRM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Diagnóstico Técnico',
                  desc: 'Análise profunda da saúde da base e gaps de automação atuais.',
                  icon: Search,
                },
                {
                  title: 'Implementação de Jornadas',
                  desc: 'Configuração técnica de todos os fluxos críticos de retenção.',
                  icon: Zap,
                },
                {
                  title: 'Copy e Segmentação',
                  desc: 'Criação de textos persuasivos e definição de réguas de envio.',
                  icon: Mail,
                },
                {
                  title: 'Integrações',
                  desc: 'Conexão perfeita entre ERP, E-commerce e ferramenta de CRM.',
                  icon: Share2,
                },
                {
                  title: 'Estratégia de LTV',
                  desc: 'Planejamento focado em extrair o valor máximo de cada cliente.',
                  icon: TrendingUp,
                },
                {
                  title: 'Pós-venda',
                  desc: 'Encantamento e coleta de feedbacks para melhoria contínua.',
                  icon: HeartHandshake,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
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

        </div>
      </section>

      {/* 7. PLATAFORMAS QUE TRABALHAMOS */}
      <section className="relative py-16 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[4px] text-[#027100]">
            PLATAFORMAS QUE TRABALHAMOS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-80">
            {['HubSpot', 'ActiveCampaign', 'RD Station', 'Salesforce', 'Klaviyo'].map((plat) => (
              <span key={plat} className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#000604] border-b-2 border-[#0DF205]/40 pb-1">
                {plat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BENEFÍCIOS DO CRM PARA O SEU NEGÓCIO */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Benefícios do CRM para O SEU NEGÓCIO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Aumento de Recompra',
                desc: 'Incentivamos o cliente a comprar de novo com muito menos custo de marketing.',
                icon: RefreshCw,
              },
              {
                title: 'Crescimento de LTV',
                desc: 'Cada cliente se torna mais valioso ao longo do tempo para o seu negócio.',
                icon: TrendingUp,
              },
              {
                title: 'Redução de CAC',
                desc: 'Depender menos de anúncios pagos para gerar vendas em clientes antigos.',
                icon: ShieldCheck,
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/20 shadow-xl flex flex-col items-center text-center space-y-4 hover:scale-[1.02] transition-transform"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#0DF205] text-[#000604] flex items-center justify-center shadow-[0_0_20px_rgba(13,242,5,0.3)]">
                    <Icon className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. INSIGHTS */}
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
                tag: 'CRM',
                title: 'Integração de GEO no CRM',
                desc: 'Como hiper-segmentar réguas com base em geolocalização e histórico de clima.',
                img: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'CRM',
                title: 'Automações para o ciclo de vida',
                desc: 'Estratégias para prevenir churn com acionamentos preditivos inteligentes.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'CRM',
                title: 'Acompanhe o relatório de LTV',
                desc: 'Métricas cruciais para validar a saúde financeira da sua carteira ativa.',
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
              Tire suas dúvidas sobre como nossa consultoria de CRM pode escalar seu faturamento.
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
                        Nossa equipe entrará em contato em menos de 48h com o diagnóstico de CRM.
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
