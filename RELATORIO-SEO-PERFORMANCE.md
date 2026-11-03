# Relatório técnico: Performance, Core Web Vitals, SEO e GEO — preditiva.co

**Data:** 03/11/2026
**Fontes:** GTmetrix (Lighthouse 12.6.1, desktop, Seattle), Google Search Console (Cobertura: "Cópia sem página canônica selecionada pelo usuário", 28 URLs), testes HTTP feitos em produção com user-agent do Googlebot e leitura do código deste repositório.

---

## 1. Resumo executivo

| Área | Situação | Nota |
|---|---|---|
| Indexação | **Crítica** | Todas as URLs devolvem o mesmo HTML vazio, com o título e o canonical da home, e status 200 até para páginas que não existem |
| Performance | Média | GTmetrix 65%. TBT de **3,3 s** (meta < 200 ms). LCP 1,2 s e CLS 0,02 estão bons |
| SEO técnico | Fraco | Links internos não rastreáveis, sitemap inconsistente com os canonicals, URLs antigas do WordPress sem redirect |
| GEO (IA generativa) | **Invisível** | GPTBot, ClaudeBot e PerplexityBot não executam JavaScript, então leem uma página em branco |

**Não é o servidor.** O Netlify responde bem: TTFB entre 250 e 800 ms, HTTPS e HSTS ativos, redirects de host funcionando. O problema é **como a aplicação é entregue**: é uma SPA renderizada só no navegador (CSR), com uma regra "pega-tudo" que responde 200 para qualquer URL.

---

## 2. Diagnóstico de indexação (causa raiz)

### 2.1 Evidências coletadas em produção (Googlebot UA, 03/11/2026)

| URL testada | Status | Tamanho do HTML |
|---|---|---|
| `/` | 200 | 5.411 bytes |
| `/metodologia` | 200 | 5.411 bytes |
| `/metodologia/` | 200 | 5.411 bytes |
| `/fale-conosco/` *(URL antiga do WP)* | 200 | 5.411 bytes |
| `/especialidades/midia/` *(URL antiga do WP)* | 200 | 5.411 bytes |
| `/wp-content/plugins/category-ajax-filter-pro/` | 200 | 5.411 bytes |
| `/blog/nao-existe-xyz/` | 200 | 5.411 bytes |
| `/pagina-inexistente-123` | 200 | 5.411 bytes |

Todas as respostas são **byte a byte idênticas**:

```html
<title>Preditiva | Aceleradora de E-commerce &amp; SEO Técnico</title>
<link rel="canonical" href="https://preditiva.co/" />
...
<div id="root"></div>
```

### 2.2 Por que o Google classifica como "Cópia sem canônica selecionada pelo usuário"

1. **HTML idêntico em todas as rotas** ([index.html](index.html)). Título, descrição e canonical só mudam depois que o JavaScript roda ([src/lib/seo.ts](src/lib/seo.ts)). O Google rastreia em duas etapas: primeiro o HTML cru e depois, às vezes dias depois, a renderização. Na primeira etapa ele vê dezenas de URLs iguais à home.
2. **A regra `/* /index.html 200`** ([public/_redirects:3](public/_redirects)) transforma qualquer URL em uma cópia da home, com status 200 (*soft 404*). As 28 URLs da lista do Search Console são, quase todas, **URLs do WordPress antigo**. O gráfico salta de 1 para 16 URLs em **04/09/2026**, a data da migração. Elas não redirecionam e, por isso, viram cópias da home.
3. **`resolveRouteFromLocation()` cai em `home`** para qualquer caminho desconhecido ([src/App.tsx:392](src/App.tsx)). Depois de renderizada, a URL antiga mostra literalmente o conteúdo da home.
4. **Posts reais também aparecem como duplicados**, por exemplo `/blog/black-friday-2026-cronograma-completo-de-preparacao-tecnica/` e `/blog/google-i-o-2026-.../`. O sitemap envia a URL **com barra final**, o canonical gerado pelo JS é **sem barra** e o HTML cru aponta para a home. São três sinais contraditórios.
5. **Os links internos não são rastreáveis.** O menu usa `href="#frentes-aceleradora"` com `preventDefault` ([src/components/Navbar.tsx:181](src/components/Navbar.tsx)), e os cards do blog e de outras seções são `<button onClick>` (51 chamadas a `onNavigatePage`). O Google ignora fragmentos `#` e não clica em botões. As páginas internas só são descobertas pelo sitemap, sem nenhum link interno que dê autoridade a elas.
6. **O sitemap envia sinais fracos** ([netlify/functions/sitemap.js](netlify/functions/sitemap.js)): `lastmod` igual a "agora" em todas as páginas estáticas, a cada requisição (o Google passa a ignorar), barra final inconsistente e um fallback com URLs diferentes das normais.

### 2.3 Por que isso também zera o GEO

Os crawlers de IA (GPTBot/OAI-SearchBot, ClaudeBot, PerplexityBot, Applebot e a maioria dos agentes) **não executam JavaScript**. Para eles, cada página da Preditiva é um `<div id="root"></div>` vazio. Liberar esses bots no `robots.txt` não adianta enquanto não houver HTML com conteúdo.

---

## 3. Plano de ação (tudo resolvível no código)

Ordem de execução recomendada: **P0 → P1 → P2 → P3**. Cada item indica os arquivos afetados e o esforço estimado (P = horas, M = 1 a 2 dias, G = 3 dias ou mais).

### P0 — Destravar a indexação (fazer primeiro)

> **Status (03/11/2026): implementado no código, falta o deploy.**
> - P0.1 e P0.2: [public/_redirects](public/_redirects) com os 301 do legado, 410 para `/wp-*`, rewrites por rota e `/* /404.html 404`. Rotas desconhecidas renderizam a nova [NotFoundPage](src/components/NotFoundPage.tsx) com `noindex`, e posts inexistentes também recebem `noindex`.
> - P0.3: o sitemap passou a usar URLs sem barra final (iguais ao canonical) e não envia mais `lastmod` falso.
> - P0.4 (só a parte do `<head>`): [scripts/prerender.ts](scripts/prerender.ts) roda após o `vite build` e gera um HTML por rota e por post, com title, description, canonical, Open Graph e JSON-LD próprios. O conteúdo da página (`<body>`) **continua sendo renderizado só via JS**, então o SSG completo segue pendente para o GEO.
> - P0.5: menu, rodapé, cards do blog e da seção Insights e o link "voltar" do post agora são `<a href="/rota">` ([SpaLink](src/components/SpaLink.tsx)). Os CTAs internos das páginas de serviço ainda usam botões.
> - **Ação no painel:** criar um *Build hook* no Netlify e um webhook no Sanity (ao publicar) apontando para ele. Assim cada post novo ganha seu HTML pré-renderizado. Até o próximo deploy, um post novo funciona pelo `app-shell.html`, sem canonical no HTML cru.

#### P0.1 · Redirects 301 das URLs do WordPress antigo — esforço **P**
Arquivo: [public/_redirects](public/_redirects). As regras devem vir **antes** do pega-tudo.

```
# Host: elimina a cadeia http://www -> https://www -> https://
http://www.preditiva.co/*        https://preditiva.co/:splat   301!
https://preditivacosite.netlify.app/*  https://preditiva.co/:splat  301!

# Legado WordPress -> novas rotas
/especialidades/midia/*          /especialidade-midia       301!
/especialidades/dados/*          /especialidade-dados       301!
/especialidades/crm/*            /especialidade-crm         301!
/especialidades/growth/*         /especialidade-growth      301!
/especialidades/seo/*            /especialidade-seo         301!
/especialidades/*                /metodologia               301!
/especialistas-dedicados         /frentes-especialistas     301!
/especialistas-dedicados/        /frentes-especialistas     301!
/consultoria-estrategica/*       /frentes-consultoria       301!
/servicos-midia-paga/*           /especialidade-midia       301!
/parceiros/*                     /partners                  301!
/cases/master-cidadania*         /case-master               301!
/cases/miami-ad-school*          /case-miami                301!
/miami-ad-school/*               /case-miami                301!
/case-de-sucesso-vegete/*        /cases                     301!
/fale-conosco/*                  /#contato                  301!
/tag/*                           /blog                      301!
/category/*                      /blog                      301!
/author/*                        /blog                      301!

# Posts antigos que ficavam na raiz: apontar para o slug equivalente no Sanity
# (se o post foi migrado) ou para /blog
/como-usar-ia-no-crm-2/*                 /blog   301!
/atlas-chat-gpt/*                        /blog   301!
/hiper-personalizacao-no-ecommerce/*     /blog   301!
/pesquisa-comportamento-do-consumidor/*  /blog   301!
/google-ia-overview/*                    /blog   301!

# Lixo do WordPress: 410 (Gone) acelera a remoção do índice
/wp-content/*   /404.html   410!
/wp-admin/*     /404.html   410!
/wp-json/*      /404.html   410!
/feed/*         /404.html   410!
```

> É preciso criar `public/404.html`, uma página estática simples com link para a home. Ela ainda não existe.
>
> Se algum post antigo (ex.: *atlas-chat-gpt*, *google-ia-overview*) tinha tráfego, vale recriá-lo no Sanity e redirecionar para `/blog/<slug>` em vez de `/blog`, para recuperar a autoridade.

#### P0.2 · Parar de responder 200 para URLs inexistentes — esforço **P**
Arquivo: [public/_redirects](public/_redirects). Trocar o pega-tudo por rotas explícitas e um 404 real:

```
/sitemap.xml                 /.netlify/functions/sitemap  200!
/                            /index.html  200
/metodologia                 /index.html  200
/frentes-*                   /index.html  200
/especialidade-*             /index.html  200
/cases                       /index.html  200
/case-*                      /index.html  200
/blog                        /index.html  200
/blog/*                      /index.html  200
/partners                    /index.html  200
/ferramentas                 /index.html  200
/ferramentas-*               /index.html  200
/*                           /index.html  404
```

No [src/App.tsx](src/App.tsx), `resolveRouteFromLocation()` deve devolver uma rota `not-found` em vez de `home`, renderizar uma página 404 de verdade e injetar `<meta name="robots" content="noindex">`.

No [src/components/BlogPostPage.tsx:129](src/components/BlogPostPage.tsx), quando o post não existir no Sanity, aplicar o mesmo `noindex`. O status 404 real para slugs inexistentes vem com a pré-renderização (P0.4) ou com uma Edge Function.

#### P0.3 · Uma única política de URL (sem barra final) — esforço **P**
- [public/_redirects](public/_redirects): `/blog/:slug/  /blog/:slug  301!` e o equivalente para cada rota estática (`/metodologia/  /metodologia  301!` etc.).
- [netlify/functions/sitemap.js:202](netlify/functions/sitemap.js): remover a `/` final dos posts e do fallback (linha 233), e emitir `https://preditiva.co/` com barra para a home.
- O `lastmod` das páginas estáticas deve usar uma data fixa (data do último deploy, `process.env.DEPLOY_ID`/build time) em vez de `new Date()`. Remover `changefreq` e `priority`, que o Google ignora.
- Sitemap, canonical, `og:url` e links internos precisam ser **idênticos**.

#### P0.4 · Pré-renderizar o HTML de cada rota (SSG) — esforço **M/G**, o item de maior impacto
É o que resolve de vez a duplicação, o GEO e parte do LCP. Opções, da recomendada para a mais simples:

1. **React Router v7 em modo framework com `prerender`** (o `react-router-dom` já está nas dependências, mas não é usado). Gera `dist/metodologia/index.html` e as demais rotas com HTML completo, `<title>`, canonical e meta próprios. Os slugs do blog podem ser buscados no Sanity durante o build. Exige migrar o roteamento por `useState` para rotas reais.
2. **Script de pré-render pós-build** (`vite build && node scripts/prerender.mjs`): usa `react-dom/server` (`renderToString`) ou Puppeteer para gravar um HTML por rota, com o `<head>` correto vindo do mesmo mapa `PAGE_SEO` de [src/lib/seo.ts](src/lib/seo.ts). Mantém a arquitetura atual. É preciso proteger os acessos a `window` no topo do módulo (ex.: `resolveRouteFromLocation`).
3. **Paliativo rápido: Netlify Edge Function** que intercepta o `index.html` e reescreve `<title>`, description, canonical, `og:*` e JSON-LD por rota, e devolve 404 para slugs inexistentes (consultando o Sanity). Corrige os sinais de duplicação em horas, mas o corpo continua vazio para crawlers de IA.

> Recomendação: aplicar **P0.1 a P0.3 + a Edge Function (opção 3)** nesta semana, para estancar a duplicação, e planejar a **opção 1 ou 2** em seguida, por causa do GEO.

#### P0.5 · Links internos rastreáveis — esforço **M**
- [src/components/Navbar.tsx](src/components/Navbar.tsx) e [src/components/Footer.tsx](src/components/Footer.tsx): trocar `href="#frentes-aceleradora"` por `href="/frentes-aceleradora"`. Manter o `onClick` com `preventDefault()` + `navigate()` para a navegação SPA continuar instantânea.
- Converter em `<a href="/rota">` todos os `<button onClick={() => onNavigatePage(...)}>` que levam a outra página: cards do blog ([src/components/BlogPage.tsx:227](src/components/BlogPage.tsx)), [src/components/InsightsSection.tsx](src/components/InsightsSection.tsx), cases, especialidades e CTAs.
- Criar um componente `<AppLink to="/rota">` que centralize isso (ou usar o `<Link>` do React Router, se adotar a opção P0.4-1).
- Criar páginas reais para **Política de Privacidade** e **Cookies**. Hoje são `alert()` no [src/components/Footer.tsx:142](src/components/Footer.tsx), o que prejudica confiança (E-E-A-T) e conformidade com a LGPD.

### P1 — Performance e Core Web Vitals

O LCP (1,2 s) e o CLS (0,02) estão bons. **O problema é o TBT de 3,3 s**, com 20 tarefas longas e 2,7 s de execução de JavaScript. As tarefas longas de `react-vendor` continuam aparecendo até 25 s depois do carregamento, o que indica **re-renderizações contínuas causadas por animações infinitas**, e não só o custo inicial. No mobile, o INP deve estar ruim pelo mesmo motivo.

| # | Ação | Arquivos | Ganho esperado | Esforço |
|---|---|---|---|---|
| P1.1 | Substituir as ~20 animações infinitas do Framer Motion por `@keyframes` CSS (só `transform`/`opacity`) e pausar quando fora da tela (`IntersectionObserver`). No mobile, usar uma versão estática | [src/components/HeroLogoMotion.tsx](src/components/HeroLogoMotion.tsx) | TBT −1 a 2 s | M |
| P1.2 | Animar o carrossel de logos com CSS puro (`animation: scroll linear infinite`), sem estado React. Já há `content-visibility` em outras seções | [src/components/ClientSlider.tsx](src/components/ClientSlider.tsx) | TBT, DOM | P |
| P1.3 | Revisar os `animate={{...}}` com `repeat: Infinity` nas páginas internas (SEO, Mídia, CRM, Dados, Dev, Growth: 5 cada) e trocar por CSS | `src/components/*Page.tsx` | TBT nas internas | M |
| P1.4 | Avaliar trocar `motion` por CSS nas entradas simples (fade/slide) e carregar `motion-vendor` (95 KB) só onde houver gesto/layout | geral | −95 KB JS | M |
| P1.5 | GTM: remover o `setTimeout(loadGTM, 3500)` e carregar só na primeira interação (`scroll`/`pointerdown`/`keydown`), ou mover para o Partytown (web worker). No GTM, consolidar AW + GA4 em uma única Google Tag | [index.html:57](index.html) | −~1 s de CPU, −600 KB de terceiros no carregamento | P |
| P1.6 | Favicon de **167 KB**: gerar `favicon.ico` 32×32 (~2 KB), `favicon.svg` e `apple-touch-icon.png` 180×180 | [public/favicon.png](public/favicon.png), [index.html:8](index.html) | −165 KB em todas as páginas | P |
| P1.7 | Converter imagens pesadas para WebP/AVIF no tamanho exibido: `paulo-andré-miami.jpg` (211 KB), `FOTO-ADEMAR.png` (290 KB), `og-cover.png` (607 KB, usar JPG ~120 KB) | [public/](public/), [clientes/](clientes/) | −400 KB | P |
| P1.8 | Imagens do Sanity: hoje são servidas em 1376×768. Adicionar `w`, `h`, `fit=crop`, `q=75`, `auto=format` + `srcset`/`sizes`, e `loading="lazy"` abaixo da dobra | [src/lib/seo.ts](src/lib/seo.ts) (`withSanityImageFormat`), [src/components/BlogPage.tsx:57](src/components/BlogPage.tsx), [src/components/InsightsSection.tsx](src/components/InsightsSection.tsx) | −50 a 70% por imagem | P |
| P1.9 | Hospedar a fonte Familjen Grotesk localmente (`woff2`, subset latin) com `<link rel="preload">` e remover pesos não usados (itálicos 400/700). Elimina 2 conexões externas | [index.html:46](index.html), [src/index.css](src/index.css) | FCP/LCP, sem FOUT | P |
| P1.10 | Cache: hoje tudo fora de `/assets/*` tem `max-age=0`. Adicionar cache longo para `/logo/*`, `/clientes/*`, `/*.webp`, `/*.png`, `/*.ico` e `/fonts/*` | [public/_headers](public/_headers) | Visitas repetidas | P |
| P1.11 | `preconnect` para `https://cdn.sanity.io` (imagens), hoje ausente. Remover os preconnects do Google Fonts após a P1.9 | [index.html:37](index.html) | LCP do blog | P |
| P1.12 | Sanity no cliente com `useCdn: true` (leitura pública fica mais rápida e barata). **Nunca** expor `VITE_SANITY_TOKEN` no bundle: tudo que começa com `VITE_` vai para o navegador | [src/lib/sanity.ts](src/lib/sanity.ts) | TTFB das chamadas + segurança | P |
| P1.13 | Higiene: remover dependências não usadas no `src` (`@google/genai`, `express`, `dotenv`, `react-gtm-module`, `@types/express`), tirar a pasta `dist/` do git (adicionar ao `.gitignore`) e renomear `"name": "react-example"` | [package.json](package.json), [.gitignore](.gitignore) | Build/manutenção | P |
| P1.14 | Reduzir o DOM (1.155 elementos): ícones `lucide` decorativos repetidos podem virar sprites/CSS. O carrossel duplica os logos | geral | Estilo/layout | P |

> **Status (03/11/2026): implementado na branch `perf/p1-performance`.**
> - Feito: P1.1, P1.2, P1.5, P1.6, P1.7, P1.8, P1.9, P1.10, P1.11, P1.12 e P1.13 (exceto tirar `dist/` do git). O H1 do hero deixou de nascer com `opacity: 0`.
> - P1.3 não era necessário: os `animate={{…}}` das páginas internas são animações de entrada que rodam uma vez, não loops.
> - Lighthouse 12.6.1, home, build local × produção: tempo de main thread **3,1 s → 1,4 s** no desktop (nota 94 → 99) e **7,6 s → 5,1 s** no mobile (69 → 74). Peso total 1,76 MB → 1,23 MB.
> - O TBT que sobra no mobile (~650 ms) vem quase todo de **terceiros**: GTM, dois `gtag.js` (Ads + GA4) e o Pixel da Meta, ~1,2 s de tarefas longas. Próximos passos: unificar AW + GA4 numa única Google Tag no GTM (painel) e decidir se as tags passam a carregar só na interação (perde as visitas que não interagem) ou via Partytown.
> - Pendente: P1.4 (trocar Framer Motion por CSS nas entradas) e P1.14 (DOM).

**Meta após o P1:** TBT < 300 ms e GTmetrix > 90%. Medir também no PageSpeed Insights **mobile**, que é o que o Google usa para ranquear.

### P2 — SEO on-page e técnico

| # | Ação | Arquivos | Esforço |
|---|---|---|---|
| P2.1 | O H1 da home contém o efeito *typewriter*, então o Google captura uma palavra pela metade. Colocar o texto completo no H1 (ex.: "aceleradora digital, consultoria estratégica e alocação de especialistas") com `sr-only` e deixar a animação como `aria-hidden` | [src/components/Hero.tsx:57](src/components/Hero.tsx) | P |
| P2.2 | Unificar a descrição da home: [index.html:10](index.html) e `PAGE_SEO.home` ([src/lib/seo.ts:910](src/lib/seo.ts)) têm textos diferentes. Gerar o head do `index.html` a partir do mesmo mapa | idem | P |
| P2.3 | URLs com intenção de busca: `/especialidade-seo` → `/seo-tecnico-ecommerce`, `/frentes-aceleradora` → `/aceleradora-de-ecommerce` (com 301 das atuais). Só fazer junto com o P0.4, para não gerar mais uma rodada de redirects | rotas + `_redirects` | M |
| P2.4 | Schema `Organization` completo: `sameAs` (LinkedIn, Instagram, YouTube), `contactPoint`, `address`, `foundingDate`, `founder` (Person). Adicionar `WebSite` | [index.html:25](index.html) | P |
| P2.5 | `BlogPosting`: incluir `dateModified`, `author` como `Person` (com `url` e `sameAs`), `publisher` com `logo`, `image` como `ImageObject` e `inLanguage: pt-BR` | [src/lib/seo.ts:1081](src/lib/seo.ts) | P |
| P2.6 | `Service` schema em cada página de especialidade/frente; `FAQPage` nas seções de FAQ ([src/components/FaqSection.tsx](src/components/FaqSection.tsx), [src/components/MethodologyFaq.tsx](src/components/MethodologyFaq.tsx)) | páginas | P |
| P2.7 | Páginas de autor (`/blog/autor/<nome>`) com bio, cargo e links. Fortalecem o E-E-A-T e reforçam o schema `Person` | Sanity + rota | M |
| P2.8 | Linkagem interna: cada post deve linkar 2 ou 3 páginas de serviço relacionadas, e cada serviço deve mostrar os posts relacionados (via `category` do Sanity) | [src/components/BlogPostPage.tsx](src/components/BlogPostPage.tsx), páginas de serviço | M |
| P2.9 | Feed RSS `/blog/rss.xml` (Netlify Function, como o sitemap). Ajuda na descoberta por agregadores e LLMs | `netlify/functions/` | P |
| P2.10 | Revisar `alt` de todas as imagens (logos de clientes devem ter `alt="Logo <cliente>"`; decorativas, `alt=""`) | componentes | P |

### P3 — GEO (Generative Engine Optimization)

**Pré-requisito: P0.4.** Sem HTML pré-renderizado, nada abaixo é lido pelos motores de IA.

| # | Ação | Onde | Esforço |
|---|---|---|---|
| P3.1 | `/llms.txt`: resumo da Preditiva, serviços, cases com números e links para as páginas-chave. Também `/llms-full.txt`, gerado do Sanity numa Netlify Function | `public/llms.txt`, `netlify/functions/` | P |
| P3.2 | `robots.txt`: incluir `OAI-SearchBot`, `Claude-SearchBot`, `Claude-User`, `Perplexity-User`, `Applebot-Extended` e `Bingbot`. Obs.: `Google-Extended` não controla o AI Overviews, que usa o Googlebot | [public/robots.txt](public/robots.txt) | P |
| P3.3 | **IndexNow** (Bing, Yandex, Seznam; o ChatGPT Search usa o índice do Bing): arquivo de chave em `public/` + Netlify Function chamada por webhook do Sanity a cada publicação | `public/<key>.txt`, `netlify/functions/indexnow.js` | P |
| P3.4 | Formato de conteúdo citável nos posts e páginas de serviço: resposta direta nas primeiras 2 ou 3 linhas, definições ("O que é X"), listas/tabelas, dados com fonte e data, e "Atualizado em" visível | schema do Sanity ([studio-preditiva/schemaTypes/post.ts](studio-preditiva/schemaTypes/post.ts)): campos `tldr`, `faq[]`, `updatedAt`, `sources[]` | M |
| P3.5 | Cases com números verificáveis (% de crescimento, período, métrica) em HTML, não só em imagem, com schema `Article` + `about` (Organization do cliente). LLMs citam números concretos | `Case*Page.tsx` | P |
| P3.6 | Entidade consistente: mesmo nome, descrição e `sameAs` em todo lugar (site, LinkedIn, Google Business Profile, Crunchbase). Ajuda os modelos a resolver "Preditiva" como entidade | schema + perfis externos | P |

---

## 4. O que não é código (painéis)

1. **Google Search Console** (após o deploy de P0.1 a P0.3): clicar em *Validar correção* no relatório de duplicadas, reenviar o `sitemap.xml` e pedir indexação manual (Inspeção de URL) da home, de `/metodologia`, das 6 especialidades e dos 5 posts principais.
2. **Search Console**: confirmar que a propriedade de domínio (`preditiva.co`) está verificada, e não só o prefixo.
3. **Bing Webmaster Tools**: importar do GSC e enviar o sitemap. É a base do ChatGPT Search e do Copilot.
4. **GTM**: auditar tags duplicadas (AW + GA4 + Pixel), trocar o Pixel do navegador por **Conversions API** quando possível e usar *consent mode* v2.
5. **Netlify**: em *Post processing*, deixar "Pretty URLs" coerente com a política sem barra (P0.3) e checar se não há Asset Optimization legada ligada.

---

## 5. Cronograma sugerido

| Semana | Entregas | Resultado esperado |
|---|---|---|
| 1 | P0.1, P0.2, P0.3, P0.5, Edge Function (P0.4-3), P1.5, P1.6, P1.7 | Fim dos soft-404 e das duplicadas; GSC começa a validar em 1 a 3 semanas |
| 2 | P1.1, P1.2, P1.3, P1.8, P1.9, P1.10 a P1.12, P2.1, P2.2 | TBT < 300 ms, GTmetrix > 90% |
| 3 e 4 | P0.4 completo (SSG), P2.4 a P2.6, P3.1 a P3.3 | HTML real para Google e IAs; rich results |
| Contínuo | P2.7 a P2.10, P3.4 a P3.6, conteúdo | Ganho de autoridade e citações em IA |

**Como medir:** GSC (páginas indexadas, Cobertura), PageSpeed Insights mobile + CrUX (dados de campo de LCP, INP e CLS), GTmetrix, e `curl -A Googlebot https://preditiva.co/metodologia | grep "<title>"`, que deve devolver o título da metodologia, e não o da home.
