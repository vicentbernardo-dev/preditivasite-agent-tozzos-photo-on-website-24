import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { FrictionPoints } from './components/FrictionPoints';
import { DiagnosticSection } from './components/DiagnosticSection';
import { RealResults } from './components/RealResults';
import { Testimonials } from './components/Testimonials';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { InsightsSection } from './components/InsightsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBottomSection } from './components/CtaBottomSection';
import { Footer } from './components/Footer';
const MethodologyPage = lazy(() => import('./components/MethodologyPage').then(({ MethodologyPage }) => ({ default: MethodologyPage })));
const ConsultoriaPage = lazy(() => import('./components/ConsultoriaPage').then(({ ConsultoriaPage }) => ({ default: ConsultoriaPage })));
const EspecialistasPage = lazy(() => import('./components/EspecialistasPage').then(({ EspecialistasPage }) => ({ default: EspecialistasPage })));
const AceleradoraPage = lazy(() => import('./components/AceleradoraPage').then(({ AceleradoraPage }) => ({ default: AceleradoraPage })));
const SEOPage = lazy(() => import('./components/SEOPage').then(({ SEOPage }) => ({ default: SEOPage })));
const MidiaPage = lazy(() => import('./components/MidiaPage').then(({ MidiaPage }) => ({ default: MidiaPage })));
const CRMPage = lazy(() => import('./components/CRMPage').then(({ CRMPage }) => ({ default: CRMPage })));
const DadosPage = lazy(() => import('./components/DadosPage').then(({ DadosPage }) => ({ default: DadosPage })));
const DevPage = lazy(() => import('./components/DevPage').then(({ DevPage }) => ({ default: DevPage })));
const GrowthPage = lazy(() => import('./components/GrowthPage').then(({ GrowthPage }) => ({ default: GrowthPage })));
const CasesPage = lazy(() => import('./components/CasesPage').then(({ CasesPage }) => ({ default: CasesPage })));
const CaseMiamiPage = lazy(() => import('./components/CaseMiamiPage').then(({ CaseMiamiPage }) => ({ default: CaseMiamiPage })));
const CaseGtexPage = lazy(() => import('./components/CaseGtexPage').then(({ CaseGtexPage }) => ({ default: CaseGtexPage })));
const CaseMasterPage = lazy(() => import('./components/CaseMasterPage').then(({ CaseMasterPage }) => ({ default: CaseMasterPage })));
const BlogPage = lazy(() => import('./components/BlogPage').then(({ BlogPage }) => ({ default: BlogPage })));
const BlogPostPage = lazy(() => import('./components/BlogPostPage').then(({ BlogPostPage }) => ({ default: BlogPostPage })));
const PartnersPage = lazy(() => import('./components/PartnersPage').then(({ PartnersPage }) => ({ default: PartnersPage })));
const ToolsPage = lazy(() => import('./components/ToolsPage').then(({ ToolsPage }) => ({ default: ToolsPage })));
import { ToolsSection } from './components/ToolsSection';
import { VisionDetailModal } from './components/VisionDetailModal';
import { AlfredoDetailModal } from './components/AlfredoDetailModal';

import { LiveAuditModal } from './components/LiveAuditModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ArticleModal } from './components/ArticleModal';
import { ServiceModal } from './components/ServiceModal';

import { CaseStudy, InsightArticle, ServiceCard, Specialty } from './types';
import { Sparkles, MessageCircle } from 'lucide-react';

const VALID_PAGES: PageRoute[] = [
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

// Resolve the initial page from the URL: supports clean paths (/metodologia,
// /blog, /blog/:slug) and legacy hash routes (#metodologia, #blog, ...).
const resolveRouteFromLocation = (): { page: PageRoute; slug?: string } => {
  // 1) Legacy hash-based routes (#blog, #metodologia, ...)
  const hash = window.location.hash.replace('#', '') as PageRoute;
  if (VALID_PAGES.includes(hash)) {
    return { page: hash };
  }

  // 2) Clean path-based routes (/metodologia, /blog, /blog/:slug, ...)
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/') {
    return { page: 'home' };
  }

  const segments = path.split('/').filter(Boolean);
  const first = segments[0];

  if (first === 'blog' && segments.length >= 2 && segments[1]) {
    return { page: 'blog-post', slug: decodeURIComponent(segments[1]) };
  }

  if (VALID_PAGES.includes(first as PageRoute)) {
    return { page: first as PageRoute };
  }

  return { page: 'home' };
};

export default function App() {
  // Page state: 'home' | 'metodologia' | 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas' | 'especialidade-seo' | 'especialidade-midia' | 'especialidade-crm' | 'especialidade-dados' | 'especialidade-dev' | 'especialidade-growth'
  const initialRoute = resolveRouteFromLocation();
  const [currentPage, setCurrentPage] = useState<PageRoute>(initialRoute.page);
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(initialRoute.slug);

  // Modal states
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);
  const [isAlfredoModalOpen, setIsAlfredoModalOpen] = useState(false);
  const [auditData, setAuditData] = useState<{ name?: string; email?: string; url?: string } | undefined>(undefined);
  
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const popRoute = resolveRouteFromLocation();
      setCurrentPage(popRoute.page);
      setCurrentSlug(popRoute.slug);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keep the address bar in sync with the current page (clean URLs)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // '/blog-post' não é uma URL real: sem slug não há o que sincronizar
    if (currentPage === 'blog-post' && !currentSlug) {
      return;
    }
    const target =
      currentPage === 'blog-post' && currentSlug
        ? `/blog/${encodeURIComponent(currentSlug)}`
        : currentPage === 'home'
          ? '/'
          : `/${currentPage}`;
    if (window.location.pathname !== target) {
      window.history.pushState({}, '', target);
    }
  }, [currentPage, currentSlug]);

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

  const handleNavigateSection = (sectionId: string) => {
    if (VALID_PAGES.includes(sectionId as PageRoute)) {
      setCurrentPage(sectionId as PageRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If section is on another page, switch to home first
      if (['solucoes', 'gargalos', 'diagnostico', 'cases', 'depoimentos', 'especialidades', 'insights', 'faq', 'contato'].includes(sectionId)) {
        setCurrentPage('home');
        setTimeout(() => {
          const targetElement = document.getElementById(sectionId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleRunAuditFromSection = (data: { name: string; email: string; url: string }) => {
    showToast(`Diagnóstico iniciado para ${data.url}!`);
    handleOpenAuditModal(data);
  };

  const handleCtaLeadSuccess = (lead: { name: string; email: string; company: string; role: string }) => {
    showToast(`Obrigado, ${lead.name}! Recebemos sua solicitação.`);
  };

  // Navegação centralizada: mantém página, slug e URL sempre consistentes.
  // O slug é obrigatório ao abrir um post (evita URLs genéricas /blog-post).
  const navigate = (page: PageRoute, slug?: string) => {
    setCurrentPage(page);
    setCurrentSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#000604] text-white font-familjen flex flex-col selection:bg-[#0DF205] selection:text-black">
      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={navigate}
                onOpenAuditModal={() => handleOpenAuditModal()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <Suspense fallback={null}>
      <main className="flex-grow">
        {currentPage === 'metodologia' && (
          <MethodologyPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onSelectService={(service) => {
              if (service.id === 'aceleradora') setCurrentPage('frentes-aceleradora');
              else if (service.id === 'consultoria') setCurrentPage('frentes-consultoria');
              else if (service.id === 'especialistas') setCurrentPage('frentes-especialistas');
              else setSelectedService(service);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSpecialty={(specTitle) => {
              showToast(`Especialidade selecionada: ${specTitle}`);
              handleOpenAuditModal();
            }}
            onLeadSuccess={handleCtaLeadSuccess}
            onNavigateFrente={(frentePage) => {
              setCurrentPage(frentePage);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateSpecialty={(specPage) => {
              setCurrentPage(specPage);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'frentes-aceleradora' && (
          <AceleradoraPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'frentes-consultoria' && (
          <ConsultoriaPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'frentes-especialistas' && (
          <EspecialistasPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-seo' && (
          <SEOPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-midia' && (
          <MidiaPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-crm' && (
          <CRMPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-dados' && (
          <DadosPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-dev' && (
          <DevPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'especialidade-growth' && (
          <GrowthPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            onLeadSuccess={handleCtaLeadSuccess}
          />
        )}

        {currentPage === 'cases' && (
          <CasesPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'case-miami' && (
          <CaseMiamiPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'case-gtex' && (
          <CaseGtexPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'case-master' && (
          <CaseMasterPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'blog-post' && (
          <BlogPostPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
            slug={currentSlug}
          />
        )}

        {currentPage === 'partners' && (
          <PartnersPage
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {(currentPage === 'ferramentas' || currentPage === 'ferramentas-vision' || currentPage === 'ferramentas-alfredo') && (
          <ToolsPage
            initialTab={
              currentPage === 'ferramentas-vision'
                ? 'vision'
                : currentPage === 'ferramentas-alfredo'
                ? 'alfredo'
                : 'all'
            }
            onOpenAuditModal={() => handleOpenAuditModal()}
            onNavigatePage={navigate}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onOpenAuditModal={() => handleOpenAuditModal()}
              onNavigateSection={handleNavigateSection}
            />

            {/* Soluções para o Crescimento do Seu Negócio (COMO ATUAMOS) */}
            <SolutionsSection
              onSelectService={(service) => {
                if (service.id === 'aceleradora') {
                  setCurrentPage('frentes-aceleradora');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (service.id === 'consultoria') {
                  setCurrentPage('frentes-consultoria');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (service.id === 'especialistas') {
                  setCurrentPage('frentes-especialistas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setSelectedService(service);
                }
              }}
            />

            {/* Nova Seção de Ferramentas (Preditiva Tools Ecosystem) */}
            <ToolsSection
              onOpenVisionModal={() => setIsVisionModalOpen(true)}
              onOpenAlfredoModal={() => setIsAlfredoModalOpen(true)}
              onOpenAuditModal={() => handleOpenAuditModal()}
            />

            {/* Os Pontos de Fricção (Gargalos) */}
            <FrictionPoints
              onOpenAuditModal={() => handleOpenAuditModal()}
            />

            {/* Diagnóstico Gratuito Form & Live Audit Trigger */}
            <DiagnosticSection
              onRunAudit={handleRunAuditFromSection}
            />

            {/* Resultados Reais (Cases) */}
            <RealResults
              onSelectCase={(cs) => setSelectedCase(cs)}
              onOpenAuditModal={() => handleOpenAuditModal()}
              onNavigatePage={navigate}
              
            />

            {/* Depoimentos (Testimonials) */}
            <Testimonials />

            {/* Especialidades Técnicas da Preditiva */}
            <SpecialtiesSection
              onSelectSpecialty={(spec) => {
                // select specialty
              }}
              onOpenContact={() => handleOpenAuditModal()}
              onNavigateSpecialty={(route) => {
                setCurrentPage(route);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Insights (Blog) */}
            <InsightsSection
              onSelectArticle={(art) => setSelectedArticle(art)}
              onNavigatePage={navigate}
              
            />

            {/* Perguntas Frequentes (FAQ) */}
            <FaqSection />

            {/* Bottom Lead Capture CTA */}
            <CtaBottomSection
              onSuccessSubmit={handleCtaLeadSuccess}
            />
          </>
        )}
      </main>
      </Suspense>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAuditModal={() => handleOpenAuditModal()}
        onNavigatePage={navigate}
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

      {/* Full Insight Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAudit={() => {
          setSelectedArticle(null);
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
