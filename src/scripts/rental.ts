// Rental booking sheet: package, delivery slot, extras and travel fee add up to the total.

interface RentalUi {
  lang: string;
  errDate: string;
  rental: { pkg: string; date: string; address: string; addons: string; total: string };
}

export function initRental(ui: RentalUi) {
  const form = document.querySelector<HTMLFormElement>('form[data-rental]');
  if (!form) return;
  const money = new Intl.NumberFormat(ui.lang, { maximumFractionDigits: 0 });
  const totalEl = form.querySelector<HTMLOutputElement>('[data-rental-total]')!;
  const slot = form.querySelector<HTMLSelectElement>('[data-slot]')!;
  const date = form.querySelector<HTMLInputElement>('[data-date]')!;
  const travel = form.querySelector<HTMLSelectElement>('[data-travel]')!;
  const status = form.querySelector<HTMLElement>('[data-status]')!;

  const pkg = () => form.querySelector<HTMLInputElement>('input[name="pkg"]:checked')!;
  const addons = () => [...form.querySelectorAll<HTMLInputElement>('input[name^="addon_"]:checked')];
  const fee = () => Number(travel.selectedOptions[0]?.dataset.fee ?? 0);

  // Today in local time, so the date picker cannot go into the past.
  const now = new Date();
  date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  function syncSlots() {
    const id = pkg().value;
    let first: HTMLOptionElement | null = null;
    for (const opt of slot.options) {
      const show = opt.dataset.pkg === id;
      opt.hidden = !show;
      opt.disabled = !show;
      if (show && !first) first = opt;
    }
    if (slot.selectedOptions[0]?.hidden && first) first.selected = true;
  }

  function recalc() {
    const total = Number(pkg().dataset.price) + addons().reduce((s, a) => s + Number(a.dataset.price), 0) + fee();
    totalEl.textContent = `${money.format(total)} zł`;
  }

  form.addEventListener('change', (e) => {
    if ((e.target as HTMLInputElement).name === 'pkg') syncSlots();
    recalc();
  });
  date.addEventListener('input', () => date.removeAttribute('aria-invalid'));

  // Runs before the shared lead handler: a booking without a day is not a booking.
  form.addEventListener(
    'submit',
    (e) => {
      if (date.value) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      date.setAttribute('aria-invalid', 'true');
      status.textContent = ui.errDate;
      date.focus();
    },
    true,
  );

  syncSlots();
  recalc();
}

// Lines for the Telegram message.
export function rentalSummary(form: HTMLFormElement, ui: RentalUi) {
  const data = new FormData(form);
  const p = form.querySelector<HTMLInputElement>('input[name="pkg"]:checked');
  const travel = form.querySelector<HTMLSelectElement>('[data-travel]');
  const fee = Number(travel?.selectedOptions[0]?.dataset.fee ?? 0);
  const extras = [...form.querySelectorAll<HTMLInputElement>('input[name^="addon_"]:checked')].map(
    (a) => `${a.value} (+${a.dataset.price} zł)`,
  );
  const lines = [
    `${ui.rental.pkg}: ${p?.dataset.name} (${p?.dataset.price} zł)`,
    `${ui.rental.date}: ${data.get('date') || '—'}, ${data.get('slot') || '—'}`,
  ];
  if (extras.length) lines.push(`${ui.rental.addons}: ${extras.join(', ')}`);
  if (travel?.value) lines.push(`Dojazd: ${travel.value}${fee ? ` (+${fee} zł)` : ''}`);
  const address = String(data.get('address') ?? '').trim();
  if (address) lines.push(`${ui.rental.address}: ${address}`);
  return lines;
}
