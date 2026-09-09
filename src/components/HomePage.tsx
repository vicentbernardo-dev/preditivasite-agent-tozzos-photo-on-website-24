import React from 'react';
import { Hero } from './Hero';
import { SolutionsSection } from './SolutionsSection';
import { ToolsSection } from './ToolsSection';
import { FrictionPoints } from './FrictionPoints';
import { DiagnosticSection } from './DiagnosticSection';
import { RealResults } from './RealResults';
import { Testimonials } from './Testimonials';
import { SpecialtiesSection } from './SpecialtiesSection';
import { InsightsSection } from './InsightsSection';
import { FaqSection } from './FaqSection';
import { CtaBottomSection } from './CtaBottomSection';
import { CaseStudy, ServiceCard } from '../types';

interface HomePageProps {
  onOpenAuditModal: () => void;
  onNavigateSection: (sectionId: string) => void;
  onRunAudit: (data: { name: string; email: string; url: string }) => void;
  onSelectCase: (caseStudy: CaseStudy) => void;
  onSelectService: (service: ServiceCard) => void;
  onOpenVisionModal: () => void;
  onOpenAlfredoModal: () => void;
  onLeadSuccess: (lead: { name: string; email: string; company: string; role: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAuditModal,
  onNavigateSection,
  onRunAudit,
  onSelectCase,
  onSelectService,
  onOpenVisionModal,
  onOpenAlfredoModal,
  onLeadSuccess,
}) => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenAuditModal={onOpenAuditModal}
        onNavigateSection={onNavigateSection}
      />

      {/* Soluções para o Crescimento do Seu Negócio (COMO ATUAMOS) */}
      <SolutionsSection onSelectService={onSelectService} />

      {/* Nova Seção de Ferramentas (Preditiva Tools Ecosystem) */}
      <ToolsSection
        onOpenVisionModal={onOpenVisionModal}
        onOpenAlfredoModal={onOpenAlfredoModal}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* Os Pontos de Fricção (Gargalos) */}
      <FrictionPoints onOpenAuditModal={onOpenAuditModal} />

      {/* Diagnóstico Gratuito Form & Live Audit Trigger */}
      <DiagnosticSection onRunAudit={onRunAudit} />

      {/* Resultados Reais (Cases) */}
      <RealResults onSelectCase={onSelectCase} />

      {/* Depoimentos (Testimonials) */}
      <Testimonials />

      {/* Especialidades Técnicas da Preditiva */}
      <SpecialtiesSection onOpenContact={onOpenAuditModal} />

      {/* Insights (Blog) */}
      <InsightsSection />

      {/* Perguntas Frequentes (FAQ) */}
      <FaqSection />

      {/* Bottom Lead Capture CTA */}
      <CtaBottomSection onSuccessSubmit={onLeadSuccess} />
    </>
  );
};
