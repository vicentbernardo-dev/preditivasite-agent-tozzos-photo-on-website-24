import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      
      {/* Ambient background glows from Figma */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-20 right-[-10%] w-[600px] h-[600px] bg-[#0DF205] opacity-20 rounded-full blur-[200px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-[-10%] w-[500px] h-[500px] bg-[#26D3AB] opacity-20 rounded-full blur-[200px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[#0DF205] font-familjen text-xl sm:text-2xl lg:text-[36px] font-normal leading-tight mb-2">
            DEPOIMENTOS
          </div>
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[60px] font-bold text-white uppercase leading-[1.05] tracking-tight">
            O QUE DIZEM SOBRE <br />
            O NOSSO TRABALHO
          </h2>
        </div>

        {/* 2 Glassmorphism Testimonials Grid from Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 sm:p-10 rounded-[15px] bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur-[10px] border border-white/30 shadow-[0_4px_25px_rgba(0,0,0,0.5)] flex flex-col justify-between group hover:border-[#0DF205]/60 transition-all duration-300"
            >
              <div>
                {/* 5 Stars rating */}
                <div className="flex items-center gap-1 mb-6 text-[#0DF205]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0DF205]" />
                  ))}
                </div>

                {/* Headline */}
                <h3 className="font-familjen text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.headline}
                </h3>

                {/* Quote body */}
                <p className="font-familjen text-base sm:text-[17px] text-white/90 leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0DF205]/60 shadow-md"
                />
                <div>
                  <div className="font-familjen text-base font-bold text-white uppercase tracking-wider">
                    {item.name}
                  </div>
                  <div className="font-familjen text-xs text-white/70 uppercase tracking-wide">
                    {item.role}
                  </div>
                </div>

                {/* Quote symbol decoration */}
                <div className="ml-auto opacity-30 group-hover:opacity-100 group-hover:text-[#0DF205] transition-opacity">
                  <Quote className="w-7 h-7" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
