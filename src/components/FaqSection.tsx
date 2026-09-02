import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111815] border border-[#0DF205]/30 text-[#0DF205] text-xs font-mono uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[50px] font-bold text-white uppercase leading-tight tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#111815] border-[#0DF205]/40 shadow-[0_0_25px_rgba(13,242,5,0.08)]'
                    : 'bg-black/60 border-[#3B4B35]/30 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-familjen text-lg sm:text-xl lg:text-[22px] font-bold text-[#EFEFEF] leading-snug">
                    {faq.question}
                  </span>

                  {/* Custom Neon Toggle Indicator from Figma */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#0DF205] text-[#000604] rotate-180' : 'bg-white/10 text-[#0DF205]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 text-[#EFEFEF]/85 font-familjen text-base sm:text-lg leading-relaxed border-t border-white/5">
                        {faq.answer}
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
