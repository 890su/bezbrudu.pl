// Business facts used across all languages.
// Domain comes from `site` in astro.config.mjs.
const origin = new URL(import.meta.env.SITE).origin;
const host = new URL(origin).host;

export const site = {
  name: 'Bez Brudu',
  url: origin,
  host,
  phoneDisplay: '+48 453 169 250',
  phoneHref: 'tel:+48453169250',
  whatsappHref: 'https://wa.me/48453169250',
  email: `info@${host}`,
  minOrder: 150,
};

// First-order discount unlocked by cleaning the sofa on the home page. Service only, travel excluded.
// Shared with the Worker, which marks the code in the lead.
export { default as promo } from './promo.json';

export type Unit = 'pcs' | 'm2';

export interface PriceItem {
  id: 'sofa' | 'corner' | 'armchair' | 'chair' | 'mattress1' | 'mattress2' | 'carpet';
  price: number;
  unit: Unit;
  icon: 'sofa' | 'corner' | 'armchair' | 'chair' | 'mattress' | 'mattress2' | 'carpet';
  max: number;
}

// Set on 2026-10-17 at or slightly above the Warsaw average (bs1.pl, warszawa-pranie-dywanow.pl, mobiwash.pl, kb.pl).
export const prices: PriceItem[] = [
  { id: 'sofa', price: 169, unit: 'pcs', icon: 'sofa', max: 9 },
  { id: 'corner', price: 229, unit: 'pcs', icon: 'corner', max: 9 },
  { id: 'armchair', price: 79, unit: 'pcs', icon: 'armchair', max: 12 },
  { id: 'chair', price: 35, unit: 'pcs', icon: 'chair', max: 24 },
  { id: 'mattress1', price: 109, unit: 'pcs', icon: 'mattress', max: 9 },
  { id: 'mattress2', price: 169, unit: 'pcs', icon: 'mattress2', max: 9 },
  { id: 'carpet', price: 20, unit: 'm2', icon: 'carpet', max: 300 },
];

// Travel fee by distance from Ursynów: the district itself, its neighbours, one ring further, the far side.
export const travel: { fee: number; places: string[] }[] = [
  { fee: 0, places: ['Ursynów'] },
  { fee: 30, places: ['Mokotów', 'Wilanów', 'Włochy', 'Piaseczno'] },
  {
    fee: 50,
    places: ['Bemowo', 'Ochota', 'Praga-Południe', 'Śródmieście', 'Ursus', 'Wawer', 'Wola', 'Janki', 'Konstancin-Jeziorna', 'Pruszków'],
  },
  { fee: 70, places: ['Białołęka', 'Bielany', 'Praga-Północ', 'Rembertów', 'Targówek', 'Wesoła', 'Żoliborz'] },
];

export const langs = ['pl', 'en', 'ru', 'uk'] as const;
export type Lang = (typeof langs)[number];

export const langPath = (l: Lang) => (l === 'pl' ? '/' : `/${l}/`);
export const langLabel: Record<Lang, string> = { pl: 'PL', en: 'EN', ru: 'RU', uk: 'UA' };
export const langName: Record<Lang, string> = { pl: 'Polski', en: 'English', ru: 'Русский', uk: 'Українська' };
