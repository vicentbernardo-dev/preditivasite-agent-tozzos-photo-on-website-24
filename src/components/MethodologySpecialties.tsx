import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PageRoute } from './Navbar';

interface MethodologySpecialtiesProps {
  onOpenAuditModal: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onNavigateSpecialty?: (route: PageRoute) => void;
}

export const MethodologySpecialties: React.FC<MethodologySpecialtiesProps> = ({
  onOpenAuditModal,
  onSelectSpecialty,
  onNavigateSpecialty,
}) => {
  const specialties = [
    {
      num: '01',
      title: 'CRM',
      route: 'especialidade-crm' as PageRoute,
      highlighted: false,
      desc: 'Fluxos automatizados de recompra e retenção.',
    },
    {
      num: '02',
      title: 'SEO',
      route: 'especialidade-seo' as PageRoute,
      highlighted: true, // As in Figma: neon green background with black text
      desc: 'Otimização técnica, Core Web Vitals e autoridade.',
    },
    {
      num: '03',
      title: 'Mídia',
      route: 'especialidade-midia' as PageRoute,
      highlighted: false,
      desc: 'Gestão de tráfego com CAPI e atribuição multitoque.',
    },
    {
      num: '04',
      title: 'Dev + Infra',
      route: 'especialidade-dev' as PageRoute,
      highlighted: false,
      desc: 'Arquitetura headless, velocidade e sustentação.',
    },
    {
      num: '05',
      title: 'Dados',
      route: 'especialidade-dados' as PageRoute,
      highlighted: false,
      desc: 'Server-side tagging, GA4 e dashboards em tempo real.',
    },
    {
      num: '06',
      title: 'CRO & Growth',
      route: 'especialidade-growth' as PageRoute,
      highlighted: false,
      desc: 'Testes A/B científicos e expansão de faturamento.',
    },
  ];

  return (
    <section className="relative py-24 bg-white text-[#000604] overflow-hidden font-familjen border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604] leading-tight">
              Especialidades <br className="hidden sm:block" />
              Técnicas da Preditiva
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenAuditModal}
              className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg transition-all shadow-[0_0_25px_rgba(13,242,5,0.3)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
            >
              <span>FALE COM UM ESPECIALISTA</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Specialty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {specialties.map((spec, idx) => (
            <motion.div
              key={spec.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative min-h-[250px] p-6 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-xl ${
                spec.highlighted
                  ? 'bg-[#0DF205] text-[#000604] shadow-[0_0_30px_rgba(13,242,5,0.3)] scale-[1.02]'
                  : 'bg-[#000604] text-white hover:border-[#0DF205]/40 border border-black'
              }`}
            >
              {/* Number */}
              <div className="text-lg font-bold">
                {spec.num}
              </div>

              {/* Title & Desc */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {spec.title}
                </h3>
                <p className={`text-xs ${spec.highlighted ? 'text-black/80' : 'text-white/60'}`}>
                  {spec.desc}
                </p>
              </div>

              {/* Saiba Mais Link */}
              <div>
                <button
                  onClick={() => {
                    if (onNavigateSpecialty) {
                      onNavigateSpecialty(spec.route);
                    } else if (onSelectSpecialty) {
                      onSelectSpecialty(spec.title);
                    } else {
                      onOpenAuditModal();
                    }
                  }}
                  className={`text-sm font-semibold underline hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1 ${
                    spec.highlighted ? 'text-[#000604]' : 'text-[#EFEFEF]'
                  }`}
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
