import type { PageRoute } from '../components/Navbar';

export interface FaqEntry {
  question: string;
  answer: string;
}

// Perguntas frequentes por página: a mesma fonte alimenta o acordeão na tela e o
// schema FAQPage gerado no build (scripts/prerender.ts).
export const PAGE_FAQS = {
  home: [
    {
      question: 'O que faz uma consultoria de SEO para e-commerce?',
      answer:
        'Uma consultoria de SEO para e-commerce analisa toda a estrutura técnica do site (indexação, velocidade, Core Web Vitals, arquitetura de URLs, sitemaps, dados estruturados Schema.org), pesquisa as intenções de busca do seu público consumidor e implementa melhorias contínuas para conquistar as primeiras posições orgânicas do Google sem depender exclusivamente de anúncios pagos.',
    },
    {
      question: 'Como melhorar a performance de uma loja virtual?',
      answer:
        'A melhoria de performance exige um diagnóstico técnico completo dos pontos de lentidão: otimização e compressão de imagens de produtos, eliminação de scripts JavaScript de terceiros bloqueantes, uso de CDNs modernas com caching em Edge, otimização de consultas de banco de dados e refinamento do caminho crítico de renderização.',
    },
    {
      question: 'Quando contratar um especialista dedicado?',
      answer:
        'A alocação de especialistas dedicados é ideal quando a sua empresa possui gargalos técnicos específicos (ex: falta de braço sênior em SEO, atraso em integrações de CRM, problemas crônicos no GA4/GTM ou lentidão no desenvolvimento da loja) e precisa de resultados rápidos sem o custo e a morosidade de contratações CLT tradicionais.',
    },
    {
      question: 'O que é CRO e por que ele é importante para o e-commerce?',
      answer:
        'CRO (Conversion Rate Optimization) é o conjunto de técnicas, testes A/B, análises de mapas de calor e psicologia do consumo aplicadas para aumentar a porcentagem de visitantes que realizam uma compra. Dobrar a taxa de conversão do seu e-commerce significa dobrar sua receita sem gastar um centavo a mais em tráfego.',
    },
    {
      question: 'Como o CRM ajuda no crescimento do e-commerce?',
      answer:
        'O CRM permite segmentar sua base de clientes pelo comportamento real de compra (RFM), enviando mensagens ultra personalizadas no momento exato (como carrinho abandonado, recompra automática, promoções VIP e aniversários), gerando faturamento previsível com margem muito superior à de mídia paga.',
    },
    {
      question: 'Como a Preditiva atua com dados e analytics?',
      answer:
        'Atuamos auditando e configurando o tagueamento completo (GA4, GTM, CAPI do Facebook/TikTok, Enhanced Conversions do Google), corrigindo discrepâncias nos dados de receita e construindo dashboards executivos em tempo real que mostram com clareza o retorno real de cada canal de venda.',
    },
  ],
  'frentes-aceleradora': [
    {
      question: 'O que é uma aceleradora de e-commerce?',
      answer:
        'Uma aceleradora de e-commerce é uma parceira técnica e estratégica que atua diretamente nos motores de crescimento do negócio (SEO, CRM, Engenharia de Dados, Infraestrutura e Mídia), construindo ativos proprietários e alavancando receita previsível.',
    },
    {
      question: 'Qual a diferença entre aceleradora e agência?',
      answer:
        'Enquanto agências tradicionais focam em posts criativos, CTR e escopos rígidos de contrato, a Aceleradora Preditiva constrói infraestrutura de dados proprietária, foca em ROAS, LTV e CAC Real, e opera com squads multidisciplinares de especialistas seniores adaptáveis ao growth.',
    },
    {
      question: 'A aceleração substitui minha equipe interna?',
      answer:
        'Não, nós operamos como a extensão técnica e analítica avançada do seu time interno, destravando gargalos complexos e acelerando o throughput de execução sem atrito.',
    },
    {
      question: 'Como os resultados são medidos?',
      answer:
        'Medimos o sucesso através de métricas financeiras reais: crescimento de receita orgânica (SEO), taxa de recompra e receita gerada por CRM, eficiência de investimento de mídia (ROAS real) e LTV/CAC.',
    },
  ],
  'frentes-consultoria': [
    {
      question: 'O que é uma consultoria estratégica para e-commerce?',
      answer:
        'É uma atuação consultiva sênior que audita a maturidade técnica da sua operação digital (SEO, CRM, Dados, Performance e CRO), mapeia gargalos invisíveis e desenha um plano de ação orientado a aumento de margem e faturamento previsível.',
    },
    {
      question: 'Qual a diferença entre consultoria e aceleração?',
      answer:
        'Na consultoria estratégica, orientamos, auditamos e direcionamos a liderança e os times internos com roadmaps técnicos e validações contínuas. Na aceleração, nossa squad assume a execução ponta a ponta da operação e do growth engineering.',
    },
    {
      question: 'A consultoria substitui minha equipe interna?',
      answer:
        'Não. Nossa consultoria empodera e eleva a maturidade do seu time técnico e de marketing, atuando como braço estratégico sênior para validações complexas, governança e tomadas de decisão.',
    },
    {
      question: 'Quais áreas são avaliadas?',
      answer:
        'Avaliamos SEO Técnico (Core Web Vitals, indexação, arquitetura), CRM & Ciclo de Vida (RFM, automações, retenção), Engenharia de Dados (GA4, GTM, CAPI, Data Warehouse), Performance de Mídia e Otimização de Conversão (CRO).',
    },
  ],
  'frentes-especialistas': [
    {
      question: 'Como funciona a precificação da alocação?',
      answer:
        'Trabalhamos com modelos flexíveis de horas mensais ou alocação integral (part-time ou full-time), com previsibilidade total de custos, sem encargos trabalhistas e sem taxas ocultas.',
    },
    {
      question: 'Qual o tempo mínimo de contrato?',
      answer:
        'Nossos contratos são estruturados a partir de 3 meses, garantindo tempo hábil para onboarding ágil, execução profunda e entrega de resultados consistentes.',
    },
    {
      question: 'O especialista trabalha exclusivamente para minha empresa?',
      answer:
        'Sim, durante a franquia de horas contratada ou no modelo full-time, o especialista opera 100% integrado ao seu fluxo diário, ferramentas de comunicação (Slack, Teams) e sprints ágeis.',
    },
    {
      question: 'Quanto tempo leva para encontrar um profissional?',
      answer:
        'Como possuímos uma base pré-qualificada de talentos seniores, o processo de match e onboarding ocorre tipicamente entre 3 e 7 dias úteis.',
    },
  ],
  'especialidade-seo': [
    {
      question: 'Qual a diferença entre SEO On-page e Off-page?',
      answer:
        'SEO On-page engloba todas as otimizações técnicas e semânticas feitas diretamente dentro do seu site (Core Web Vitals, estrutura de tags, categorização, Schema Markup, velocidade e intenção de busca). O SEO Off-page abrange a autoridade externa e relevância do domínio, incluindo Link Building estratégico, citações de marca e autoridade setorial.',
    },
    {
      question: 'Quanto tempo leva para ver resultados reais?',
      answer:
        'Correções de indexação crítica e Core Web Vitals costumam gerar impactos nos primeiros 30 a 60 dias. Ganhos de autoridade e tráfego orgânico exponencial em categorias de alta concorrência atingem maturação entre 3 a 6 meses de execução consistente.',
    },
    {
      question: 'Como funcionam os relatórios de performance?',
      answer:
        'Disponibilizamos dashboards proprietários em tempo real integrando Google Search Console, Google Analytics 4 e rankings de palavras-chave, além de relatórios executivos mensais focados em receita orgânica, conversão e share of search.',
    },
    {
      question: 'Quais são os termos de contrato e permanência?',
      answer:
        'Nossos contratos são estruturados em ciclos trimestrais ou semestrais de aceleração com roadmaps transparentes priorizados pelo impacto no faturamento e LTV da loja.',
    },
  ],
  'especialidade-midia': [
    {
      question: 'Qual o ROI esperado para meu nicho?',
      answer:
        'O ROI e ROAS variam de acordo com o ticket médio, margem de contribuição e maturidade da marca. Durante a auditoria técnica inicial, modelamos cenários de retorno conservador, moderado e agressivo baseados em benchmarks reais do seu segmento.',
    },
    {
      question: 'Vocês criam as peças (vídeos e imagens)?',
      answer:
        'Fornecemos direcionamento criativo técnico rigoroso baseado em dados de retenção de visualização, CTR e testes de ângulo, além de roteirização para criativos de alta conversão.',
    },
    {
      question: 'Como funcionam os relatórios?',
      answer:
        'Acesso 24/7 a dashboards proprietários com modelo de atribuição multitoque e reuniões executivas periódicas com seu Growth Squad para tomada de decisão em tempo real.',
    },
    {
      question: 'Quanto tempo para ver os primeiros resultados?',
      answer:
        'Com a calibração da CAPI (Conversion API), ajustes de públicos e campanhas Advantage+/Performance Max, as primeiras otimizações de CAC e ROAS são visíveis nos primeiros 14 a 30 dias.',
    },
  ],
  'especialidade-crm': [
    {
      question: 'O que é CRM e como ele pode ajudar meu negócio?',
      answer:
        'CRM (Customer Relationship Management) é o motor estratégico de retenção do seu negócio. Ele unifica os dados transacionais e comportamentais dos seus clientes para acionar comunicações personalizadas no momento exato, aumentando a taxa de recompra e o LTV com custo de aquisição marginal.',
    },
    {
      question: 'Como funciona a implementação do CRM na minha empresa?',
      answer:
        'Iniciamos com a auditoria técnica da base e integração com sua plataforma de e-commerce e ERP. Em seguida, estruturamos os fluxos fundamentais (boas-vindas, carrinho abandonado, pós-venda, reativação de inativos) e modelos de segmentação RFM (Recência, Frequência, Valor).',
    },
    {
      question: 'Como o CRM ajuda a aumentar as vendas?',
      answer:
        'Ao entregar ofertas altamente personalizadas baseadas no ciclo de vida do cliente e no histórico de compra, o CRM encurta o intervalo entre compras (TBR) e eleva o ticket médio sem depender exclusivamente de anúncios pagos.',
    },
    {
      question: 'Quanto tempo leva para ver resultados concretos?',
      answer:
        'Os fluxos automatizados essenciais (como abandono de carrinho e régua de boas-vindas) começam a gerar receita recuperada já nos primeiros 15 a 30 dias após o deploy.',
    },
  ],
  'especialidade-dados': [
    {
      question: 'O que é tagueamento Server-Side?',
      answer:
        'O tagueamento Server-Side (via Google Cloud / AWS) processa eventos no servidor em vez do navegador do usuário. Isso contorna bloqueios de adblockers e do Apple ITP (iOS), preserva cookies de primetime por até 2 anos e reduz o peso de scripts no front-end, acelerando a página.',
    },
    {
      question: 'Quais fontes de dados podem ser integradas?',
      answer:
        'Integramos plataformas de e-commerce (VTEX, Shopify, Magento), CRMs (HubSpot, RD, ActiveCampaign), ERPs (Bling, Tiny, Protheus), ferramentas de mídia (Google, Meta, TikTok, Pinterest) e bancos analíticos (BigQuery, PostgreSQL, Looker Studio).',
    },
    {
      question: 'Quanto tempo leva uma implementação padrão?',
      answer:
        'Uma auditoria completa e implementação de Server-Side Tracking com GA4 e CAPI leva de 15 a 30 dias, acompanhada de homologação de eventos transacionais e entrega de dashboards executivos.',
    },
  ],
  'especialidade-dev': [
    {
      question: 'Como funciona o processo de otimização em loja ativa?',
      answer:
        'Trabalhamos com workspaces isolados e ambientes de homologação estritos, realizando auditorias de código estático, tree-shaking de dependências pesadas e deploy gradual via Canary/Feature Flags para risco zero de instabilidade em produção.',
    },
    {
      question: 'Garantia de estabilidade em grandes eventos (Black Friday)?',
      answer:
        'Realizamos testes de estresse de carga (Load Testing), otimização de queries GraphQL, cache de borda (CDN / Edge Caching) e plantão técnico dedicado 24/7 com tempo de resposta em minutos.',
    },
    {
      question: 'Quais métricas são usadas para medir a eficácia da otimização?',
      answer:
        'Acompanhamos métricas reais de campo do Chrome User Experience Report (CrUX): LCP (Largest Contentful Paint), FID/INP (Interaction to Next Paint), CLS (Cumulative Layout Shift) e TTFB (Time to First Byte).',
    },
    {
      question: 'Como personalizar a experiência do cliente durante a navegação?',
      answer:
        'Desenvolvemos componentes customizados nativos em React e VTEX IO com renderização server-side otimizada para carregar blocos personalizados sem flickering ou bloqueio de thread principal.',
    },
  ],
  'especialidade-growth': [
    {
      question: 'Qual a diferença entre Growth Marketing e Marketing Tradicional?',
      answer:
        'O Marketing Tradicional baseia-se em campanhas estáticas e orçamentos fixos focados em vaidade (alcance, impressões). O Growth Marketing da Preditiva é científico: roda hipóteses rápidas, testes A/B rigorosos e orquestração de canais com foco estrito em margem de contribuição, taxa de conversão (CRO) e LTV.',
    },
    {
      question: 'Quanto tempo leva para ver os primeiros resultados?',
      answer:
        'A partir dos primeiros ciclos semanais de teste A/B no checkout e nas páginas de produto, desbloqueamos aumentos incrementais na taxa de conversão já entre a 2ª e a 4ª semana.',
    },
    {
      question: 'Quais são as principais métricas utilizadas em Growth Marketing?',
      answer:
        'Acompanhamos CAC Blended, LTV, Payback time, Taxa de Conversão por Etapa do Funil, ICE Score do Backlog e Margem de Contribuição por Canal.',
    },
    {
      question: 'Como o Growth Marketing pode impactar a fidelização de clientes?',
      answer:
        'Ao conectar experimentos de aquisição com jornadas de retenção e recompra no CRM, transformamos a aquisição em relacionamentos de alto valor e compras recorrentes.',
    },
  ],
  'metodologia': [
    {
      question: 'O que é a Metodologia Preditiva?',
      answer:
        'A Metodologia Preditiva é um modelo integrado de aceleração e consultoria técnica digital que conecta SEO avançado, CRM automatizado, governança de dados e desenvolvimento ágil em ciclos contínuos de crescimento e retenção de receita.',
    },
    {
      question: 'Como a metodologia funciona na prática?',
      answer:
        'Iniciamos com um diagnóstico profundo dos pontos de fricção e gargalos técnicos da sua operação. A partir disso, construímos um roadmap priorizado por impacto financeiro e alocamos squads de especialistas seniores para execução direta ou governança consultiva.',
    },
    {
      question: 'Quanto tempo leva para implementar a metodologia?',
      answer:
        'O diagnóstico inicial é estruturado nos primeiros dias e as primeiras otimizações de infraestrutura, tagueamento e funis de CRM são executadas já nas duas primeiras semanas de atuação, gerando melhorias mensuráveis no primeiro mês.',
    },
    {
      question: 'A Preditiva substitui minha equipe interna?',
      answer:
        'Não, nós potencializamos sua equipe. Atuamos como a camada de inteligência e execução técnica avançada, transferindo maturidade digital para o seu time ou executando frentes complexas que exigem especialistas dedicados.',
    },
  ],
  'partners': [
    {
      question: 'Por que me tornar um Partner?',
      answer:
        'Ao se tornar um Partner Preditiva, sua empresa passa a oferecer aos seus clientes soluções avançadas de SEO Técnico, CRM Preditivo, Engenharia de Dados e Growth sem custos operacionais adicionais, além de ser remunerada por cada indicação qualificada.',
    },
    {
      question: 'Como funciona? Quais são os benefícios?',
      answer:
        'Você cadastra sua empresa, obtém acesso imediato ao Dashboard de Parceiros e conta com um canal direto com nosso time de negócios. Conforme indica projetos ou executa em conjunto, recebe comissões recorrentes, treinamentos exclusivos e visibilidade no ecossistema.',
    },
    {
      question: 'O que são os Níveis de Parceria?',
      answer:
        'A estrutura em 4 níveis (Bronze, Prata, Ouro e Platinum) premia a recorrência e o volume de negócios gerados. A cada nível atingido, você desbloqueia novos benefícios como eventos VIP, co-marketing, página dedicada em nosso diretório e acesso à nossa API.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'As comissões são pagas mensalmente após a confirmação e faturamento do contrato com o cliente indicado, diretamente via transferência bancária com relatório transparente disponível em seu painel.',
    },
  ],
} satisfies Partial<Record<PageRoute, FaqEntry[]>>;
