import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronDown, ArrowRight, Activity, LineChart, Search, Target, Database, Cpu, Zap, Layers, Globe, ShieldCheck, Users, BarChart3 } from 'lucide-react';

interface ConsultoriaPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: 'home' | 'metodologia' | 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas') => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const ConsultoriaPage: React.FC<ConsultoriaPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
  onLeadSuccess,
}) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
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
        company: formData.website || 'Consultoria Lead',
        role: 'Consultoria Estratégica',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'O que é uma consultoria estratégica para e-commerce?',
      answer:
        'É uma atuação consultiva sênior que audita a maturidade técnica da sua operação digital (SEO, CRM, Dados, Performance e CRO), mapeia gargalos invisíveis e desenha um plano de ação orientado a aumento de margem e faturamento previsível.',
    },
    {
      id: 1,
      question: 'Qual a diferença entre consultoria e aceleração?',
      answer:
        'Na consultoria estratégica, orientamos, auditamos e direcionamos a liderança e os times internos com roadmaps técnicos e validações contínuas. Na aceleração, nossa squad assume a execução ponta a ponta da operação e do growth engineering.',
    },
    {
      id: 2,
      question: 'A consultoria substitui minha equipe interna?',
      answer:
        'Não. Nossa consultoria empodera e eleva a maturidade do seu time técnico e de marketing, atuando como braço estratégico sênior para validações complexas, governança e tomadas de decisão.',
    },
    {
      id: 3,
      question: 'Quais áreas são avaliadas?',
      answer:
        'Avaliamos SEO Técnico (Core Web Vitals, indexação, arquitetura), CRM & Ciclo de Vida (RFM, automações, retenção), Engenharia de Dados (GA4, GTM, CAPI, Data Warehouse), Performance de Mídia e Otimização de Conversão (CRO).',
    },
  ];

  const desafios = [
    'Falta de Visibilidade dos Dados',
    'Problemas de SEO Técnico',
    'CRM Sem Estratégia',
    'Baixa conversão',
    'Performance e Core Web Vitals',
    'Falhas de rastreio (GA4/GTM)',
  ];

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000604]">
        {/* Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-10 left-[-100px] w-[500px] h-[500px] bg-[#0DF205]/15 rounded-full blur-[160px] -rotate-12"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-0 right-[-100px] w-[450px] h-[450px] bg-[#26D3AB]/15 rounded-full blur-[140px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26D3AB]/10 border border-[#26D3AB]/30">
                <span className="w-2 h-2 rounded-full bg-[#26D3AB] animate-pulse" />
                <span className="text-[#26D3AB] text-xs sm:text-sm font-semibold uppercase tracking-[1.5px]">
                  CONSULTORIA TÉCNICA
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold uppercase leading-[1.12] tracking-tight text-white">
                Consultoria Estratégica para E-commerce:{' '}
                <span className="text-[#0DF205]">SEO, CRM, Dados e Growth.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#EFEFEF] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Ajudamos empresas a estruturar SEO, CRM, Analytics, Dados, Growth e Performance para transformar gargalos técnicos em crescimento previsível.
              </p>

              {/* Disciplines pills string */}
              <div className="text-xs sm:text-sm text-[#0DF205] font-mono font-medium tracking-wide">
                SEO Técnico • CRM • Dados • CRO • Growth • Performance • Analytics • Dev & Infra
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAuditModal}
                  className="px-8 py-4 bg-[#00FF00] hover:bg-[#0DF205] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg transition-all shadow-[0_0_25px_rgba(13,242,5,0.35)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Agendar Diagnóstico Gratuito</span>
                </button>

                <button
                  onClick={() => onNavigatePage('metodologia')}
                  className="px-8 py-4 border border-[#3B4B35] hover:border-[#0DF205] text-[#D8E6DF] hover:text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                >
                  Ver Metodologia
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111815] shadow-2xl group">
                <div className="h-[380px] sm:h-[440px] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                    alt="Consultoria Estratégica Preditiva"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. O QUE FAZ NOSSA CONSULTORIA ESTRATÉGICA (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O Que Faz Nossa <br />
                <span className="text-[#0DF205]">Consultoria Estratégica</span>
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Nossa consultoria atua no diagnóstico, planejamento e direcionamento de iniciativas que aceleram o crescimento digital. Trabalhamos com análise técnica, estruturação de dados, melhoria de performance, SEO, CRM e inteligência operacional para apoiar decisões estratégicas.
              </p>

              <div className="inline-flex items-center gap-2.5 text-[#0DF205] text-base sm:text-lg font-bold">
                <div className="w-5 h-5 rounded bg-[#0DF205] flex items-center justify-center flex-shrink-0 text-black">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Inteligência de Dados Aplicada</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUEM PODE SE BENEFICIAR (Light Section with 3 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1A1F1D]">
              Quem Pode se Beneficiar da{' '}
              <span className="text-[#0DF205]">Consultoria Estratégica</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-gray-200 shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#0DF205]/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0DF205]/15 border border-[#0DF205]/30 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#0DF205]" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#0DF205] transition-colors">
                  E-commerces em Tração
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Empresas que já validaram seu modelo de negócio e precisam escalar receita de forma estruturada.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-gray-200 shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#0DF205]/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0DF205]/15 border border-[#0DF205]/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#0DF205]" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#0DF205] transition-colors">
                  CTOs e Gestores
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Lideranças que precisam reduzir gargalos técnicos, melhorar dados e aumentar eficiência operacional.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-gray-200 shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#0DF205]/50 transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#0DF205]/15 border border-[#0DF205]/30 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#0DF205]" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#0DF205] transition-colors">
                  Grandes Marcas
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Empresas que buscam integrar marketing, tecnologia e inteligência de dados para acelerar crescimento.
                </p>
              </div>
            </div>
          </div>

          {/* Sub-pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-4">
            {['Operações Omnichannel', 'Empresas SaaS', 'Marketplaces', 'Operações de Growth'].map((item) => (
              <span
                key={item}
                className="px-5 py-2.5 bg-white border border-[#E5E7EB] text-[#6B7280] font-semibold text-sm sm:text-base rounded-full shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PRINCIPAIS DESAFIOS QUE RESOLVEMOS (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#1A1F1D]">
              Principais Desafios que Resolvemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desafios.map((desafio, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-[#000604] border border-[#F3F4F6] text-white flex items-center gap-4 shadow-lg hover:border-[#0DF205]/40 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0DF205] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-black stroke-[3]" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">
                  {desafio}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. O QUE INCLUI NOSSA CONSULTORIA (Dark Section) */}
      <section className="relative py-24 bg-[#000604] text-white overflow-hidden border-t border-white/5">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#0DF205]/10 rounded-full blur-[150px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Box */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight text-white">
                O que inclui <br />
                nossa <br />
                consultoria
              </h2>

              <p className="text-[#D9D9D9] text-base sm:text-lg leading-relaxed">
                Nossa abordagem é agnóstica a ferramentas e focada 100% em ROI técnico e eficiência de dados.
              </p>

              {/* Diferencial Preditiva */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#16221E] border border-[#3B4B35]/30 space-y-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-[#0DF205]">
                  DIFERENCIAL PREDITIVA
                </div>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Não somos apenas consultores. Somos braço direito técnico para a execução do plano.
                </p>
              </div>
            </div>

            {/* Right 4 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 sm:p-8 rounded-xl bg-[#000604] border border-[#43E4BB]/20 space-y-3 hover:border-[#0DF205]/50 transition-colors">
                <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center text-black">
                  <Search className="w-3.5 h-3.5 fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#D9D9D9]">
                  Diagnóstico completo
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Auditoria profunda de rastreamento, infraestrutura e fluxos de dados para identificar gargalos invisíveis.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-xl bg-[#000604] border border-[#43E4BB]/20 space-y-3 hover:border-[#0DF205]/50 transition-colors">
                <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center text-black">
                  <LineChart className="w-3.5 h-3.5 fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#D9D9D9]">
                  Plano de evolução
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Roadmap estratégico trimestral com priorização de impacto financeiro e técnico direto.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-xl bg-[#000604] border border-[#43E4BB]/20 space-y-3 hover:border-[#0DF205]/50 transition-colors">
                <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center text-black">
                  <Target className="w-3.5 h-3.5 fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#D9D9D9]">
                  Acompanhamento
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Sessões semanais de steering para ajuste de rota, análise de métricas e suporte na tomada de decisão.
                </p>
              </div>

              <div className="p-7 sm:p-8 rounded-xl bg-[#000604] border border-[#43E4BB]/20 space-y-3 hover:border-[#0DF205]/50 transition-colors">
                <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center text-black">
                  <Cpu className="w-3.5 h-3.5 fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#D9D9D9]">
                  Acesso ao time técnico
                </h3>
                <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                  Canal direto com nossos especialistas em Data Science, Engenharia e Growth para dúvidas pontuais.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA NOSSA CONSULTORIA (4 Steps) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-16">
            Como Funciona Nossa Consultoria
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Diagnóstico', desc: 'Entendimento profundo da operação e gargalos.' },
              { num: '2', title: 'Priorização', desc: 'O que traz mais retorno no menor tempo.' },
              { num: '3', title: 'Implementação', desc: 'Mão na massa técnica e suporte ao time.' },
              { num: '4', title: 'Evolução', desc: 'Análise de resultados e novos ciclos de Growth.' },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00FF00] text-[#027100] font-bold text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                  {step.num}
                </div>
                <h3 className="text-2xl font-medium text-[#D9D9D9]">
                  {step.title}
                </h3>
                <p className="text-white text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PERGUNTAS FREQUENTES */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-center text-white mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl bg-black border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#EFEFEF]">
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

      {/* 8. PRONTO PARA A PRÓXIMA ESCALA? (Lead Form) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#16221E] to-[#121E1A] border border-white/15 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                  Pronto para a <br />
                  próxima escala?
                </h2>

                <p className="text-[#B9CCAF] text-base sm:text-lg leading-relaxed">
                  Preencha o formulário para receber uma análise preliminar da sua operação. Retornamos em até 24h.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Processo 100% focado em dados reais</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Sem templates genéricos: estratégia sob medida</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Garantia de confidencialidade NDA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-6">
                <div className="p-7 sm:p-9 rounded-2xl bg-[#121412] border border-white/10 shadow-2xl">
                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#0DF205]/20 border border-[#0DF205] text-[#0DF205] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Solicitação Recebida!</h3>
                      <p className="text-white/80 text-sm">
                        Um de nossos consultores seniores entrará em contato em até 24h.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2">
                          NOME COMPLETO
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome aqui"
                          className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base focus:outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2">
                          E-MAIL CORPORATIVO
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu@email.com"
                          className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base focus:outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2">
                          URL DO WEBSITE
                        </label>
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="www.seusite.com.br"
                          className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-4 py-3.5 text-sm sm:text-base focus:outline-none placeholder:text-white/30"
                        />
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          className="w-full py-4 bg-[#00FF00] hover:bg-[#0DF205] text-[#013A00] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(0,255,0,0.3)] cursor-pointer"
                        >
                          solicitar contato
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
