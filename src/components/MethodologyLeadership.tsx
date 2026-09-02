import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ademarPhoto from '../assets/FOTO-ADEMAR.png';

interface MethodologyLeadershipProps {
  onOpenContact: () => void;
}

export const MethodologyLeadership: React.FC<MethodologyLeadershipProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#0DF205]/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Tag, Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[1.2px] text-[#0DF205]">
              QUEM FAZ A PREDITIVA.Co
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Liderança com DNA Técnico
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-[#26D3AB] leading-relaxed">
              Nossos fundadores unem visão estratégica de mercado com execução técnica de precisão.
            </p>
          </div>
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#111815] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-12"
        >
          {/* Founder Photo */}
          <div className="relative w-48 sm:w-56 h-64 sm:h-72 rounded-xl overflow-hidden bg-[#292A28] border border-white/10 flex-shrink-0">
            <img
              src={ademarPhoto}
              alt="Ademar Tozzo - CEO & Co-founder Preditiva"
              className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000604]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Founder Details */}
          <div className="space-y-4 text-center md:text-left flex-grow">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Ademar Tozzo
              </h3>
              <div className="text-base sm:text-lg font-bold text-[#0DF205] mt-0.5">
                CEO & Co-founder
              </div>
            </div>

            <p className="text-[#26D3AB] text-sm sm:text-base leading-relaxed max-w-lg">
              Especialista em Marketing Digital e CRM com vasta experiência em estruturação de times comerciais. Mentored by ByNV.
            </p>

            {/* Actions & Socials */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/5511975944739?text=Ol%C3%A1%20Ademar!%20Gostaria%20de%20conversar%20sobre%20a%20metodologia%20da%20Preditiva."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] hover:scale-[1.02] flex items-center gap-2"
              >
                <span>FALE COMIGO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/10 hover:bg-[#0DF205] hover:text-[#000604] text-white rounded-lg transition-colors font-bold text-xs"
                aria-label="LinkedIn Ademar Tozzo"
              >
                in
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
