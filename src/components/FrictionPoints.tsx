import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Bug, PieChart, ArrowUpRight } from 'lucide-react';
import { FRICTION_POINTS } from '../data/mockData';

interface FrictionPointsProps {
  onOpenAuditModal: () => void;
}

export const FrictionPoints: React.FC<FrictionPointsProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="metodologia" className="relative py-20 lg:py-28 bg-white text-[#000604] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-[#0DF205] text-xs sm:text-sm font-familjen font-bold uppercase tracking-[3.6px] mb-3 bg-[#000604] px-3.5 py-1.5 rounded-full inline-block">
            os pontos de fricção
          </div>
          <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#000604] uppercase leading-[1.15] tracking-tight">
            Principais Gargalos que Impedem o <br className="hidden sm:block" />
            Crescimento do Seu negócio
          </h2>
        </div>

        {/* 3 Friction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 rounded-[12px] bg-[#000604] text-white flex flex-col justify-between shadow-xl border border-white/5 group hover:border-[#0DF205]/40 transition-all duration-300"
          >
            <div>
              {/* Neon Green Icon indicator */}
              <div className="w-9 h-8 bg-[#0DF205] rounded-md flex items-center justify-center text-[#000604] mb-6 shadow-[0_0_15px_rgba(13,242,5,0.4)]">
                <AlertTriangle className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-familjen text-xl sm:text-[21px] font-bold text-white leading-snug mb-4 whitespace-pre-line">
                Sua agência faz os criativos.<br />
                Mas ninguém olha se o site está<br />
                convertendo.
              </h3>

              {/* Description */}
              <p className="font-familjen text-sm sm:text-[14.5px] text-[#EFEFEF]/80 font-normal leading-relaxed">
                Performance técnica, SEO sem estratégia, dados desconectados, velocidade crítica e UX otimizada para o fundo do funil.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#0DF205] font-mono">
              <span>Gargalo de Conversão</span>
              <a 
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                Auditar agora <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 rounded-[12px] bg-[#000604] text-white flex flex-col justify-between shadow-xl border border-white/5 group hover:border-[#0DF205]/40 transition-all duration-300"
          >
            <div>
              {/* Neon Green Icon indicator */}
              <div className="w-9 h-8 bg-[#0DF205] rounded-md flex items-center justify-center text-[#000604] mb-6 shadow-[0_0_15px_rgba(13,242,5,0.4)]">
                <Bug className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-familjen text-xl sm:text-[21px] font-bold text-white leading-snug mb-4 whitespace-pre-line">
                Você investe em mídia. Mas<br />
                pode estar jogando verba fora<br />
                por bugs invisíveis.
              </h3>

              {/* Description */}
              <p className="font-familjen text-sm sm:text-[14.5px] text-[#EFEFEF]/80 font-normal leading-relaxed">
                Tagueamento falho, falhas de rastreamento GA4 e GTM, problemas de Core Web Vitals, mobile break e checkout lento estão matando sua rentabilidade.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#0DF205] font-mono">
              <span>Gargalo de Telemetria</span>
              <a 
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                Auditar agora <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-8 rounded-[12px] bg-[#000604] text-white flex flex-col justify-between shadow-xl border border-white/5 group hover:border-[#0DF205]/40 transition-all duration-300"
          >
            <div>
              {/* Neon Green Icon indicator */}
              <div className="w-9 h-8 bg-[#0DF205] rounded-md flex items-center justify-center text-[#000604] mb-6 shadow-[0_0_15px_rgba(13,242,5,0.4)]">
                <PieChart className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-familjen text-xl sm:text-[21px] font-bold text-white leading-snug mb-4">
                CRM sem segmentação e baixa taxa de conversão.
              </h3>

              {/* Description with neon highlighted disciplines */}
              <p className="font-familjen text-sm sm:text-[14.5px] text-[#EFEFEF]/80 font-normal leading-relaxed">
                Você precisa de um time de especialistas que atuem de forma integrada com foco em Dados para o crescimento do seu negócio:{' '}
                <span className="text-[#0DF205] font-medium">
                  SEO, CRM, Mídia, Growth, Dados e Dev + Infraestrutura.
                </span>
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#0DF205] font-mono">
              <span>Gargalo de Retenção</span>
              <a 
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                Auditar agora <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
