import {Helmet} from 'react-helmet-async';

const SITE_URL = 'https://preditiva.co';

interface SEOProps {
  title?: string;
  description?: string;
  /** Caminho canônico explícito (ex.: '/metodologia'). Se omitido, usa a URL atual. */
  path?: string;
}

export function SEO({title, description, path}: SEOProps = {}) {
  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname + window.location.search + window.location.hash
      : '/';
  const canonicalPath = path ?? currentPath;
  const canonicalUrl =
    SITE_URL +
    (canonicalPath === '/' || canonicalPath === ''
      ? ''
      : canonicalPath.replace(/\/+$/, ''));

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="alternate" hreflang="pt-br" href={canonicalUrl} />
    </Helmet>
  );
}
