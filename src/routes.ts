/**
 * Single source of truth for the site URLs.
 *
 * Every menu item, footer link and CTA points at one of these paths, and
 * `App.tsx` declares one <Route> per entry, so a path can never drift from
 * the component it is supposed to render.
 */
export const PATHS = {
  home: '/',
  metodologia: '/metodologia',

  frentesAceleradora: '/frentes/aceleradora',
  frentesConsultoria: '/frentes/consultoria',
  frentesEspecialistas: '/frentes/especialistas',

  especialidadeSeo: '/especialidades/seo',
  especialidadeMidia: '/especialidades/midia',
  especialidadeCrm: '/especialidades/crm',
  especialidadeDados: '/especialidades/dados',
  especialidadeDev: '/especialidades/dev',
  especialidadeGrowth: '/especialidades/growth',

  cases: '/cases',
  caseMiami: '/cases/miami-ad-school',
  caseGtex: '/cases/gtex',
  caseMaster: '/cases/master-cidadania',

  blog: '/blog',
  partners: '/partners',

  ferramentas: '/ferramentas',
  ferramentasVision: '/ferramentas/vision',
  ferramentasAlfredo: '/ferramentas/alfredo',
} as const;

/** Article page URL for a Sanity post slug. */
export const blogPostPath = (slug: string) => `${PATHS.blog}/${slug}`;

/** Anchors of the sections that live on the home page. */
export const HOME_SECTION_IDS = [
  'solucoes',
  'gargalos',
  'diagnostico',
  'cases',
  'depoimentos',
  'especialidades',
  'insights',
  'faq',
  'contato',
];

/** Home page anchor, e.g. `/#insights`. */
export const homeSectionPath = (sectionId: string) => `${PATHS.home}#${sectionId}`;

/** Service/"frente" card id (mockData) -> page URL. */
export const FRENTE_PATHS: Record<string, string> = {
  aceleradora: PATHS.frentesAceleradora,
  consultoria: PATHS.frentesConsultoria,
  especialistas: PATHS.frentesEspecialistas,
};

/** Case study id (mockData) -> case page URL. */
export const CASE_PATHS: Record<string, string> = {
  'miami-ad-school': PATHS.caseMiami,
  'gtex-casa-de-ge': PATHS.caseGtex,
  gtex: PATHS.caseGtex,
  'master-cidadania': PATHS.caseMaster,
};

/**
 * Hashes used by the previous state-based navigation (`/#metodologia`, ...).
 * Kept so links shared before the router existed still land on the right page.
 * Home page anchors are intentionally excluded — see HOME_SECTION_IDS.
 */
export const LEGACY_HASH_PATHS: Record<string, string> = {
  home: PATHS.home,
  metodologia: PATHS.metodologia,
  'frentes-aceleradora': PATHS.frentesAceleradora,
  'frentes-consultoria': PATHS.frentesConsultoria,
  'frentes-especialistas': PATHS.frentesEspecialistas,
  'especialidade-seo': PATHS.especialidadeSeo,
  'especialidade-midia': PATHS.especialidadeMidia,
  'especialidade-crm': PATHS.especialidadeCrm,
  'especialidade-dados': PATHS.especialidadeDados,
  'especialidade-dev': PATHS.especialidadeDev,
  'especialidade-growth': PATHS.especialidadeGrowth,
  'case-miami': PATHS.caseMiami,
  'case-gtex': PATHS.caseGtex,
  'case-master': PATHS.caseMaster,
  blog: PATHS.blog,
  partners: PATHS.partners,
  ferramentas: PATHS.ferramentas,
  'ferramentas-vision': PATHS.ferramentasVision,
  'ferramentas-alfredo': PATHS.ferramentasAlfredo,
};
