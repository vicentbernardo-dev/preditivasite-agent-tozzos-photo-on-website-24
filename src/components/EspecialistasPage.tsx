import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronDown, ArrowRight, Search, Code2, Users2, Database, Megaphone, Zap, ShieldCheck, Clock, Layers, Award } from 'lucide-react';

interface EspecialistasPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: 'home' | 'metodologia' | 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas') => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const EspecialistasPage: React.FC<EspecialistasPageProps> = ({
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
        company: formData.website || 'Especialistas Lead',
        role: 'Especialistas Dedicados',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'Como funciona a precificação da alocação?',
      answer:
        'Trabalhamos com modelos flexíveis de horas mensais ou alocação integral (part-time ou full-time), com previsibilidade total de custos, sem encargos trabalhistas e sem taxas ocultas.',
    },
    {
      id: 1,
      question: 'Qual o tempo mínimo de contrato?',
      answer:
        'Nossos contratos são estruturados a partir de 3 meses, garantindo tempo hábil para onboarding ágil, execução profunda e entrega de resultados consistentes.',
    },
    {
      id: 2,
      question: 'O especialista trabalha exclusivamente para minha empresa?',
      answer:
        'Sim, durante a franquia de horas contratada ou no modelo full-time, o especialista opera 100% integrado ao seu fluxo diário, ferramentas de comunicação (Slack, Teams) e sprints ágeis.',
    },
    {
      id: 3,
      question: 'Quanto tempo leva para encontrar um profissional?',
      answer:
        'Como possuímos uma base pré-qualificada de talentos seniores, o processo de match e onboarding ocorre tipicamente entre 3 e 7 dias úteis.',
    },
  ];

  const motivos = [
    'Falta de conhecimento técnico interno em áreas críticas.',
    'Projetos estratégicos parados por falta de responsável.',
    'Crescimento acelerado demandando braço operacional sênior.',
    'Necessidade de reduzir custos fixos de contratação (CLT).',
    'Demandas temporárias ou sazonais de alta complexidade.',
    'Necessidade de execução imediata e sem curva de aprendizado.',
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202C29] border border-[#EAFFDE]/20">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0DF205] shadow-[0_0_10px_#0DF205]" />
                <span className="text-[#0DF205] text-xs sm:text-sm font-semibold uppercase tracking-[1.8px]">
                  TALENTO ON-DEMAND
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold uppercase leading-[1.1] tracking-tight text-white">
                O especialista sênior que você precisa,{' '}
                <span className="text-[#0DF205]">sem as amarras do CLT.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#EFEFEF] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Nosso time conta com especialistas de alto caráter técnico. Escalabilidade real com talentos que já operaram em grandes ecossistemas. Sem custos fixos de contratação, com foco total em entrega e performance técnica.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAuditModal}
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] cursor-pointer"
                >
                  Conhecer Nossos Especialistas
                </button>

                <button
                  onClick={() => onNavigatePage('home')}
                  className="px-8 py-4 border border-white/20 hover:border-[#0DF205] text-white hover:text-[#0DF205] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all cursor-pointer"
                >
                  Ver Nossos Cases
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
              <div className="relative rounded-2xl overflow-hidden border border-[#EAFFDE]/20 bg-[#111815] shadow-2xl group">
                <div className="h-[360px] sm:h-[420px] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Especialistas Dedicados Preditiva"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091612] via-transparent to-transparent" />
                </div>

                {/* Float Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#2B3733]/90 border border-white/10 backdrop-blur-md flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EAFFDE] text-black flex items-center justify-center flex-shrink-0 font-bold">
                    <Award className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">Monitoramento Sênior</div>
                    <div className="text-[#D9D9D9] text-xs sm:text-sm">Precisão técnica em tempo real</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. O QUE SÃO ESPECIALISTAS DEDICADOS (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O Que São <br />
                <span className="text-[#0DF205]">Especialistas Dedicados</span>
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Nosso modelo de especialistas dedicados permite que empresas acelerem projetos estratégicos com profissionais altamente qualificados, sem a necessidade de ampliar estruturas internas ou passar por longos processos de contratação.
              </p>

              <div className="p-5 bg-[#43E4BB]/10 border-l-4 border-[#0DF205] rounded-r-lg flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-[#0DF205] flex items-center justify-center flex-shrink-0 text-black">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xl sm:text-2xl font-medium text-[#000604]">
                  Execução 3x mais rápida que o mercado
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#3B4B35]/20 shadow-2xl relative h-[360px] sm:h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                  alt="Time Especialista"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091612]/70 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ESPECIALISTAS DISPONÍVEIS (Light Section with Dark Cards & Roles) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Especialistas Disponíveis para Sua Operação
            </h2>
            <div className="w-24 h-1 bg-[#43E4BB] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Especialista SEO */}
            <div className="p-8 rounded-xl bg-[#000604] text-white border border-[#00FF00]/20 space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Search className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-[#D9D9D9]">Especialista SEO</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Arquitetura da informação, SEO técnico, indexação, conteúdo e crescimento orgânico focado em performance.
              </p>
            </div>

            {/* Desenvolvedor */}
            <div className="p-8 rounded-xl bg-[#000604] text-white border border-[#00FF00]/20 space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-medium text-[#D9D9D9]">Desenvolvedor</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Front-end, Back-end, integrações complexas, performance web e otimização técnica de conversão.
              </p>
            </div>

            {/* Especialista CRM */}
            <div className="p-8 rounded-xl bg-[#000604] text-white border border-[#00FF00]/20 space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Users2 className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-[#D9D9D9]">Especialista CRM</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Automação de jornadas, segmentação avançada, retenção de base e relacionamento inteligente com clientes.
              </p>
            </div>

            {/* Especialista em Dados (2 cols in tablet/desktop) */}
            <div className="p-8 rounded-xl bg-[#000604] text-white border border-[#00FF00]/20 md:col-span-2 space-y-4 hover:border-[#0DF205] transition-all">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-3">
                  <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                    <Database className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#D9D9D9]">Especialista em Dados</h3>
                  <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                    Implementação GA4, GTM, dashboards customizados em Looker Studio, BI e engenharia de dados para suporte à decisão.
                  </p>
                </div>
                <div className="sm:col-span-5 sm:border-l sm:border-[#3B4B35]/40 sm:pl-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#D9D9D9]">
                    <span className="w-2 h-2 rounded-full bg-[#0DF205]" />
                    <span>GA4 & GTM Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#D9D9D9]">
                    <span className="w-2 h-2 rounded-full bg-[#0DF205]" />
                    <span>Data Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#D9D9D9]">
                    <span className="w-2 h-2 rounded-full bg-[#0DF205]" />
                    <span>Business Intelligence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Especialista em Mídia */}
            <div className="p-8 rounded-xl bg-[#000604] text-white border border-[#00FF00]/20 space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Megaphone className="w-5 h-5 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-medium text-[#D9D9D9]">Especialista em Mídia</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Google Ads, Meta Ads, TikTok Ads e campanhas orientadas a performance ROI-positive.
              </p>
            </div>
          </div>

          {/* 5 Specialized Role Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { role: 'Growth Lead', cat: 'ESTRATÉGIA' },
              { role: 'CRO Specialist', cat: 'CONVERSÃO' },
              { role: 'Tech Lead', cat: 'ENGENHARIA' },
              { role: 'Martech', cat: 'FERRAMENTAS' },
              { role: 'Product Analytics', cat: 'PRODUTO' },
            ].map((item) => (
              <div
                key={item.role}
                className="p-4 rounded-lg bg-[#000604] border border-[#00FF00]/20 text-center space-y-1 hover:border-[#0DF205] transition-colors"
              >
                <div className="text-white text-base font-medium">{item.role}</div>
                <div className="text-[#0DF205] text-xs font-semibold uppercase tracking-wider">{item.cat}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. QUANDO CONTRATAR (Light Section with 6 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Quando Contratar um Especialista Dedicado
            </h2>
            <p className="text-base sm:text-lg text-[#000604]">
              Identifique se sua operação precisa de aceleração técnica imediata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {motivos.map((motivo, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#000604] border border-[#3B4B35]/20 text-white flex items-start gap-4 shadow-lg hover:border-[#0DF205]/40 transition-colors"
              >
                <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center flex-shrink-0 text-black mt-1">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  {motivo}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. POR QUE ESCOLHER A PREDITIVA.CO (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight text-[#000604]">
                Por Que <br />
                Escolher a <br />
                <span className="text-[#0DF205]">Preditiva.co</span>
              </h2>

              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Entregamos mais do que profissionais; entregamos inteligência de performance e expertise validada em centenas de projetos.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 rounded-xl bg-[#000604] border border-[#00FF00]/20 space-y-2">
                <h3 className="text-lg font-bold text-[#0DF205]">Especialistas Seniores</h3>
                <p className="text-[#D9D9D9] text-sm leading-relaxed">
                  Acesso apenas a profissionais com bagagem comprovada em grandes operações.
                </p>
              </div>

              <div className="p-7 rounded-xl bg-[#000604] border border-[#00FF00]/20 space-y-2">
                <h3 className="text-lg font-bold text-[#0DF205]">Alocação Rápida</h3>
                <p className="text-[#D9D9D9] text-sm leading-relaxed">
                  Inicie seus projetos em dias, não meses. Zero burocracia de RH.
                </p>
              </div>

              <div className="p-7 rounded-xl bg-[#000604] border border-[#00FF00]/20 space-y-2">
                <h3 className="text-lg font-bold text-[#0DF205]">Flexibilidade Total</h3>
                <p className="text-[#D9D9D9] text-sm leading-relaxed">
                  Aumente ou reduza a squad conforme a necessidade do negócio.
                </p>
              </div>

              <div className="p-7 rounded-xl bg-[#000604] border border-[#00FF00]/20 space-y-2">
                <h3 className="text-lg font-bold text-[#0DF205]">Gestão Contínua</h3>
                <p className="text-[#D9D9D9] text-sm leading-relaxed">
                  Nossos Growth Leads acompanham a alocação para garantir resultados.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. COMO FUNCIONA (4 Steps Dark) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-16">
            Como Funciona Nossa Consultoria
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Briefing', desc: 'Entendemos objetivos, desafios e competências necessárias.' },
              { num: '2', title: 'Match', desc: 'Selecionamos profissionais compatíveis técnica e culturalmente.' },
              { num: '3', title: 'Onboarding', desc: 'Integração rápida com times, ferramentas e processos.' },
              { num: '4', title: 'Acompanhamento', desc: 'Monitoramento contínuo da performance e evolução dos projetos.' },
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

      {/* 8. ESCALE COM MATURIDADE TÉCNICA (Lead Form) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#16221E] to-[#121E1A] border border-white/15 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                  ESCALE COM <br />
                  MATURIDADE TÉCNICA
                </h2>

                <p className="text-[#B9CCAF] text-base sm:text-lg leading-relaxed">
                  Preencha o formulário e um de nossos consultores de talento entrará em contato para entender como nossos especialistas podem acelerar seu crescimento.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Sem burocracia de contratação tradicional</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Profissionais 100% remotos e focados</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Flexibilidade total de horas/mês</span>
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
                        Nossa equipe entrará em contato para apresentar os talentos disponíveis.
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
