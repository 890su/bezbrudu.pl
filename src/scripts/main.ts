import { initScrub } from './scrub';

interface Ui {
  lang: string;
  pcs: string;
  m2: string;
  min: number;
  items: Record<string, string>;
  sending: string;
  error: string;
  errPhone: string;
  errName: string;
}

const ui: Ui = JSON.parse(document.getElementById('ui')?.textContent ?? '{}');
const money = new Intl.NumberFormat(ui.lang === 'uk' ? 'uk' : ui.lang, { maximumFractionDigits: 0 });

/* Header: hairline after scrolling, mobile menu */
const top = document.querySelector<HTMLElement>('[data-top]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu]');
const nav = document.querySelector<HTMLElement>('[data-nav]');

if (top) {
  const onScroll = () => top.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function setMenu(open: boolean) {
  if (!menuBtn || !nav) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
}
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuBtn.focus();
  }
});

/* Scrubbable sofa */
document.querySelectorAll<HTMLElement>('[data-scrub]').forEach(initScrub);

/* Parts list = price calculator */
const parts = [...document.querySelectorAll<HTMLElement>('[data-part]')];
const totalEl = document.querySelector<HTMLOutputElement>('[data-total]');
const minEl = document.querySelector<HTMLElement>('[data-min]');

function clampQty(input: HTMLInputElement) {
  const max = Number(input.max) || 99;
  const v = Math.round(Number(input.value));
  return Number.isFinite(v) ? Math.min(Math.max(v, 0), max) : 0;
}

function recalc() {
  let sum = 0;
  for (const part of parts) {
    const input = part.querySelector<HTMLInputElement>('input')!;
    const qty = clampQty(input);
    sum += qty * Number(part.dataset.price);
    part.classList.toggle('is-on', qty > 0);
    part.querySelector<HTMLButtonElement>('[data-step="-1"]')!.disabled = qty === 0;
    part.querySelector<HTMLButtonElement>('[data-step="1"]')!.disabled = qty >= Number(input.max);
  }
  const applied = sum > 0 && sum < ui.min;
  const shown = applied ? ui.min : sum;
  if (totalEl) totalEl.textContent = `${money.format(shown)} zł`;
  if (minEl) minEl.hidden = !applied;
}

for (const part of parts) {
  const input = part.querySelector<HTMLInputElement>('input')!;
  part.querySelectorAll<HTMLButtonElement>('[data-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const unitStep = part.dataset.unit === 'm2' ? 5 : 1;
      input.value = String(clampQty(input) + Number(btn.dataset.step) * unitStep);
      input.value = String(clampQty(input));
      recalc();
    });
  });
  input.addEventListener('input', recalc);
  input.addEventListener('change', () => {
    input.value = String(clampQty(input));
    recalc();
  });
  input.addEventListener('focus', () => input.select());
}
recalc();

function listSummary() {
  const lines: string[] = [];
  for (const part of parts) {
    const qty = clampQty(part.querySelector<HTMLInputElement>('input')!);
    if (!qty) continue;
    const unit = part.dataset.unit === 'm2' ? ui.m2 : ui.pcs;
    lines.push(`${ui.items[part.dataset.id!]}: ${qty} ${unit}`);
  }
  return lines;
}

/* Lead forms: calculator sheet and contact form, both posting to the Cloudflare function */
function phoneOk(v: string) {
  return v.replace(/\D/g, '').length >= 9;
}

function setInvalid(field: HTMLInputElement | null, bad: boolean) {
  if (!field) return;
  if (bad) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
}

document.querySelectorAll<HTMLFormElement>('form[data-lead]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const label = submit.querySelector('span')!;
  const labelText = label.textContent ?? '';
  const done = form.parentElement!.querySelector<HTMLElement>('[data-done]');
  const nameEl = form.querySelector<HTMLInputElement>('[name="name"]');
  const phoneEl = form.querySelector<HTMLInputElement>('[name="phone"]');

  [nameEl, phoneEl].forEach((el) =>
    el?.addEventListener('input', () => {
      if (el.getAttribute('aria-invalid')) setInvalid(el, false);
    }),
  );

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const badName = !data.name?.trim();
    const badPhone = !phoneOk(data.phone ?? '');
    setInvalid(nameEl, badName);
    setInvalid(phoneEl, badPhone);
    if (badName || badPhone) {
      status.textContent = badPhone ? ui.errPhone : ui.errName;
      (badName ? nameEl : phoneEl)?.focus();
      return;
    }

    const payload = {
      source: form.dataset.source,
      lang: ui.lang,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || '',
      service: data.service || '',
      message: data.message?.trim() || '',
      items: form.dataset.source === 'calculator' ? listSummary() : [],
      total: form.dataset.source === 'calculator' ? totalEl?.textContent ?? '' : '',
      company: data.company || '',
    };

    status.textContent = '';
    submit.setAttribute('aria-busy', 'true');
    submit.disabled = true;
    label.textContent = ui.sending;
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      if (done) {
        done.hidden = false;
        done.focus();
      }
    } catch {
      status.textContent = ui.error;
    } finally {
      submit.removeAttribute('aria-busy');
      submit.disabled = false;
      label.textContent = labelText;
    }
  });
});
