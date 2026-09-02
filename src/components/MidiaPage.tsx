import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  Target, 
  DollarSign, 
  PieChart, 
  Sliders, 
  Share2, 
  Activity, 
  Search,
  Filter,
  Eye
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface MidiaPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const MidiaPage: React.FC<MidiaPageProps> = ({
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
        company: formData.company || 'Mídia Lead',
        role: formData.role || 'Mídia Performance',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'Qual o ROI esperado para meu nicho?',
      answer:
        'O ROI e ROAS variam de acordo com o ticket médio, margem de contribuição e maturidade da marca. Durante a auditoria técnica inicial, modelamos cenários de retorno conservador, moderado e agressivo baseados em benchmarks reais do seu segmento.',
    },
    {
      id: 1,
      question: 'Vocês criam as peças (vídeos e imagens)?',
      answer:
        'Fornecemos direcionamento criativo técnico rigoroso baseado em dados de retenção de visualização, CTR e testes de ângulo, além de roteirização para criativos de alta conversão.',
    },
    {
      id: 2,
      question: 'Como funcionam os relatórios?',
      answer:
        'Acesso 24/7 a dashboards proprietários com modelo de atribuição multitoque e reuniões executivas periódicas com seu Growth Squad para tomada de decisão em tempo real.',
    },
    {
      id: 3,
      question: 'Quanto tempo para ver os primeiros resultados?',
      answer:
        'Com a calibração da CAPI (Conversion API), ajustes de públicos e campanhas Advantage+/Performance Max, as primeiras otimizações de CAC e ROAS são visíveis nos primeiros 14 a 30 dias.',
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
                MÍDIA PERFORMANCE
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#E3E3DF]"
            >
              Mídia Performance <br className="hidden sm:block" />
              para <span className="text-[#0DF205]">O SEU CRESCIMENTO</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#EFEFEF] text-base sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Na Preditiva.Co, criamos campanhas de mídia paga que geram tráfego qualificado, aumentam vendas e fortalecem sua marca.
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

      {/* 2. MÍDIA QUE NÃO SÓ ATRAI. MAS CONVERTE (White Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Mídia que não só atrai. <br />
                <span className="text-[#027100]">Mas converte.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Anunciar é fácil, escalar com consistência é outra história. No cenário atual, algoritmos saturados e custos por clique crescentes exigem mais que "apertar botões".
              </p>

              <p className="text-base sm:text-lg text-[#000604] font-medium leading-relaxed">
                Somos especialistas que entendem profundamente de funil, análise de dados proprietários e comportamento do consumidor digital. Nossa missão é transformar investimento em lucro previsível.
              </p>
            </div>

            {/* Right Card with Image & Stat */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#000604] border border-[#3B4B35]/20 shadow-2xl space-y-6">
                <div className="h-[280px] sm:h-[340px] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                    alt="Mídia Performance"
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
                      3.8x AUMENTO MÉDIO EM ROAS
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. O QUE FAZEMOS EM MÍDIA PAGA PARA O SEU NEGÓCIO */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O Que Fazemos em <br />
                <span className="text-[#027100]">Mídia Paga</span> para o seu negócio
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Nossa estratégia combina mídia paga, análise de dados, CRM e comportamento do consumidor para gerar crescimento sustentável e rentável para operações digitais. Não olhamos apenas para cliques; olhamos para a lucratividade real da sua operação.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#000604] text-white border border-[#3B4B35]/20 shadow-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Data-Driven</h3>
                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  Decisões baseadas em dados frios e atribuição real.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#000604] text-white border border-[#3B4B35]/20 shadow-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Omnichannel</h3>
                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  Integração total entre canais de aquisição.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TRÁFEGO PAGO COM FOCO EM RECEITA (6 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Tráfego Pago com Foco em Receita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Aumento de Vendas',
                desc: 'Maximização do volume transacional através de escala vertical e horizontal.',
                icon: TrendingUp,
              },
              {
                title: 'Redução de CAC',
                desc: 'Otimização de lances e audiências para baixar o custo por aquisição.',
                icon: DollarSign,
              },
              {
                title: 'Crescimento de ROAS',
                desc: 'Foco total no retorno sobre o investimento publicitário em cada real gasto.',
                icon: Target,
              },
              {
                title: 'Escala Sustentável',
                desc: 'Crescimento constante sem comprometer as margens de lucro do negócio.',
                icon: Activity,
              },
              {
                title: 'Integração com CRM',
                desc: 'Mídia que conversa com sua base de clientes para retenção e LTV.',
                icon: Share2,
              },
              {
                title: 'Otimização Contínua',
                desc: 'Testes A/B incessantes em criativos, landing pages e públicos.',
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
                  <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. PROBLEMAS DE PERFORMANCE QUE RESOLVEMOS (Desafios 01 - 06) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Problemas de Performance que Resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: 'DESAFIO 01',
                title: 'CAC Elevado',
                desc: 'Quando o custo de aquisição inviabiliza o lucro por venda.',
              },
              {
                num: 'DESAFIO 02',
                title: 'Sem Rentabilidade',
                desc: 'Campanhas que geram tráfego, mas não convertem em lucro real.',
              },
              {
                num: 'DESAFIO 03',
                title: 'Dependência de Canal',
                desc: 'Risco alto por depender exclusivamente de uma única plataforma.',
              },
              {
                num: 'DESAFIO 04',
                title: 'Baixa Conversão',
                desc: 'Tráfego qualificado que morre no checkout por falta de otimização.',
              },
              {
                num: 'DESAFIO 05',
                title: 'Falta de Atribuição',
                desc: 'Impossibilidade de saber exatamente qual canal gerou a venda.',
              },
              {
                num: 'DESAFIO 06',
                title: 'Escala Limitada',
                desc: 'Dificuldade de aumentar o investimento mantendo a eficiência.',
              },
            ].map((desafio, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#000604] text-white border-l-4 border-l-[#0DF205] shadow-xl space-y-3 hover:translate-y-[-2px] transition-transform"
              >
                <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                  {desafio.num}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {desafio.title}
                </h3>
                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  {desafio.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. PLATAFORMAS QUE GERENCIAMOS */}
      <section className="relative py-16 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[4px] text-[#027100]">
            PLATAFORMAS QUE GERENCIAMOS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-80">
            {['Google Ads', 'Meta Ads', 'Pinterest Ads', 'TikTok Ads', 'YouTube Ads'].map((plat) => (
              <span key={plat} className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-[#000604] border-b-2 border-[#0DF205]/40 pb-1">
                {plat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ESTRATÉGIA FULL FUNNEL PARA E-COMMERCE (3 Visual Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Estratégia Full Funnel para E-commerce
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Full Funnel',
                desc: 'Presença estratégica em todas as etapas: Aquisição, Consideração, Conversão e Retenção.',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Margin Protection',
                desc: 'Decisões de investimento baseadas em margem de contribuição e LTV real, não apenas faturamento bruto.',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Customer Value',
                desc: 'Integração profunda entre mídia paga e CRM para maximizar o tempo de vida e valor de cada cliente.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden bg-[#111815] min-h-[380px] p-8 flex flex-col justify-end border border-white/10 shadow-2xl group"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091612] via-[#091612]/70 to-transparent" />

                <div className="relative z-10 space-y-3">
                  <h3 className="text-3xl font-bold text-[#0DF205]">
                    {card.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. O QUE ESTÁ INCLUSO NA GESTÃO (Dark Section - 5 Steps & Tags) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
                O Que Está Incluso na Gestão
              </h2>
              <p className="text-[#D9D9D9] text-base sm:text-lg leading-relaxed">
                Um ecossistema completo para garantir que cada centavo investido retorne em escala.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {['Remarketing', 'Shopping Ads', 'Performance Max', 'Conversion API'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded bg-white/5 border border-[#84967C]/30 text-white text-xs sm:text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                num: '01',
                title: 'ESTRUTURAÇÃO',
                desc: 'Setup técnico avançado de contas e tags.',
              },
              {
                num: '02',
                title: 'ESTRATÉGIA',
                desc: 'Planejamento tático Full Funnel personalizado.',
              },
              {
                num: '03',
                title: 'MÉTRICAS',
                desc: 'Monitoramento de KPIs de valor real.',
              },
              {
                num: '04',
                title: 'CRIATIVOS',
                desc: 'Direcionamento estratégico para ads de alta conversão.',
              },
              {
                num: '05',
                title: 'CONSULTIVO',
                desc: 'Acompanhamento próximo com reuniões de performance.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-7 rounded-xl bg-[#0D0F0D] border border-[#0DF205]/20 flex flex-col justify-between space-y-6 shadow-xl hover:border-[#0DF205] transition-all"
              >
                <div className="text-3xl font-bold text-[#0DF205] font-mono">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white">
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
                tag: 'MÍDIA',
                title: 'Integração de CAPI no Meta Ads',
                desc: 'Como contornar a perda de cookies no iOS e recuperar 30% da sua conversão.',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'MÍDIA',
                title: 'Automações para Performance Max',
                desc: 'Estruturação avançada de assets e sinais de audiência no Google Ads.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'MÍDIA',
                title: 'Acompanhe o relatório de ROAS Real',
                desc: 'Como calcular o blended ROAS e a margem de contribuição líquida.',
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

      {/* 10. DÚVIDAS FREQUENTES */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E3E3DF]">
              Dúvidas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              Esclareça as dúvidas mais comuns sobre mídia paga e descubra como nossa consultoria pode ajudar a aumentar seus resultados.
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
                        Nossa equipe entrará em contato em menos de 48h com o diagnóstico de Mídia.
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
