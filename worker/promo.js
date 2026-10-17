// First-order discount codes. Each sofa cleaned to 100% gets its own code, stored in KV
// so a lead can be checked: issued by us, not used before.
import promo from '../src/data/promo.json' with { type: 'json' };

const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // no 0/O, 1/I/L
const LENGTH = 5;
const PATTERN = new RegExp(`^${promo.prefix}[${ALPHABET}]{${LENGTH}}$`);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });

function randomCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(LENGTH));
  return promo.prefix + Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
}

export const looksLikeCode = (code) => PATTERN.test(code);

// POST /api/promo → { code }
export async function issuePromo(env) {
  if (!env.PROMO) return json({ ok: false, error: 'not_configured' }, 503);
  for (let i = 0; i < 5; i++) {
    const code = randomCode();
    if (await env.PROMO.get(code)) continue;
    await env.PROMO.put(code, JSON.stringify({ issued: new Date().toISOString(), used: null }), {
      expirationTtl: promo.validDays * 86400,
    });
    return json({ ok: true, code, percent: promo.percent });
  }
  return json({ ok: false, error: 'busy' }, 503);
}

// Status of a code from a lead, for the Telegram message: 'valid' | 'used' | 'unknown' (null when empty).
export async function checkPromo(env, code) {
  if (!code) return null;
  if (!looksLikeCode(code) || !env.PROMO) return 'unknown';
  const raw = await env.PROMO.get(code);
  if (!raw) return 'unknown';
  return JSON.parse(raw).used ? 'used' : 'valid';
}

// Called only after the lead reached Telegram, so a failed send never burns a code.
export async function markPromoUsed(env, code, who) {
  const raw = await env.PROMO.get(code);
  if (!raw) return;
  const entry = JSON.parse(raw);
  entry.used = { at: new Date().toISOString(), by: who };
  await env.PROMO.put(code, JSON.stringify(entry), { expirationTtl: promo.validDays * 86400 });
}

export { promo };
