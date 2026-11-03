// Schemas por página gerados só no build (scripts/prerender.ts): ficam fora do
// bundle do navegador porque os crawlers leem o HTML pré-renderizado.
import type { PageRoute } from '../components/Navbar';
import { CASES } from '../data/cases';
import { PAGE_FAQS, type FaqEntry } from '../data/faqs';
import { routeToPath } from './routes';
import { ORGANIZATION_ID, SITE_URL, getPageSeo } from './seo';

// serviceType em linguagem de busca, um por frente/especialidade
const SERVICE_TYPES: Partial<Record<PageRoute, string>> = {
  'frentes-aceleradora': 'Aceleração de e-commerce',
  'frentes-consultoria': 'Consultoria de e-commerce e growth',
  'frentes-especialistas': 'Alocação de especialistas em marketing digital',
  'especialidade-seo': 'SEO técnico para e-commerce',
  'especialidade-midia': 'Gestão de mídia paga',
  'especialidade-crm': 'CRM e retenção de clientes',
  'especialidade-dados': 'Dados e analytics para e-commerce',
  'especialidade-dev': 'Desenvolvimento e performance de e-commerce',
  'especialidade-growth': 'Growth marketing para e-commerce',
};

export const buildServiceSchema = (page: PageRoute) => {
  const serviceType = SERVICE_TYPES[page];
  if (!serviceType) return null;
  const { title, description } = getPageSeo(page);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title.replace(/\s*\|\s*Preditiva$/, ''),
    serviceType,
    description,
    url: `${SITE_URL}${routeToPath(page)}`,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    inLanguage: 'pt-BR',
  };
};

export const buildCaseSchema = (page: PageRoute) => {
  const caseStudy = CASES.find((item) => item.page === page);
  if (!caseStudy) return null;
  const url = `${SITE_URL}${routeToPath(page)}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.headline,
    description: `${caseStudy.summary} Resultados: ${caseStudy.metrics.map((metric) => `${metric.value} ${metric.label}`).join('; ')}.`,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'pt-BR',
    articleSection: 'Cases',
    image: `${SITE_URL}/og-cover.jpg`,
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    about: { '@type': 'Organization', name: caseStudy.client, description: caseStudy.sector },
    keywords: caseStudy.services.join(', '),
  };
};

export const buildFaqSchema = (page: PageRoute, override?: FaqEntry[]) => {
  const faqs = override?.length ? override : PAGE_FAQS[page as keyof typeof PAGE_FAQS];
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
};
