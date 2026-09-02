import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Check, 
  Cpu, 
  Bot, 
  Search, 
  Layers, 
  FileCode2, 
  Gauge, 
  Kanban, 
  Target, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  Clock,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { TOOLS_ECOSYSTEM_DATA } from '../data/toolsData';

interface ToolsSectionProps {
  onOpenVisionModal: () => void;
  onOpenAlfredoModal: () => void;
  onOpenAuditModal?: () => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({
  onOpenVisionModal,
  onOpenAlfredoModal,
  onOpenAuditModal,
}) => {
  const { hero_banner, tools_grid } = TOOLS_ECOSYSTEM_DATA;
  const visionTool = tools_grid.find((t) => t.id === 'vision')!;
  const alfredoTool = tools_grid.find((t) => t.id === 'alfredo')!;

  return (
    <section 
      id="preditiva-tools-ecosystem" 
      className="py-24 sm:py-32 bg-[#000604] text-white font-familjen relative overflow-hidden border-t border-white/10"
    >
      {/* Background Neon Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] lg:w-[850px] h-[550px] bg-[#0DF205]/15 rounded-full blur-[180px] -rotate-12"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 left-[-15%] w-[600px] lg:w-[750px] h-[500px] bg-[#0DF205]/10 rounded-full blur-[200px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#26D3AB]/10 rounded-full blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0DF205]/10 border border-[#0DF205]/30 text-[#0DF205] text-xs font-mono font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-[#0DF205]" />
            <span>ECOSSISTEMA DE PRODUTOS & FERRAMENTAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight tracking-tight text-[#EFEFEF]">
            Tecnologia Proprietária <br />
            <span className="text-[#0DF205]">para a Era da Inteligência Artificial</span>
          </h2>
          <p className="text-base sm:text-lg text-[#D9D9D9] font-normal leading-relaxed">
            Desenvolvemos soluções e inteligência técnica para auditar, estruturar e potencializar operações digitais de alta performance.
          </p>
        </div>

        {/* 1. HERO BANNER PRINCIPAL (DESTAQUE VISION) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#0E1F18]/90 via-[#07130F]/90 to-[#000604]/95 border-2 border-[#0DF205]/50 p-8 sm:p-12 lg:p-14 shadow-[0_0_60px_rgba(13,242,5,0.25)] overflow-hidden"
        >
          {/* Cyber grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0DF20508_1px,transparent_1px),linear-gradient(to_bottom,#0DF20508_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Vision Pitch */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205] text-[#000604] shadow-[0_0_20px_#0DF205]">
                  DESTAQUE DA PLATAFORMA
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#000604] text-[#26D3AB] border border-[#26D3AB]/40">
                  {hero_banner.badge}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase leading-[1.15] tracking-tight text-white">
                {hero_banner.headline}
              </h3>

              <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed">
                {hero_banner.subheadline}
              </p>

              {/* 3 Quick Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#0DF205] shrink-0" />
                  <span>5 Dimensões Técnicas</span>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/90">
                  <Bot className="w-4 h-4 text-[#26D3AB] shrink-0" />
                  <span>LLM Citation Score</span>
                </div>
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-xs font-mono text-white/90">
                  <Zap className="w-4 h-4 text-[#0DF205] shrink-0" />
                  <span>100% Gratuito</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="vision-hero-primary-cta"
                  href={hero_banner.cta.url}
                  target={hero_banner.cta.target}
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(13,242,5,0.4)] hover:scale-[1.03] flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <span>{hero_banner.cta.label}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  id="vision-hero-secondary-cta"
                  onClick={onOpenVisionModal}
                  className="px-6 py-4 bg-[#14231E]/80 hover:bg-[#1A2E27] text-white border border-[#0DF205]/40 hover:border-[#0DF205] font-bold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>{hero_banner.secondary_action.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#0DF205]" />
                </button>
              </div>

            </div>

            {/* Right Column: AI Search Engine Visual Mockup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[400px] p-6 rounded-3xl bg-[#06110D]/95 border border-[#0DF205]/40 backdrop-blur-xl shadow-2xl space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-[#0DF205]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#0DF205] uppercase tracking-wider font-bold">
                    VISION ENGINE V3.4
                  </span>
                </div>

                {/* Score Dial / Visual Metric */}
                <div className="p-4 rounded-2xl bg-[#000604]/80 border border-[#0DF205]/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-white/60 font-mono">Índice Geral de IA</div>
                    <div className="text-3xl font-bold text-[#0DF205]">98.4<span className="text-xs text-white/50">/100</span></div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#0DF205]/20 border border-[#0DF205] flex items-center justify-center text-[#0DF205]">
                    <Bot className="w-6 h-6 animate-pulse" />
                  </div>
                </div>

                {/* Dimensions Mini Bar representation */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-white/80">
                    <span>Estrutura & DOM</span>
                    <span className="text-[#0DF205]">Pass</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] w-[95%]" />
                  </div>

                  <div className="flex justify-between text-white/80 pt-1">
                    <span>Indexação LLMs</span>
                    <span className="text-[#26D3AB]">100% Crawlable</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#26D3AB] w-[100%]" />
                  </div>

                  <div className="flex justify-between text-white/80 pt-1">
                    <span>Schema.org JSON-LD</span>
                    <span className="text-[#0DF205]">Validado</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] w-[92%]" />
                  </div>
                </div>

                {/* Status indicator */}
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0DF205] animate-ping" />
                    Live AI Audit Ready
                  </span>
                  <span className="text-[#26D3AB]">Free Access</span>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. GRID DE PRODUTOS / FERRAMENTAS (VISION & ALFREDO) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Catálogo de Ferramentas
              </h3>
              <p className="text-sm sm:text-base text-[#D9D9D9]">
                Soluções construídas para resolver gargalos críticos de visibilidade e gestão.
              </p>
            </div>
            <span className="text-xs font-mono text-[#0DF205] uppercase tracking-wider font-bold">
              2 PRODUTOS DISPONÍVEIS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARD 1: VISION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#000604] border-2 border-[#0DF205]/40 hover:border-[#0DF205] transition-all flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#0DF205]/10 rounded-full blur-[90px]"
              />

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0DF205]/15 border border-[#0DF205] flex items-center justify-center text-[#0DF205] shadow-[0_0_20px_rgba(13,242,5,0.3)]">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold uppercase tracking-tight text-white">
                        {visionTool.name}
                      </h4>
                      <p className="text-xs font-mono text-[#26D3AB]">
                        {visionTool.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0DF205] animate-ping" />
                    {visionTool.badge}
                  </span>
                </div>

                <p className="text-base text-[#D9D9D9] leading-relaxed">
                  {visionTool.short_description}
                </p>

                {/* 5 Dimensions Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/70">
                    As 5 Dimensões Técnicas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {visionTool.capabilities.map((cap) => (
                      <div key={cap.dimension} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs text-[#EFEFEF]">
                        <Check className="w-3.5 h-3.5 text-[#0DF205] shrink-0" />
                        <span className="font-medium">{cap.dimension}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 relative z-10">
                <a
                  id="card-vision-official-site"
                  href={visionTool.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>Acessar Vision Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  id="card-vision-view-details"
                  onClick={onOpenVisionModal}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#0DF205] font-bold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-4 h-4 text-[#0DF205]" />
                </button>
              </div>
            </motion.div>

            {/* CARD 2: ALFREDO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#000604] border-2 border-[#0DF205]/40 hover:border-[#0DF205] transition-all flex flex-col justify-between space-y-8 shadow-2xl relative overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div 
                aria-hidden="true" 
                className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-[#0DF205]/15 rounded-full blur-[90px]"
              />

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0DF205]/15 border border-[#0DF205] flex items-center justify-center text-[#0DF205] shadow-[0_0_20px_rgba(13,242,5,0.3)]">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold uppercase tracking-tight text-white">
                        {alfredoTool.name}
                      </h4>
                      <p className="text-xs font-mono text-[#0DF205]">
                        {alfredoTool.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50 flex items-center gap-1.5 shadow-[0_0_15px_rgba(13,242,5,0.25)]">
                    <Clock className="w-3.5 h-3.5" />
                    {alfredoTool.badge}
                  </span>
                </div>

                <p className="text-base text-[#D9D9D9] leading-relaxed">
                  {alfredoTool.short_description}
                </p>

                {/* 4 Pillars Highlights */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/70">
                    Capacidades de Gestão com IA:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {alfredoTool.capabilities.map((cap) => (
                      <div key={cap.feature} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2 text-xs text-[#EFEFEF]">
                        <Check className="w-3.5 h-3.5 text-[#0DF205] shrink-0" />
                        <span className="font-medium">{cap.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 relative z-10">
                <button
                  id="card-alfredo-vip-waitlist"
                  onClick={onOpenAlfredoModal}
                  className="w-full sm:flex-1 py-3.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Entrar na Lista VIP</span>
                </button>

                <button
                  id="card-alfredo-view-details"
                  onClick={onOpenAlfredoModal}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#0DF205] font-bold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-4 h-4 text-[#0DF205]" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
