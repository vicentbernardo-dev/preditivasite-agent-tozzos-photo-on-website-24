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
  Filter, 
  Target, 
  RefreshCw, 
  Sliders, 
  Share2, 
  Search, 
  Rocket, 
  Check, 
  X,
  Activity
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface GrowthPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const GrowthPage: React.FC<GrowthPageProps> = ({
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
        company: formData.company || 'Growth Lead',
        role: formData.role || 'CRO & Growth',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'Qual a diferença entre Growth Marketing e Marketing Tradicional?',
      answer:
        'O Marketing Tradicional baseia-se em campanhas estáticas e orçamentos fixos focados em vaidade (alcance, impressões). O Growth Marketing da Preditiva é científico: roda hipóteses rápidas, testes A/B rigorosos e orquestração de canais com foco estrito em margem de contribuição, taxa de conversão (CRO) e LTV.',
    },
    {
      id: 1,
      question: 'Quanto tempo leva para ver os primeiros resultados?',
      answer:
        'A partir dos primeiros ciclos semanais de teste A/B no checkout e nas páginas de produto, desbloqueamos aumentos incrementais na taxa de conversão já entre a 2ª e a 4ª semana.',
    },
    {
      id: 2,
      question: 'Quais são as principais métricas utilizadas em Growth Marketing?',
      answer:
        'Acompanhamos CAC Blended, LTV, Payback time, Taxa de Conversão por Etapa do Funil, ICE Score do Backlog e Margem de Contribuição por Canal.',
    },
    {
      id: 3,
      question: 'Como o Growth Marketing pode impactar a fidelização de clientes?',
      answer:
        'Ao conectar experimentos de aquisição com jornadas de retenção e recompra no CRM, transformamos a aquisição em relacionamentos de alto valor e compras recorrentes.',
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
                GROWTH & ACELERAÇÃO DE PERFORMANCE
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#E3E3DF]"
            >
              Estratégia Ágil e Testes para <br className="hidden sm:block" />
              <span className="text-[#0DF205]">Dominar O MERCADO</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#EFEFEF] text-base sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Transformamos hipóteses complexas em fluxos previsíveis de receita através de uma metodologia proprietária focada em eficiência operacional e escala acelerada.
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

      {/* 2. GROWTH QUE NÃO VALIDA SÓ CLIQUE. ACELERA O SEU FATURAMENTO (White Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Growth que não valida só clique. <br />
                <span className="text-[#027100]">Acelera o seu faturamento.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Nossa abordagem remove a intuição do marketing. Implementamos um rigoroso processo de hipóteses, testes A/B e validação técnica para garantir que cada centavo investido retorne como crescimento real e sustentável para sua operação.
              </p>
            </div>

            {/* Right Card with Image & Stat */}
            <div className="lg:col-span-6 relative">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#000604] border border-[#3B4B35]/20 shadow-2xl space-y-6">
                <div className="h-[280px] sm:h-[340px] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                    alt="Growth & CRO"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent" />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-xl bg-[#0DF205]/20 flex items-center justify-center text-[#0DF205] flex-shrink-0">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                      ESTATÍSTICA ATUAL
                    </div>
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      4.2x Eficiência Operacional
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOLUÇÕES PARA ESCALAR CADA ETAPA DO SEU NEGÓCIO (6 Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-[3px] text-[#027100]">
                ENTREGAS DE ALTO IMPACTO
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                Soluções para escalar cada <br />
                etapa do seu negócio.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Diagnóstico & Planejamento',
                desc: 'Análise profunda de dados históricos e infraestrutura para identificar gargalos críticos e oportunidades de escala imediata.',
                icon: Search,
              },
              {
                title: 'Framework de Testes',
                desc: 'Implementação de uma rotina ágil de experimentos semanais validados por modelos estatísticos de confiança.',
                icon: Sliders,
              },
              {
                title: 'Acompanhamento de Funil & CRO',
                desc: 'Otimização contínua de taxas de conversão em cada etapa da jornada do usuário, do anúncio ao checkout.',
                icon: Filter,
              },
              {
                title: 'Economia Unitária',
                desc: 'Ajuste fino de CAC vs LTV para garantir que o crescimento seja lucrativo e sustentável a longo prazo.',
                icon: BarChart3,
              },
              {
                title: 'Estratégia Multicanais',
                desc: 'Orquestração de mídia paga, SEO, e-mail e retenção em um ecossistema unificado de crescimento.',
                icon: Share2,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#000604] text-white border border-[#3B4B35]/20 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#0DF205]/40 transition-all"
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

            {/* 6th Card: CTA Card */}
            <div
              onClick={onOpenAuditModal}
              className="p-8 rounded-2xl bg-[#0DF205] text-[#000604] shadow-2xl flex flex-col justify-center items-center text-center space-y-4 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <h3 className="text-2xl sm:text-3xl font-bold uppercase leading-tight">
                Pronto para o <br />
                próximo nível?
              </h3>
              <div className="text-sm font-bold uppercase tracking-wider underline flex items-center gap-2">
                <span>AGENDE SUA CONSULTORIA</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMO FUNCIONA O NOSSO FRAMEWORK DE CRESCIMENTO ÁGIL? (4 Steps) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
              Como funciona o nosso framework de crescimento ágil?
            </h2>
            <div className="w-24 h-1 bg-[#0DF205] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Mapeamento de Oportunidades',
                desc: 'Construção de um backlog técnico baseado em dados reais de comportamento do usuário.',
                icon: Search,
              },
              {
                num: '02',
                title: 'Priorização pelo ICE Score',
                desc: 'Impacto, Confiança e Facilidade. Priorizamos o que traz maior retorno com menor esforço.',
                icon: Sliders,
              },
              {
                num: '03',
                title: 'Execução de Testes A/B',
                desc: 'Isolamento de variáveis para garantir que cada mudança seja validada cientificamente.',
                icon: Activity,
              },
              {
                num: '04',
                title: 'Validação e Escala',
                desc: 'O que funciona vira padrão. O que não funciona vira aprendizado para o próximo ciclo.',
                icon: Rocket,
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-8 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/20 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#0DF205] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[#0DF205] text-lg font-bold font-mono">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#D9D9D9] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. CASE DE SUCESSO - GTEX */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#121E1A] text-white border border-[#3B4B35]/20 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#0DF205] text-[#000604] text-xs font-bold uppercase tracking-wider">
                  CASE DE SUCESSO
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#D8E6DF] leading-tight">
                  Transformando canais digitais em motores de tração comercial.
                </h3>

                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  Descubra como a Preditiva estruturou a estratégia de Growth e escala digital para a GTEX, unindo branding de grandes marcas de consumo com a precisão do marketing orientado a dados.
                </p>

                <button
                  onClick={() => onOpenAuditModal()}
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] flex items-center gap-2 cursor-pointer"
                >
                  <span>VER CASE GTEX</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#0DF205]/20 shadow-2xl h-[320px]">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                    alt="GTEX Growth Case"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. POR QUE O MARKETING TRADICIONAL FALHA ONDE O GROWTH VENCE? */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Por que o marketing tradicional falha onde o Growth vence?
            </h2>
            <p className="text-base sm:text-lg text-[#000604]">
              O fim do dinheiro queimado em suposições sem base técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Modelo Tradicional */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#000604] text-white border border-[#DB4514]/30 shadow-xl space-y-6">
              <div className="flex items-center gap-3 text-[#DB4514]">
                <div className="w-8 h-8 rounded-lg bg-[#DB4514]/20 flex items-center justify-center font-bold text-lg">
                  ✕
                </div>
                <h3 className="text-2xl font-bold text-[#DB4514]">
                  Modelo Tradicional
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Decisões baseadas no "gosto do diretor" ou intuição.',
                  'Orçamentos fixos em canais sem performance comprovada.',
                  'Relatórios focados em vaidade (likes, alcances).',
                  'Perda de tempo e dinheiro com campanhas genéricas.',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#DB4514] font-bold text-base mt-0.5">✕</span>
                    <span className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Growth Preditiva */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#000604] text-white border border-[#0DF205]/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 text-[#0DF205]">
                <div className="w-8 h-8 rounded-lg bg-[#0DF205]/20 flex items-center justify-center font-bold text-lg">
                  ➔
                </div>
                <h3 className="text-2xl font-bold text-[#0DF205]">
                  Growth Preditiva
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  'Variáveis isoladas e validadas estatisticamente.',
                  'Alocação dinâmica de verba onde há ROAS real.',
                  'Foco absoluto em métricas de negócio e receita.',
                  'Certezas construídas através de aprendizado contínuo.',
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#0DF205] font-bold text-base mt-0.5">➔</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INSIGHTS */}
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
                tag: 'GROWTH',
                title: 'Integração de GEO no Growth',
                desc: 'Como usar inteligência artificial para otimizar jornadas e testes no e-commerce.',
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'GROWTH',
                title: 'Automações para o ciclo de CRO',
                desc: 'Modelos de priorização de testes para aumentar o faturamento sem subir ad spend.',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'GROWTH',
                title: 'Acompanhe o relatório de conversão',
                desc: 'Análise detalhada de funil e gargalos de abandono de checkout.',
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

      {/* 8. DÚVIDAS FREQUENTES */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#E3E3DF]">
              Dúvidas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-[#D9D9D9]">
              Tire suas dúvidas sobre como podemos escalar o seu negócio.
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

      {/* 9. LEAD DIAGNOSTIC FORM */}
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
                        Nossa equipe entrará em contato em menos de 48h com o diagnóstico de Growth & CRO.
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
                            placeholder="Ex: Head de Growth / CRO"
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
