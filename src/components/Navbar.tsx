import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PATHS } from '../routes';

interface NavbarProps {
  onOpenAuditModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditModal,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

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

  // Highlight state now comes from the URL instead of a page state.
  const isCurrent = (path: string) => pathname === path;
  const isInSection = (prefix: string) => pathname.startsWith(prefix);

  const closeMenus = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMenus();
    onNavigateSection(sectionId);
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
          <Link
            to={PATHS.home}
            onClick={closeMenus}
            className="group flex items-center focus:outline-none"
            aria-label="Preditiva Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-familjen text-[15px] xl:text-[16px]">
            <Link
              to={PATHS.home}
              onClick={closeMenus}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                isCurrent(PATHS.home)
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Home
            </Link>

            <Link
              to={PATHS.metodologia}
              onClick={closeMenus}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                isCurrent(PATHS.metodologia)
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Metodologia
            </Link>

            {/* Dropdown: Frentes */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('frentes')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={PATHS.frentesConsultoria}
                onClick={closeMenus}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  isInSection('/frentes')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span>Frentes</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'frentes' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === 'frentes' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 mt-1 bg-[#111815] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl z-50"
                  >
                    <Link
                      to={PATHS.frentesAceleradora}
                      onClick={closeMenus}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        isCurrent(PATHS.frentesAceleradora) ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={isCurrent(PATHS.frentesAceleradora) ? 'text-[#0DF205]' : ''}>Aceleradora de E-commerce</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Operação completa de ponta a ponta</p>
                    </Link>
                    <Link
                      to={PATHS.frentesConsultoria}
                      onClick={closeMenus}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        isCurrent(PATHS.frentesConsultoria) ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={isCurrent(PATHS.frentesConsultoria) ? 'text-[#0DF205]' : ''}>Consultoria Estratégica</span>
                        <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">HOT</span>
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Direção técnica e governança de dados</p>
                    </Link>
                    <Link
                      to={PATHS.frentesEspecialistas}
                      onClick={closeMenus}
                      className={`block p-2.5 rounded-lg hover:bg-white/5 group transition-colors ${
                        isCurrent(PATHS.frentesEspecialistas) ? 'bg-white/10 border border-[#0DF205]/30' : ''
                      }`}
                    >
                      <div className="text-white font-medium group-hover:text-[#0DF205] text-sm flex items-center justify-between">
                        <span className={isCurrent(PATHS.frentesEspecialistas) ? 'text-[#0DF205]' : ''}>Especialistas Dedicados</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">Squad sênior on demand para gargalos</p>
                    </Link>
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
              <Link
                to={PATHS.especialidadeSeo}
                onClick={closeMenus}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  isInSection('/especialidades')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span>Especialidade</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'especialidade' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </Link>

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
                      { name: 'SEO Técnico', desc: 'Core Web Vitals & Tráfego', path: PATHS.especialidadeSeo },
                      { name: 'Mídia & CAPI', desc: 'Atribuição e ROAS', path: PATHS.especialidadeMidia },
                      { name: 'CRM & Retenção', desc: 'LTV & Automações', path: PATHS.especialidadeCrm },
                      { name: 'Dados & GA4', desc: 'Telemetria e BI', path: PATHS.especialidadeDados },
                      { name: 'Dev & Infra', desc: 'Sustentação e Código', path: PATHS.especialidadeDev },
                      { name: 'CRO & Growth', desc: 'Otimização de Taxa', path: PATHS.especialidadeGrowth },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={closeMenus}
                        className={`p-2 rounded-lg hover:bg-white/5 transition-colors group ${
                          isCurrent(item.path) ? 'bg-white/10 border border-[#0DF205]/30' : ''
                        }`}
                      >
                        <div className={`text-xs font-bold ${isCurrent(item.path) ? 'text-[#0DF205]' : 'text-white group-hover:text-[#0DF205]'}`}>
                          {item.name}
                        </div>
                        <div className="text-[11px] text-white/50">{item.desc}</div>
                      </Link>
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
              <Link
                to={PATHS.ferramentas}
                onClick={closeMenus}
                className={`flex items-center gap-1 px-3 py-2 tracking-wide transition-colors cursor-pointer ${
                  isInSection('/ferramentas')
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 font-normal hover:text-[#0DF205]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span>Ferramentas</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0DF205] animate-pulse" />
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ferramentas' ? 'rotate-180 text-[#0DF205]' : ''}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === 'ferramentas' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 mt-1 bg-[#111815] border border-[#0DF205]/30 rounded-xl p-3 shadow-2xl backdrop-blur-xl z-50 flex flex-col gap-1.5"
                  >
                    <Link
                      to={PATHS.ferramentasVision}
                      onClick={closeMenus}
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
                    </Link>

                    <Link
                      to={PATHS.ferramentasAlfredo}
                      onClick={closeMenus}
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
                    </Link>

                    <div className="pt-2 border-t border-white/10 mt-1">
                      <Link
                        to={PATHS.ferramentas}
                        onClick={closeMenus}
                        className="block w-full py-1.5 text-center text-xs font-bold text-[#0DF205] hover:underline"
                      >
                        Ver Ecossistema Completo →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to={PATHS.cases}
              onClick={closeMenus}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                isInSection(PATHS.cases)
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Cases
            </Link>

            <Link
              to={PATHS.blog}
              onClick={closeMenus}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                isInSection(PATHS.blog)
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Blog
            </Link>

            <Link
              to={PATHS.partners}
              onClick={closeMenus}
              className={`px-3 py-2 transition-colors cursor-pointer ${
                isCurrent(PATHS.partners)
                  ? 'text-[#0DF205] font-bold'
                  : 'text-white/90 font-normal hover:text-[#0DF205]'
              }`}
            >
              Partners
            </Link>
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
              <Link
                to={PATHS.home}
                onClick={closeMenus}
                className={`text-left font-medium py-1 ${isCurrent(PATHS.home) ? 'text-[#0DF205]' : 'text-white/90 hover:text-[#0DF205]'}`}
              >
                Home
              </Link>
              <Link
                to={PATHS.metodologia}
                onClick={closeMenus}
                className={`text-left font-medium py-1 ${isCurrent(PATHS.metodologia) ? 'text-[#0DF205]' : 'text-white/90 hover:text-[#0DF205]'}`}
              >
                Metodologia
              </Link>

              <div className="pt-1 pb-1 border-y border-white/5 space-y-1.5 pl-2">
                <div className="text-xs uppercase text-[#0DF205] font-bold tracking-wider pt-1">
                  Frentes de Atuação
                </div>
                {[
                  { name: 'Aceleradora de E-commerce', path: PATHS.frentesAceleradora },
                  { name: 'Consultoria Estratégica', path: PATHS.frentesConsultoria },
                  { name: 'Especialistas Dedicados', path: PATHS.frentesEspecialistas },
                ].map((frente) => (
                  <Link
                    key={frente.path}
                    to={frente.path}
                    onClick={closeMenus}
                    className={`text-left text-sm block w-full py-1 ${isCurrent(frente.path) ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                  >
                    • {frente.name}
                  </Link>
                ))}
              </div>

              <div className="pt-1 pb-1 border-b border-white/5 space-y-1.5 pl-2">
                <div className="text-xs uppercase text-[#0DF205] font-bold tracking-wider pt-1">
                  Especialidades
                </div>
                {[
                  { name: 'SEO Técnico', path: PATHS.especialidadeSeo },
                  { name: 'Mídia Paga & CAPI', path: PATHS.especialidadeMidia },
                  { name: 'CRM & Retenção', path: PATHS.especialidadeCrm },
                  { name: 'Dados & GA4', path: PATHS.especialidadeDados },
                  { name: 'Dev & Infraestrutura', path: PATHS.especialidadeDev },
                  { name: 'CRO & Growth', path: PATHS.especialidadeGrowth },
                ].map((esp) => (
                  <Link
                    key={esp.path}
                    to={esp.path}
                    onClick={closeMenus}
                    className={`text-left text-sm block w-full py-1 ${isCurrent(esp.path) ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                  >
                    • {esp.name}
                  </Link>
                ))}
              </div>
              <div className="py-2 border-y border-white/5 space-y-1">
                <div className="text-xs font-mono text-[#0DF205] uppercase tracking-wider font-bold">
                  Ferramentas (Ecosistema)
                </div>
                <Link
                  to={PATHS.ferramentasVision}
                  onClick={closeMenus}
                  className={`text-left text-sm block w-full py-1 flex items-center justify-between ${isCurrent(PATHS.ferramentasVision) ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  <span>• Vision (AI Search Readiness)</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">ATIVO</span>
                </Link>
                <Link
                  to={PATHS.ferramentasAlfredo}
                  onClick={closeMenus}
                  className={`text-left text-sm block w-full py-1 flex items-center justify-between ${isCurrent(PATHS.ferramentasAlfredo) ? 'text-[#0DF205] font-bold' : 'text-white/80 hover:text-[#0DF205]'}`}
                >
                  <span>• Alfredo (Gestão com IA)</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.5 rounded font-bold">EM BREVE</span>
                </Link>
                <Link
                  to={PATHS.ferramentas}
                  onClick={closeMenus}
                  className="text-left text-xs text-[#0DF205] font-bold py-1 hover:underline block"
                >
                  Ver Todas as Ferramentas →
                </Link>
              </div>
              <Link
                to={PATHS.cases}
                onClick={closeMenus}
                className={`text-left py-1 transition-colors ${
                  isInSection(PATHS.cases) ? 'text-[#0DF205] font-bold' : 'text-white/90 hover:text-[#0DF205]'
                }`}
              >
                Cases de Sucesso
              </Link>
              <Link
                to={PATHS.blog}
                onClick={closeMenus}
                className={`text-left py-1 transition-colors ${
                  isInSection(PATHS.blog)
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 hover:text-[#0DF205]'
                }`}
              >
                Blog & Insights
              </Link>
              <Link
                to={PATHS.partners}
                onClick={closeMenus}
                className={`text-left py-1 transition-colors ${
                  isCurrent(PATHS.partners)
                    ? 'text-[#0DF205] font-bold'
                    : 'text-white/90 hover:text-[#0DF205]'
                }`}
              >
                Partners
              </Link>
              <button
                onClick={() => handleSectionClick('faq')}
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
