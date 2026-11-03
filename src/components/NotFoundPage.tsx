import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from './Navbar';
import { SpaLink } from './SpaLink';

interface NotFoundPageProps {
  onNavigatePage: (page: PageRoute, slug?: string) => void;
}

const SUGGESTED_PAGES: { page: PageRoute; label: string }[] = [
  { page: 'home', label: 'Página inicial' },
  { page: 'metodologia', label: 'Metodologia' },
  { page: 'cases', label: 'Cases de sucesso' },
  { page: 'blog', label: 'Blog & Insights' },
];

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigatePage }) => (
  <section className="w-full min-h-screen bg-[#000604] flex items-center justify-center pt-28 pb-20 px-4">
    <div className="max-w-xl text-center space-y-6">
      <div className="text-[#0DF205] font-bold text-sm uppercase tracking-widest">Erro 404</div>
      <h1 className="text-3xl sm:text-5xl font-bold text-[#E3E3DF] tracking-tight">
        Página não encontrada
      </h1>
      <p className="text-base sm:text-lg text-[#B9CCAF] leading-relaxed">
        O endereço que você acessou não existe ou foi movido. Veja algumas páginas que podem ajudar:
      </p>
      <ul className="flex flex-wrap justify-center gap-3 pt-2">
        {SUGGESTED_PAGES.map(({ page, label }) => (
          <li key={page}>
            <SpaLink
              to={page}
              onNavigate={onNavigatePage}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111815] border border-white/10 hover:border-[#0DF205] text-sm text-white hover:text-[#0DF205] transition-colors"
            >
              <span>{label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </SpaLink>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
