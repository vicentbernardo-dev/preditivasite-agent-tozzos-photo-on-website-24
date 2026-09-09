import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RouteScrollManager } from './components/RouteScrollManager';
import { HomePage } from './components/HomePage';
import { MethodologyPage } from './components/MethodologyPage';
import { ConsultoriaPage } from './components/ConsultoriaPage';
import { EspecialistasPage } from './components/EspecialistasPage';
import { AceleradoraPage } from './components/AceleradoraPage';
import { SEOPage } from './components/SEOPage';
import { MidiaPage } from './components/MidiaPage';
import { CRMPage } from './components/CRMPage';
import { DadosPage } from './components/DadosPage';
import { DevPage } from './components/DevPage';
import { GrowthPage } from './components/GrowthPage';
import { CasesPage } from './components/CasesPage';
import { CaseMiamiPage } from './components/CaseMiamiPage';
import { CaseGtexPage } from './components/CaseGtexPage';
import { CaseMasterPage } from './components/CaseMasterPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { PartnersPage } from './components/PartnersPage';
import { ToolsPage } from './components/ToolsPage';
import { VisionDetailModal } from './components/VisionDetailModal';
import { AlfredoDetailModal } from './components/AlfredoDetailModal';

import { LiveAuditModal } from './components/LiveAuditModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';

import { CaseStudy, ServiceCard } from './types';
import { HOME_SECTION_IDS, PATHS } from './routes';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  const navigate = useNavigate();

  // Modal states
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const [isAlfredoModalOpen, setIsAlfredoModalOpen] = useState(false);
  const [auditData, setAuditData] = useState<{ name?: string; email?: string; url?: string } | undefined>(undefined);

  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenAuditModal = (initialData?: { name?: string; email?: string; url?: string }) => {
    setAuditData(initialData);
    setIsAuditModalOpen(true);
  };

  // Scrolls to a section of the current page, or goes back to the home page
  // when the section only exists there.
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (HOME_SECTION_IDS.includes(sectionId)) {
      navigate(`${PATHS.home}#${sectionId}`);
    }
  };

  const handleRunAuditFromSection = (data: { name: string; email: string; url: string }) => {
    showToast(`Diagnóstico iniciado para ${data.url}!`);
    handleOpenAuditModal(data);
  };

  const handleCtaLeadSuccess = (lead: { name: string; email: string; company: string; role: string }) => {
    showToast(`Obrigado, ${lead.name}! Recebemos sua solicitação.`);
  };

  return (
    <div className="min-h-screen bg-[#000604] text-white font-familjen flex flex-col selection:bg-[#0DF205] selection:text-black">
      {/* Keeps scroll position and legacy hash links in sync with the router */}
      <RouteScrollManager />

      {/* Header Navigation */}
      <Navbar
        onOpenAuditModal={() => handleOpenAuditModal()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area — one route per page of the site */}
      <main className="flex-grow">
        <Routes>
          <Route
            path={PATHS.home}
            element={
              <HomePage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onNavigateSection={handleNavigateSection}
                onRunAudit={handleRunAuditFromSection}
                onSelectCase={(cs) => setSelectedCase(cs)}
                onSelectService={(service) => setSelectedService(service)}
                onOpenVisionModal={() => setIsVisionModalOpen(true)}
                onOpenAlfredoModal={() => setIsAlfredoModalOpen(true)}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />

          <Route
            path={PATHS.metodologia}
            element={
              <MethodologyPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onSelectService={(service) => setSelectedService(service)}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />

          {/* Frentes de atuação */}
          <Route
            path={PATHS.frentesAceleradora}
            element={
              <AceleradoraPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.frentesConsultoria}
            element={
              <ConsultoriaPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.frentesEspecialistas}
            element={
              <EspecialistasPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />

          {/* Especialidades técnicas */}
          <Route
            path={PATHS.especialidadeSeo}
            element={
              <SEOPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.especialidadeMidia}
            element={
              <MidiaPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.especialidadeCrm}
            element={
              <CRMPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.especialidadeDados}
            element={
              <DadosPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.especialidadeDev}
            element={
              <DevPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />
          <Route
            path={PATHS.especialidadeGrowth}
            element={
              <GrowthPage
                onOpenAuditModal={() => handleOpenAuditModal()}
                onLeadSuccess={handleCtaLeadSuccess}
              />
            }
          />

          {/* Cases */}
          <Route path={PATHS.cases} element={<CasesPage onOpenAuditModal={() => handleOpenAuditModal()} />} />
          <Route path={PATHS.caseMiami} element={<CaseMiamiPage onOpenAuditModal={() => handleOpenAuditModal()} />} />
          <Route path={PATHS.caseGtex} element={<CaseGtexPage onOpenAuditModal={() => handleOpenAuditModal()} />} />
          <Route path={PATHS.caseMaster} element={<CaseMasterPage onOpenAuditModal={() => handleOpenAuditModal()} />} />

          {/* Blog */}
          <Route path={PATHS.blog} element={<BlogPage onOpenAuditModal={() => handleOpenAuditModal()} />} />
          <Route path={`${PATHS.blog}/:slug`} element={<BlogPostPage onOpenAuditModal={() => handleOpenAuditModal()} />} />

          <Route path={PATHS.partners} element={<PartnersPage onOpenAuditModal={() => handleOpenAuditModal()} />} />

          {/* Ecossistema de ferramentas */}
          <Route
            path={PATHS.ferramentas}
            element={<ToolsPage activeTab="all" onOpenAuditModal={() => handleOpenAuditModal()} />}
          />
          <Route
            path={PATHS.ferramentasVision}
            element={<ToolsPage activeTab="vision" onOpenAuditModal={() => handleOpenAuditModal()} />}
          />
          <Route
            path={PATHS.ferramentasAlfredo}
            element={<ToolsPage activeTab="alfredo" onOpenAuditModal={() => handleOpenAuditModal()} />}
          />

          {/* Unknown URL: back to the home page */}
          <Route path="*" element={<Navigate to={PATHS.home} replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAuditModal={() => handleOpenAuditModal()}
      />

      {/* Floating Action Button for WhatsApp / Rapid Contact */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/5511975944739?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Preditiva%20e%20gostaria%20de%20um%20diagn%C3%B3stico%20t%C3%A9cnico."
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-[#0DF205] text-[#000604] rounded-full shadow-[0_0_25px_rgba(13,242,5,0.5)] hover:scale-110 transition-transform duration-200 flex items-center justify-center cursor-pointer group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
            Fale Conosco
          </span>
        </a>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#111815] border border-[#0DF205] text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in font-familjen text-sm">
          <Sparkles className="w-4 h-4 text-[#0DF205]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MODALS */}
      {/* Live Technical Audit Scanner Modal */}
      <LiveAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        initialData={auditData}
      />

      {/* Full Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onOpenAudit={() => {
          setSelectedCase(null);
          setIsAuditModalOpen(true);
        }}
      />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenAudit={() => {
          setSelectedService(null);
          setIsAuditModalOpen(true);
        }}
      />

      {/* Vision Technical Diagnostics Modal */}
      <VisionDetailModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
        onRunAudit={(domain) => {
          setIsVisionModalOpen(false);
          handleOpenAuditModal({ url: domain });
        }}
      />

      {/* Alfredo Squad Copilot Modal */}
      <AlfredoDetailModal
        isOpen={isAlfredoModalOpen}
        onClose={() => setIsAlfredoModalOpen(false)}
        onSuccessWaitlist={(name) => {
          showToast(`Perfeito, ${name}! Você está na lista de espera VIP do Alfredo.`);
        }}
      />
    </div>
  );
}
