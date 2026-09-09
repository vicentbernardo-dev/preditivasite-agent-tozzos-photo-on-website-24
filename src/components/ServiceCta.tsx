import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../types';
import { FRENTE_PATHS } from '../routes';

interface ServiceCtaProps {
  service: ServiceCard;
  className: string;
  children: React.ReactNode;
  onSelectService?: (service: ServiceCard) => void;
  onFallback?: () => void;
}

/**
 * CTA of a service card. The three "frentes de atuação" have their own page, so
 * they navigate through the router; any other service keeps opening the details
 * modal it used before.
 */
export const ServiceCta: React.FC<ServiceCtaProps> = ({
  service,
  className,
  children,
  onSelectService,
  onFallback,
}) => {
  const path = FRENTE_PATHS[service.id];

  if (path) {
    return (
      <Link to={path} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (onSelectService) onSelectService(service);
        else if (onFallback) onFallback();
      }}
      className={className}
    >
      {children}
    </button>
  );
};
