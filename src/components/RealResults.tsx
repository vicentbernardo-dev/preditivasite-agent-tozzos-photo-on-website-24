import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { CASE_STUDIES, CLIENT_LOGOS } from '../data/mockData';
import { CaseStudy } from '../types';
import { PageRoute } from './Navbar';

interface RealResultsProps {
  onSelectCase: (caseStudy: CaseStudy) => void;
  onOpenAuditModal: () => void;
  onNavigatePage?: (page: PageRoute) => void;
}

export const RealResults: React.FC<RealResultsProps> = ({ 
  onSelectCase, 
  onOpenAuditModal,
  onNavigatePage 
}) => {
  return (
    <section id="cases" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#0DF205] opacity-15 rounded-full blur-[180px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#D9D9D9] uppercase tracking-tight">
            Resultados Reais
          </h2>
          <p className="font-familjen text-sm sm:text-base text-white/60 mt-3 font-mono">
            Métricas auditadas de clientes que transformaram seus canais digitais
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-xl bg-[#121412] border border-white/10 overflow-hidden hover:border-[#0DF205]/50 transition-all duration-300 group shadow-xl"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-52 overflow-hidden bg-[#292A28]">
                  <img
                    src={caseItem.image}
                    alt={caseItem.client}
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121412] via-transparent to-black/40" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#000604]/80 backdrop-blur-md border border-white/20 text-[#0DF205] text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                    {caseItem.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7">
                  {/* Client Name */}
                  <h3 className="font-familjen text-xl sm:text-[22px] font-bold text-[#E3E3DF] leading-tight mb-3">
                    {caseItem.client}
                  </h3>

                  {/* Two Key Metrics */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 font-familjen">
                    <div className="text-[#00FF00] font-bold text-base sm:text-lg bg-[#00FF00]/10 px-2.5 py-1 rounded border border-[#00FF00]/20">
                      {caseItem.metric1}
                    </div>
                    <div className="text-[#B9CCAF] font-bold text-base sm:text-lg bg-white/5 px-2.5 py-1 rounded border border-white/10">
                      {caseItem.metric2}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-familjen text-sm text-[#B9CCAF] leading-relaxed mb-6">
                    {caseItem.summary}
                  </p>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    if (onNavigatePage) {
                      if (caseItem.id === 'miami-ad-school') {
                        onNavigatePage('case-miami');
                        return;
                      }
                      if (caseItem.id === 'gtex') {
                        onNavigatePage('case-gtex');
                        return;
                      }
                      if (caseItem.id === 'master-cidadania') {
                        onNavigatePage('case-master');
                        return;
                      }
                    }
                    onSelectCase(caseItem);
                  }}
                  className="w-full py-3.5 px-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-familjen font-bold text-base sm:text-lg rounded-[5px] transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(13,242,5,0.4)] cursor-pointer"
                >
                  <span>VER CASE COMPLETO</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos & Secondary CTA Banner */}
        <div className="mt-20 pt-16 border-t border-white/10 flex flex-col items-center">
          <h4 className="font-familjen text-center text-white text-lg sm:text-xl font-bold uppercase tracking-[1.2px] mb-10">
            Marcas que Já Contaram com Especialistas da Preditiva
          </h4>

          {/* Logos Band with high visual fidelity */}
          <div className="w-full max-w-4xl py-6 px-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center mb-10">
            {['SWAROVSKI', 'Red Bull', 'shoulder', 'océane'].map((brand) => (
              <div
                key={brand}
                className="font-familjen text-lg sm:text-xl font-bold tracking-widest text-[#EFEFEF]/80 hover:text-[#0DF205] transition-colors py-2"
              >
                {brand}
              </div>
            ))}
          </div>

          {/* Secondary Action Button */}
          <button
            onClick={() => {
              if (onNavigatePage) {
                onNavigatePage('cases');
              } else {
                onOpenAuditModal();
              }
            }}
            className="px-8 py-3.5 rounded-[5px] bg-[#000604]/80 hover:bg-[#111815] border border-[#0DF205] text-[#0DF205] hover:text-white font-familjen font-bold text-base sm:text-lg transition-all duration-200 shadow-[0_0_20px_rgba(13,242,5,0.2)] flex items-center gap-2 cursor-pointer"
          >
            <span>VER TODOS OS CASES</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
