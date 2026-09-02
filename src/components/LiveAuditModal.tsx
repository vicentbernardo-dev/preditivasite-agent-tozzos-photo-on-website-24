import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Activity, CheckCircle2, AlertCircle, ArrowRight, Gauge, Zap, Globe, Download, Send } from 'lucide-react';

interface LiveAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { name?: string; email?: string; url?: string };
}

export const LiveAuditModal: React.FC<LiveAuditModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [step, setStep] = useState<'input' | 'scanning' | 'results'>('input');
  const [url, setUrl] = useState(initialData?.url || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [name, setName] = useState(initialData?.name || '');
  const [scanProgress, setScanProgress] = useState(0);
  const [currentScanStep, setCurrentScanStep] = useState('Iniciando rastreador técnico...');

  useEffect(() => {
    if (initialData?.url) {
      setUrl(initialData.url);
      setEmail(initialData.email || '');
      setName(initialData.name || '');
      startScan(initialData.url);
    }
  }, [initialData]);

  const startScan = (targetUrl: string) => {
    setStep('scanning');
    setScanProgress(15);
    setCurrentScanStep('Conectando ao DOM e simulando renderização mobile...');

    setTimeout(() => {
      setScanProgress(40);
      setCurrentScanStep('Testando Core Web Vitals (LCP, INP, CLS) e scripts de terceiros...');
    }, 800);

    setTimeout(() => {
      setScanProgress(70);
      setCurrentScanStep('Auditando tagueamento GA4, GTM e API de Conversões...');
    }, 1600);

    setTimeout(() => {
      setScanProgress(90);
      setCurrentScanStep('Mapeando oportunidades de indexação SEO e funil de conversão...');
    }, 2400);

    setTimeout(() => {
      setScanProgress(100);
      setStep('results');
    }, 3100);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    startScan(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-3xl bg-[#111815] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 text-white my-8 overflow-hidden font-familjen"
      >
        {/* Glow backdrop inside modal */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-[#0DF205]/20 rounded-full blur-3xl"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-[#0DF205] transition-colors rounded-full hover:bg-white/10"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* STEP 1: INPUT FORM */}
        {step === 'input' && (
          <div>
            <div className="flex items-center gap-2 text-[#0DF205] text-xs font-mono uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Diagnóstico em Tempo Real</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Auditoria Técnica Instantânea
            </h2>
            <p className="text-white/70 text-sm sm:text-base mb-8 leading-relaxed">
              Insira a URL do seu e-commerce para analisarmos PageSpeed, Core Web Vitals, SEO técnico e fluxo de dados agora.
            </p>

            <form onSubmit={handleManualSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-1.5">
                  URL DO SEU SITE OU LOJA
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-3.5 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://sualoja.com.br"
                    className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white pl-11 pr-4 py-3.5 rounded-lg text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-1.5">
                    SEU NOME
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-1.5">
                    E-MAIL CORPORATIVO
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-sm focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-lg transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXECUTAR ANÁLISE COMPLETA</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: SCANNING PROGRESS */}
        {step === 'scanning' && (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#0DF205]/20 border-t-[#0DF205] animate-spin" />
              <Activity className="w-8 h-8 text-[#0DF205] absolute" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Auditando Camada Técnica
              </h3>
              <p className="text-sm font-mono text-[#0DF205] animate-pulse">
                {currentScanStep}
              </p>
            </div>

            <div className="w-full max-w-md bg-black/60 rounded-full h-3 p-0.5 border border-white/10 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-[#26D3AB] to-[#0DF205] h-full rounded-full"
                style={{ width: `${scanProgress}%` }}
                transition={{ ease: 'easeInOut' }}
              />
            </div>

            <span className="text-xs text-white/50 font-mono">
              Analisando {url || 'o website'} ({scanProgress}%)
            </span>
          </div>
        )}

        {/* STEP 3: LIVE RESULTS REPORT */}
        {step === 'results' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#0DF205] uppercase bg-[#0DF205]/10 px-2.5 py-1 rounded">
                  Diagnóstico Concluído
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  Relatório Técnico: {url || 'seu-site.com.br'}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-white/60">Status:</span>
                <span className="text-xs font-bold text-[#0DF205] bg-[#0DF205]/20 px-2 py-0.5 rounded">
                  3 Gargalos Críticos Identificados
                </span>
              </div>
            </div>

            {/* Score Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-black/50 border border-[#0DF205]/40 text-center">
                <div className="text-3xl font-bold text-[#0DF205]">92/100</div>
                <div className="text-xs text-white/70 uppercase mt-1">SEO Técnico</div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-yellow-500/40 text-center">
                <div className="text-3xl font-bold text-yellow-400">48/100</div>
                <div className="text-xs text-white/70 uppercase mt-1">PageSpeed Mobile</div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-red-500/40 text-center">
                <div className="text-3xl font-bold text-red-400">3.8s</div>
                <div className="text-xs text-white/70 uppercase mt-1">Tempo LCP</div>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-[#26D3AB]/40 text-center">
                <div className="text-3xl font-bold text-[#26D3AB]">Parcial</div>
                <div className="text-xs text-white/70 uppercase mt-1">Tags GA4/GTM</div>
              </div>
            </div>

            {/* Opportunities List */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                Oportunidades de Alto Impacto em Receita:
              </h4>

              <div className="p-3.5 rounded-lg bg-black/40 border border-red-500/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white">JavaScript Bloqueante de Terceiros:</span>{' '}
                  <span className="text-white/80">Scripts não otimizados estão atrasando o carregamento da página em 2.4s no mobile.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-yellow-500/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white">Discrepância de Telemetria no GA4:</span>{' '}
                  <span className="text-white/80">Disparo duplicado de eventos de Purchase e ausência de CAPI no checkout.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-[#0DF205]/20 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0DF205] flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white">Potencial de SEO de Conteúdo:</span>{' '}
                  <span className="text-white/80">Oportunidade para ranquear no Top 3 em mais de 120 palavras-chave transacionais.</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/60">
                Quer desbloquear o plano de ação completo com nosso CTO?
              </div>

              <a
                href={`https://wa.me/5511975944739?text=Ol%C3%A1!%20Gerei%20o%20diagn%C3%B3stico%20para%20o%20site%20${encodeURIComponent(url || 'meu-site')}%20e%20gostaria%20de%20conversar%20com%20um%20especialista.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase rounded-md transition-all flex items-center justify-center gap-2"
              >
                <span>Falar com Especialista Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};
