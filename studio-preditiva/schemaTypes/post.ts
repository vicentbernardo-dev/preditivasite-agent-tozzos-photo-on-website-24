import { defineArrayMember, defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description: 'Brief summary of the post',
    }),
    defineField({
      name: 'tldr',
      title: 'Resumo em 1 parágrafo (TL;DR)',
      type: 'text',
      rows: 3,
      description:
        'Resposta direta à pergunta do título, em 2 ou 3 frases. Aparece no topo do post e é o trecho que IAs e o Google mais citam.',
      validation: (rule) => rule.max(400),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gestão', value: 'GESTÃO' },
          { title: 'IA Search', value: 'IA SEARCH' },
          { title: 'CRM', value: 'CRM' },
          { title: 'SEO', value: 'SEO' },
          { title: 'Growth', value: 'GROWTH' },
          { title: 'BI', value: 'BI' },
          { title: 'Dados', value: 'DADOS' },
          { title: 'Design Thinking', value: 'DESIGN THINKING' },
          { title: 'Mídia Paga', value: 'MÍDIA PAGA' },
          { title: 'Social', value: 'SOCIAL' },
        ],
      },
    }),
    defineField({
      name: 'contentRole',
      title: 'Papel no Ecossistema (Radar vs. Beemedia)',
      type: 'string',
      description: 'RADAR = conteúdo de posicionamento/funil no blog; BEEMEDIA = giro de notícia automatizado puxado para ICP.',
      options: {
        list: [
          { title: 'Radar · Pilar de Funil (Blog)', value: 'RADAR_PILAR' },
          { title: 'Beemedia · Notícia de Mercado (Social + Blog)', value: 'BEEMEDIA_NOTICIA' },
          { title: 'Case · 4 Perguntas', value: 'CASE_4_PERGUNTAS' },
        ],
      },
    }),
    defineField({
      name: 'funnelSolution',
      title: 'Funil de Solução',
      type: 'string',
      options: {
        list: [
          { title: 'SEO Técnico & GEO (IA Search)', value: 'SEO' },
          { title: 'CRM & Retenção Preditiva', value: 'CRM' },
          { title: 'Growth & Eficiência de Mídia', value: 'GROWTH' },
          { title: 'BI & Visão Executiva', value: 'BI' },
          { title: 'Engenharia de Dados & Atribuição', value: 'DADOS' },
          { title: 'SOS Pós-Migração de Plataforma', value: 'POS_MIGRACAO' },
        ],
      },
    }),
    defineField({
      name: 'icpWave',
      title: 'Onda de ICP Alvo',
      type: 'string',
      options: {
        list: [
          { title: 'Onda 1 · Pequenos/Médios E-commerce, Moda e Recorrência', value: 'ONDA_1' },
          { title: 'Onda 2 (ABM) · Indústria, Luxo Joias e Luxo Móveis', value: 'ONDA_2_ABM' },
          { title: 'Onda 3 · Beleza, Alimentos, Saúde, Automotivo, Atacado B2B, Omnichannel', value: 'ONDA_3' },
        ],
      },
    }),
    defineField({
      name: 'categoryTag',
      title: 'Category Tag',
      type: 'string',
      description: 'Display tag (e.g., "SEO & GESTÃO")',
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the image for accessibility and search engines.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Describe the image for accessibility and search engines.',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Perguntas frequentes',
      type: 'array',
      description: 'Perguntas que o leitor faria ao Google ou ao ChatGPT sobre o tema. Viram o schema FAQPage do post.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          fields: [
            defineField({ name: 'question', title: 'Pergunta', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'answer', title: 'Resposta', type: 'text', rows: 3, validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'question', subtitle: 'answer' } },
        }),
      ],
    }),
    defineField({
      name: 'sources',
      title: 'Fontes',
      type: 'array',
      description: 'Estudos, dados e documentação citados no texto. Fontes com data aumentam a chance de o post ser citado por IAs.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'source',
          fields: [
            defineField({ name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'title', subtitle: 'url' } },
        }),
      ],
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'number',
      description: 'Estimated read time in minutes',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'initials', type: 'string' }),
        defineField({ name: 'avatar', type: 'image' }),
      ],
    }),
    defineField({
      name: 'socialKit',
      title: 'Kit de Distribuição Social (Beemedia / LinkedIn / HeyGen)',
      type: 'object',
      description: 'Peças geradas a partir deste pilar/notícia para distribuição automatizada nas redes.',
      fields: [
        defineField({
          name: 'linkedinAdemar',
          title: 'Post LinkedIn · Ademar (Autoridade do Fundador)',
          type: 'text',
          rows: 6,
          description: 'Texto em 1ª pessoa com gancho executivo, análise prática e chamada para o Vision ou artigo.',
        }),
        defineField({
          name: 'linkedinPreditiva',
          title: 'Post LinkedIn · Preditiva (Company Page)',
          type: 'text',
          rows: 5,
          description: 'Recorte técnico/institucional com foco em dados e prova.',
        }),
        defineField({
          name: 'videoScript',
          title: 'Roteiro de Vídeo 45–60s (Ademar ou HeyGen)',
          type: 'text',
          rows: 6,
          description: 'Roteiro falado: Gancho (0-5s) -> Problema invisível (5-20s) -> Engenharia Preditiva (20-45s) -> CTA (45-60s).',
        }),
        defineField({
          name: 'interactionKeyword',
          title: 'Palavra-chave de Interação (Gatilho de Comentário/DM)',
          type: 'string',
          description: 'Ex.: VISION, DIAGNOSTICO, ROAS, CRM, ESTOQUE',
        }),
        defineField({
          name: 'carouselSlides',
          title: 'Slides do Carrossel (Collab @ademartozzo + @preditiva.co)',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'carouselSlide',
              fields: [
                defineField({ name: 'headline', title: 'Headline do Slide', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'body', title: 'Texto Curto', type: 'text', rows: 2 }),
              ],
              preview: { select: { title: 'headline', subtitle: 'body' } },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
