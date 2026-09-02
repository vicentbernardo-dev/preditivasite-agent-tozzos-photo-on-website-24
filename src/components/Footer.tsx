import React from 'react';
import { Logo } from './Logo';
import { Phone, MapPin, ArrowUpRight, Send, MessageCircle } from 'lucide-react';

import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAuditModal: () => void;
  onNavigatePage?: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenAuditModal, onNavigatePage }) => {
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
                <button 
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('ferramentas');
                    else onNavigateSection('preditiva-tools-ecosystem');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#0DF205] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Ferramentas</span>
                  <span className="text-[10px] bg-[#0DF205]/20 text-[#0DF205] px-1.5 py-0.2 rounded font-bold">NOVO</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('blog');
                    else onNavigateSection('insights');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('contato')} className="hover:text-[#0DF205] transition-colors cursor-pointer">
                  Contato
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('metodologia');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  Metodologia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('partners');
                    else onNavigateSection('parceiros');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  Nossos Parceiros
                </button>
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
                <button 
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('partners');
                    else onOpenAuditModal();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  Seja um parceiro
                </button>
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
                  <button
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('frentes-aceleradora');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Aceleradora de E-commerce
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('frentes-consultoria');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Consultoria Estratégica
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('frentes-especialistas');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#0DF205] transition-colors text-left cursor-pointer"
                  >
                    Especialistas Dedicados
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#0DF205] text-lg font-bold uppercase tracking-wide mb-3">
                CASES
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-white/90">
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('case-gtex');
                      else onNavigateSection('cases');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    GTEX
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('case-miami');
                      else onNavigateSection('cases');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    Miami Ad School
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('case-master');
                      else onNavigateSection('cases');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="hover:text-[#0DF205] transition-colors cursor-pointer"
                  >
                    Master Cidadania
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      if (onNavigatePage) onNavigatePage('cases');
                      else onNavigateSection('cases');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} 
                    className="text-[#0DF205] underline hover:text-white transition-colors cursor-pointer"
                  >
                    ver todos &gt;
                  </button>
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
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-seo');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  SEO TÉCNICO
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-crm');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  CRM & RETENÇÃO
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-midia');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  MÍDIA PAGA & CAPI
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-dados');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  DADOS & GA4
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-dev');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  DEV & INFRA
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('especialidade-growth');
                    else onNavigateSection('especialidades');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0DF205] transition-colors cursor-pointer"
                >
                  CRO & GROWTH
                </button>
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
