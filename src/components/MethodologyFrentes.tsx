import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, LineChart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceCard } from '../types';

interface MethodologyFrentesProps {
  onSelectService?: (service: ServiceCard) => void;
  onOpenAuditModal: () => void;
  onNavigateFrente?: (frentePage: 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas') => void;
}

export const MethodologyFrentes: React.FC<MethodologyFrentesProps> = ({
  onSelectService,
  onOpenAuditModal,
  onNavigateFrente,
}) => {
  const frentesData: ServiceCard[] = [
    {
      id: 'aceleradora',
      title: 'Aceleradora de\nE-commerce',
      subtitle: 'Operação de ponta a ponta com foco em faturamento e tecnologia.',
      description:
        'Operação completa de ponta a ponta para escalar faturamento com tecnologia e dados proprietários, com SEO Técnico, CRO, Analytics e foco em Growth e Performance.',
      idealFor: 'Marcas que faturam acima de\nR$500k/mês e buscam o próximo nível.',
      ctaText: 'VER COMO FUNCIONA',
      accentColor: 'agua',
    },
    {
      id: 'consultoria',
      title: 'Consultoria\nEstratégica',
      subtitle: 'Auditoria técnica, governança digital e direcionamento de dados.',
      description:
        'CRM, auditoria SEO, governança digital e acompanhamento para times internos que precisam de maturidade técnica e direção de dados.',
      idealFor: 'Operações estruturadas que precisam\nde validação técnica constante.',
      badge: 'MAIS PROCURADO',
      ctaText: 'CONHECER CONSULTORIA',
      accentColor: 'neon',
    },
    {
      id: 'especialistas',
      title: 'Especialistas\nDedicados',
      subtitle: 'Alocação de talentos seniores em disciplinas específicas.',
      description:
        'Alocação de talentos seniores em disciplinas específicas: Especialistas SEO, CRM, CRO, Dados e Desenvolvimento para o crescimento do seu negócio.',
      idealFor: 'Times que possuem gargalos técnicos\npontuais e recorrentes.',
      ctaText: 'CONHECER ALOCAÇÃO',
      accentColor: 'muted',
    },
  ];

  return (
    <section className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-32 w-[600px] h-[600px] bg-[#0DF205]/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left Neon Border */}
        <div className="border-l-4 border-[#0DF205] pl-6 mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-[#D9D9D9] tracking-tight">
            FRENTES DE ATUAÇÃO PARA ESCALAR O SEU NEGÓCIO
          </h2>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frentesData.map((frente, idx) => {
            const isNeon = frente.accentColor === 'neon';
            const isAgua = frente.accentColor === 'agua';

            return (
              <motion.div
                key={frente.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#111815] border ${
                  isNeon
                    ? 'border-[#0DF205]/40 shadow-[0_0_30px_rgba(13,242,5,0.1)]'
                    : 'border-white/10'
                } transition-all duration-300 group`}
              >
                {/* Badge if present */}
                {frente.badge && (
                  <div className="absolute -top-3.5 left-8 px-4 py-1 rounded-full bg-[#0DF205] text-[#000604] font-bold text-xs uppercase tracking-wider shadow-md">
                    {frente.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/15 flex items-center justify-center">
                    {frente.id === 'aceleradora' && (
                      <ShoppingBag className="w-6 h-6 text-[#26D3AB]" />
                    )}
                    {frente.id === 'consultoria' && (
                      <LineChart className="w-6 h-6 text-[#0DF205]" />
                    )}
                    {frente.id === 'especialistas' && (
                      <Users className="w-6 h-6 text-[#26D3AB]" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#D9D9D9] leading-tight whitespace-pre-line group-hover:text-white transition-colors">
                    {frente.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                    {frente.description}
                  </p>

                  {/* Ideal Para Box */}
                  <div className={`p-4 sm:p-5 rounded-lg bg-[#000604] border-l-2 ${
                    isNeon
                      ? 'border-[#0DF205]'
                      : isAgua
                      ? 'border-[#26D3AB]'
                      : 'border-[#84967C]'
                  } space-y-1.5`}>
                    <div className="text-xs font-semibold text-[#D9D9D9] uppercase tracking-wider">
                      Ideal para:
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#D9D9D9] italic leading-snug whitespace-pre-line">
                      {frente.idealFor}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-6">
                  <button
                    onClick={() => {
                      if (frente.id === 'aceleradora' && onNavigateFrente) {
                        onNavigateFrente('frentes-aceleradora');
                      } else if (frente.id === 'consultoria' && onNavigateFrente) {
                        onNavigateFrente('frentes-consultoria');
                      } else if (frente.id === 'especialistas' && onNavigateFrente) {
                        onNavigateFrente('frentes-especialistas');
                      } else if (onSelectService) {
                        onSelectService(frente);
                      } else {
                        onOpenAuditModal();
                      }
                    }}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isNeon
                        ? 'bg-[#0DF205] hover:bg-[#0be004] text-[#000604] shadow-[0_0_20px_rgba(13,242,5,0.3)]'
                        : isAgua
                        ? 'bg-[#26D3AB] hover:bg-[#20b895] text-[#000604]'
                        : 'border border-[#84967C] hover:border-[#0DF205] text-[#D9D9D9] hover:text-white bg-transparent'
                    }`}
                  >
                    <span>{frente.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
