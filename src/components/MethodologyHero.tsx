import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles, Activity } from 'lucide-react';

interface MethodologyHeroProps {
  onOpenAuditModal: () => void;
}

export const MethodologyHero: React.FC<MethodologyHeroProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000604] font-familjen">
      {/* Ambient background glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-0 w-[550px] h-[550px] bg-[#0DF205]/15 rounded-full blur-[140px] -rotate-12"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] bg-[#26D3AB]/15 rounded-full blur-[130px] rotate-12"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#0DF205]/10 border border-[#0DF205]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0DF205] animate-pulse" />
              <span className="text-[#0DF205] text-xs sm:text-sm font-bold uppercase tracking-[1.2px]">
                Como atuamos
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold uppercase leading-[1.12] tracking-tight text-white">
              Metodologia Preditiva: SEO, CRM, Dados e Growth para{' '}
              <span className="text-[#0DF205]">Escalar seu negócio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#EFEFEF] text-lg sm:text-xl lg:text-[22px] font-normal leading-relaxed max-w-2xl">
              Nossa metodologia combina especialistas em SEO, CRM, Dados, Desenvolvimento e Growth para identificar gargalos, estruturar operações digitais e acelerar resultados de forma sustentável.
            </p>

            {/* Quick Diagnostic Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-wider rounded-lg transition-all shadow-[0_0_30px_rgba(13,242,5,0.35)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Diagnóstico da Metodologia</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with +R$ 50M Gerenciados card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111815] shadow-2xl group">
              {/* Main Image */}
              <div className="h-[380px] sm:h-[440px] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Time Preditiva em planejamento técnico"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-[#000604]/40 to-transparent" />
              </div>

              {/* Float Card: +R$ 50M Gerenciados */}
              <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-xl bg-[#000604]/90 border border-white/15 backdrop-blur-md flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 rounded-lg bg-[#0DF205] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(13,242,5,0.4)]">
                  <TrendingUp className="w-6 h-6 text-[#000604] stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    +R$ 50M Gerenciados
                  </div>
                  <p className="text-xs sm:text-sm text-white/70">
                    Volume acumulado em receita e mídia sob governança técnica
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
