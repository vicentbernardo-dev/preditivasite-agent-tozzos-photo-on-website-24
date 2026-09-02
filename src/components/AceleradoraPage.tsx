import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronDown, ArrowRight, Quote, Zap, Activity, TrendingUp, Search, Database, Users, ShieldAlert, Cpu, BarChart3, LineChart, Code2, Globe, Layers } from 'lucide-react';

interface AceleradoraPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: 'home' | 'metodologia' | 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas') => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const AceleradoraPage: React.FC<AceleradoraPageProps> = ({
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
        company: formData.website || 'Aceleradora Lead',
        role: 'Aceleradora de E-commerce',
      });
    }
  };

  const faqItems = [
    {
      id: 0,
      question: 'O que é uma aceleradora de e-commerce?',
      answer:
        'Uma aceleradora de e-commerce é uma parceira técnica e estratégica que atua diretamente nos motores de crescimento do negócio (SEO, CRM, Engenharia de Dados, Infraestrutura e Mídia), construindo ativos proprietários e alavancando receita previsível.',
    },
    {
      id: 1,
      question: 'Qual a diferença entre aceleradora e agência?',
      answer:
        'Enquanto agências tradicionais focam em posts criativos, CTR e escopos rígidos de contrato, a Aceleradora Preditiva constrói infraestrutura de dados proprietária, foca em ROAS, LTV e CAC Real, e opera com squads multidisciplinares de especialistas seniores adaptáveis ao growth.',
    },
    {
      id: 2,
      question: 'A aceleração substitui minha equipe interna?',
      answer:
        'Não, nós operamos como a extensão técnica e analítica avançada do seu time interno, destravando gargalos complexos e acelerando o throughput de execução sem atrito.',
    },
    {
      id: 3,
      question: 'Como os resultados são medidos?',
      answer:
        'Medimos o sucesso através de métricas financeiras reais: crescimento de receita orgânica (SEO), taxa de recompra e receita gerada por CRM, eficiência de investimento de mídia (ROAS real) e LTV/CAC.',
    },
  ];

  const falhas = [
    {
      title: 'SEO sem escala',
      desc: 'Dependência total de marca e falta de descoberta orgânica em categorias topo de funil.',
      icon: Search,
    },
    {
      title: 'CRM sem automação',
      desc: 'Envios manuais e falta de segmentação baseada em comportamento de compra (RFM).',
      icon: Users,
    },
    {
      title: 'Dados descentralizados',
      desc: 'Informações espalhadas em planilhas e plataformas sem uma Single Source of Truth.',
      icon: Database,
    },
    {
      title: 'Baixa retenção',
      desc: 'Foco excessivo em aquisição de novos clientes enquanto a base atual não recompra.',
      icon: TrendingUp,
    },
    {
      title: 'Web Vitals pobres',
      desc: 'Velocidade de carregamento prejudicando conversão e ranking orgânico no Google.',
      icon: Cpu,
    },
    {
      title: 'Mídia cara',
      desc: 'ROAS em queda e dependência excessiva de algoritmos de Meta e Google Ads.',
      icon: BarChart3,
    },
  ];

  const entregas = [
    {
      num: '01.',
      title: 'Growth Strategy',
      desc: 'Planejamento tático com foco em canais de aquisição eficientes e otimização de funil.',
    },
    {
      num: '02.',
      title: 'SEO Técnico & Dev',
      desc: 'Infraestrutura preparada para o Google e experiência de usuário focada em conversão.',
    },
    {
      num: '03.',
      title: 'CRM & Retenção',
      desc: 'Régua de automação inteligente para aumentar a recompra e fidelização do cliente.',
    },
    {
      num: '04.',
      title: 'Mídia Performance',
      desc: 'Gestão de tráfego com foco em ROI real, utilizando algoritmos próprios de otimização.',
    },
    {
      num: '05.',
      title: 'Data Engineering',
      desc: 'Centralização de dados em Dashboards proprietários para visão 360º do negócio.',
    },
    {
      num: '06.',
      title: 'Predição de Dados',
      desc: 'Modelos estatísticos para prever churn e identificar clusters de alto valor.',
    },
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202C29] border border-[#3B4B35]/30">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0DF205] shadow-[0_0_10px_#0DF205]" />
                <span className="text-[#0DF205] text-xs sm:text-sm font-semibold uppercase tracking-[1.5px]">
                  ACELERADORA DIGITAL
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-white">
                A expertise técnica que <br className="hidden sm:block" />
                <span className="text-[#0DF205]">faltava</span> no seu e-commerce.
              </h1>

              {/* Subtitle */}
              <p className="text-[#EFEFEF] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Escalamos operações de e-commerce através de dados brutos e tecnologia de ponta. Não somos uma agência, somos seu time de growth engineering.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAuditModal}
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-black font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <span>SOLICITAR ANÁLISE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigatePage('home')}
                  className="px-8 py-4 border border-[#84967C] hover:border-[#0DF205] text-[#D8E6DF] hover:text-[#0DF205] font-bold text-sm sm:text-base uppercase tracking-wider rounded transition-all cursor-pointer"
                >
                  VER CASES
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
              <div className="relative rounded-2xl overflow-hidden border border-[#3B4B35]/30 bg-[#111815] shadow-2xl group">
                <div className="h-[380px] sm:h-[440px] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
                    alt="Aceleradora Digital Preditiva"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. MANIFESTO (Light Section) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#0DF205]">
                MANIFESTO
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O Que é uma <br />
                <span className="text-[#0DF205]">Aceleradora de E-commerce</span>
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-base sm:text-lg text-[#000604] leading-relaxed">
                Aceleramos operações digitais através da combinação de tecnologia, dados e execução especializada. Nossa atuação vai além da mídia e da criação, estruturando toda a base técnica necessária para escalar crescimento de forma sustentável.
              </p>
              <div className="w-24 h-1 bg-[#0DF205] rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUAIS EMPRESAS SE BENEFICIAM (Light Section with 4 Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              Quais Empresas se Beneficiam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Scale-ups */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-[#43E4BB]/20 shadow-xl space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Activity className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-white">Scale-ups</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Para empresas em fase de tração que precisam de estrutura de dados robusta e processos escaláveis de growth.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3.5 py-1 rounded-full bg-[#091612]/70 border border-[#3B4B35]/30 text-white text-xs font-semibold">
                  Growth Structure
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#091612]/70 border border-[#3B4B35]/30 text-white text-xs font-semibold">
                  Data Pipelines
                </span>
              </div>
            </div>

            {/* DNVBs */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-[#43E4BB]/20 shadow-xl space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Globe className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-white">DNVBs</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Marcas nativas digitais buscando independência de canais pagos e estratégias agressivas de retenção.
              </p>
            </div>

            {/* Enterprise */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-[#43E4BB]/20 shadow-xl space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Layers className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-white">Enterprise</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Grandes operações que exigem SEO técnico em escala e automação avançada de CRM.
              </p>
            </div>

            {/* Data-Driven Founders */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#000604] text-white border border-[#43E4BB]/20 shadow-xl space-y-4 hover:border-[#0DF205] transition-all">
              <div className="w-10 h-10 rounded bg-[#0DF205] flex items-center justify-center text-black">
                <Database className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-2xl font-medium text-white">Data-Driven Founders</h3>
              <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                Fundadores que tomam decisões baseadas em indicadores e buscam clareza total no LTV e CAC.
              </p>
            </div>
          </div>

          {/* Sub-pills */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 pt-4">
            {[
              'Marketplaces',
              'Operações Omnichannel',
              'Assinaturas e Recorrência',
              'Marcas com CRM Estruturado',
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-sm sm:text-base text-[#000604] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0DF205]" />
                <span>{tag}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DIAGNÓSTICO DE FALHAS (Light Section with 6 Left-Bordered Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-[#0DF205]">
                DIAGNÓSTICO DE FALHAS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
                O que impede seu <br />
                e-commerce de crescer?
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#000604] max-w-md">
              Identificamos os pontos cegos que drenam seu orçamento e estagnam sua curva de receita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {falhas.map((falha, idx) => {
              const Icon = falha.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-[#000604] text-white border-l-4 border-l-[#0DF205] space-y-4 shadow-xl hover:translate-y-[-2px] transition-transform"
                >
                  <div className="w-8 h-8 rounded bg-[#0DF205] flex items-center justify-center text-black">
                    <Icon className="w-4 h-4 fill-current" />
                  </div>
                  <h3 className="text-2xl font-medium text-white">{falha.title}</h3>
                  <p className="text-[#D9D9D9] text-sm sm:text-base leading-relaxed">
                    {falha.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. O QUE ENTREGAMOS (Light Section with 6 Numbered Dark Cards) */}
      <section className="relative py-24 bg-white text-[#000604] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
              O que entregamos
            </h2>
            <p className="text-base sm:text-lg text-[#000604]">
              Um ecossistema completo de aceleração focado em performance real e LTV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entregas.map((item) => (
              <div
                key={item.num}
                className="p-8 rounded-xl bg-[#000604] text-white space-y-4 shadow-xl border border-black/10 hover:border-[#0DF205]/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-wider text-white font-mono">
                    {item.num}
                  </span>
                  <div className="w-6 h-6 rounded bg-[#0DF205] flex items-center justify-center text-black">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-[#D9D9D9]">{item.title}</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. COMO FUNCIONA NOSSA OPERAÇÃO (4 Steps Dark) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-16">
            Como Funciona Nossa OPERAÇÃO
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Diagnóstico', desc: 'Auditoria profunda de canais, dados e tecnologia para identificar gargalos.' },
              { num: '2', title: 'Roadmap', desc: 'Planejamento tático com priorização baseada em esforço vs. impacto financeiro.' },
              { num: '3', title: 'Implementação', desc: 'Execução técnica hands-on: desenvolvimento, trackers, tags e campanhas.' },
              { num: '4', title: 'Escala', desc: 'Otimização contínua e expansão de canais para atingir novos patamares de receita.' },
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

      {/* 7. POR QUE SOMOS DIFERENTES? (Comparative Table) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5 overflow-hidden">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#26D3AB]/15 rounded-full blur-[160px]"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              Por que somos diferentes?
            </h2>
            <p className="text-base sm:text-lg text-[#EFEFEF]">
              Enquanto outros focam em Cliques, nós focamos em Lucro.
            </p>
          </div>

          {/* Responsive Table Container */}
          <div className="rounded-xl overflow-hidden border border-[#3B4B35]/30 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#202C29] border-b border-[#3B4B35]/30">
                    <th className="py-6 px-6 text-xl sm:text-2xl font-medium text-[#EAFFDE]">
                      Recurso
                    </th>
                    <th className="py-6 px-6 text-xl sm:text-2xl font-medium text-[#B9CCAF] italic opacity-60">
                      Agência Tradicional
                    </th>
                    <th className="py-6 px-6 text-xl sm:text-2xl font-medium text-[#43E4BB] bg-[#43E4BB]/5">
                      Aceleradora Preditiva
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3B4B35]/20 text-sm sm:text-base">
                  <tr>
                    <td className="py-6 px-6 font-bold text-[#EAFFDE]">Foco da Entrega</td>
                    <td className="py-6 px-6 text-[#B9CCAF]">Ativos criativos e posts</td>
                    <td className="py-6 px-6 text-[#EAFFDE] bg-[#43E4BB]/5 font-medium">Infraestrutura técnica e dados</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold text-[#EAFFDE]">KPI Primário</td>
                    <td className="py-6 px-6 text-[#B9CCAF]">CTR e Impressões</td>
                    <td className="py-6 px-6 text-[#EAFFDE] bg-[#43E4BB]/5 font-medium">ROAS, LTV e CAC Real</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold text-[#EAFFDE]">Tecnologia</td>
                    <td className="py-6 px-6 text-[#B9CCAF]">Dashboards padrão</td>
                    <td className="py-6 px-6 text-[#EAFFDE] bg-[#43E4BB]/5 font-medium">Data Warehouse Proprietário</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold text-[#EAFFDE]">Relacionamento</td>
                    <td className="py-6 px-6 text-[#B9CCAF]">Atendimento comercial</td>
                    <td className="py-6 px-6 text-[#EAFFDE] bg-[#43E4BB]/5 font-medium">Squad de Especialistas Sênior</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold text-[#EAFFDE]">Escopo</td>
                    <td className="py-6 px-6 text-[#B9CCAF]">Limitado por contrato</td>
                    <td className="py-6 px-6 text-[#EAFFDE] bg-[#43E4BB]/5 font-medium">Totalmente adaptável ao growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 8. DEPOIMENTOS / RESULTADOS REAIS */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-2 mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#0DF205]">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              RESULTADOS REAIS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Paulo Henrique */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group hover:border-[#0DF205]/40 transition-all">
              <div className="flex flex-col items-center text-center flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0DF205]/40 p-0.5 mb-3 shadow-[0_0_15px_rgba(13,242,5,0.2)]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80"
                    alt="Paulo Henrique"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="font-bold text-white text-base">PAULO HENRIQUE</div>
                <div className="text-[10px] text-white/60 uppercase">CEO DA MIAMI AD SCHOOL</div>
              </div>
              <div className="space-y-2 flex-grow">
                <div className="text-lg sm:text-xl font-bold text-white">Melhoria radical</div>
                <p className="text-sm text-white/80 leading-relaxed italic">
                  "Nossa performance site melhorou radicalmente no curto prazo, a experiência do user melhorou e a jornada ficou muito mais fluída, melhorando a conversão final de nossas vendas."
                </p>
              </div>
            </div>

            {/* Edu Sato */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group hover:border-[#0DF205]/40 transition-all">
              <div className="flex flex-col items-center text-center flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0DF205]/40 p-0.5 mb-3 shadow-[0_0_15px_rgba(13,242,5,0.2)]">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80"
                    alt="Edu Sato"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="font-bold text-white text-base">EDU SATO</div>
                <div className="text-[10px] text-white/60 uppercase">DIRETOR MKT GTEX</div>
              </div>
              <div className="space-y-2 flex-grow">
                <div className="text-lg sm:text-xl font-bold text-white">Satisfação e crescimento!</div>
                <p className="text-sm text-white/80 leading-relaxed italic">
                  "Estou muito satisfeito com o trabalho realizado. Nosso canal orgânico hoje cresceu em receita e qualidade!"
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. PERGUNTAS FREQUENTES */}
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

      {/* 10. PRONTO PARA ACELERAR SUA OPERAÇÃO? (Lead Form) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#16221E] to-[#121E1A] border border-white/15 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                  Pronto para acelerar <br />
                  sua operação?
                </h2>

                <p className="text-[#B9CCAF] text-base sm:text-lg leading-relaxed">
                  Se o seu e-commerce fatura acima de R$ 500k/mês e você sente que a falta de inteligência técnica está freando seu crescimento, vamos conversar.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Análise técnica gratuita do seu ecossistema.</span>
                  </div>

                  <div className="flex items-center gap-3 text-[#D8E6DF] text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-[#00FF00] flex items-center justify-center text-black flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Diagnóstico de escala em menos de 48h.</span>
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
                        Nossa equipe entrará em contato em menos de 48h.
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
