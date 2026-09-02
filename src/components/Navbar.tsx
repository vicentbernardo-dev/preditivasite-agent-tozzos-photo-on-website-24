import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type PageRoute = 
  | 'home' 
  | 'metodologia' 
  | 'frentes-aceleradora' 
  | 'frentes-consultoria' 
  | 'frentes-especialistas'
  | 'especialidade-seo'
  | 'especialidade-midia'
  | 'especialidade-crm'
  | 'especialidade-dados'
  | 'especialidade-dev'
  | 'especialidade-growth'
  | 'cases'
  | 'case-miami'
  | 'case-gtex'
  | 'case-master'
  | 'blog'
  | 'blog-post'
  | 'partners'
  | 'ferramentas'
  | 'ferramentas-vision'
  | 'ferramentas-alfredo';

interface NavbarProps {
  currentPage?: PageRoute;
  onNavigatePage?: (page: PageRoute) => void;
  onOpenAuditModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'metodologia',
  onNavigatePage,
  onOpenAuditModal,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    const pageRoutes: PageRoute[] = [
      'home',
      'metodologia',
      'frentes-aceleradora',
      'frentes-consultoria',
      'frentes-especialistas',
      'especialidade-seo',
      'especialidade-midia',
      'especialidade-crm',
      'especialidade-dados',
      'especialidade-dev',
      'especialidade-growth',
      'cases',
      'case-miami',
      'case-gtex',
      'case-master',
      'blog',
      'blog-post',
      'partners',
      'ferramentas',
      'ferramentas-vision',
      'ferramentas-alfredo',
    ];

    if (pageRoutes.includes(target as PageRoute)) {
      if (onNavigatePage) onNavigatePage(target as PageRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    onNavigateSection(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000604]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-[#000604] border-b border-white/5 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="group flex items-center focus:outline-none"
            aria-label="Preditiva Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-familjen text-[15px] xl:text-[16px]">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('metodologia')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                currentPage === 'metodologia'
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Metodologia
            </button>

            {/* Dropdown: Frentes */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('frentes')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('frentes-consultoria')}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  currentPage?.startsWith('frentes-')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span>Frentes</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'frentes' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'frentes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 mt-1 bg-[#111815] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl z-50"
                  >
                    <a
                      href="#frentes-aceleradora"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('frentes-aceleradora');
                      }}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        currentPage === 'frentes-aceleradora' ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={currentPage === 'frentes-aceleradora' ? 'text-[#0DF205]' : ''}>Aceleradora de E-commerce</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Operação completa de ponta a ponta</p>
                    </a>
                    <a
                      href="#frentes-consultoria"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('frentes-consultoria');
                      }}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        currentPage === 'frentes-consultoria' ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={currentPage === 'frentes-consultoria' ? 'text-[#0DF205]' : ''}>Consultoria Estratégica</span>
                        <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">HOT</span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Direção técnica e governança de dados</p>
                    </a>
                    <a
                      href="#frentes-especialistas"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('frentes-especialistas');
                      }}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        currentPage === 'frentes-especialistas' ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={currentPage === 'frentes-especialistas' ? 'text-[#0DF205]' : ''}>Especialistas Dedicados</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Squad sênior on demand para gargalos</p>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown: Especialidade */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('especialidade')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('especialidade-seo')}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  currentPage?.startsWith('especialidade-')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span>Especialidade</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'especialidade' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'especialidade' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 mt-1 bg-[#111815] border border-white/10 rounded-xl p-3 shadow-2xl backdrop-blur-xl z-50 grid grid-cols-2 gap-1.5"
                  >
                    {[
                      { name: 'SEO Técnico', desc: 'Core Web Vitals & Tráfego', id: 'especialidade-seo' },
                      { name: 'Mídia & CAPI', desc: 'Atribuição e ROAS', id: 'especialidade-midia' },
                      { name: 'CRM & Retenção', desc: 'LTV & Automações', id: 'especialidade-crm' },
                      { name: 'Dados & GA4', desc: 'Telemetria e BI', id: 'especialidade-dados' },
                      { name: 'Dev & Infra', desc: 'Sustentação e Código', id: 'especialidade-dev' },
                      { name: 'CRO & Growth', desc: 'Otimização de Taxa', id: 'especialidade-growth' },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.id);
                        }}
                        className={`p-2 rounded-lg hover:bg-white/5 transition-colors group ${
                          currentPage === item.id ? 'bg-white/10 border border-[#0DF205]/30' : ''
                        }`}
                      >
                        <div className={`text-xs font-bold ${currentPage === item.id ? 'text-[#0DF205]' : 'text-white group-hover:text-[#0DF205]'}`}>
                          {item.name}
                        </div>
                        <div className="text-[11px] text-white/50">{item.desc}</div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown: Ferramentas */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('ferramentas')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleLinkClick('ferramentas')}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  currentPage?.startsWith('ferramentas')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span>Ferramentas</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0DF205] animate-pulse" />
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ferramentas' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ferramentas' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 mt-1 bg-[#111815] border border-[#0DF205]/30 rounded-xl p-3 shadow-2xl backdrop-blur-xl z-50 flex flex-col gap-1.5"
                  >
                    <a
                      href="#ferramentas-vision"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('ferramentas-vision');
                      }}
                      className="block p-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#0DF205] font-bold">Vision</span>
                          <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.2 rounded font-bold">ATIVO</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0DF205]" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Auditoria técnica & visibilidade para IA</p>
                    </a>

                    <a
                      href="#ferramentas-alfredo"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('ferramentas-alfredo');
                      }}
                      className="block p-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="text-white font-bold">Alfredo</span>
                          <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.2 rounded font-bold">EM BREVE</span>
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0DF205]" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Gestão inteligente de times e operações</p>
                    </a>

                    <div className="pt-2 border-t border-white/10 mt-1">
                      <button
                        onClick={() => handleLinkClick('ferramentas')}
                        className="w-full py-1.5 text-center text-xs font-bold text-[#0DF205] hover:underline"
                      >
                        Ver Ecossistema Completo →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleLinkClick('cases')}
              className="px-3 py-2 text-white/90 font-normal tracking-wide hover:text-[#0DF205] transition-colors cursor-pointer"
            >
              Cases
            </button>

            <button
              onClick={() => handleLinkClick('blog')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                currentPage === 'blog' || currentPage === 'blog-post'
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleLinkClick('partners')}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                currentPage === 'partners'
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Partners
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-cta-solicite-diagnostico"
              href="https://vision.preditiva.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-[11px] lg:text-[12px] font-familjen tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 transform hover:scale-[1.03] shadow-[0_0_20px_rgba(13,242,5,0.4)] cursor-pointer inline-flex items-center whitespace-nowrap"
            >
              <span className="relative z-10 whitespace-nowrap">
                SOLICITE UM DIAGNÓSTICO
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-cta-diagnostico"
              href="https://vision.preditiva.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0DF205] text-[#000604] text-[10px] font-bold font-familjen px-3 py-1.5 rounded-full uppercase whitespace-nowrap"
            >
              Diagnóstico
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#0DF205] transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#000604]/98 border-b border-white/10 px-6 py-6 font-familjen space-y-4"
          >
            <div className="flex flex-col space-y-3 text-lg">
              <button
                onClick={() => handleLinkClick('home')}
                className={`text-left font-medium py-1 ${currentPage === 'home' ? 'text-[#0DF205]' : 'text-white/90 hover:text-[#0DF205]'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('metodologia')}
                className={`text-left font-medium py-1 ${currentPage === 'metodologia' ? 'text-[#0DF205]' : 'text-white/90 hover:text-[#0DF205]'}`}
              >
                Metodologia
              </button>
              
              <div className="pt-1 pb-1 border-y border-white/5 space-y-1.5 pl-2">
                <div className="text-xs uppercase text-[#0DF205] font-bold tracking-wider pt-1">
                  Frentes de Atuação
                </div>
                <button
                  onClick={() => handleLinkClick('frentes-aceleradora')}
                  className={`text-left text-sm block w-full py-1 ${currentPage === 'frentes-aceleradora' ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  • Aceleradora de E-commerce
                </button>
                <button
                  onClick={() => handleLinkClick('frentes-consultoria')}
                  className={`text-left text-sm block w-full py-1 ${currentPage === 'frentes-consultoria' ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  • Consultoria Estratégica
                </button>
                <button
                  onClick={() => handleLinkClick('frentes-especialistas')}
                  className={`text-left text-sm block w-full py-1 ${currentPage === 'frentes-especialistas' ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  • Especialistas Dedicados
                </button>
              </div>

              <div className="pt-1 pb-1 border-b border-white/5 space-y-1.5 pl-2">
                <div className="text-xs uppercase text-[#0DF205] font-bold tracking-wider pt-1">
                  Especialidades
                </div>
                {[
                  { name: 'SEO Técnico', id: 'especialidade-seo' },
                  { name: 'Mídia Paga & CAPI', id: 'especialidade-midia' },
                  { name: 'CRM & Retenção', id: 'especialidade-crm' },
                  { name: 'Dados & GA4', id: 'especialidade-dados' },
                  { name: 'Dev & Infraestrutura', id: 'especialidade-dev' },
                  { name: 'CRO & Growth', id: 'especialidade-growth' },
                ].map((esp) => (
                  <button
                    key={esp.id}
                    onClick={() => handleLinkClick(esp.id)}
                    className={`text-left text-sm block w-full py-1 ${currentPage === esp.id ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                  >
                    • {esp.name}
                  </button>
                ))}
              </div>
              <div className="py-2 border-y border-white/5 space-y-1">
                <div className="text-xs font-mono text-[#0DF205] uppercase tracking-wider font-bold">
                  Ferramentas (Ecosistema)
                </div>
                <button
                  onClick={() => handleLinkClick('ferramentas-vision')}
                  className={`text-left text-sm block w-full py-1 flex items-center justify-between ${currentPage === 'ferramentas-vision' ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  <span>• Vision (AI Search Readiness)</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">ATIVO</span>
                </button>
                <button
                  onClick={() => handleLinkClick('ferramentas-alfredo')}
                  className={`text-left text-sm block w-full py-1 flex items-center justify-between ${currentPage === 'ferramentas-alfredo' ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  <span>• Alfredo (Gestão com IA)</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">EM BREVE</span>
                </button>
                <button
                  onClick={() => handleLinkClick('ferramentas')}
                  className="text-left text-xs text-[#0DF205] font-bold py-1 hover:underline block"
                >
                  Ver Todas as Ferramentas →
                </button>
              </div>
              <button
                onClick={() => handleLinkClick('cases')}
                className="text-left text-white/90 hover:text-[#0DF205] py-1"
              >
                Cases de Sucesso
              </button>
              <button
                onClick={() => handleLinkClick('blog')}
                className={`text-left py-1 transition-colors ${
                  currentPage === 'blog' || currentPage === 'blog-post'
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 hover:text-[#0DF205]'
                }`}
              >
                Blog & Insights
              </button>
              <button
                onClick={() => handleLinkClick('partners')}
                className={`text-left py-1 transition-colors ${
                  currentPage === 'partners'
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 hover:text-[#0DF205]'
                }`}
              >
                Partners
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="text-left text-white/90 hover:text-[#0DF205] py-1"
              >
                Perguntas Frequentes
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                id="mobile-drawer-cta-solicitar-diagnostico"
                href="https://vision.preditiva.co/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#0DF205] text-[#000604] font-bold text-sm uppercase py-3 rounded-lg text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(13,242,5,0.3)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Diagnóstico Gratuito</span>
              </a>
              <a
                href="https://wa.me/5511975944739"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white/5 border border-white/20 text-white font-medium text-sm py-3 rounded-lg text-center flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <Phone className="w-4 h-4 text-[#0DF205]" />
                <span>(11) 97594-4739 (WhatsApp)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
