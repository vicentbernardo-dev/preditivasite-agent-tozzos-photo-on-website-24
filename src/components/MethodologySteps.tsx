import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export const MethodologySteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      description: 'Realizamos uma análise profunda da operação digital para identificar gargalos em SEO, CRM, Dados, Performance, Conversão e Infraestrutura.',
    },
    {
      num: '02',
      title: 'Planejamento',
      description: 'Construímos um roadmap priorizado com ações de alto impacto para crescimento sustentável.',
    },
    {
      num: '03',
      title: 'Time especialista',
      description: 'Alocamos profissionais seniores para executar as iniciativas definidas no planejamento.',
    },
    {
      num: '04',
      title: 'Resultado',
      description: 'Monitoramos indicadores de negócio e otimizamos continuamente a operação para garantir evolução consistente.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#26D3AB]/10 rounded-full blur-[130px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title & Badges */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Como Funciona <span className="text-[#0DF205]">NOSSA Metodologia</span>
            </h2>
            <p className="text-[#D9D9D9] text-base sm:text-lg font-normal leading-relaxed">
              Nossa metodologia pode ser implementada através de aceleração completa, <br className="hidden sm:block" />
              consultoria estratégica ou especialistas dedicados.
            </p>
          </div>

          {/* Right Indicators: EFICIÊNCIA — FOCO — RESULTADO */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-bold text-xs sm:text-sm lg:text-base tracking-[1.8px] text-[#0DF205]">
            <span className="uppercase">EFICIÊNCIA</span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#0DF205]" />
            <span className="uppercase">FOCO</span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#0DF205]" />
            <span className="uppercase">RESULTADO</span>
          </div>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative p-7 sm:p-8 rounded-xl bg-[#111815] border border-white/10 hover:border-[#0DF205]/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              {/* Giant Watermark Step Number */}
              <div 
                aria-hidden="true" 
                className="absolute top-2 right-4 text-7xl sm:text-8xl font-extrabold text-white/[0.04] group-hover:text-[#0DF205]/[0.08] transition-colors pointer-events-none select-none font-familjen"
              >
                {step.num}
              </div>

              <div className="relative z-10 space-y-4">
                {/* Step badge */}
                <div className="w-10 h-10 rounded-lg bg-black border border-white/15 flex items-center justify-center font-mono font-bold text-sm text-[#0DF205] group-hover:border-[#0DF205] transition-colors shadow-inner">
                  {step.num}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#0DF205] transition-colors">
                  {step.title}
                </h3>

                <p className="text-[#D9D9D9] text-sm sm:text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="relative z-10 pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 group-hover:text-[#0DF205]">
                <span>Etapa {step.num}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
