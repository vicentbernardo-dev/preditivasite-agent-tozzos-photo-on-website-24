import { ServiceCard, FrictionPoint, CaseStudy, Testimonial, Specialty, InsightArticle, FaqItem } from '../types';

export const HERO_SERVICES_LIST = [
  'SEO Técnico',
  'CRM',
  'Dados',
  'CRO',
  'Growth',
  'Performance',
  'Analytics',
  'Dev & Infra'
];

export const CLIENT_LOGOS = [
  { name: 'Reflorestas', category: 'E-commerce' },
  { name: 'Master Cidadania', category: 'Serviços Globais' },
  { name: 'Desk Manager', category: 'SaaS' },
  { name: 'GTEX', category: 'Indústria' },
  { name: 'Casa de Gê', category: 'Home Care' },
  { name: 'Miami Ad School', category: 'Educação' },
  { name: 'Swarovski', category: 'Luxo' },
  { name: 'Red Bull', category: 'Bebidas' },
  { name: 'Shoulder', category: 'Moda' },
  { name: 'Océane', category: 'Beleza' }
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'aceleradora',
    title: 'Aceleradora de\nE-commerce',
    subtitle: 'Aceleração Completa',
    description: 'Operação completa de ponta a ponta para escalar faturamento com tecnologia e dados proprietários, com SEO Técnico, CRO, Analytics e foco em Growth e Performance.',
    idealFor: 'Marcas que faturam acima de\nR$500k/mês e buscam o próximo nível.',
    ctaText: 'VER COMO FUNCIONA',
    accentColor: 'agua'
  },
  {
    id: 'consultoria',
    title: 'Consultoria\nEstratégica',
    subtitle: 'Direção & Auditoria',
    description: 'CRM, auditoria SEO, governança digital e acompanhamento para times internos que precisam de maturidade técnica e direção de dados.',
    idealFor: 'Operações estruturadas que precisam\nde validação técnica constante.',
    badge: 'MAIS PROCURADO',
    ctaText: 'CONHECER CONSULTORIA',
    accentColor: 'neon'
  },
  {
    id: 'especialistas',
    title: 'Especialistas\nDedicados',
    subtitle: 'Squad On Demand',
    description: 'Alocação de talentos seniores em disciplinas específicas: Especialistas SEO, CRM, CRO, Dados e Desenvolvimento para o crescimento do seu negócio.',
    idealFor: 'Times que possuem gargalos técnicos\npontuais e recorrentes.',
    ctaText: 'CONHECER ALOCAÇÃO',
    accentColor: 'muted'
  }
];

export const FRICTION_POINTS: FrictionPoint[] = [
  {
    id: 'criativos-sem-conversao',
    title: 'Sua agência faz os criativos.\nMas ninguém olha se o site está\nconvertendo.',
    description: 'Performance técnica, SEO sem estratégia, dados desconectados, velocidade crítica e UX otimizada para o fundo do funil.'
  },
  {
    id: 'verba-desperdicada',
    title: 'Você investe em mídia. Mas\npode estar jogando verba fora\npor bugs invisíveis.',
    description: 'Tagueamento falho, falhas de rastreamento GA4 e GTM, problemas de Core Web Vitals, mobile break e checkout lento estão matando sua rentabilidade.'
  },
  {
    id: 'crm-sem-segmentacao',
    title: 'CRM sem segmentação e baixa taxa de conversão.',
    description: 'Você precisa de um time de especialistas que atuem de forma integrada com foco em Dados para o crescimento do seu negócio: SEO, CRM, Mídia, Growth, Dados e Dev + Infraestrutura.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'miami-ad-school',
    client: 'Miami Ad School',
    category: 'Educação Global',
    metric1: 'Performance 34 → 95',
    metric2: '6.3s → 827ms',
    summary: 'Otimização técnica completa de Dev + infraestrutura e carregamento para uma das maiores escolas do mundo.',
    description: 'Reformulação estrutural de arquitetura web, compressão de assets, otimização de servidor e reestruturação do funil de matrículas globais.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tags: ['Core Web Vitals', 'Infraestrutura', 'Next.js / CDN'],
    fullStory: {
      challenge: 'O portal apresentava tempo de carregamento de 6.3 segundos e score de 34 no Google Lighthouse, impactando diretamente nas taxas de conversão de campanhas internacionais de captação.',
      solution: 'Reconstrução dos assets críticos, migração de cache para Edge global, refatoração completa do CSS/JS bloqueante e integração do CRM para captação instantânea.',
      results: [
        'Score PageSpeed mobile saltou de 34 para 95',
        'Tempo de carregamento reduzido de 6.3s para 827ms (-87%)',
        '+140% no envio de formulários de matrícula qualificados'
      ],
      testimonial: {
        quote: 'Nossa performance site melhorou radicalmente no curto prazo, a experiência do user melhorou e a jornada ficou muito mais fluída.',
        author: 'Paulo Henrique',
        role: 'CEO da Miami Ad School'
      }
    }
  },
  {
    id: 'master-cidadania',
    client: 'Master Cidadania',
    category: 'Assessoria Internacional',
    metric1: '+236% Sessions',
    metric2: 'NPS 10/10',
    summary: 'Estratégia multicanal de captação CRM e SEO que explodiu o volume de leads qualificados em tempo recorde.',
    description: 'Arquitetura de conteúdo baseada em intenção de busca, reestruturação da governança de dados e esteiras de nutrição automatizadas.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO Técnico', 'HubSpot CRM', 'Automação'],
    fullStory: {
      challenge: 'Custo de aquisição de cliente (CAC) elevado em mídia paga e base de leads estagnada sem automação personalizada de jornada.',
      solution: 'Implementação de clusterização temática para SEO, governança de tags no GTM/GA4 e réguas de relacionamento omnichannel no CRM com lead scoring dinâmico.',
      results: [
        'Aumento de +236% nas sessões orgânicas em 90 dias',
        'NPS 10/10 na satisfação de suporte e entrega consultiva',
        'Redução de 42% no custo por lead qualificado (CPL)'
      ]
    }
  },
  {
    id: 'gtex-casa-de-ge',
    client: 'GTEX / Casa de Gê',
    category: 'Indústria & Varejo',
    metric1: '+1492% Blog Impr.',
    metric2: '+162% Sessions',
    summary: 'Case massivo de SEO de conteúdo e autoridade técnica para um dos maiores grupos industriais do setor.',
    description: 'Indexação técnica avançada, structured data para produtos de consumo massivo e estratégia editorial de alta relevância.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO Programático', 'E-commerce', 'Analytics'],
    fullStory: {
      challenge: 'Marcas consolidadas no offline que precisavam criar dominância digital e tráfego orgânico recorrente para catálogo de e-commerce.',
      solution: 'Auditoria profunda de arquitetura de URLs, reescrita de Schema.org markup, otimização de velocidade para e-commerce e sprint de conteúdo especializado.',
      results: [
        '+1492% de impressões no Google Search Console',
        '+162% de crescimento em sessões orgânicas totais',
        'Top 3 nas principais palavras-chave de intenção de compra do segmento'
      ],
      testimonial: {
        quote: 'Estou muito satisfeito com o trabalho realizado. Nosso canal orgânico hoje cresceu em receita e qualidade!',
        author: 'Edu Sato',
        role: 'Diretor MKT GTEX'
      }
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'paulo-henrique',
    name: 'PAULO HENRIQUE',
    role: 'CEO DA MIAMI AD SCHOOL',
    company: 'Miami Ad School',
    headline: 'Melhoria radical',
    quote: 'Nossa performance site melhorou radicalmente no curto prazo, a experiência do user melhorou e a jornada ficou muito mais fluída, melhorando a conversão final de nossas vendas.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  },
  {
    id: 'edu-sato',
    name: 'EDU SATO',
    role: 'DIRETOR MKT GTEX',
    company: 'GTEX / Casa de Gê',
    headline: 'Satisfação e crescimento!',
    quote: 'Estou muito satisfeito com o trabalho realizado. Nosso canal orgânico hoje cresceu em receita e qualidade!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    number: '01',
    title: 'CRM',
    tagline: 'Automação, segmentação e retenção de clientes',
    details: [
      'Segmentação avançada por RFM (Recência, Frequência e Valor)',
      'Réguas de automação de carrinho abandonado, recompra e win-back',
      'Configuração e integração com Klaviyo, RD Station, HubSpot e ActiveCampaign',
      'Auditoria de entregabilidade e reputação de domínio'
    ]
  },
  {
    number: '02',
    title: 'SEO',
    highlighted: true,
    tagline: 'SEO Técnico, arquitetura e dominância orgânica',
    details: [
      'Auditoria técnica profunda de indexação, canonicals e renderização JS',
      'Otimização cirúrgica de Core Web Vitals (LCP, INP, CLS)',
      'Schema markup avançado para E-commerce e produtos',
      'Estratégia de autoridade e conteúdo direcionado a conversão'
    ]
  },
  {
    number: '03',
    title: 'Mídia',
    tagline: 'Performance com base em dados primários e attribution',
    details: [
      'Estruturação de campanhas de Google Ads, Meta Ads e TikTok Ads',
      'Modelagem de atribuição e análise de incrementality',
      'Configuração de API de Conversões (CAPI) e Enhanced Conversions',
      'Otimização de ROAS e LTV/CAC'
    ]
  },
  {
    number: '04',
    title: 'Dev + Infra',
    tagline: 'Engenharia de ponta, velocidade e segurança',
    details: [
      'Desenvolvimento e sustentação de lojas Shopify, VTEX, WooCommerce e Headless',
      'Otimização de infraestrutura Cloud, CDN Edge e tempo de resposta de servidor',
      'Correção de bugs críticos e checkout breaks',
      'APIs customizadas e sincronização com ERPs'
    ]
  },
  {
    number: '05',
    title: 'Dados',
    tagline: 'Analytics, tagueamento e inteligência preditiva',
    details: [
      'Implementação auditada de Google Analytics 4 (GA4) e Google Tag Manager (GTM)',
      'Dashboards executivos em Looker Studio e Power BI',
      'Governança de dados de telemetria e proteção à privacidade (LGPD)',
      'Análise de funil e identificação de pontos de fuga'
    ]
  },
  {
    number: '06',
    title: 'CRO & Growth',
    tagline: 'Otimização contínua de conversão e experimentos ágeis',
    details: [
      'Testes A/B estatisticamente comprovados no checkout e páginas de produto',
      'Mapeamento de calor, gravações de sessão e redução de pontos de fricção',
      'Otimização do LTV / CAC e arquitetura de esteiras de experimentação',
      'Priorização sistemática de backlog com método ICE Score'
    ]
  }
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: 'design-thinking-ecommerce',
    tag: 'Design Thinking',
    title: 'Como inovar com a experiência do usuário no e-commerce',
    summary: 'Descubra como metodologias centradas no usuário aceleram a jornada de compra e destravam taxas de conversão ocultas.',
    readTime: '5 min de leitura',
    date: '18 Fev 2026',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    content: 'O design centrado na experiência de compra não é apenas uma questão visual: trata-se de reduzir a carga cognitiva no checkout e garantir clareza imediata nas decisões de compra...'
  },
  {
    id: 'otimize-site-seo-tecnico',
    tag: 'SEO',
    title: 'Otimize o seu site com estratégias avançadas de SEO técnico',
    summary: 'Guia definitivo sobre Core Web Vitals, renderização JavaScript e como o Google avalia lojas virtuais em 2026.',
    readTime: '7 min de leitura',
    date: '12 Fev 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: 'Com as constantes atualizações dos algoritmos de busca, sites que apresentam problemas de carregamento ou código bloqueante perdem posições valiosas em palavras-chave transacionais...'
  },
  {
    id: 'crm-relacionamento-ltv',
    tag: 'CRM',
    title: 'Acompanhe o relacionamento e aumente o LTV com automação',
    summary: 'Como segmentar bases de clientes por comportamento em tempo real e multiplicar a receita sem aumentar o investimento em mídia.',
    readTime: '6 min de leitura',
    date: '05 Fev 2026',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    content: 'Adquirir um novo cliente custa até 7x mais do que reter um existente. Saiba como estruturar clusters inteligentes no CRM para impulsionar a recompra previsível...'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O que faz uma consultoria de SEO para e-commerce?',
    answer: 'Uma consultoria de SEO para e-commerce analisa toda a estrutura técnica do site (indexação, velocidade, Core Web Vitals, arquitetura de URLs, sitemaps, dados estruturados Schema.org), pesquisa as intenções de busca do seu público consumidor e implementa melhorias contínuas para conquistar as primeiras posições orgânicas do Google sem depender exclusivamente de anúncios pagos.'
  },
  {
    id: 'faq-2',
    question: 'Como melhorar a performance de uma loja virtual?',
    answer: 'A melhoria de performance exige um diagnóstico técnico completo dos pontos de lentidão: otimização e compressão de imagens de produtos, eliminação de scripts JavaScript de terceiros bloqueantes, uso de CDNs modernas com caching em Edge, otimização de consultas de banco de dados e refinamento do caminho crítico de renderização.'
  },
  {
    id: 'faq-3',
    question: 'Quando contratar um especialista dedicado?',
    answer: 'A alocação de especialistas dedicados é ideal quando a sua empresa possui gargalos técnicos específicos (ex: falta de braço sênior em SEO, atraso em integrações de CRM, problemas crônicos no GA4/GTM ou lentidão no desenvolvimento da loja) e precisa de resultados rápidos sem o custo e a morosidade de contratações CLT tradicionais.'
  },
  {
    id: 'faq-4',
    question: 'O que é CRO e por que ele é importante para o e-commerce?',
    answer: 'CRO (Conversion Rate Optimization) é o conjunto de técnicas, testes A/B, análises de mapas de calor e psicologia do consumo aplicadas para aumentar a porcentagem de visitantes que realizam uma compra. Dobrar a taxa de conversão do seu e-commerce significa dobrar sua receita sem gastar um centavo a mais em tráfego.'
  },
  {
    id: 'faq-5',
    question: 'Como o CRM ajuda no crescimento do e-commerce?',
    answer: 'O CRM permite segmentar sua base de clientes pelo comportamento real de compra (RFM), enviando mensagens ultra personalizadas no momento exato (como carrinho abandonado, recompra automática, promoções VIP e aniversários), gerando faturamento previsível com margem muito superior à de mídia paga.'
  },
  {
    id: 'faq-6',
    question: 'Como a Preditiva atua com dados e analytics?',
    answer: 'Atuamos auditando e configurando o tagueamento completo (GA4, GTM, CAPI do Facebook/TikTok, Enhanced Conversions do Google), corrigindo discrepâncias nos dados de receita e construindo dashboards executivos em tempo real que mostram com clareza o retorno real de cada canal de venda.'
  }
];
