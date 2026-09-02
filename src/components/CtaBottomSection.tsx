import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Send, CheckCircle2, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

interface CtaBottomSectionProps {
  onSuccessSubmit: (lead: { name: string; email: string; company: string; role: string }) => void;
}

export const CtaBottomSection: React.FC<CtaBottomSectionProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessSubmit(formData);
    }, 800);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-[#000604] text-white overflow-hidden border-t border-white/10">
      
      {/* Radiant green glow effect from Figma design */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#00FF00]/15 via-transparent to-transparent blur-[160px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Promise */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[48px] font-bold text-white uppercase leading-[1.12] tracking-tight mb-6">
              O mundo digital não <br />
              espera. Sua empresa <br />
              está pronta para <br />
              dominar o mercado?
            </h2>

            <p className="font-familjen text-lg sm:text-[20.5px] text-[#0DF205] leading-relaxed mb-8">
              Receba um diagnóstico gratuito de SEO, CRM, Dados, Performance e Conversão.
            </p>

            {/* Figma badge feature */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111815] border border-[#0DF205]/40 w-fit">
              <div className="w-6 h-6 rounded-md bg-[#0DF205] flex items-center justify-center text-[#000604] shadow-[0_0_15px_rgba(13,242,5,0.6)]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-familjen text-sm sm:text-base font-bold text-[#0DF205]">
                Diagnóstico 100% Gratuito para Empresas Elegíveis
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-[12px] bg-[#1A1C1A] border border-[#3B4B35]/30 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0DF205]/20 border-2 border-[#0DF205] flex items-center justify-center text-[#0DF205] shadow-[0_0_30px_rgba(13,242,5,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-familjen text-2xl font-bold text-white">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="font-familjen text-base text-white/70 max-w-md">
                    Nossos especialistas seniores já estão alocando tempo para analisar a camada técnica da sua empresa. Entraremos em contato em até 24h.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-bold text-white transition-colors"
                  >
                    Enviar outra solicitação
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field: Name */}
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block font-familjen text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2"
                    >
                      NOME COMPLETO
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-[#000604] text-[#EFEFEF] px-4 py-3.5 rounded-sm font-familjen text-base border border-white/10 focus:border-[#0DF205] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field: Email */}
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block font-familjen text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2"
                    >
                      E-MAIL CORPORATIVO
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@empresa.com"
                      className="w-full bg-[#000604] text-[#EFEFEF] px-4 py-3.5 rounded-sm font-familjen text-base border border-white/10 focus:border-[#0DF205] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Fields: Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="cta-company"
                        className="block font-familjen text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2"
                      >
                        EMPRESA
                      </label>
                      <input
                        id="cta-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da empresa"
                        className="w-full bg-[#000604] text-[#EFEFEF] px-4 py-3.5 rounded-sm font-familjen text-base border border-white/10 focus:border-[#0DF205] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cta-role"
                        className="block font-familjen text-xs font-bold text-[#0DF205] uppercase tracking-wider mb-2"
                      >
                        CARGO
                      </label>
                      <input
                        id="cta-role"
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ex: Diretor de Marketing"
                        className="w-full bg-[#000604] text-[#EFEFEF] px-4 py-3.5 rounded-sm font-familjen text-base border border-white/10 focus:border-[#0DF205] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 mt-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-familjen font-bold text-lg sm:text-[20px] uppercase tracking-wider rounded-sm transition-all duration-200 shadow-[0_0_30px_rgba(13,242,5,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>ENVIANDO...</span>
                      </>
                    ) : (
                      <>
                        <span>VAMOS ORQUESTRAR JUNTOS?</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
