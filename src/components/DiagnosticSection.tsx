import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Globe, Mail, User, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

interface DiagnosticSectionProps {
  onRunAudit: (data: { name: string; email: string; url: string }) => void;
}

export const DiagnosticSection: React.FC<DiagnosticSectionProps> = ({ onRunAudit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !url) {
      window.open('https://vision.preditiva.co/', '_blank', 'noopener,noreferrer');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onRunAudit({ name, email, url });
      window.open(`https://vision.preditiva.co/`, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  const checklistItems = [
    'Diagnóstico PageSpeed e Web Core Vitals detalhado.',
    'Mapeamento de SEO técnico e oportunidades de palavra-chave.',
    'Review completo de tagueamento e fluxo de dados (GA4/GTM).',
    'Análise de reputação de CRM e entregabilidade.'
  ];

  return (
    <section id="diagnostico" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Card Container with Figma styling */}
        <div className="relative rounded-[32px] lg:rounded-[46px] bg-[#000604] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/10">
          
          {/* Ambient Glowing Blobs inside container */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-32 -right-20 w-[450px] lg:w-[650px] h-[400px] lg:h-[600px] bg-[#0DF205] opacity-25 rounded-full blur-[140px] -rotate-12"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-32 -left-20 w-[450px] lg:w-[600px] h-[350px] lg:h-[500px] bg-[#26D3AB] opacity-25 rounded-full blur-[150px] rotate-25"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              
              {/* Heading */}
              <h2 className="font-familjen text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#E3E3DF] leading-[1.12] mb-6">
                Diagnóstico Gratuito de <br />
                <span className="text-[#0DF205] drop-shadow-[0_0_20px_rgba(13,242,5,0.4)]">
                  SEO, Performance e Growth
                </span>{' '}
                para seu negócio
              </h2>

              {/* Subheading */}
              <p className="font-familjen text-base sm:text-lg lg:text-[20px] text-[#E3E3DF]/90 font-normal leading-relaxed mb-8">
                Receba uma análise técnica do seu site com oportunidades em SEO, Core Web Vitals, CRM, Analytics e conversão.
              </p>

              {/* Checklist from Figma */}
              <div className="space-y-4">
                {checklistItems.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-3.5"
                  >
                    {/* Neon green check square from Figma design */}
                    <div className="w-5 h-5 rounded-[4px] bg-[#0DF205] flex-shrink-0 flex items-center justify-center text-[#000604] shadow-[0_0_10px_rgba(13,242,5,0.5)] mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>

                    <span className="font-familjen text-sm sm:text-[15.5px] text-[#B9CCAF] leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Trust disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-white/50 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#0DF205]" />
                <span>Dados 100% confidenciais. Sem compromisso ou cobranças ocultas.</span>
              </div>
            </div>

            {/* Right Column: Lead / URL Form Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-9 rounded-xl bg-[#121412] border border-[#3B4B35]/40 shadow-2xl relative">
                
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-familjen text-lg font-bold text-white uppercase tracking-wider">
                      Solicitar Análise
                    </h3>
                    <p className="text-xs text-[#B9CCAF] mt-0.5">Auditoria gerada em tempo real</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#0DF205]/10 border border-[#0DF205]/40 flex items-center justify-center text-[#0DF205]">
                    <Sparkles className="w-4 h-4 animate-spin" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Field 1: Name */}
                  <div>
                    <label 
                      htmlFor="diag-name" 
                      className="block font-familjen text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2"
                    >
                      NOME COMPLETO
                    </label>
                    <div className="relative">
                      <input
                        id="diag-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome aqui"
                        className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-3.5 py-3 rounded-t-sm font-familjen text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 2: Email */}
                  <div>
                    <label 
                      htmlFor="diag-email" 
                      className="block font-familjen text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2"
                    >
                      E-MAIL CORPORATIVO
                    </label>
                    <div className="relative">
                      <input
                        id="diag-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-3.5 py-3 rounded-t-sm font-familjen text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field 3: URL */}
                  <div>
                    <label 
                      htmlFor="diag-url" 
                      className="block font-familjen text-xs font-bold text-[#B9CCAF] uppercase tracking-wider mb-2"
                    >
                      URL DO WEBSITE
                    </label>
                    <div className="relative">
                      <input
                        id="diag-url"
                        type="text"
                        required
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="www.seusite.com.br"
                        className="w-full bg-[#0D0F0D] border-b border-[#3B4B35] focus:border-[#0DF205] text-[#EFEFEF] px-3.5 py-3 rounded-t-sm font-familjen text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-[4px] bg-[#00FF00] hover:bg-[#0DF205] text-[#013A00] font-familjen font-bold text-base sm:text-[18px] uppercase tracking-wide transition-all duration-200 transform hover:scale-[1.01] shadow-[0_0_25px_rgba(0,255,0,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>ANALISANDO SITE...</span>
                      </>
                    ) : (
                      <>
                        <span>Quero minha análise gratuita</span>
                        <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>

                {/* Instant Feedback indicator */}
                <div className="mt-4 text-center">
                  <span className="text-[11px] text-[#B9CCAF]/80 font-mono">
                    ⚡ Tempo médio de geração do relatório: 15 segundos
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
