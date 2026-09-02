import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface MethodologyCtaProps {
  onSuccessSubmit?: (data: { name: string; email: string; company: string; role: string }) => void;
}

export const MethodologyCta: React.FC<MethodologyCtaProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitted(true);
    if (onSuccessSubmit) {
      onSuccessSubmit(formData);
    }
  };

  return (
    <section id="metodologia-cta" className="relative py-24 bg-[#000604] text-white overflow-hidden font-familjen border-t border-white/5">
      {/* Ambient radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 right-0 w-[720px] h-[720px] bg-[radial-gradient(ellipse_at_top_right,rgba(13,242,5,0.15),transparent_70%)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Trust Badges */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold uppercase tracking-tight text-white leading-[1.15]">
              Descubra Como a Metodologia Preditiva Pode{' '}
              <span className="text-[#0DF205]">Acelerar Seu Crescimento</span>
            </h2>

            <p className="text-[#D9D9D9] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              Receba um diagnóstico técnico gratuito e conheça as oportunidades de SEO, CRM, Dados e Growth para sua operação.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#0DF205]/10 border border-[#0DF205]/30 text-[#0DF205] text-xs sm:text-sm font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#0DF205]" />
              <span>Diagnóstico 100% Gratuito para Empresas Elegíveis</span>
            </div>
          </div>

          {/* Right Column: High Fidelity Form Box */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-10 rounded-2xl bg-[#1A1C1A] border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0DF205]/20 border border-[#0DF205] text-[#0DF205] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Solicitação Recebida!</h3>
                  <p className="text-white/80 text-sm max-w-sm mx-auto">
                    Nossa equipe técnica entrará em contato em até 24h para apresentar o diagnóstico preliminar da sua marca.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-[1.2px] mb-2">
                      NOME COMPLETO
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-base focus:outline-none placeholder:text-[#D9D9D9]/50 transition-colors"
                    />
                  </div>

                  {/* E-mail Corporativo */}
                  <div>
                    <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-[1.2px] mb-2">
                      E-MAIL CORPORATIVO
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@empresa.com"
                      className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-base focus:outline-none placeholder:text-[#D9D9D9]/50 transition-colors"
                    />
                  </div>

                  {/* Empresa & Cargo (2-col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-[1.2px] mb-2">
                        EMPRESA
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da empresa"
                        className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-base focus:outline-none placeholder:text-[#D9D9D9]/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0DF205] uppercase tracking-[1.2px] mb-2">
                        CARGO
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Ex: Diretor de Marketing"
                        className="w-full bg-[#000604] border border-white/15 focus:border-[#0DF205] text-white px-4 py-3.5 rounded-lg text-base focus:outline-none placeholder:text-[#D9D9D9]/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm sm:text-base uppercase tracking-[1.5px] rounded-lg transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                    >
                      <span>SOLICITAR DIAGNÓSTICO ESTRATÉGICO</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
