import React from 'react';
import { MethodologyHero } from './MethodologyHero';
import { MethodologyAbout } from './MethodologyAbout';
import { MethodologySteps } from './MethodologySteps';
import { MethodologyFrentes } from './MethodologyFrentes';
import { MethodologyPilares } from './MethodologyPilares';
import { MethodologySpecialties } from './MethodologySpecialties';
import { MethodologyLeadership } from './MethodologyLeadership';
import { MethodologyTestimonials } from './MethodologyTestimonials';
import { MethodologyFaq } from './MethodologyFaq';
import { MethodologyCta } from './MethodologyCta';
import { ServiceCard } from '../types';
import { PageRoute } from './Navbar';

interface MethodologyPageProps {
  onOpenAuditModal: () => void;
  onSelectService?: (service: ServiceCard) => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onLeadSuccess?: (data: { name: string; email: string; company: string; role: string }) => void;
  onNavigateFrente?: (frentePage: 'frentes-aceleradora' | 'frentes-consultoria' | 'frentes-especialistas') => void;
  onNavigateSpecialty?: (route: PageRoute) => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({
  onOpenAuditModal,
  onSelectService,
  onSelectSpecialty,
  onLeadSuccess,
  onNavigateFrente,
  onNavigateSpecialty,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* 1. Hero */}
      <MethodologyHero onOpenAuditModal={onOpenAuditModal} />

      {/* 2. O Que É a Metodologia Preditiva */}
      <MethodologyAbout />

      {/* 3. Como Funciona Nossa Metodologia (4 steps) */}
      <MethodologySteps />

      {/* 4. Frentes de Atuação para Escalar o Seu Negócio (3 cards) */}
      <MethodologyFrentes
        onSelectService={onSelectService}
        onOpenAuditModal={onOpenAuditModal}
        onNavigateFrente={onNavigateFrente}
      />

      {/* 5. Os Pilares da Metodologia Preditiva (High contrast white bg) */}
      <MethodologyPilares />

      {/* 6. Especialidades Técnicas da Preditiva (High contrast white bg with 6 cards) */}
      <MethodologySpecialties
        onOpenAuditModal={onOpenAuditModal}
        onSelectSpecialty={onSelectSpecialty}
        onNavigateSpecialty={onNavigateSpecialty}
      />

      {/* 7. Liderança com DNA Técnico (Ademar Tozzo) */}
      <MethodologyLeadership onOpenContact={onOpenAuditModal} />

      {/* 8. Depoimentos (Paulo Henrique & Edu Sato) */}
      <MethodologyTestimonials />

      {/* 9. Perguntas Frequentes */}
      <MethodologyFaq />

      {/* 10. Descubra Como a Metodologia Preditiva Pode Acelerar Seu Crescimento */}
      <MethodologyCta onSuccessSubmit={onLeadSuccess} />
    </div>
  );
};
