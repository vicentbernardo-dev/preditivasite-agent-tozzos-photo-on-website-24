import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, UserCheck } from 'lucide-react';

export const MethodologyPilares: React.FC = () => {
  const pilares = [
    {
      id: 'tecnologia',
      title: 'Tecnologia & IA',
      description:
        'Utilizamos automação, inteligência artificial e tecnologia para eliminar gargalos operacionais e acelerar resultados.',
      icon: Cpu,
    },
    {
      id: 'datadriven',
      title: 'Operação Data-Driven',
      description:
        'Todas as decisões são baseadas em dados reais, métricas de negócio e indicadores de performance.',
      icon: Database,
    },
    {
      id: 'talento',
      title: 'Talento sob Demanda',
      description:
        'Alocamos especialistas seniores em SEO, CRM, Dados, Desenvolvimento e Growth de acordo com a necessidade da operação.',
      icon: UserCheck,
    },
  ];

  return (
    <section className="relative py-24 bg-white text-[#000604] overflow-hidden font-familjen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#000604]">
            Os Pilares da Metodologia Preditiva
          </h2>
          <div className="w-20 h-1 bg-[#0DF205] rounded-full shadow-[0_0_10px_#0DF205]" />
        </div>

        {/* 3 Dark Cards on Light Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar, idx) => {
            const Icon = pilar.icon;
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-8 sm:p-9 rounded-2xl bg-[#000604] text-white border border-black/10 hover:border-[#0DF205]/50 transition-all duration-300 shadow-xl flex flex-col justify-start space-y-5 group"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-[#0DF205]/15 border border-[#0DF205]/30 flex items-center justify-center group-hover:bg-[#0DF205] group-hover:text-[#000604] transition-colors">
                  <Icon className="w-6 h-6 text-[#0DF205] group-hover:text-[#000604] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#0DF205] transition-colors">
                  {pilar.title}
                </h3>

                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                  {pilar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
