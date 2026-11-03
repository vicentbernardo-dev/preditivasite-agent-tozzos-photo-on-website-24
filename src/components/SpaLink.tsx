import React from 'react';
import type { PageRoute } from './Navbar';
import { isModifiedClick, routeToPath } from '../lib/routes';

interface SpaLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: PageRoute;
  slug?: string;
  onNavigate?: (page: PageRoute, slug?: string) => void;
}

// Link rastreável (<a href="/rota">) que mantém a navegação SPA no clique normal.
export const SpaLink: React.FC<SpaLinkProps> = ({ to, slug, onNavigate, onClick, children, ...rest }) => (
  <a
    {...rest}
    href={routeToPath(to, slug)}
    onClick={(event) => {
      onClick?.(event);
      if (event.defaultPrevented || isModifiedClick(event) || !onNavigate) return;
      event.preventDefault();
      onNavigate(to, slug);
    }}
  >
    {children}
  </a>
);
