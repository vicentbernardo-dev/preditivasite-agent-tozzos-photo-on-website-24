import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Check, 
  Cpu, 
  Bot, 
  Search, 
  Layers, 
  FileCode2, 
  Gauge, 
  Kanban, 
  Target, 
  MessageSquare, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  Clock,
  Activity,
  CheckCircle2,
  Lock,
  ArrowLeft
} from 'lucide-react';
import { PageRoute } from './Navbar';
import { TOOLS_ECOSYSTEM_DATA } from '../data/toolsData';

interface ToolsPageProps {
  initialTab?: 'all' | 'vision' | 'alfredo';
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({
  initialTab = 'all',
  onOpenAuditModal,
  onNavigatePage,
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'vision' | 'alfredo'>(initialTab);
  const [visionTestDomain, setVisionTestDomain] = useState('');
  const [activeVisionDimension, setActiveVisionDimension] = useState(0);

  // Alfredo waitlist form state
  const [alfredoForm, setAlfredoForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    role: 'Gestão / Liderança',
  });
  const [alfredoSubmitted, setAlfredoSubmitted] = useState(false);

  const { hero_banner, tools_grid, pages_detail } = TOOLS_ECOSYSTEM_DATA;
  const visionTool = tools_grid.find((t) => t.id === 'vision')!;
  const alfredoTool = tools_grid.find((t) => t.id === 'alfredo')!;

  const handleAlfredoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alfredoForm.name || !alfredoForm.email) return;
    setAlfredoSubmitted(true);
  };

  const handleVisionTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = visionTestDomain
      ? `${pages_detail.vision.final_cta.url}?domain=${encodeURIComponent(visionTestDomain.replace(/^https?:\/\//, ''))}`
      : pages_detail.vision.final_cta.url;
    window.open(targetUrl, '_blank');
  };

  const dimensionIcons = [Layers, Search, FileCode2, Gauge, Bot];
  const dimensionBadges = [
    'Arquitetura Limpa',
    'Crawlability 100%',
    'Schema.org & JSON-LD',
    'Core Web Vitals Pass',
    'ChatGPT & Gemini Ready',
  ];

  const alfredoIcons = [Kanban, Bot, Target, MessageSquare];

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen min-h-screen pt-28 pb-20">
      
      {/* Background Ambient Glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-[-10%] w-[700px] h-[600px] bg-[#0DF205]/15 rounded-full blur-[200px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[45%] left-[-15%] w-[650px] h-[550px] bg-[#0DF205]/10 rounded-full blur-[220px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Breadcrumb / Top Navigation Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <button 
                onClick={() => onNavigatePage('home')}
                className="hover:text-[#0DF205] transition-colors"
              >
                Início
              </button>
              <span>/</span>
              <span className="text-[#0DF205]">Ferramentas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              Ecossistema Preditiva.co
            </h1>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1 rounded-2xl bg-[#0C1410] border border-white/10">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedTab === 'all'
                  ? 'bg-[#0DF205] text-[#000604] shadow-[0_0_15px_#0DF205]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Todos os Produtos
            </button>
            <button
              onClick={() => setSelectedTab('vision')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedTab === 'vision'
                  ? 'bg-[#0DF205] text-[#000604] shadow-[0_0_15px_#0DF205]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Vision (IA Search)
            </button>
            <button
              onClick={() => setSelectedTab('alfredo')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedTab === 'alfredo'
                  ? 'bg-[#0DF205] text-[#000604] shadow-[0_0_15px_#0DF205]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Alfredo (Operações)
            </button>
          </div>
        </div>

        {/* ===================== TAB: ALL PRODUCTS ===================== */}
        {selectedTab === 'all' && (
          <div className="space-y-16">
            
            {/* Vision Featured Hero */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0E1F18]/90 via-[#07130F]/90 to-[#000604]/95 border-2 border-[#0DF205]/50 shadow-[0_0_60px_rgba(13,242,5,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205] text-[#000604]">
                  DESTAQUE DA PLATAFORMA
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight text-white">
                  {hero_banner.headline}
                </h2>
                <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed">
                  {hero_banner.subheadline}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={hero_banner.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] flex items-center gap-2"
                  >
                    <span>{hero_banner.cta.label}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedTab('vision')}
                    className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white border border-[#0DF205]/40 font-bold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Ver detalhes do Vision</span>
                    <ArrowRight className="w-4 h-4 text-[#0DF205]" />
                  </button>
                </div>
              </div>

              {/* Mini Diagnostic Box */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#06110D] border border-[#0DF205]/30 space-y-4">
                <div className="text-xs font-mono text-[#0DF205] font-bold uppercase">
                  5 DIMENSÕES AVALIADAS
                </div>
                <div className="space-y-2">
                  {pages_detail.vision.capabilities.map((c) => (
                    <div key={c.dimension} className="flex items-center gap-2 text-xs text-[#EFEFEF]">
                      <CheckCircle2 className="w-4 h-4 text-[#0DF205] shrink-0" />
                      <span>{c.dimension}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 text-[11px] font-mono text-white/50">
                  Compatível com ChatGPT, Gemini, Perplexity e Claude.
                </div>
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-[#000604] border-2 border-[#0DF205]/40 hover:border-[#0DF205] transition-all space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0DF205]/15 border border-[#0DF205] flex items-center justify-center text-[#0DF205]">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold uppercase text-white">{visionTool.name}</h3>
                        <p className="text-xs font-mono text-[#26D3AB]">{visionTool.tagline}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50">
                      {visionTool.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#D9D9D9] leading-relaxed">
                    {visionTool.short_description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={visionTool.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Acessar Vision</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedTab('vision')}
                    className="px-4 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Detalhes
                  </button>
                </div>
              </div>

              {/* Alfredo Card */}
              <div className="p-8 rounded-3xl bg-[#000604] border-2 border-[#0DF205]/40 hover:border-[#0DF205] transition-all space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0DF205]/15 border border-[#0DF205] flex items-center justify-center text-[#0DF205]">
                        <Bot className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold uppercase text-white">{alfredoTool.name}</h3>
                        <p className="text-xs font-mono text-[#0DF205]">{alfredoTool.tagline}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50">
                      {alfredoTool.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#D9D9D9] leading-relaxed">
                    {alfredoTool.short_description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedTab('alfredo')}
                    className="flex-1 py-3.5 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_20px_rgba(13,242,5,0.3)]"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Entrar na Lista VIP</span>
                  </button>
                  <button
                    onClick={() => setSelectedTab('alfredo')}
                    className="px-4 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Detalhes
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ===================== TAB: VISION DEEP DIVE ===================== */}
        {selectedTab === 'vision' && (
          <div className="space-y-12">
            
            {/* Header */}
            <div className="space-y-4 max-w-4xl">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/40">
                DISPONÍVEL • FERRAMENTA PROPRIETÁRIA
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                {pages_detail.vision.title.split('|')[0]} <span className="text-[#0DF205]">| {pages_detail.vision.title.split('|')[1]}</span>
              </h2>
              <p className="text-lg text-[#D9D9D9] leading-relaxed">
                {pages_detail.vision.subtitle}
              </p>
            </div>

            {/* Live Domain Test Bar */}
            <div className="p-6 rounded-3xl bg-[#0A1611] border border-[#0DF205]/40 shadow-2xl">
              <form onSubmit={handleVisionTestSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                  <Search className="w-5 h-5 text-[#0DF205] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={visionTestDomain}
                    onChange={(e) => setVisionTestDomain(e.target.value)}
                    placeholder="Digite o domínio do seu e-commerce (ex: suamarca.com.br)"
                    className="w-full bg-[#000604] border border-[#3B4B35] focus:border-[#0DF205] rounded-xl pl-12 pr-4 py-4 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Testar no Vision Grátis</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* 5 Technical Dimensions Interactive Inspector */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold uppercase text-white flex items-center gap-2">
                <Cpu className="w-6 h-6 text-[#0DF205]" />
                As 5 Dimensões Técnicas de Auditoria
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {pages_detail.vision.capabilities.map((cap, idx) => {
                  const IconComponent = dimensionIcons[idx] || Cpu;
                  const isSelected = activeVisionDimension === idx;

                  return (
                    <button
                      key={cap.dimension}
                      onClick={() => setActiveVisionDimension(idx)}
                      className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[150px] ${
                        isSelected
                          ? 'bg-[#0E2018] border-[#0DF205] shadow-[0_0_25px_rgba(13,242,5,0.3)] scale-[1.02]'
                          : 'bg-[#080E0C] border-white/10 hover:border-[#0DF205]/40 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#0DF205] text-[#000604]' : 'bg-white/5 text-[#0DF205]'}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-white/40">0{idx + 1}</span>
                      </div>

                      <div>
                        <div className="text-base font-bold text-white tracking-tight mt-3">
                          {cap.dimension}
                        </div>
                        <div className="text-xs text-[#26D3AB] font-mono mt-0.5">
                          {dimensionBadges[idx]}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Dimension Detail Card */}
              <div className="p-8 rounded-3xl bg-[#091510] border border-[#0DF205]/40 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#0DF205] shadow-[0_0_10px_#0DF205]" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                    Dimensão {activeVisionDimension + 1}: {pages_detail.vision.capabilities[activeVisionDimension].dimension}
                  </h4>
                </div>
                <p className="text-base text-[#D9D9D9] leading-relaxed max-w-3xl">
                  {pages_detail.vision.capabilities[activeVisionDimension].description}
                </p>
              </div>
            </div>

            {/* Final CTA Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0DF205]/15 via-[#11221B] to-[#000604] border border-[#0DF205] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(13,242,5,0.2)]">
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                  Pronto para auditar a sua loja?
                </h4>
                <p className="text-sm sm:text-base text-[#D9D9D9] mt-1">
                  Acesse gratuitamente o Vision e obtenha o panorama técnico completo de visibilidade para IA.
                </p>
              </div>
              <a
                href={pages_detail.vision.final_cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(13,242,5,0.45)] hover:scale-[1.03] flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>{pages_detail.vision.final_cta.text}</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

          </div>
        )}

        {/* ===================== TAB: ALFREDO DEEP DIVE ===================== */}
        {selectedTab === 'alfredo' && (
          <div className="space-y-12">
            
            {/* Header */}
            <div className="space-y-4 max-w-4xl">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#0DF205]/20 text-[#0DF205] border border-[#0DF205]/50">
                {pages_detail.alfredo.status_badge} • EM DESENVOLVIMENTO
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                {pages_detail.alfredo.title.split('|')[0]} <span className="text-[#0DF205]">| {pages_detail.alfredo.title.split('|')[1]}</span>
              </h2>
              <p className="text-lg text-[#D9D9D9] leading-relaxed">
                {pages_detail.alfredo.subtitle}
              </p>
            </div>

            {/* 4 Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pages_detail.alfredo.capabilities.map((cap, idx) => {
                const IconComponent = alfredoIcons[idx] || Bot;
                return (
                  <div
                    key={cap.feature}
                    className="p-8 rounded-3xl bg-[#06110D] border border-[#0DF205]/30 hover:border-[#0DF205] transition-all space-y-4 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-[#0DF205]/15 border border-[#0DF205]/50 text-[#0DF205] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {cap.feature}
                      </h3>
                    </div>
                    <p className="text-base text-[#D9D9D9] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* VIP Waitlist Form Container */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0E1F18]/90 via-[#07130F]/90 to-[#000604]/95 border-2 border-[#0DF205]/50 shadow-[0_0_60px_rgba(13,242,5,0.25)]">
              {alfredoSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0DF205] text-[#000604] flex items-center justify-center mx-auto shadow-[0_0_30px_#0DF205]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Inscrição Confirmada na Lista VIP!
                  </h3>
                  <p className="text-base text-[#D9D9D9] max-w-xl mx-auto">
                    Obrigado, <strong className="text-[#0DF205]">{alfredoForm.name}</strong>. Nossa equipe de produto enviará o acesso antecipado ao Alfredo assim que os primeiros convites beta forem liberados.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2 border-b border-white/10 pb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-[#0DF205]" />
                      Garanta seu Acesso Antecipado ao Alfredo
                    </h3>
                    <p className="text-sm text-[#D9D9D9]">
                      Preencha o formulário abaixo para participar da fase beta fechada com condições exclusivas.
                    </p>
                  </div>

                  <form onSubmit={handleAlfredoSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          value={alfredoForm.name}
                          onChange={(e) => setAlfredoForm({ ...alfredoForm, name: e.target.value })}
                          placeholder="Seu nome"
                          className="w-full bg-[#000604] border border-[#0DF205]/40 focus:border-[#0DF205] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          required
                          value={alfredoForm.email}
                          onChange={(e) => setAlfredoForm({ ...alfredoForm, email: e.target.value })}
                          placeholder="seu@email.com.br"
                          className="w-full bg-[#000604] border border-[#0DF205]/40 focus:border-[#0DF205] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                          Empresa
                        </label>
                        <input
                          type="text"
                          required
                          value={alfredoForm.company}
                          onChange={(e) => setAlfredoForm({ ...alfredoForm, company: e.target.value })}
                          placeholder="Nome da empresa"
                          className="w-full bg-[#000604] border border-[#0DF205]/40 focus:border-[#0DF205] rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-white/80">
                          Tamanho do Time
                        </label>
                        <select
                          value={alfredoForm.teamSize}
                          onChange={(e) => setAlfredoForm({ ...alfredoForm, teamSize: e.target.value })}
                          className="w-full bg-[#000604] border border-[#0DF205]/40 focus:border-[#0DF205] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all cursor-pointer"
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
                          value={alfredoForm.role}
                          onChange={(e) => setAlfredoForm({ ...alfredoForm, role: e.target.value })}
                          className="w-full bg-[#000604] border border-[#0DF205]/40 focus:border-[#0DF205] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all cursor-pointer"
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
                      type="submit"
                      className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_30px_rgba(13,242,5,0.45)] hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      <span>Entrar na Lista de Espera VIP</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
