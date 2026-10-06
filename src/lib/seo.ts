import type { PageRoute } from '../components/Navbar';

export interface ArticleSeoData {
  title: string;
  description?: string;
  image?: string;
  publishedAt?: string;
}

interface PageSeo {
  title: string;
  description: string;
}

const SITE_URL = 'https://preditiva.co';
const BRAND = 'Preditiva';
const ORGANIZATION_SCHEMA_ID = 'organization-schema';
const ARTICLE_SCHEMA_ID = 'article-schema';
const MIN_DESCRIPTION_LENGTH = 140;
const MAX_DESCRIPTION_LENGTH = 160;

const PAGE_SEO: Record<Exclude<PageRoute, 'blog-post'>, PageSeo> = {
  home: {
    title: 'Preditiva | Aceleradora de E-commerce & SEO Técnico',
    description: 'Aceleradora de e-commerce com SEO técnico, growth, CRM, dados e performance para impulsionar resultados digitais.',
  },
  metodologia: {
    title: 'Metodologia de Growth e E-commerce | Preditiva',
    description: 'Conheça a metodologia Preditiva para integrar estratégia, tecnologia e dados na aceleração de e-commerces.',
  },
  'frentes-aceleradora': {
    title: 'Aceleradora de E-commerce | Preditiva',
    description: 'Acelere seu e-commerce com estratégia, tecnologia e especialistas dedicados às metas do seu negócio.',
  },
  'frentes-consultoria': {
    title: 'Consultoria de E-commerce e Growth | Preditiva',
    description: 'Transforme desafios digitais em oportunidades com consultoria especializada em e-commerce, growth e performance.',
  },
  'frentes-especialistas': {
    title: 'Especialistas em E-commerce e Performance | Preditiva',
    description: 'Conecte seu negócio a especialistas em SEO, CRM, mídia, dados e tecnologia para crescer com consistência.',
  },
  'especialidade-seo': {
    title: 'SEO Técnico para E-commerce | Preditiva',
    description: 'Aumente tráfego orgânico e visibilidade com SEO técnico, conteúdo estratégico e otimização para e-commerce.',
  },
  'especialidade-midia': {
    title: 'Mídia Paga e Performance Digital | Preditiva',
    description: 'Melhore o retorno das campanhas com mídia paga orientada por dados, performance e objetivos de negócio.',
  },
  'especialidade-crm': {
    title: 'CRM e Retenção de Clientes | Preditiva',
    description: 'Fortaleça relacionamento e retenção com estratégias de CRM, automação e comunicação para e-commerce.',
  },
  'especialidade-dados': {
    title: 'Dados e Analytics para E-commerce | Preditiva',
    description: 'Transforme dados em decisões melhores com analytics, mensuração e inteligência para seu e-commerce.',
  },
  'especialidade-dev': {
    title: 'Desenvolvimento e Infraestrutura Digital | Preditiva',
    description: 'Evolua sua operação digital com desenvolvimento, infraestrutura e soluções técnicas para e-commerce.',
  },
  'especialidade-growth': {
    title: 'Growth Marketing para E-commerce | Preditiva',
    description: 'Desbloqueie crescimento sustentável com experimentação, otimização de conversão e estratégia de growth.',
  },
  cases: {
    title: 'Cases de Sucesso em E-commerce | Preditiva',
    description: 'Veja como estratégia, dados e tecnologia ajudaram marcas a superar desafios e alcançar resultados digitais.',
  },
  'case-miami': {
    title: 'Case Miami: Resultados de E-commerce | Preditiva',
    description: 'Conheça os desafios, a estratégia e os resultados do projeto Miami desenvolvido com a Preditiva.',
  },
  'case-gtex': {
    title: 'Case GTEX: Growth e Performance | Preditiva',
    description: 'Descubra como a Preditiva apoiou a GTEX com estratégia digital, growth e performance para e-commerce.',
  },
  'case-master': {
    title: 'Case Master: Estratégia Digital | Preditiva',
    description: 'Explore o trabalho da Preditiva com a Master e os resultados conquistados com estratégia e tecnologia.',
  },
  blog: {
    title: 'Blog de E-commerce, SEO e Growth | Preditiva',
    description: 'Acesse insights sobre e-commerce, SEO, growth, dados e performance para fortalecer sua estratégia digital.',
  },
  partners: {
    title: 'Parceiros de Tecnologia e E-commerce | Preditiva',
    description: 'Conheça os parceiros que ampliam a capacidade da Preditiva em tecnologia, e-commerce e performance.',
  },
  ferramentas: {
    title: 'Ferramentas para E-commerce e Growth | Preditiva',
    description: 'Conheça ferramentas digitais da Preditiva para analisar operações e apoiar o crescimento do seu negócio.',
  },
  'ferramentas-vision': {
    title: 'Vision: Diagnóstico Digital | Preditiva',
    description: 'Use o Vision para analisar sua presença digital e identificar oportunidades técnicas para o e-commerce.',
  },
  'ferramentas-alfredo': {
    title: 'Alfredo: Inteligência para E-commerce | Preditiva',
    description: 'Descubra como o Alfredo pode apoiar decisões e rotinas da sua operação de e-commerce com inteligência.',
  },
};

const ensureMeta = (attribute: 'name' | 'property', key: string): HTMLMetaElement => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  return element;
};

const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  ensureMeta(attribute, key).content = content;
};

const upsertJsonLd = (id: string, data: Record<string, unknown> | null) => {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!data) {
    script?.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export const withSanityImageFormat = (imageUrl?: string): string | undefined => {
  if (!imageUrl) return undefined;
  try {
    const url = new URL(imageUrl);
    url.searchParams.set('auto', 'format');
    return url.toString();
  } catch {
    return imageUrl;
  }
};

const buildArticleTitle = (title: string) => {
  const suffix = ' | Blog Preditiva';
  const maxTitleLength = 60 - suffix.length;
  const cleanTitle = title.trim();
  return `${cleanTitle.length > maxTitleLength ? `${cleanTitle.slice(0, maxTitleLength - 1).trimEnd()}…` : cleanTitle}${suffix}`;
};

const fitDescription = (summary: string, callToAction: string, expansion: string) => {
  let descriptionSummary = summary;
  if (descriptionSummary.length + callToAction.length < MIN_DESCRIPTION_LENGTH) {
    descriptionSummary = `${descriptionSummary}${expansion}`;
  }
  const maxSummaryLength = MAX_DESCRIPTION_LENGTH - callToAction.length;
  if (descriptionSummary.length > maxSummaryLength) {
    descriptionSummary = `${descriptionSummary.slice(0, maxSummaryLength - 1).trimEnd()}…`;
  }
  return `${descriptionSummary}${callToAction}`;
};

const buildArticleDescription = (excerpt?: string) => {
  const callToAction = ' Leia o artigo completo no blog da Preditiva.';
  const summary = excerpt?.trim().replace(/\s+/g, ' ') || 'Confira análises e estratégias práticas para e-commerce, SEO, growth, dados e performance digital.';
  return fitDescription(
    summary,
    callToAction,
    ' Confira análises de e-commerce, SEO, growth e performance para aplicar novas ideias ao seu negócio.',
  );
};

const buildPageDescription = (summary: string) => fitDescription(
  summary,
  ' Fale com a Preditiva para acelerar seus resultados.',
  ' Encontre estratégias práticas de SEO, growth e tecnologia para evoluir sua operação digital.',
);

export const updatePageSeo = (
  page: PageRoute,
  slug?: string,
  article?: ArticleSeoData,
) => {
  const isArticle = page === 'blog-post' && Boolean(article?.title);
  const route = isArticle && slug
    ? `/blog/${encodeURIComponent(slug)}`
    : page === 'home'
      ? '/'
      : page === 'blog-post' && slug
        ? `/blog/${encodeURIComponent(slug)}`
        : `/${page}`;
  const canonicalUrl = `${SITE_URL}${route}`;
  const pageSeo = page === 'blog-post'
    ? { title: 'Artigo do Blog | Blog Preditiva', description: PAGE_SEO.blog.description }
    : PAGE_SEO[page];
  const title = isArticle ? buildArticleTitle(article.title) : pageSeo.title;
  const description = isArticle
    ? buildArticleDescription(article.description)
    : buildPageDescription(pageSeo.description);
  const image = withSanityImageFormat(article?.image) || `${SITE_URL}/LOGO.png`;

  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:type', isArticle ? 'article' : 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  upsertJsonLd(ORGANIZATION_SCHEMA_ID, page === 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/LOGO.png`,
    description: 'Aceleradora de e-commerce e camada técnica especializada em SEO, Growth e Analytics.',
  } : null);

  const publishedAt = article?.publishedAt ? new Date(article.publishedAt) : null;
  upsertJsonLd(ARTICLE_SCHEMA_ID, isArticle ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description,
    image,
    mainEntityOfPage: canonicalUrl,
    ...(publishedAt && !Number.isNaN(publishedAt.getTime()) ? { datePublished: publishedAt.toISOString() } : {}),
    author: {
      '@type': 'Organization',
      name: BRAND,
    },
  } : null);
};
