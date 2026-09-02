import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Check, 
  Kanban, 
  Bot, 
  Target, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send,
  Lock,
  Clock
} from 'lucide-react';
import { TOOLS_ECOSYSTEM_DATA } from '../data/toolsData';

interface AlfredoDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessWaitlist?: (name: string) => void;
}

export const AlfredoDetailModal: React.FC<AlfredoDetailModalProps> = ({
  isOpen,
  onClose,
  onSuccessWaitlist,
}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    role: 'Gestão / Liderança',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const data = TOOLS_ECOSYSTEM_DATA.pages_detail.alfredo;

  const capabilityIcons = [
    Kanban,        // Gestão de Tarefas & Kanbans
    Bot,           // Inteligência Artificial Integrada
    Target,        // Metas & KPIs em Tempo Real
    MessageSquare, // Chat e Colaboração Centralizada
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    if (onSuccessWaitlist) {
      onSuccessWaitlist(form.name);
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="alfredo-detail-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#000604] border border-[#0DF205]/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(13,242,5,0.25)] text-white font-familjen max-h-[92vh] overflow-y-auto my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Glowing ambient lights */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-[#0DF205]/15 rounded-full blur-[130px]"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 left-0 w-96 h-96 bg-[#26D3AB]/10 rounded-full blur-[130px]"
          />

          {/* Close Button */}
          <button
            id="close-alfredo-modal"
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#0DF205] text-white/70 hover:text-[#0DF205] hover:bg-white/10 transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50 flex items-center gap-1.5 shadow-[0_0_15px_rgba(13,242,5,0.3)]">
                <Clock className="w-3.5 h-3.5" />
                {data.status_badge}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/5 text-[#26D3AB] border border-[#26D3AB]/30">
                Squad Copilot & Operations
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight leading-tight text-white">
              {data.title.split('|')[0]} <span className="text-[#0DF205]">| {data.title.split('|')[1]}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed max-w-3xl">
              {data.subtitle}
            </p>
          </div>

          {/* 4 Capabilities Grid */}
          <div className="mt-10 space-y-4 relative z-10">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#0DF205]" />
              Principais Módulos de Operação
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.capabilities.map((cap, idx) => {
                const IconComponent = capabilityIcons[idx] || Sparkles;
                return (
                  <div
                    key={cap.feature}
                    className="p-6 rounded-2xl bg-[#06110D] border border-[#0DF205]/25 hover:border-[#0DF205]/60 transition-all space-y-2.5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#0DF205]/15 border border-[#0DF205]/40 text-[#0DF205] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {cap.feature}
                      </h4>
                    </div>
                    <p className="text-sm text-[#D9D9D9] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* VIP Waitlist Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0E1F18]/90 via-[#07130F]/90 to-[#000604]/95 border-2 border-[#0DF205]/40 shadow-[0_0_50px_rgba(13,242,5,0.2)] relative z-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-[#0DF205] text-[#000604] flex items-center justify-center mx-auto shadow-[0_0_25px_#0DF205]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  Você está na Lista de Espera VIP!
                </h4>
                <p className="text-sm sm:text-base text-[#D9D9D9] max-w-lg mx-auto">
                  Obrigado, <strong className="text-[#0DF205]">{form.name}</strong>. Você receberá um convite exclusivo com acesso beta antecipado e condições especiais no lançamento do Alfredo.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase text-white tracking-tight flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#0DF205]" />
                      Entrar na Lista de Espera VIP
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D9D9D9] mt-0.5">
                      Tenha prioridade no onboarding do Alfredo e teste antes do mercado.
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/40 w-fit">
                    Vagas Beta Limitadas
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                        Nome Completo
                      </label>
                      <input
                        id="alfredo-input-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full bg-[#000604] border border-[#0DF205]/30 focus:border-[#0DF205] rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                        E-mail Corporativo
                      </label>
                      <input
                        id="alfredo-input-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com.br"
                        className="w-full bg-[#000604] border border-[#0DF205]/30 focus:border-[#0DF205] rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                        Empresa
                      </label>
                      <input
                        id="alfredo-input-company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Nome da empresa"
                        className="w-full bg-[#000604] border border-[#0DF205]/30 focus:border-[#0DF205] rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                        Tamanho do Time
                      </label>
                      <select
                        id="alfredo-select-teamsize"
                        value={form.teamSize}
                        onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                        className="w-full bg-[#000604] border border-[#0DF205]/30 focus:border-[#0DF205] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="1-10">1 a 10 pessoas</option>
                        <option value="11-50">11 a 50 pessoas</option>
                        <option value="51-200">51 a 200 pessoas</option>
                        <option value="200+">Mais de 200 pessoas</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                        Seu Cargo
                      </label>
                      <select
                        id="alfredo-select-role"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full bg-[#000604] border border-[#0DF205]/30 focus:border-[#0DF205] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Fundador / C-Level">Fundador / C-Level</option>
                        <option value="Gestão / Liderança">Gestão / Liderança</option>
                        <option value="Head de Marketing / Growth">Head de Marketing / Growth</option>
                        <option value="Tech Lead / CTO">Tech Lead / CTO</option>
                        <option value="Analista / Especialista">Analista / Especialista</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="alfredo-submit-waitlist"
                    type="submit"
                    className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(13,242,5,0.45)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <span>{data.waitlist_cta.text}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
