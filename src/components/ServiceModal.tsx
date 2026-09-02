import React from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { ServiceCard } from '../types';

interface ServiceModalProps {
  service: ServiceCard | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenAudit
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-[#111815] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 text-white my-8 overflow-hidden font-familjen max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-[#0DF205] transition-colors rounded-full hover:bg-white/10"
          aria-label="Fechar"
        >
          <X className="w-6 h-6" />
        </button>

        {service.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0DF205] text-[#000604] text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>
        )}

        <h2 className="text-3xl font-bold text-white mb-2 whitespace-pre-line leading-tight">
          {service.title}
        </h2>

        <p className="text-[#0DF205] text-base font-medium mb-6">
          {service.subtitle}
        </p>

        <p className="text-white/80 text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Ideal Para Box */}
        <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-6">
          <span className="text-xs uppercase font-bold text-[#0DF205] tracking-wider block mb-1">
            Perfil Ideal:
          </span>
          <p className="text-white font-bold italic text-base whitespace-pre-line">
            {service.idealFor}
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <h4 className="text-xs uppercase font-bold text-white/70 tracking-wider">
            O que está incluído na entrega:
          </h4>
          {[
            'Diagnóstico e roadmap técnico detalhado com prazos e entregáveis',
            'Alocação de especialistas seniores dedicados à sua marca',
            'Relatórios executivos semanais e acompanhamento de métricas de receita',
            'Suporte prioritário e governança técnica contínua'
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#0DF205] flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="flex-1 py-3.5 px-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Solicitar Diagnóstico desta Solução</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/5511975944739?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title.replace('\n', ' '))}%20da%20Preditiva.`}
            target="_blank"
            rel="noreferrer"
            className="py-3.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#0DF205]" />
            <span>WhatsApp</span>
          </a>
        </div>

      </motion.div>
    </div>
  );
};
