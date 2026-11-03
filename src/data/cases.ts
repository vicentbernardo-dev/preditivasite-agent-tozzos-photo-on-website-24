import type { PageRoute } from '../components/Navbar';

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseSummary {
  page: PageRoute;
  client: string;
  clientUrl?: string;
  sector: string;
  headline: string;
  summary: string;
  services: string[];
  metrics: CaseMetric[];
}

// Resultados dos cases em texto: alimentam o schema Article das páginas de case e o
// /llms.txt. LLMs citam números concretos, então os valores precisam bater com as páginas.
export const CASES: CaseSummary[] = [
  {
    page: 'case-gtex',
    client: 'GTEX Brasil',
    sector: 'Indústria e bens de consumo, linha de limpeza',
    headline: 'GTEX: canal orgânico como protagonista com SEO técnico e mídia paga',
    summary:
      'Diagnóstico técnico, performance do site, indexação e plano de conteúdo para a holding de produtos de limpeza tornar o orgânico o principal canal de aquisição.',
    services: ['SEO técnico', 'Mídia paga', 'Conteúdo', 'Desenvolvimento e infraestrutura'],
    metrics: [
      { value: '+342%', label: 'crescimento de ROAS' },
      { value: '+180%', label: 'tráfego orgânico' },
      { value: '-45%', label: 'custo por lead' },
      { value: '+162%', label: 'sessões orgânicas (36,9 mil para 97 mil, base 2023)' },
      { value: '+508%', label: 'cliques no blog (11,2 mil para 68,1 mil, base 2023)' },
      { value: '+1.492%', label: 'impressões do blog (339 mil para 4,5 milhões, base 2023)' },
    ],
  },
  {
    page: 'case-miami',
    client: 'Miami Ad School Brasil',
    sector: 'Educação em design, redação e criatividade',
    headline: 'Miami Ad School: nova jornada digital com SEO estrutural e performance',
    summary:
      'Redesenho da jornada digital da escola de criatividade, com arquitetura de informação, SEO estrutural e otimização de Core Web Vitals.',
    services: ['SEO técnico', 'Desenvolvimento', 'UX', 'Infraestrutura'],
    metrics: [
      { value: '+142%', label: 'tráfego orgânico médio' },
      { value: '-45%', label: 'taxa de rejeição' },
      { value: '+68%', label: 'conversão de leads qualificados' },
      { value: '6,3 s para 827 ms', label: 'tempo de carregamento' },
      { value: '74 para 99', label: 'nota de performance mobile (Lighthouse)' },
    ],
  },
  {
    page: 'case-master',
    client: 'Master Cidadania',
    sector: 'Assessoria de cidadania europeia',
    headline: 'Master Cidadania: go-to-market, dados estruturados e automação de CRM',
    summary:
      'Estruturação do lançamento da marca, higienização da base de dados, réguas de automação e campanhas de cross-sell e up-sell para aumentar o LTV.',
    services: ['CRM e automação', 'Dados', 'SEO técnico', 'Mídia paga'],
    metrics: [
      { value: '+214%', label: 'impacto no LTV' },
      { value: '-45%', label: 'custo de aquisição (CAC) com automação de leads' },
      { value: '92%', label: 'engajamento nas réguas de automação' },
      { value: '30%', label: 'redundâncias eliminadas da base histórica' },
    ],
  },
];
