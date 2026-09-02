import React from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, TrendingUp, Award, ArrowRight, Quote } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenAudit
}) => {
  if (!caseStudy) return null;

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

        {/* Category & Client Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#0DF205] bg-[#0DF205]/10 px-2.5 py-1 rounded">
            {caseStudy.category}
          </span>
          <span className="text-xs text-white/50 font-mono">Estudo de Caso Auditado</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {caseStudy.client}
        </h2>

        {/* Hero image in modal */}
        <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden mb-6 bg-black/60">
          <img
            src={caseStudy.image}
            alt={caseStudy.client}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Key Metrics Banner */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-[#0DF205] text-[#000604] font-bold text-sm sm:text-base shadow-lg">
              {caseStudy.metric1}
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-black/80 text-[#B9CCAF] border border-white/20 font-bold text-sm sm:text-base">
              {caseStudy.metric2}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Deep Dive Breakdown */}
        <div className="space-y-6 text-sm sm:text-base text-white/90 leading-relaxed border-t border-white/10 pt-6">
          <div>
            <h4 className="text-[#0DF205] font-bold uppercase tracking-wider text-xs mb-2">
              O Desafio Técnico
            </h4>
            <p className="text-white/80">{caseStudy.fullStory.challenge}</p>
          </div>

          <div>
            <h4 className="text-[#0DF205] font-bold uppercase tracking-wider text-xs mb-2">
              A Solução da Preditiva
            </h4>
            <p className="text-white/80">{caseStudy.fullStory.solution}</p>
          </div>

          <div>
            <h4 className="text-[#0DF205] font-bold uppercase tracking-wider text-xs mb-3">
              Resultados Mensuráveis
            </h4>
            <div className="space-y-2">
              {caseStudy.fullStory.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-black/40 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-[#0DF205] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {caseStudy.fullStory.testimonial && (
            <div className="p-5 rounded-xl bg-gradient-to-r from-[#0DF205]/10 to-transparent border-l-4 border-[#0DF205] mt-6">
              <Quote className="w-6 h-6 text-[#0DF205] mb-2" />
              <p className="italic text-white text-base mb-3 font-normal">
                "{caseStudy.fullStory.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                {caseStudy.fullStory.testimonial.author} — <span className="text-[#0DF205]">{caseStudy.fullStory.testimonial.role}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/60">
            Deseja alcançar números semelhantes na sua operação?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase rounded-md transition-all flex items-center justify-center gap-2"
          >
            <span>Quero Diagnóstico para Minha Marca</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
