import type { PageRoute } from '../components/Navbar';

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseFourQuestions {
  problem: string;
  solution: string;
  execution: string[];
  result: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export interface CaseSummary {
  page: PageRoute;
  client: string;
  clientUrl?: string;
  sector: string;
  icpWave: 'Onda 1 · E-commerce, Moda & Recorrência' | 'Onda 2 · Indústria & Luxo (ABM)' | 'Onda 3 · Expansão & Serviços';
  headline: string;
  summary: string;
  services: string[];
  metrics: CaseMetric[];
  fourQuestions: CaseFourQuestions;
}

// Resultados dos cases em texto: alimentam o schema Article das páginas de case, a CasesPage e o
// /llms.txt. LLMs citam números concretos, então os valores precisam bater com as páginas.
export const CASES: CaseSummary[] = [
  {
    page: 'case-gtex',
    client: 'GTEX Brasil',
    sector: 'Indústria e bens de consumo, linha de limpeza',
    icpWave: 'Onda 2 · Indústria & Luxo (ABM)',
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
    fourQuestions: {
      problem: 'Marcas líderes no varejo físico com baixa descoberta orgânica (36,9 mil sessões) e dependência de mídia paga para tráfego de topo.',
      solution: 'Diagnóstico técnico de indexação, dados estruturados (Schema.org) por linha de produto e matriz de conteúdo orientada por intenção de busca.',
      execution: [
        'Correção de gargalos de indexação, canonicals e Core Web Vitals',
        'Arquitetura semântica e clusters de conteúdo por categoria de limpeza',
        'Sinergia entre busca orgânica e mídia de performance para reduzir CPL',
      ],
      result: '+162% em sessões orgânicas (36,9 mil → 97 mil), +1.492% em impressões no Search Console e +342% de evolução no ROAS.',
      testimonialQuote: 'Estou muito satisfeito com o trabalho realizado. Nosso canal orgânico hoje cresceu em receita e qualidade!',
      testimonialAuthor: 'Edu Sato · Diretor de Marketing GTEX',
    },
  },
  {
    page: 'case-miami',
    client: 'Miami Ad School Brasil',
    sector: 'Educação em design, redação e criatividade',
    icpWave: 'Onda 3 · Expansão & Serviços',
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
    fourQuestions: {
      problem: 'Portal com 6,3 segundos de carregamento e fricção na jornada mobile, penalizando a conversão das campanhas de matrículas.',
      solution: 'Engenharia de performance web (Core Web Vitals), redesenho da arquitetura de informação e integração limpa com CRM.',
      execution: [
        'Refatoração de CSS/JS bloqueante e entrega via CDN Edge',
        'Reestruturação de URLs, headings e SEO on-page dos cursos',
        'Simplificação do funil de captação de matrículas mobile',
      ],
      result: 'Carregamento reduzido de 6,3 s para 827 ms, nota de performance 74 → 99, +142% de tráfego orgânico e +68% na conversão de leads.',
      testimonialQuote: 'Nossa performance melhorou radicalmente no curto prazo, a experiência do usuário ficou muito mais fluida.',
      testimonialAuthor: 'Paulo André · CEO da Miami Ad School',
    },
  },
  {
    page: 'case-master',
    client: 'Master Cidadania',
    sector: 'Assessoria de cidadania europeia',
    icpWave: 'Onda 3 · Expansão & Serviços',
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
    fourQuestions: {
      problem: 'CAC elevado em mídia paga, 30% de redundância na base histórica de contatos e ausência de réguas automatizadas de recompra/up-sell.',
      solution: 'Saneamento completo da camada de dados, clusterização de CRM por estágio familiar e automação omnichannel (WhatsApp + E-mail).',
      execution: [
        'Higienização e desduplicação de 30% da base histórica',
        'Implementação de lead scoring e réguas de nutrição automatizadas',
        'Ativação de campanhas de cross-sell/up-sell para familiares',
      ],
      result: '+214% de impacto no LTV, -45% no CAC, 92% de engajamento nas réguas e NPS 10/10.',
    },
  },
  {
    page: 'case-esthera',
    client: 'Esthera',
    sector: 'E-commerce de moda e acessórios (bolsas)',
    icpWave: 'Onda 1 · E-commerce, Moda & Recorrência',
    headline: 'Esthera: de R$ 3,4 mil para R$ 88,2 mil/mês com redução de CPV de R$ 4.996 para R$ 219',
    summary:
      'Estruturação da operação de mídia paga (Google + Meta) e performance mobile do site para sustentar crescimento consistente de vendas ao longo do ano.',
    services: ['Mídia paga', 'Performance', 'CRO', 'E-commerce'],
    metrics: [
      { value: 'R$ 3,4 mil → R$ 88,2 mil', label: 'receita mensal (janeiro → setembro)' },
      { value: 'R$ 4.996 → R$ 219', label: 'custo por venda (CPV)' },
      { value: '2 → 46', label: 'vendas por mês no período (pico de 92 em julho)' },
      { value: 'R$ 1.678 → R$ 1.917', label: 'ticket médio' },
    ],
    fourQuestions: {
      problem: 'Operação de mídia sem planejamento estruturado, site com performance mobile baixa (vídeo de 7MB na home e imagens fora do padrão WebP) e custo por venda (CPV) inicial de R$ 4.996 em janeiro.',
      solution: 'Diagnóstico técnico do site + estruturação de funil de mídia (PMax, Search, Display e Social Ads) e calendário de testes de landing page.',
      execution: [
        'Diagnóstico técnico de site e estruturação do funil Google + Meta (PMax, Search, Display e Social Ads)',
        'Calendário de campanhas e testes de landing page com plano dedicado de Black Friday',
        'Acompanhamento semanal de planejado x realizado por canal com otimização contínua',
      ],
      result: 'Receita mensal saltou de R$ 3,4 mil para R$ 88,2 mil (jan → set), vendas mensais de 2 para 46 (pico de 92 em julho), ticket médio de R$ 1.678 para R$ 1.917 e CPV reduzido de R$ 4.996 para R$ 219.',
    },
  },
  {
    page: 'case-vhita',
    client: 'Vhita',
    sector: 'E-commerce de suplementos e nutracêuticos',
    icpWave: 'Onda 1 · E-commerce, Moda & Recorrência',
    headline: 'Vhita: R$ 277 mil mapeados em recompra e +56,5% em clientes recorrentes com CRM e Dados',
    summary:
      'Recuperação de receita presa na base de clientes através de higienização e enriquecimento de dados, clusterização RFV e ativação via e-mail e SMS.',
    services: ['CRM e automação', 'Dados', 'E-commerce'],
    metrics: [
      { value: '+45%', label: 'crescimento da base de clientes (2023 vs. 2022)' },
      { value: '+56,5%', label: 'aumento no volume de clientes recorrentes' },
      { value: 'R$ 277 mil', label: 'potencial de receita mapeado nas ações de recuperação e recompra' },
      { value: 'R$ 117 mil', label: 'receita direta gerada por captação qualificada no blog' },
    ],
    fourQuestions: {
      problem: '53% da receita concentrada no cluster de maior valor (com 68% em churn/inativo há >5 meses), 46,4% vinda de compra única (74% inativos) e mais de 6 mil cadastros de origem suspeita distorcendo métricas.',
      solution: 'Higienização e padronização da base, enriquecimento de dados para mídia, clusterização RFV e réguas de recuperação e recompra via e-mail e SMS.',
      execution: [
        'Higienização e padronização da base de dados eliminando cadastros suspeitos',
        'Enriquecimento de dados para aquisição de mídia e clusterização RFV dos melhores clientes',
        'Implementação de réguas de recuperação e recompra via e-mail e SMS',
      ],
      result: '+45% de crescimento da base de clientes, +56,5% no volume de clientes recorrentes, R$ 277 mil mapeados em recuperação/recompra e R$ 117 mil gerados por captação qualificada no blog.',
    },
  },
  {
    page: 'case-monte-carlo',
    client: 'Monte Carlo Joias',
    sector: 'Joalheria & E-commerce · Ouro 18k e Relógios',
    icpWave: 'Onda 2 · Indústria & Luxo (ABM)',
    headline: 'Monte Carlo Joias: performance mobile de 16 para 62, TBT -91% e auditoria SEO 100/100',
    summary:
      'Transformação de performance, limpeza de scripts duplicados, otimização de cache e correção estrutural de SEO técnico e IA Indexing para a rede de joalheria.',
    services: ['SEO técnico', 'Performance Web', 'Inteligência de Dados', 'IA Indexing'],
    metrics: [
      { value: '16 → 62', label: 'score de performance mobile (+288%, e 77 no desktop)' },
      { value: '310 ms', label: 'Total Blocking Time (-91% vs. 3.650 ms iniciais)' },
      { value: '4,4 s', label: 'Speed Index (-83% vs. 26,2 s iniciais)' },
      { value: '100/100', label: 'auditoria SEO com erros estruturais zerados' },
    ],
    fourQuestions: {
      problem: 'Performance mobile crítica (16/100), scripts duplicados (GA, Optimize, Floodlight), TBT de 3.650 ms, Speed Index de 26,2 s e metadados/H1 duplicados com ausência de alt text.',
      solution: 'Arquitetura de alto desempenho com limpeza de scripts redundantes, correção on-page 100% e otimização de JS/CSS e cabeçalhos de cache para Google e Bing (IA Indexing).',
      execution: [
        'Limpeza de scripts: remoção de rastreadores redundantes e unificação de GA, Floodlight e Optimize',
        'Correção On-Page: sintaxe H1 corrigida, alt text em 100% das imagens e metadados padronizados',
        'JS/CSS & Cache: compactação de scripts, adiamento de assets pesados e otimização de cache',
      ],
      result: 'Score de performance subiu de 16 para 62 no mobile (+288%) e 77 no desktop, TBT caiu 91% (3.650 ms → 310 ms), Speed Index caiu 83% (26,2 s → 4,4 s) e Auditoria SEO atingiu 100/100.',
    },
  },
];
