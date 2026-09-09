import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Phone, MapPin, ArrowUpRight, Send, MessageCircle } from 'lucide-react';

import { PATHS } from '../routes';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAuditModal }) => {
  return (
    <footer className="relative bg-[#000604] text-white pt-20 pb-12 border-t border-white/10 overflow-hidden font-familjen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Slogan & Socials (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <Logo size="lg" />

            <p className="text-sm sm:text-base text-[#D9D9D9] font-normal leading-relaxed tracking-wide uppercase max-w-sm">
              A CAMADA TÉCNICA QUE SEU NEGÓCIO PRECISA. <br />
              SOMOS A SUA ACELERADORA DIGITAL.
            </p>

            <div className="pt-2">
              <div className="text-[#0DF205] text-lg font-bold mb-3">
                Nossas redes
              </div>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5511975944739"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0DF205] hover:text-black text-white flex items-center justify-center transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0DF205] hover:text-black text-white flex items-center justify-center transition-all duration-200 font-bold text-sm"
                  aria-label="Instagram"
                >
                  IG
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0DF205] hover:text-black text-white flex items-center justify-center transition-all duration-200 font-bold text-sm"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0DF205] hover:text-black text-white flex items-center justify-center transition-all duration-200 font-bold text-sm"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Institucional (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-white/90">
              <li>
                <Link
                  to={PATHS.ferramentas}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Ferramentas</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.2 rounded font-bold">NOVO</span>
                </Link>
              </li>
              <li>
                <Link to={PATHS.blog} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contato')} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Contato
                </button>
              </li>
              <li>
                <Link to={PATHS.metodologia} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to={PATHS.partners} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Nossos Parceiros
                </Link>
              </li>
              <li>
                <a href="#cookies" onClick={(e) => { e.preventDefault(); alert('Política de Cookies atualizada conforme LGPD.'); }} className="hover:text-[#0DF205] transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#privacidade" onClick={(e) => { e.preventDefault(); alert('Política de Privacidade protegida pela Lei Geral de Proteção de Dados.'); }} className="hover:text-[#0DF205] transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <Link to={PATHS.partners} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Seja um parceiro
                </Link>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contato')} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Trabalhe conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Frentes & Cases (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide mb-4">
                Frentes
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-base text-white/90">
                <li>
                  <Link
                    to={PATHS.frentesAceleradora}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Aceleradora de E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    to={PATHS.frentesConsultoria}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Consultoria Estratégica
                  </Link>
                </li>
                <li>
                  <Link
                    to={PATHS.frentesEspecialistas}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Especialistas Dedicados
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide mb-3">
                CASES
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-white/90">
                <li>
                  <Link 
                    to={PATHS.caseGtex}
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    GTEX
                  </Link>
                </li>
                <li>
                  <Link 
                    to={PATHS.caseMiami}
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    Miami Ad School
                  </Link>
                </li>
                <li>
                  <Link 
                    to={PATHS.caseMaster}
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    Master Cidadania
                  </Link>
                </li>
                <li>
                  <Link 
                    to={PATHS.cases}
                    className="text-[#0DF205] underline hover:text-white transition-colors cursor-pointer"
                  >
                    ver todos &gt;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Especialidades (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide">
              ESPECIALIDADES
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-white/90 uppercase font-semibold">
              <li>
                <Link
                  to={PATHS.especialidadeSeo}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  SEO TÉCNICO
                </Link>
              </li>
              <li>
                <Link
                  to={PATHS.especialidadeCrm}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  CRM & RETENÇÃO
                </Link>
              </li>
              <li>
                <Link
                  to={PATHS.especialidadeMidia}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  MÍDIA PAGA & CAPI
                </Link>
              </li>
              <li>
                <Link
                  to={PATHS.especialidadeDados}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  DADOS & GA4
                </Link>
              </li>
              <li>
                <Link
                  to={PATHS.especialidadeDev}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  DEV & INFRA
                </Link>
              </li>
              <li>
                <Link
                  to={PATHS.especialidadeGrowth}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  CRO & GROWTH
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Dados de Contato (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide">
              Dados de contato
            </h4>
            <div className="space-y-4 text-sm sm:text-base text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#0DF205] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Av. Paulista, 1636 - Sala 1504 <br />
                  Bela Vista - São Paulo/SP <br />
                  CEP: 01310-200
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-5 h-5 text-[#0DF205] flex-shrink-0" />
                <a
                  href="https://wa.me/5511975944739"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0DF205] font-bold transition-colors"
                >
                  (11) 97594-4739
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 text-center">
          <p className="text-[#0DF205] text-sm sm:text-base font-normal">
            © 2026 Preditiva | Todos os direitos reservados
          </p>
        </div>

      </div>
    </footer>
  );
};
