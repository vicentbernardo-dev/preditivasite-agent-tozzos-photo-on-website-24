// Gera /llms.txt (resumo com links) e /llms-full.txt (conteúdo em texto) no build.
// Motores de IA não executam o JS do SPA; estes arquivos entregam o essencial em
// Markdown simples, com os mesmos textos do site (PAGE_SEO, FAQs e cases).
import type { PageRoute } from '../src/components/Navbar';
import { CASES } from '../src/data/cases';
import { PAGE_FAQS } from '../src/data/faqs';
import { routeToPath } from '../src/lib/routes';
import { SITE_URL, getPageSeo } from '../src/lib/seo';

export interface LlmsPost {
  slug: string;
  title: string;
  excerpt?: string;
  tldr?: string;
  publishedAt?: string;
}

const pageUrl = (page: PageRoute, slug?: string) => `${SITE_URL}${routeToPath(page, slug)}`;
const pageName = (page: PageRoute) => getPageSeo(page).title.replace(/\s*\|\s*Preditiva$/, '');
// Sem o CTA de marketing que a meta description carrega: para um LLM é só ruído
const pageSummary = (page: PageRoute) =>
  getPageSeo(page).description.replace(/\s*Fale com a Preditiva para acelerar seus resultados\.$/, '');
const pageLink = (page: PageRoute) => `- [${pageName(page)}](${pageUrl(page)}): ${pageSummary(page)}`;
const formatDate = (value?: string) => (value ? new Date(value).toISOString().slice(0, 10) : '');

const FRENTES: PageRoute[] = ['frentes-aceleradora', 'frentes-consultoria', 'frentes-especialistas'];
const ESPECIALIDADES: PageRoute[] = [
  'especialidade-seo', 'especialidade-midia', 'especialidade-crm',
  'especialidade-dados', 'especialidade-dev', 'especialidade-growth',
];
const FERRAMENTAS: PageRoute[] = ['ferramentas-vision', 'ferramentas-alfredo'];

const INTRO = `# Preditiva

> A Preditiva (Preditiva.Co) é uma aceleradora de e-commerce e camada técnica para negócios digitais no Brasil. Atua em SEO técnico, GEO (otimização para motores de IA), CRM e retenção, mídia paga, dados e analytics, desenvolvimento e growth, em três modelos: aceleração, consultoria estratégica e alocação de especialistas dedicados.

- Site: ${SITE_URL}
- Sede: Av. Paulista, 1636 - Sala 1504, Bela Vista, São Paulo/SP, CEP 01310-200
- Contato comercial: WhatsApp +55 11 97594-4739
- Fundador e CEO: Ademar Tozzo (https://br.linkedin.com/in/ademar-tozzo)
- LinkedIn: https://br.linkedin.com/company/preditiva-co
- Instagram: https://www.instagram.com/preditiva.co/`;

const casesSection = () => CASES.map((item) =>
  `- [${item.client}](${pageUrl(item.page)}) (${item.sector}): ${item.metrics.slice(0, 3).map((m) => `${m.value} ${m.label}`).join(', ')}.`,
).join('\n');

const sortPosts = (posts: LlmsPost[]) =>
  [...posts].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''));

export const buildLlmsTxt = (posts: LlmsPost[]) => `${INTRO}

## Frentes de atuação

${FRENTES.map(pageLink).join('\n')}

## Especialidades

${ESPECIALIDADES.map(pageLink).join('\n')}

## Cases com resultados

${casesSection()}

## Ferramentas

${FERRAMENTAS.map(pageLink).join('\n')}

## Blog

${sortPosts(posts).map((post) => `- [${post.title}](${pageUrl('blog-post', post.slug)})${post.excerpt ? `: ${post.excerpt.trim()}` : ''}`).join('\n')}

## Opcional

- [Metodologia](${pageUrl('metodologia')}): ${pageSummary('metodologia')}
- [Conteúdo completo em texto](${SITE_URL}/llms-full.txt)
- [Feed RSS do blog](${SITE_URL}/blog/rss.xml)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;

const faqSection = (page: PageRoute) => {
  const faqs = PAGE_FAQS[page as keyof typeof PAGE_FAQS];
  if (!faqs?.length) return '';
  return `\n\n### Perguntas frequentes\n\n${faqs.map((faq) => `**${faq.question}**\n${faq.answer}`).join('\n\n')}`;
};

const pageSection = (page: PageRoute) =>
  `## ${pageName(page)}\n\nURL: ${pageUrl(page)}\n\n${pageSummary(page)}${faqSection(page)}`;

export const buildLlmsFullTxt = (posts: LlmsPost[]) => `${INTRO}

${faqSection('home').replace('### ', '## ')}

${['metodologia', ...FRENTES, ...ESPECIALIDADES].map((page) => pageSection(page as PageRoute)).join('\n\n')}

## Cases

${CASES.map((item) => `### ${item.headline}

URL: ${pageUrl(item.page)}
Cliente: ${item.client} (${item.sector})
Onda de ICP: ${item.icpWave}
Frentes: ${item.services.join(', ')}

${item.summary}

01. Qual problema chegou?
${item.fourQuestions.problem}

02. Qual solução pensamos?
${item.fourQuestions.solution}

03. Como fizemos?
${item.fourQuestions.execution.map((step) => `- ${step}`).join('\n')}

04. Qual resultado gerou?
${item.fourQuestions.result}

Resultados:
${item.metrics.map((m) => `- ${m.value}: ${m.label}`).join('\n')}`).join('\n\n')}

## Artigos do blog

${sortPosts(posts).map((post) => `### ${post.title}

URL: ${pageUrl('blog-post', post.slug)}${post.publishedAt ? `\nPublicado em: ${formatDate(post.publishedAt)}` : ''}

${[post.tldr, post.excerpt].filter(Boolean).map((text) => text!.trim()).join('\n\n')}`).join('\n\n')}
`;
