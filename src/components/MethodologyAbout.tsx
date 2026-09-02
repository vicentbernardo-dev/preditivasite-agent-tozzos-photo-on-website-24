import React from 'react';
import { motion } from 'motion/react';

export const MethodologyAbout: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            O Que É a Metodologia Preditiva
          </h2>

          {/* Neon Accent Bar */}
          <div className="w-20 h-1 bg-[#0DF205] rounded-full shadow-[0_0_15px_#0DF205]" />

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed max-w-3xl pt-2">
            A Metodologia Preditiva foi criada para conectar estratégia, tecnologia e execução. Atuamos identificando gargalos técnicos, estruturando processos e implementando melhorias contínuas em SEO, CRM, Dados, Performance e Growth para acelerar o crescimento de operações digitais.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
