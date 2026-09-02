import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';

interface RadarNewsletterProps {
  onSuccess?: () => void;
}

export const RadarNewsletter: React.FC<RadarNewsletterProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  return (
    <div className="w-full relative bg-[#0D0F0D] overflow-hidden rounded-[32px] sm:rounded-[48px] border border-[#3B4B35]/20 p-8 sm:p-12 lg:p-16 shadow-2xl">
      {/* Background Neon Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#0DF205]/10 rounded-full blur-[140px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-[#26D3AB]/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Heading & Social Proof */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#E3E3DF] leading-[1.08] font-familjen">
              Sincronize seu <br />
              <span className="text-[#E3E3DF]">radar digital</span>
              <span className="text-[#0DF205]">.</span>
            </h2>
            <p className="text-base sm:text-xl text-[#B9CCAF] font-normal leading-relaxed max-w-xl">
              Receba curadoria estratégica sobre CRM e IA diretamente na sua caixa de entrada. Sem ruído, apenas frequência alta.
            </p>
          </div>

          {/* Social Proof Subscribers */}
          <div className="pt-2 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              <div className="w-11 h-11 rounded-xl bg-[#292A28] border-2 border-[#0D0F0D] flex items-center justify-center text-xs font-bold text-[#E3E3DF] font-familjen shadow-md">
                JS
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#0DF205] border-2 border-[#0D0F0D] flex items-center justify-center text-xs font-bold text-[#013A00] font-familjen shadow-md">
                BK
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#333533] border-2 border-[#0D0F0D] flex items-center justify-center text-xs font-bold text-[#E3E3DF] font-familjen shadow-md">
                ML
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#E3E3DF] font-familjen">
                +1k assinantes
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#B9CCAF] font-familjen">
                Preditiva.co
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="lg:col-span-6">
          <div className="bg-[#333533]/40 border border-[#3B4B35]/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#0DF205]/20 border border-[#0DF205] text-[#0DF205] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(13,242,5,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-2xl font-bold text-[#E3E3DF] font-familjen">
                    Inscrição Confirmada!
                  </h3>
                  <p className="text-sm text-[#B9CCAF]">
                    Obrigado, <strong className="text-white">{name || 'Parceiro'}</strong>. Enviamos a primeira edição exclusiva para <strong className="text-[#0DF205]">{email}</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                  }}
                  className="text-xs text-[#0DF205] underline font-bold uppercase tracking-wider hover:text-white transition-colors cursor-pointer pt-2"
                >
                  Inscrever outro e-mail
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-familjen">
                {/* Nome Completo */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[2px] text-[#84967C]">
                    NOME COMPLETO
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full bg-transparent border-b-2 border-[#3B4B35]/40 focus:border-[#0DF205] text-[#E3E3DF] placeholder-[#84967C]/40 text-base sm:text-lg py-2.5 px-1 focus:outline-none transition-colors"
                  />
                </div>

                {/* E-mail Profissional */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-[2px] text-[#84967C]">
                    E-MAIL PROFISSIONAL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@empresa.com"
                    className="w-full bg-transparent border-b-2 border-[#3B4B35]/40 focus:border-[#0DF205] text-[#E3E3DF] placeholder-[#84967C]/40 text-base sm:text-lg py-2.5 px-1 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#02E600] to-[#00FF00] text-[#013A00] font-bold text-xs sm:text-sm uppercase tracking-[3px] rounded-xl transition-all shadow-[0_8px_20px_rgba(0,255,0,0.25)] hover:shadow-[0_12px_28px_rgba(0,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-[#013A00] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>ASSINAR AGORA</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
