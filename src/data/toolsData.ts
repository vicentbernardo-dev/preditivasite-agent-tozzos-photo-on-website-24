import { ToolProduct } from '../types';

export const TOOLS_ECOSYSTEM_DATA = {
  section_id: "preditiva-tools-ecosystem",
  theme: {
    background_color: "#000604",
    primary_accent: "#0DF205",
    secondary_accent: "#26D3AB",
    pink_accent: "#0DF205",
    text_color: "#EFEFEF",
    muted_text: "#D9D9D9"
  },
  hero_banner: {
    featured_tool: "Vision",
    badge: "Diagnóstico & Visibilidade para IA",
    headline: "Sua marca é recomendada pelo ChatGPT, Gemini e Claude?",
    subheadline: "Audite gratuitamente a prontidão técnica do seu e-commerce para os novos motores de busca por Inteligência Artificial.",
    cta: {
      label: "Testar meu domínio no Vision",
      url: "https://vision.preditiva.co/",
      target: "_blank"
    },
    secondary_action: {
      label: "Ver detalhes da ferramenta",
      trigger: "open_vision_modal"
    }
  },
  tools_grid: [
    {
      id: "vision" as const,
      name: "Vision",
      tagline: "Auditoria de Infraestrutura & AI Search Readiness",
      status: "active" as const,
      badge: "Disponível",
      short_description: "Ferramenta proprietária de auditoria técnica que avalia a presença, estrutura e indexação do seu site para LLMs e buscas de última geração.",
      url: "https://vision.preditiva.co/",
      details_route: "/ferramentas/vision",
      accentColor: "#0DF205",
      capabilities: [
        {
          dimension: "Estrutura",
          description: "Avaliação detalhada da arquitetura técnica da página para garantir uma leitura fluida por crawlers tradicionais e sintéticos."
        },
        {
          dimension: "Indexação",
          description: "Análise da capacidade dos robôs e rastreadores de IA encontrarem e mapearem seu conteúdo sem bloqueios."
        },
        {
          dimension: "Dados Estruturados",
          description: "Validação de marcações e código Schema para que os LLMs compreendam perfeitamente produtos, serviços e categorias."
        },
        {
          dimension: "Performance",
          description: "Métricas de carregamento e estabilidade visual (Core Web Vitals) em desktop e mobile."
        },
        {
          dimension: "Compatibilidade com IA",
          description: "Verificação de prontidão técnica para citação e recomendação direta em mecanismos como ChatGPT, Gemini, Perplexity e Claude."
        }
      ]
    },
    {
      id: "alfredo" as const,
      name: "Alfredo",
      tagline: "Gestão Inteligente de Times & Operações",
      status: "coming_soon" as const,
      badge: "Em breve",
      short_description: "O assistente operacional definitivo para squads de alta performance: inteligência artificial integrada, kanbans, acompanhamento de metas e chat unificado.",
      url: null,
      details_route: "/ferramentas/alfredo",
      accentColor: "#0DF205",
      capabilities: [
        {
          feature: "Gestão de Tarefas & Kanbans",
          description: "Organização ágil com fluxos customizáveis para esteiras de marketing, desenvolvimento e dados."
        },
        {
          feature: "Inteligência Artificial Integrada",
          description: "Copiloto nativo para geração de relatórios, resumos de sprints e priorização inteligente de demandas."
        },
        {
          feature: "Metas & KPIs em Tempo Real",
          description: "Acompanhamento transparente de OKRs diretamente conectado às entregas do dia a dia."
        },
        {
          feature: "Chat e Colaboração Centralizada",
          description: "Comunicação sem ruídos dentro do contexto das tarefas, eliminando a dispersão em múltiplos canais."
        }
      ]
    }
  ] as ToolProduct[],
  pages_detail: {
    vision: {
      title: "Vision | Diagnóstico de Visibilidade para IA e Performance",
      subtitle: "Descubra os gargalos que impedem sua operação de ser citada pelas IAs e de converter no mais alto nível.",
      capabilities: [
        {
          dimension: "Estrutura",
          description: "Avaliação detalhada da arquitetura técnica da página para garantir uma leitura fluida por crawlers tradicionais e sintéticos."
        },
        {
          dimension: "Indexação",
          description: "Análise da capacidade dos robôs e rastreadores de IA encontrarem e mapearem seu conteúdo sem bloqueios."
        },
        {
          dimension: "Dados Estruturados",
          description: "Validação de marcações e código Schema para que os LLMs compreendam perfeitamente produtos, serviços e categorias."
        },
        {
          dimension: "Performance",
          description: "Métricas de carregamento e estabilidade visual (Core Web Vitals) em desktop e mobile."
        },
        {
          dimension: "Compatibilidade com IA",
          description: "Verificação de prontidão técnica para citação e recomendação direta em mecanismos como ChatGPT, Gemini, Perplexity e Claude."
        }
      ],
      final_cta: {
        text: "Receba o diagnóstico completo do seu negócio",
        url: "https://vision.preditiva.co/",
        target: "_blank"
      }
    },
    alfredo: {
      title: "Alfredo | Gestão e Produtividade com IA",
      status_badge: "Em breve",
      subtitle: "Centralize a operação do seu time com fluxos inteligentes, foco em metas e automação ponta a ponta.",
      capabilities: [
        {
          feature: "Gestão de Tarefas & Kanbans",
          description: "Organização ágil com fluxos customizáveis para esteiras de marketing, desenvolvimento e dados."
        },
        {
          feature: "Inteligência Artificial Integrada",
          description: "Copiloto nativo para geração de relatórios, resumos de sprints e priorização inteligente de demandas."
        },
        {
          feature: "Metas & KPIs em Tempo Real",
          description: "Acompanhamento transparente de OKRs diretamente conectado às entregas do dia a dia."
        },
        {
          feature: "Chat e Colaboração Centralizada",
          description: "Comunicação sem ruídos dentro do contexto das tarefas, eliminando a dispersão em múltiplos canais."
        }
      ],
      waitlist_cta: {
        text: "Entrar na lista de espera VIP",
        action: "open_waitlist_form"
      }
    }
  }
};
