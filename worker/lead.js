// POST /api/lead → Telegram message.
// Set TG_BOT_TOKEN and TG_CHAT_ID as secrets on the Worker (Settings → Variables and Secrets).

import { promo, checkPromo, markPromoUsed } from './promo.js';

const MAX = { name: 80, phone: 30, email: 120, service: 120, message: 1500, item: 120 };

const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

export async function handleLead(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success.
  if (data.company) return json({ ok: true });

  const lead = {
    source: ['calculator', 'contact', 'rental'].includes(data.source) ? data.source : 'contact',
    lang: ['pl', 'en', 'ru', 'uk'].includes(data.lang) ? data.lang : 'pl',
    name: clean(data.name, MAX.name),
    phone: clean(data.phone, MAX.phone),
    email: clean(data.email, MAX.email),
    service: clean(data.service, MAX.service),
    message: clean(data.message, MAX.message),
    items: Array.isArray(data.items) ? data.items.slice(0, 10).map((i) => clean(i, MAX.item)).filter(Boolean) : [],
    total: clean(data.total, 40),
    code: clean(data.code, 20).toUpperCase(),
  };

  if (!lead.name || lead.phone.replace(/\D/g, '').length < 9) {
    return json({ ok: false, error: 'invalid' }, 422);
  }
  if (!env.TG_BOT_TOKEN || !env.TG_CHAT_ID) {
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const lines = [
    `<b>${lead.source === 'rental' ? 'Rezerwacja wynajmu' : 'Nowe zapytanie'}</b> · ${{ calculator: 'kalkulator', contact: 'formularz', rental: 'wynajem' }[lead.source]} · ${lead.lang.toUpperCase()}`,
    '',
    `<b>Imię:</b> ${esc(lead.name)}`,
    `<b>Telefon:</b> ${esc(lead.phone)}`,
  ];
  if (lead.email) lines.push(`<b>E-mail:</b> ${esc(lead.email)}`);
  if (lead.service) lines.push(`<b>Usługa:</b> ${esc(lead.service)}`);
  if (lead.items.length) {
    lines.push('', '<b>Lista:</b>', ...lead.items.map((i) => `• ${esc(i)}`));
    if (lead.total) lines.push(`<b>${lead.source === 'rental' ? 'Razem' : 'Razem od'}:</b> ${esc(lead.total)}`);
  }
  const codeStatus = await checkPromo(env, lead.code);
  if (codeStatus) {
    const note = {
      valid: `✅ ważny, −${promo.percent}% na usługę (pierwsze zamówienie)`,
      used: '⚠️ już wykorzystany wcześniej, rabat nie przysługuje',
      unknown: '❌ nie wydaliśmy takiego kodu, rabat nie przysługuje',
    }[codeStatus];
    lines.push(`<b>Kod rabatowy:</b> ${esc(lead.code)} · ${note}`);
  }
  if (lead.message) lines.push('', `<b>Wiadomość:</b> ${esc(lead.message)}`);
  lines.push('', new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' }));

  const tg = await fetch(`https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT_ID, text: lines.join('\n'), parse_mode: 'HTML', disable_web_page_preview: true }),
  });

  if (!tg.ok) return json({ ok: false, error: 'telegram' }, 502);
  if (codeStatus === 'valid') await markPromoUsed(env, lead.code, lead.phone);
  return json({ ok: true });
}
