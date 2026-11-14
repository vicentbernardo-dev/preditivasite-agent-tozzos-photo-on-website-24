// Captura de leads do site: recebe o formulário do navegador e entrega à Beni Sales (servidor → servidor).
// A chave da Beni Sales fica SOMENTE na variável de ambiente BENISALES_LEAD_KEY da Netlify; nunca vai ao navegador nem ao repositório.
// Se a Beni Sales estiver fora do ar, responde erro (502) e o navegador confia na cópia do Netlify Forms (rede de segurança em paralelo).
const BENISALES_URL = process.env.BENISALES_LEAD_URL || 'https://app.benisales.com.br/api/public/leads';

// Proteção contra abuso (a função é pública por natureza e entrega com a chave da Beni Sales):
//  - só aceita chamadas vindas do próprio site (Origin/Referer): preditiva.co, www e os deploys da Netlify;
//  - limite por IP (memória da instância; a Beni Sales ainda aplica o limite dela por chave);
//  - campo-armadilha `hp`: se vier preenchido, finge sucesso e descarta;
//  - a chave só vale para criar leads (escopo public_leads na Beni Sales) e pode ser revogada sem afetar mais nada.
const ALLOWED_HOSTS = new Set(['preditiva.co', 'www.preditiva.co']);
const originOk = (event) => {
  const h = event.headers || {};
  const raw = h.origin || h.referer || '';
  try { const host = new URL(raw).hostname.toLowerCase(); return ALLOWED_HOSTS.has(host) || host.endsWith('.netlify.app'); } catch { return false; }
};
const hits = new Map();
const tooMany = (ip) => {
  const now = Date.now(), win = 10 * 60 * 1000, max = 8;
  const arr = (hits.get(ip) || []).filter((t) => now - t < win);
  arr.push(now); hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return arr.length > max;
};

const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const json = (statusCode, body) => ({ statusCode, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }, body: JSON.stringify(body) });

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') return json(405, { ok: false, error: 'method' });
  const key = process.env.BENISALES_LEAD_KEY;
  if (!originOk(event)) return json(403, { ok: false, error: 'origin' });
  const ip = (event.headers && (event.headers['x-nf-client-connection-ip'] || event.headers['client-ip'])) || 'desconhecido';
  if (tooMany(ip)) return json(429, { ok: false, error: 'rate' });
  if (!key) return json(503, { ok: false, error: 'not_configured' });
  if ((event.body || '').length > 20000) return json(413, { ok: false, error: 'too_large' });

  let d;
  try { d = JSON.parse(event.body || '{}'); } catch { return json(400, { ok: false, error: 'json' }); }

  if (typeof d.hp === 'string' && d.hp.trim()) return json(200, { ok: true }); // robô: não grava, não revela
  const name = str(d.name, 120), email = str(d.email, 200).toLowerCase();
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { ok: false, error: 'invalid' });

  // campos extras: só texto curto, no máximo 12
  const extra = {};
  if (d.extra && typeof d.extra === 'object') {
    for (const [k, v] of Object.entries(d.extra).slice(0, 12)) if (typeof v === 'string' && v.trim()) extra[str(k, 40)] = str(v, 500);
  }
  const utm = {};
  if (d.utm && typeof d.utm === 'object') {
    for (const [k, v] of Object.entries(d.utm).slice(0, 8)) if (typeof v === 'string' && v.trim()) utm[str(k, 40)] = str(v, 150);
  }

  const payload = {
    name, email,
    phone: str(d.phone, 40) || undefined,
    company: str(d.company, 160) || undefined,
    site: str(d.site, 200) || undefined,
    message: str(d.message, 4000) || undefined,
    page: str(d.page, 500) || undefined,
    source: str(d.source, 40).replace(/[^a-z0-9_:-]/gi, '').slice(0, 40) || 'site',
    consent: false, // os formulários atuais não coletam aceite explícito; não afirmamos um consentimento que não existe
    extra: Object.keys(extra).length ? extra : undefined,
    utm: Object.keys(utm).length ? utm : undefined,
  };

  try {
    const r = await fetch(BENISALES_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) {
      console.error('beni-sales respondeu', r.status); // sem dados do lead no log
      return json(502, { ok: false, error: 'upstream', status: r.status });
    }
    return json(200, { ok: true });
  } catch (e) {
    console.error('beni-sales indisponível', e && e.name);
    return json(502, { ok: false, error: 'unavailable' });
  }
};
