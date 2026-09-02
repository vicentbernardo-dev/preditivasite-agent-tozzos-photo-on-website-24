import React from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Clock, ArrowRight, Share2 } from 'lucide-react';
import { InsightArticle } from '../types';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenAudit
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-3xl bg-[#111815] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 text-white my-8 overflow-hidden font-familjen max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-[#0DF205] transition-colors rounded-full hover:bg-white/10"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Category & Meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-[#000604] bg-[#0DF205] px-3 py-1 rounded">
            {article.tag}
          </span>
          <span className="text-xs text-white/50 font-mono flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-xs text-white/50 font-mono flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
          {article.title}
        </h2>

        {/* Hero image */}
        <div className="h-64 rounded-xl overflow-hidden mb-6 bg-black">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-4 text-base sm:text-lg text-white/85 leading-relaxed border-t border-white/10 pt-6">
          <p className="font-medium text-white text-lg">
            {article.summary}
          </p>

          <p>
            No atual cenário de e-commerce de alto volume, pequenos atrasos na renderização da interface ou falhas no fluxo de checkout resultam em perdas imediatas de receita. A camada técnica não é apenas suporte: é o motor primário de conversão e aquisição escalável.
          </p>

          <h3 className="text-xl font-bold text-[#0DF205] pt-4">
            Principais Pontos de Atenção Técnica:
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>Otimização contínua de Core Web Vitals (LCP abaixo de 2.5s, INP abaixo de 200ms e CLS zero).</li>
            <li>Implementação de Server-Side Tagging para GA4 e API de Conversões do Meta sem perdas por adblockers.</li>
            <li>Automação de fluxos de ciclo de vida com inteligência preditiva de recompra.</li>
          </ul>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 p-6 rounded-xl bg-black/60 border border-[#0DF205]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-base">
              Precisa de ajuda para aplicar essas práticas?
            </h4>
            <p className="text-xs text-white/70">
              Solicite uma análise técnica gratuita com os engenheiros da Preditiva.
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="px-6 py-2.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-xs uppercase rounded-md transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Auditar Meu Site</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
