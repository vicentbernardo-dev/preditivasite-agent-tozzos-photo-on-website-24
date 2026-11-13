/**
 * Envio dos formulários do site. Duas vias em paralelo:
 *  1) Netlify Function `lead` → Beni Sales (cria empresa, contato, negócio e tarefa para responder);
 *  2) Netlify Forms (rede de segurança: a mensagem fica guardada no painel da Netlify mesmo se a Beni Sales estiver fora).
 * Só mostra "enviado" se ao menos uma das vias confirmou. Se as duas falharem, devolve ok:false para a tela avisar.
 */
type Fields = Record<string, unknown>;

const FIRST = {
  name: ['name', 'nome'],
  email: ['email'],
  phone: ['phone', 'telefone', 'whatsapp'],
  company: ['company', 'empresa'],
  site: ['website', 'site'],
  message: ['message', 'mensagem'],
} as const;

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

function build(source: string, data: Fields) {
  const used = new Set<string>();
  const pick = (keys: readonly string[], max: number) => {
    for (const k of keys) { const v = clean(data[k], max); if (v) { used.add(k); return v; } }
    return '';
  };
  const lead = {
    name: pick(FIRST.name, 120), email: pick(FIRST.email, 200), phone: pick(FIRST.phone, 40),
    company: pick(FIRST.company, 160), site: pick(FIRST.site, 200), message: pick(FIRST.message, 4000),
  };
  const extra: Record<string, string> = {};
  for (const [k, v] of Object.entries(data)) if (!used.has(k) && typeof v === 'string' && v.trim()) extra[k] = v.trim().slice(0, 500);
  const utm: Record<string, string> = {};
  try {
    const q = new URLSearchParams(window.location.search);
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) { const v = q.get(k); if (v) utm[k] = v.slice(0, 150); }
  } catch { /* sem window (prerender) */ }
  return { ...lead, source, page: typeof window !== 'undefined' ? window.location.href.slice(0, 500) : '', extra, utm };
}

const withTimeout = (ms: number) => { const c = new AbortController(); setTimeout(() => c.abort(), ms); return c.signal; };

export async function submitLead(source: string, data: Fields): Promise<{ ok: boolean; beni: boolean; forms: boolean }> {
  const lead = build(source.replace(/[^a-z0-9_:-]/gi, '').slice(0, 40) || 'site', data);
  if (!lead.name || !lead.email) return { ok: false, beni: false, forms: false };

  const viaBeni = fetch('/.netlify/functions/lead', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(lead), signal: withTimeout(10000),
  }).then((r) => r.ok);

  const body = new URLSearchParams({
    'form-name': 'lead', name: lead.name, email: lead.email, phone: lead.phone, company: lead.company, site: lead.site,
    message: lead.message, source: lead.source, page: lead.page, extra: JSON.stringify(lead.extra),
  });
  const viaForms = fetch('/', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: body.toString(), signal: withTimeout(10000),
  }).then((r) => r.ok);

  const [a, b] = await Promise.allSettled([viaBeni, viaForms]);
  const beni = a.status === 'fulfilled' && a.value, forms = b.status === 'fulfilled' && b.value;
  return { ok: beni || forms, beni, forms };
}

/** Newsletter (só e-mail): guardada no Netlify Forms. Não vai para a Beni Sales, pois não é um lead comercial identificado. */
export async function submitNewsletter(email: string): Promise<boolean> {
  const e = email.trim().toLowerCase().slice(0, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return false;
  try {
    const r = await fetch('/', {
      method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'newsletter', email: e, page: window.location.href.slice(0, 500) }).toString(), signal: withTimeout(10000),
    });
    return r.ok;
  } catch { return false; }
}
