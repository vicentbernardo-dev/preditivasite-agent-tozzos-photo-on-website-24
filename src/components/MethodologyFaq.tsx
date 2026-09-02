import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const MethodologyFaq: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(0); // First one open by default

  const faqItems = [
    {
      id: 0,
      question: 'O que é a Metodologia Preditiva?',
      answer:
        'A Metodologia Preditiva é um modelo integrado de aceleração e consultoria técnica digital que conecta SEO avançado, CRM automatizado, governança de dados e desenvolvimento ágil em ciclos contínuos de crescimento e retenção de receita.',
    },
    {
      id: 1,
      question: 'Como a metodologia funciona na prática?',
      answer:
        'Iniciamos com um diagnóstico profundo dos pontos de fricção e gargalos técnicos da sua operação. A partir disso, construímos um roadmap priorizado por impacto financeiro e alocamos squads de especialistas seniores para execução direta ou governança consultiva.',
    },
    {
      id: 2,
      question: 'Quanto tempo leva para implementar a metodologia?',
      answer:
        'O diagnóstico inicial é estruturado nos primeiros dias e as primeiras otimizações de infraestrutura, tagueamento e funis de CRM são executadas já nas duas primeiras semanas de atuação, gerando melhorias mensuráveis no primeiro mês.',
    },
    {
      id: 3,
      question: 'A Preditiva substitui minha equipe interna?',
      answer:
        'Não, nós potencializamos sua equipe. Atuamos como a camada de inteligência e execução técnica avançada, transferindo maturidade digital para o seu time ou executando frentes complexas que exigem especialistas dedicados.',
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-black border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-[#EFEFEF]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#0DF205]/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#0DF205]' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-black' : 'text-[#0DF205]'}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
