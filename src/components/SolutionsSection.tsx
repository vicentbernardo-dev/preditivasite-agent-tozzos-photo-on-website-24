import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Target, Users, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceCard } from '../types';

interface SolutionsSectionProps {
  onSelectService: (service: ServiceCard) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectService }) => {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32 bg-white text-[#000604] overflow-hidden">
      {/* Decorative top badge & heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-16">
          <div className="text-[#0DF205] text-xs sm:text-sm font-familjen font-bold uppercase tracking-[3.6px] mb-3 bg-[#000604] px-3.5 py-1.5 rounded-full inline-block">
            COMO ATUAMOS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end w-full">
            <div className="lg:col-span-8">
              <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#000604] uppercase leading-[1.1] tracking-tight">
                Soluções para O Crescimento DO SEU NEGÓCIO
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-familjen text-base sm:text-lg text-[#000604]/80 font-normal leading-relaxed">
                Atuamos com consultoria estratégica, aceleração de e-commerce e alocação de especialistas para escalar resultados.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Solutions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, index) => {
            const isFeatured = service.badge === 'MAIS PROCURADO';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between p-8 sm:p-9 rounded-[14px] bg-[#111815] text-white shadow-2xl transition-all duration-300 hover:translate-y-[-6px] ${
                  isFeatured 
                    ? 'ring-2 ring-[#0DF205] shadow-[0_10px_40px_rgba(13,242,5,0.2)]' 
                    : 'border border-white/10'
                }`}
              >
                {/* Floating "MAIS PROCURADO" Badge */}
                {service.badge && (
                  <div className="absolute -top-3.5 left-8 bg-[#0DF205] text-[#000604] font-familjen text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{service.badge}</span>
                  </div>
                )}

                <div>
                  {/* Icon Block */}
                  <div className="mb-6">
                    {service.id === 'aceleradora' && (
                      <div className="w-12 h-12 rounded-lg bg-[#26D3AB] flex items-center justify-center text-[#000604] shadow-md">
                        <Rocket className="w-6 h-6" />
                      </div>
                    )}
                    {service.id === 'consultoria' && (
                      <div className="w-12 h-12 rounded-lg bg-[#0DF205] flex items-center justify-center text-[#000604] shadow-md">
                        <Target className="w-6 h-6" />
                      </div>
                    )}
                    {service.id === 'especialistas' && (
                      <div className="w-12 h-12 rounded-lg bg-[#26D3AB]/80 flex items-center justify-center text-[#000604] shadow-md">
                        <Users className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-familjen text-2xl sm:text-3xl font-semibold text-[#D9D9D9] leading-tight mb-4 whitespace-pre-line">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-familjen text-base text-[#D9D9D9]/90 font-normal leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* "Ideal para" Highlight Box */}
                  <div 
                    className={`p-5 rounded-md bg-[#000604] mb-8 border-l-[3px] ${
                      service.accentColor === 'neon' 
                        ? 'border-[#0DF205]' 
                        : service.accentColor === 'agua' 
                        ? 'border-[#26D3AB]' 
                        : 'border-[#84967C]'
                    }`}
                  >
                    <div className="font-familjen text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9D9D9]/70 mb-1">
                      Ideal para:
                    </div>
                    <div className="font-familjen text-base sm:text-lg font-bold italic text-[#D9D9D9] leading-snug whitespace-pre-line">
                      {service.idealFor}
                    </div>
                  </div>
                </div>

                {/* Card CTA Button */}
                <button
                  onClick={() => onSelectService(service)}
                  className={`w-full py-4 rounded-md font-familjen font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    service.accentColor === 'neon'
                      ? 'bg-[#0DF205] text-[#000604] hover:bg-[#0be004] shadow-[0_0_20px_rgba(13,242,5,0.4)]'
                      : service.accentColor === 'agua'
                      ? 'bg-[#26D3AB] text-[#000604] hover:bg-[#20b895] shadow-[0_0_20px_rgba(38,211,171,0.3)]'
                      : 'border border-[#84967C] text-[#D9D9D9] hover:bg-white/10 hover:border-white'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
