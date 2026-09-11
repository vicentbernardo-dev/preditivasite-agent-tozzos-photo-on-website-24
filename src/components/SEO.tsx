import { useEffect } from 'react';

export const SITE_URL = 'https://preditiva.co';

export const PAGE_META: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Preditiva | Aceleradora de E-commerce & Camada Técnica',
    description:
      'Aceleradora de e-commerce e camada técnica: SEO Técnico, CRM, Dados, CRO, Growth, Performance, Analytics e Dev + Infra.',
  },
  metodologia: {
    title: 'Metodologia | Preditiva',
    description:
      'A metodologia Preditiva: diagnóstico técnico, frentes de execução e governança de dados para e-commerces que precisam escalar com previsibilidade.',
  },
  'frentes-aceleradora': {
    title: 'Aceleradora de E-commerce | Preditiva',
    description:
      'Operação completa de ponta a ponta para o seu e-commerce: SEO técnico, mídia, CRM, dados e desenvolvimento com squad sênior dedicado.',
  },
  'frentes-consultoria': {
    title: 'Consultoria Estratégica | Preditiva',
    description:
      'Direção técnica e governança de dados para e-commerces: auditoria, arquitetura de dados e roadmap de crescimento orientado por métricas.',
  },
  'frentes-especialistas': {
    title: 'Especialistas Dedicados | Preditiva',
    description:
      'Squad sênior on demand para resolver gargalos técnicos em SEO, CRM, dados, mídia e desenvolvimento do seu e-commerce.',
  },
  'especialidade-seo': {
    title: 'SEO Técnico | Preditiva',
    description:
      'SEO técnico para e-commerce: Core Web Vitals, indexação, arquitetura de URLs e tráfego orgânico sustentável.',
  },
  'especialidade-midia': {
    title: 'Mídia & CAPI | Preditiva',
    description:
      'Gestão de mídia paga com atribuição correta: CAPI, Enhanced Conversions e ROAS real por canal.',
  },
  'especialidade-crm': {
    title: 'CRM & Retenção | Preditiva',
    description:
      'CRM e retenção para e-commerce: RFM, automações, réguas de relacionamento e aumento de LTV.',
  },
  'especialidade-dados': {
    title: 'Dados & GA4 | Preditiva',
    description:
      'Telemetria e BI: implementação auditada de GA4, GTM server-side, BigQuery e dashboards executivos em tempo real.',
  },
  'especialidade-dev': {
    title: 'Dev & Infra | Preditiva',
    description:
      'Desenvolvimento e infraestrutura para e-commerce: performance, sustentação de código, checkout rápido e estabilidade.',
  },
  'especialidade-growth': {
    title: 'CRO & Growth | Preditiva',
    description:
      'Otimização da taxa de conversão e growth: testes A/B, jornadas e experimentos orientados por dados.',
  },
  cases: {
    title: 'Cases de Sucesso | Preditiva',
    description:
      'Resultados reais de quem aplicou a camada técnica da Preditiva: receita, margem e eficiência de mídia comprovadas.',
  },
  'case-miami': {
    title: 'Case Miami | Preditiva',
    description: 'Como estruturamos a operação técnica e os resultados do case Miami.',
  },
  'case-gtex': {
    title: 'Case Gtex | Preditiva',
    description: 'Como estruturamos a operação técnica e os resultados do case Gtex.',
  },
  'case-master': {
    title: 'Case Master | Preditiva',
    description: 'Como estruturamos a operação técnica e os resultados do case Master.',
  },
  blog: {
    title: 'Blog & Insights | Preditiva',
    description:
      'Artigos sobre dados, IA, SEO técnico, CRM, mídia e performance digital para e-commerce.',
  },
  partners: {
    title: 'Partners | Preditiva',
    description: 'Parcerias estratégicas da Preditiva para escalar operações de e-commerce.',
  },
  ferramentas: {
    title: 'Ferramentas | Preditiva',
    description:
      'Ecossistema de ferramentas Preditiva: Vision, Alfredo e auditorias técnicas automatizadas.',
  },
  'ferramentas-vision': {
    title: 'Vision — AI Search Readiness | Preditiva',
    description:
      'Vision: auditoria técnica e leitura de visibilidade da sua marca em buscas com IA.',
  },
  'ferramentas-alfredo': {
    title: 'Alfredo — Gestão Inteligente | Preditiva',
    description: 'Alfredo: gestão inteligente de times e operações com IA.',
  },
};

interface SEOProps {
  page?: string;
  title?: string;
  description?: string;
  path?: string;
}

// IDs únicos para cada tag gerenciada — garantem que nunca haja duplicatas no <head>
const CANONICAL_ID = 'preditiva-seo-canonical';
const OG_URL_ID = 'preditiva-seo-og-url';
const TITLE_ID = 'preditiva-seo-title';
const DESC_ID = 'preditiva-seo-description';

const upsertLink = (id: string, rel: string, href: string) => {
  // Remove canônicos legados/estáticos sem id (ex.: a tag estática do index.html)
  // para garantir que exista exatamente UMA tag por rel no <head>.
  document.querySelectorAll(`link[rel="${rel}"]`).forEach((el) => {
    if (el.id !== id) el.parentNode?.removeChild(el);
  });
  let el = document.getElementById(id) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.id = id;
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const upsertMeta = (id: string, attr: 'name' | 'property', attrValue: string, content: string) => {
  // Remove duplicatas da mesma meta (mantém apenas a tag gerenciada com id)
  document.querySelectorAll(`meta[${attr}="${attrValue}"]`).forEach((el) => {
    if (el.id !== id) el.parentNode?.removeChild(el);
  });
  let el = document.getElementById(id) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.id = id;
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export const SEO = ({ page, title, description, path }: SEOProps) => {
  useEffect(() => {
    const resolvePath = (): string => {
      if (path) return path;
      const fromUrl =
        window.location.pathname && window.location.pathname !== '/'
          ? window.location.pathname
          : '/';
      return fromUrl;
    };

    const currentPath = resolvePath();
    const meta = page ? PAGE_META[page] : undefined;
    const finalTitle = title || meta?.title || PAGE_META.home.title;
    const finalDescription =
      description || meta?.description || PAGE_META.home.description;

    const cleanPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
    const normalizedPath =
      cleanPath === '/' || cleanPath === '' ? '' : cleanPath.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    // Título da aba + tags de SEO no <head> (substitui a estática do index.html)
    document.title = finalTitle;
    upsertLink(CANONICAL_ID, 'canonical', canonicalUrl);
    upsertMeta(OG_URL_ID, 'property', 'og:url', canonicalUrl);
    upsertMeta(TITLE_ID, 'property', 'og:title', finalTitle);
    upsertMeta(DESC_ID, 'name', 'description', finalDescription);
  }, [page, title, description, path]);

  return null;
};
