import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const MethodologyTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'PAULO HENRIQUE',
      role: 'CEO DA MIAMI AD SCHOOL',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      headline: 'Melhoria radical',
      quote:
        'Nossa performance site melhorou radicalmente no curto prazo, a experiência do user melhorou e a jornada ficou muito mais fluída, melhorando a conversão final de nossas vendas.',
    },
    {
      name: 'EDU SATO',
      role: 'DIRETOR MKT GTEX',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      headline: 'Satisfação e crescimento!',
      quote:
        'Estou muito satisfeito com o trabalho realizado. Nosso canal orgânico hoje cresceu em receita e qualidade!',
    },
  ];

  return (
    <section className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 mb-16">
          <span className="text-sm sm:text-base font-normal text-[#0DF205] uppercase tracking-wider">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            O QUE DIZEM SOBRE O NOSSO TRABALHO
          </h2>
        </div>

        {/* Testimonials 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/20 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 group hover:border-[#0DF205]/40 transition-all duration-300"
            >
              {/* Author Photo & Role */}
              <div className="flex flex-col items-center text-center flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0DF205]/40 p-0.5 mb-3 shadow-[0_0_15px_rgba(13,242,5,0.2)]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="font-bold text-white text-sm sm:text-base tracking-wide">
                  {t.name}
                </div>
                <div className="text-[11px] text-white/60 uppercase font-mono mt-0.5">
                  {t.role}
                </div>
              </div>

              {/* Quote Content */}
              <div className="space-y-2 flex-grow">
                <div className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Quote className="w-4 h-4 text-[#0DF205] flex-shrink-0" />
                  <span>{t.headline}</span>
                </div>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed italic font-normal">
                  "{t.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
