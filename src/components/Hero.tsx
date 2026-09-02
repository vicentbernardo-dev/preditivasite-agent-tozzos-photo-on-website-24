import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HERO_SERVICES_LIST, CLIENT_LOGOS } from '../data/mockData';
import { HeroLogoMotion } from './HeroLogoMotion';

interface HeroProps {
  onOpenAuditModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onNavigateSection }) => {
  return (
    <section id="home" className="relative min-h-[920px] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#000604]">
      {/* Background Glowing Blur Blobs from Figma */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] lg:w-[850px] h-[500px] lg:h-[650px] bg-[#0DF205] opacity-20 lg:opacity-30 rounded-[142px] blur-[140px] lg:blur-[220px] -rotate-12"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[35%] left-[-15%] w-[500px] lg:w-[750px] h-[450px] lg:h-[600px] bg-[#26D3AB] opacity-20 lg:opacity-25 rounded-[142px] blur-[150px] lg:blur-[230px] rotate-25"
      />

      {/* Grid Pattern overlay for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Main Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col items-start text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111815] border border-[#0DF205]/30 text-[#0DF205] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0DF205] animate-ping" />
              <span>Aceleradora Técnica & Performance 360°</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-familjen text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#EFEFEF] uppercase leading-[1.12] tracking-tight mb-6">
              A CAMADA TÉCNICA QUE SEU <br className="hidden sm:block" />
              NEGÓCIO PRECISA, SOMOS SUA <br />
              <span className="text-[#0DF205] drop-shadow-[0_0_25px_rgba(13,242,5,0.4)]">
                ACELERADORA DE E-COMMERCE
              </span>
            </h1>

            {/* Subheading text */}
            <p className="font-familjen text-base sm:text-lg lg:text-[20px] text-[#EFEFEF]/90 font-normal leading-relaxed max-w-3xl mb-4">
              Ajudamos o seu negócio a aumentar tráfego, conversão e receita através de SEO técnico, CRM, análise de dados, CRO, performance e especialistas dedicados.
            </p>

            {/* Bullet tags from Figma design */}
            <div className="font-familjen text-sm sm:text-base lg:text-[18px] text-[#0DF205] font-medium leading-relaxed mb-8 flex flex-wrap items-center gap-x-2 gap-y-1">
              {HERO_SERVICES_LIST.map((service, index) => (
                <React.Fragment key={service}>
                  <span className="hover:text-white transition-colors cursor-default">{service}</span>
                  {index < HERO_SERVICES_LIST.length - 1 && (
                    <span className="text-[#0DF205]/60">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-14">
              <a
                id="hero-cta-analise-gratuita"
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-7 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-familjen font-bold text-base sm:text-lg rounded-md transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(13,242,5,0.5)] cursor-pointer whitespace-nowrap"
              >
                <span>QUERO UMA ANÁLISE GRATUITA</span>
              </a>

              <button
                onClick={() => onNavigateSection('solucoes')}
                className="inline-flex justify-center items-center gap-2 px-7 py-4 bg-[#000604]/80 hover:bg-[#111815] text-white font-familjen font-bold text-base sm:text-lg rounded-md border border-[#0DF205] transition-all duration-200 hover:shadow-[0_0_20px_rgba(13,242,5,0.2)] cursor-pointer"
              >
                <span>DESCUBRA COMO ATUAMOS</span>
                <ArrowRight className="w-5 h-5 text-[#0DF205]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Tech Motion Logo representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative"
          >
            <HeroLogoMotion />
          </motion.div>
        </div>

        {/* Client Trust Section */}
        <div id="parceiros" className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-familjen text-center text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mb-8">
            Empresas que aceleram seus resultados com a Preditiva
          </h3>

          {/* Marquee / Responsive Grid of Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
            {CLIENT_LOGOS.slice(0, 5).map((client) => (
              <div
                key={client.name}
                className="h-16 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#0DF205]/30 transition-all flex flex-col items-center justify-center group"
              >
                <span className="font-familjen font-bold text-white text-base sm:text-lg tracking-wider group-hover:text-[#0DF205] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Metric Cards from Figma Design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#121412]/80 backdrop-blur-md border border-[#0DF205] shadow-[0_0_30px_rgba(13,242,5,0.15)] flex flex-col items-center text-center transition-all"
          >
            <div className="font-familjen text-4xl sm:text-5xl font-bold text-[#0DF205] mb-2 tracking-tight">
              10/10
            </div>
            <div className="font-familjen text-lg sm:text-[20.5px] font-bold text-[#D9D9D9] uppercase tracking-wide">
              NPS MÉDIO
            </div>
            <p className="text-xs text-white/50 mt-2 font-mono">Índice máximo de fidelidade & recomendação</p>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#121412]/80 backdrop-blur-md border border-[#0DF205] shadow-[0_0_30px_rgba(13,242,5,0.15)] flex flex-col items-center text-center transition-all"
          >
            <div className="font-familjen text-4xl sm:text-5xl font-bold text-[#0DF205] mb-2 tracking-tight">
              5x ROI
            </div>
            <div className="font-familjen text-lg sm:text-[20.5px] font-bold text-[#D9D9D9] uppercase tracking-wide">
              NOS PRIMEIROS 3 MESES
            </div>
            <p className="text-xs text-white/50 mt-2 font-mono">Retorno acelerado em conversão e receita</p>
          </motion.div>

          {/* Metric 3 */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#121412]/80 backdrop-blur-md border border-[#0DF205] shadow-[0_0_30px_rgba(13,242,5,0.15)] flex flex-col items-center text-center transition-all"
          >
            <div className="font-familjen text-4xl sm:text-5xl font-bold text-[#0DF205] mb-2 tracking-tight">
              +30
            </div>
            <div className="font-familjen text-lg sm:text-[20.5px] font-bold text-[#D9D9D9] uppercase tracking-wide">
              MARCAS ACELERADAS
            </div>
            <p className="text-xs text-white/50 mt-2 font-mono">E-commerces escalando em escala nacional</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
