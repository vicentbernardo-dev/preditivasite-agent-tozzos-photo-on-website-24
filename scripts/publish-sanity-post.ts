// Publica um artigo diretamente no Sanity (dataset: production) sem passar por rascunho.
// Uso: npx tsx scripts/publish-sanity-post.ts <caminho-do-json>
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createClient } from '@sanity/client';

// Carrega variáveis do arquivo .env na raiz do projeto, se existir
const loadEnvFile = () => {
  const envPath = path.resolve(import.meta.dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const rawVal = trimmed.slice(eqIndex + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key && !process.env[key]) {
      process.env[key] = rawVal;
    }
  }
};

loadEnvFile();

const key = () => crypto.randomBytes(6).toString('hex');

export interface PostInputBlock {
  type?: 'h2' | 'h3' | 'normal' | 'blockquote';
  text: string;
}

export interface PostInputPayload {
  title: string;
  slug: string;
  excerpt: string;
  tldr: string;
  category:
    | 'GESTÃO'
    | 'IA SEARCH'
    | 'CRM'
    | 'SEO'
    | 'GROWTH'
    | 'BI'
    | 'DADOS'
    | 'DESIGN THINKING'
    | 'MÍDIA PAGA'
    | 'SOCIAL';
  categoryTag: string;
  contentRole?: 'RADAR_PILAR' | 'BEEMEDIA_NOTICIA' | 'CASE_4_PERGUNTAS';
  funnelSolution?: 'SEO' | 'CRM' | 'GROWTH' | 'BI' | 'DADOS' | 'POS_MIGRACAO';
  icpWave?: 'ONDA_1' | 'ONDA_2_ABM' | 'ONDA_3';
  readTime?: number;
  date?: string;
  imagePath: string;
  imageAlt: string;
  author?: {
    name: string;
    initials: string;
  };
  blocks: PostInputBlock[];
  faq: Array<{ question: string; answer: string }>;
  sources: Array<{ title: string; url: string }>;
  socialKit?: {
    linkedinAdemar?: string;
    linkedinPreditiva?: string;
    videoScript?: string;
    interactionKeyword?: string;
    carouselSlides?: Array<{ headline: string; body?: string }>;
  };
}

// Converte texto com **negrito** em spans do Portable Text do Sanity
const parseInlineSpans = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  const children: Array<{ _type: 'span'; _key: string; text: string; marks: string[] }> = [];
  for (const part of parts) {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      children.push({
        _type: 'span',
        _key: key(),
        text: part.slice(2, -2),
        marks: ['strong'],
      });
    } else {
      children.push({
        _type: 'span',
        _key: key(),
        text: part,
        marks: [],
      });
    }
  }
  return children.length
    ? children
    : [{ _type: 'span' as const, _key: key(), text, marks: [] }];
};

const toPortableText = (blocks: PostInputBlock[]) =>
  blocks.map((block) => ({
    _type: 'block',
    _key: key(),
    style: block.type || 'normal',
    markDefs: [],
    children: parseInlineSpans(block.text),
  }));

const sanitizeSlug = (raw: string) =>
  raw
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);

const main = async () => {
  const inputArg = process.argv[2];
  if (!inputArg) {
    console.error('Uso: npx tsx scripts/publish-sanity-post.ts <caminho-do-json>');
    process.exit(1);
  }

  const token = process.env.SANITY_API_TOKEN || process.env.SANITY_AUTH_TOKEN;
  if (!token) {
    console.error('Erro: SANITY_API_TOKEN não encontrado no ambiente ou no arquivo .env.');
    process.exit(1);
  }

  const jsonPath = path.resolve(process.cwd(), inputArg);
  const payload = JSON.parse(fs.readFileSync(jsonPath, 'utf8')) as PostInputPayload;

  const slug = sanitizeSlug(payload.slug || payload.title);
  if (!slug || !payload.title || !payload.imagePath || !payload.imageAlt) {
    throw new Error('Campos obrigatórios ausentes: title, slug, imagePath, imageAlt.');
  }

  const client = createClient({
    projectId: 'ioanix6u',
    dataset: 'production',
    apiVersion: '2025-01-20',
    token,
    useCdn: false,
  });

  // 1. Faz upload da imagem de capa otimizada
  const resolvedImagePath = path.resolve(process.cwd(), payload.imagePath);
  if (!fs.existsSync(resolvedImagePath)) {
    throw new Error(`Imagem não encontrada em: ${resolvedImagePath}`);
  }

  console.log(`[sanity-publisher] Enviando imagem de capa: ${ path.basename(resolvedImagePath) }...`);
  const imageAsset = await client.assets.upload(
    'image',
    fs.createReadStream(resolvedImagePath),
    {
      filename: path.basename(resolvedImagePath),
    },
  );

  // 2. Busca avatar existente de autor no Sanity (se houver) para manter padrão visual
  const existingAuthorAvatar = await client.fetch<{ assetRef?: string } | null>(
    `*[_type == "post" && defined(author.avatar.asset._ref)][0]{ "assetRef": author.avatar.asset._ref }`,
  );

  const docId = `post-${slug}`;
  const nowIso = payload.date || new Date().toISOString();

  const doc = {
    _id: docId,
    _type: 'post',
    title: payload.title.trim(),
    slug: {
      _type: 'slug',
      current: slug,
    },
    excerpt: payload.excerpt.trim(),
    tldr: payload.tldr.trim().slice(0, 400),
    category: payload.category,
    categoryTag: payload.categoryTag || `${payload.category} & PERFORMANCE`,
    contentRole: payload.contentRole || 'BEEMEDIA_NOTICIA',
    funnelSolution: payload.funnelSolution || 'GROWTH',
    icpWave: payload.icpWave || 'ONDA_1',
    image: {
      _type: 'image',
      alt: payload.imageAlt.trim(),
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
    },
    body: toPortableText(payload.blocks),
    faq: (payload.faq || []).map((item) => ({
      _type: 'faqItem',
      _key: key(),
      question: item.question.trim(),
      answer: item.answer.trim(),
    })),
    sources: (payload.sources || []).map((src) => ({
      _type: 'source',
      _key: key(),
      title: src.title.trim(),
      url: src.url.trim(),
    })),
    date: nowIso,
    readTime: payload.readTime || Math.max(4, Math.round(payload.blocks.length / 3)),
    author: {
      name: payload.author?.name || 'Ademar Tozzo',
      initials: payload.author?.initials || 'AT',
      ...(existingAuthorAvatar?.assetRef
        ? {
            avatar: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: existingAuthorAvatar.assetRef,
              },
            },
          }
        : {}),
    },
    ...(payload.socialKit
      ? {
          socialKit: {
            linkedinAdemar: payload.socialKit.linkedinAdemar || '',
            linkedinPreditiva: payload.socialKit.linkedinPreditiva || '',
            videoScript: payload.socialKit.videoScript || '',
            interactionKeyword: payload.socialKit.interactionKeyword || 'VISION',
            carouselSlides: (payload.socialKit.carouselSlides || []).map((slide) => ({
              _type: 'carouselSlide',
              _key: key(),
              headline: slide.headline,
              body: slide.body || '',
            })),
          },
        }
      : {}),
  };

  console.log(`[sanity-publisher] Publicando documento "${doc.title}" (_id: ${docId})...`);
  const published = await client.createOrReplace(doc);
  console.log(`[sanity-publisher] Publicado com sucesso! URL: https://preditiva.co/blog/${slug}`);
  console.log(`[sanity-publisher] Sanity Document ID: ${published._id}`);
};

main().catch((err) => {
  console.error('[sanity-publisher] Erro ao publicar post:', err);
  process.exit(1);
});
