import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight, MessageSquareCode, ExternalLink } from 'lucide-react';
import { SPECIALTIES } from '../data/mockData';
import { Specialty } from '../types';
import { PageRoute } from './Navbar';

interface SpecialtiesSectionProps {
  onSelectSpecialty: (specialty: Specialty) => void;
  onOpenContact: () => void;
  onNavigateSpecialty?: (route: PageRoute) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialty,
  onOpenContact,
  onNavigateSpecialty
}) => {
  const [activeSpecialty, setActiveSpecialty] = useState<Specialty>(SPECIALTIES[1]); // Default to SEO (02) as highlighted in Figma

  const getSpecialtyRoute = (spec: Specialty): PageRoute => {
    switch (spec.number) {
      case '01':
        return 'especialidade-crm';
      case '02':
        return 'especialidade-seo';
      case '03':
        return 'especialidade-midia';
      case '04':
        return 'especialidade-dev';
      case '05':
        return 'especialidade-dados';
      case '06':
      default:
        return 'especialidade-growth';
    }
  };

  return (
    <section id="especialidades" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div>
            <div className="text-[#0DF205] text-xs font-mono uppercase tracking-widest mb-2">
              DISCIPLINAS DE ALTA PERFORMANCE
            </div>
            <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-white uppercase leading-[1.1] tracking-tight">
              Especialidades <br />
              Técnicas da Preditiva
            </h2>
          </div>

          <button
            onClick={onOpenContact}
            className="self-start lg:self-center px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-familjen font-bold text-lg sm:text-xl rounded-md transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_30px_rgba(13,242,5,0.4)] flex items-center gap-3 cursor-pointer"
          >
            <MessageSquareCode className="w-6 h-6" />
            <span>FALE COM UM ESPECIALISTA</span>
          </button>
        </div>

        {/* 6 Cards Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-12">
          {SPECIALTIES.map((spec) => {
            const isSelected = activeSpecialty.number === spec.number;

            return (
              <motion.div
                key={spec.number}
                whileHover={{ y: -4 }}
                onClick={() => {
                  setActiveSpecialty(spec);
                  onSelectSpecialty(spec);
                }}
                className={`cursor-pointer rounded-xl p-5 sm:p-6 flex flex-col justify-between min-h-[250px] transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#0DF205] text-[#000604] shadow-[0_0_35px_rgba(13,242,5,0.35)] scale-[1.02]'
                    : 'bg-[#111815] text-white hover:bg-[#16201c] border border-white/10'
                }`}
              >
                {/* Number */}
                <div
                  className={`font-familjen text-lg sm:text-xl font-bold ${
                    isSelected ? 'text-[#000604]' : 'text-white'
                  }`}
                >
                  {spec.number}
                </div>

                {/* Title */}
                <div
                  className={`font-familjen text-2xl sm:text-3xl font-bold leading-tight ${
                    isSelected ? 'text-[#000604]' : 'text-white'
                  }`}
                >
                  {spec.title}
                </div>

                {/* Saiba Mais Link */}
                <div
                  className={`font-familjen text-sm sm:text-base font-semibold underline flex items-center gap-1 ${
                    isSelected ? 'text-[#000604]' : 'text-[#EFEFEF]'
                  }`}
                >
                  <span>Ver detalhes</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel for Selected Specialty */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpecialty.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-2xl bg-[#111815] border border-white/15 backdrop-blur-md shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[#0DF205] font-bold text-sm bg-[#0DF205]/10 px-2.5 py-1 rounded">
                    Especialidade {activeSpecialty.number}
                  </span>
                  <span className="text-white/60 text-sm">Squad dedicado de alta senioridade</span>
                </div>
                <h3 className="font-familjen text-2xl sm:text-3xl font-bold text-white">
                  {activeSpecialty.title} — {activeSpecialty.tagline}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {onNavigateSpecialty && (
                  <button
                    onClick={() => onNavigateSpecialty(getSpecialtyRoute(activeSpecialty))}
                    className="px-6 py-3 bg-[#0DF205] text-[#000604] hover:bg-[#0be004] font-familjen font-bold text-sm rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(13,242,5,0.3)]"
                  >
                    <span>Ver Página da Especialidade</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onOpenContact}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-familjen font-bold text-sm rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Contratar Squad</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Deliverables Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {activeSpecialty.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#0DF205] flex-shrink-0 mt-0.5" />
                  <span className="font-familjen text-sm sm:text-base text-white/90 leading-relaxed">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
