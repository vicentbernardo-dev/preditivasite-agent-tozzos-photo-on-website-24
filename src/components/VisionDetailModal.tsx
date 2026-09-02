import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  FileCode2, 
  Gauge, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Search,
  Check,
  Zap
} from 'lucide-react';
import { TOOLS_ECOSYSTEM_DATA } from '../data/toolsData';

interface VisionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRunAudit?: (domain: string) => void;
}

export const VisionDetailModal: React.FC<VisionDetailModalProps> = ({
  isOpen,
  onClose,
  onRunAudit,
}) => {
  const [testDomain, setTestDomain] = useState('');
  const [activeDimensionIndex, setActiveDimensionIndex] = useState(0);

  if (!isOpen) return null;

  const data = TOOLS_ECOSYSTEM_DATA.pages_detail.vision;

  const dimensionIcons = [
    Layers,       // Estrutura
    Search,       // Indexação
    FileCode2,    // Dados Estruturados
    Gauge,        // Performance
    Bot,          // Compatibilidade com IA
  ];

  const dimensionBadges = [
    'Arquitetura Limpa',
    'Crawlability 100%',
    'Schema.org & JSON-LD',
    'Core Web Vitals Pass',
    'ChatGPT & Gemini Ready',
  ];

  const handleTestDomain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testDomain) {
      window.open(data.final_cta.url, '_blank');
      return;
    }
    const cleanUrl = testDomain.replace(/^https?:\/\//, '').trim();
    window.open(`${data.final_cta.url}?domain=${encodeURIComponent(cleanUrl)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div 
        id="vision-detail-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#000604] border border-[#0DF205]/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(13,242,5,0.25)] text-white font-familjen max-h-[92vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glowing background ambient lights */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-[#0DF205]/15 rounded-full blur-[120px]"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 left-0 w-96 h-96 bg-[#26D3AB]/15 rounded-full blur-[120px]"
          />

          {/* Close Button */}
          <button
            id="close-vision-modal"
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#0DF205] text-white/70 hover:text-[#0DF205] hover:bg-white/10 transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Banner */}
          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/15 text-[#0DF205] border border-[#0DF205]/40 flex items-center gap-1.5 shadow-[0_0_15px_rgba(13,242,5,0.3)]">
                <span className="w-2 h-2 rounded-full bg-[#0DF205] animate-ping" />
                FERRAMENTA PROPRIETÁRIA
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/5 text-[#26D3AB] border border-[#26D3AB]/30">
                AI Search Readiness
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight leading-tight text-white">
              {data.title.split('|')[0]} <span className="text-[#0DF205]">| {data.title.split('|')[1]}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed max-w-3xl">
              {data.subtitle}
            </p>
          </div>

          {/* Live Domain Test Bar */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0B1511] border border-[#0DF205]/30 shadow-inner relative z-10">
            <form onSubmit={handleTestDomain} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-5 h-5 text-[#0DF205] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="vision-domain-input"
                  type="text"
                  value={testDomain}
                  onChange={(e) => setTestDomain(e.target.value)}
                  placeholder="exemplo: suamarca.com.br"
                  className="w-full bg-[#000604] border border-[#3B4B35]/60 focus:border-[#0DF205] rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                />
              </div>
              <button
                id="vision-submit-audit"
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Auditar no Vision</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* 5 Technical Dimensions Breakdown */}
          <div className="mt-10 space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#0DF205] flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                As 5 Dimensões Técnicas Avaliadas
              </h3>
              <span className="text-xs text-white/50 font-mono hidden sm:inline-block">
                Diagnóstico 100% Automatizado
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {data.capabilities.map((cap, idx) => {
                const IconComponent = dimensionIcons[idx] || Cpu;
                const isSelected = activeDimensionIndex === idx;

                return (
                  <button
                    key={cap.dimension}
                    onClick={() => setActiveDimensionIndex(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[140px] ${
                      isSelected
                        ? 'bg-[#0E2018] border-[#0DF205] shadow-[0_0_20px_rgba(13,242,5,0.25)] scale-[1.02]'
                        : 'bg-[#080E0C] border-white/10 hover:border-[#0DF205]/40 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#0DF205] text-[#000604]' : 'bg-white/5 text-[#0DF205]'}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white/40">0{idx + 1}</span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white tracking-tight mt-3">
                        {cap.dimension}
                      </div>
                      <div className="text-[10px] text-[#26D3AB] font-mono mt-0.5">
                        {dimensionBadges[idx]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Dimension Deep Explanation Card */}
            <div className="p-6 rounded-2xl bg-[#091510] border border-[#0DF205]/30 mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#0DF205] shadow-[0_0_8px_#0DF205]" />
                <h4 className="text-lg font-bold text-white">
                  Dimensão: {data.capabilities[activeDimensionIndex].dimension}
                </h4>
              </div>
              <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                {data.capabilities[activeDimensionIndex].description}
              </p>
            </div>
          </div>

          {/* AI Search Citation Simulator Box */}
          <div className="mt-8 p-6 rounded-2xl bg-[#050C09] border border-white/10 space-y-3 relative z-10">
            <div className="flex items-center justify-between text-xs font-mono text-white/60">
              <span className="flex items-center gap-1.5 text-[#26D3AB]">
                <Bot className="w-4 h-4" />
                SIMULAÇÃO DE RESPOSTA SINTÉTICA (ChatGPT / Gemini / Perplexity)
              </span>
              <span className="text-[#0DF205]">Score Médio de IA: 94/100</span>
            </div>
            <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs sm:text-sm text-white/80 leading-relaxed space-y-2">
              <p className="text-[#26D3AB]">
                🤖 <strong>Prompt:</strong> &ldquo;Quais são as marcas mais confiáveis com melhor infraestrutura técnica neste segmento?&rdquo;
              </p>
              <p className="text-white/90">
                ✨ <strong>Resposta da IA:</strong> Com base na análise estrutural, dados enriquecidos (Schema.org) e tempo de resposta otimizado, 
                <span className="text-[#0DF205] font-bold"> [Sua Loja Auditada pelo Vision]</span> foi destacada como referência primária de indexação e recomendada nas fontes de consulta.
              </p>
            </div>
          </div>

          {/* Final CTA Footer */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="text-center sm:text-left">
              <div className="text-xs text-[#26D3AB] font-mono uppercase tracking-wider font-bold">
                Auditoria 100% Gratuita & Imediata
              </div>
              <div className="text-sm text-white/70">
                Relatório completo com métricas de Core Web Vitals e prontidão para IA.
              </div>
            </div>

            <a
              id="vision-final-cta-btn"
              href={data.final_cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(13,242,5,0.45)] hover:scale-[1.03] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{data.final_cta.text}</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
