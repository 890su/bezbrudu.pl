// Business facts used across all languages. Replace placeholders before launch.
export const site = {
  name: 'Bez Brudu',
  url: 'https://bezbrudu.pl',
  // TODO: real number. Display and tel/WhatsApp formats are kept separately.
  phoneDisplay: '+48 XXX XXX XXX',
  phoneHref: 'tel:+48XXXXXXXXX',
  whatsappHref: 'https://wa.me/48XXXXXXXXX',
  email: 'kontakt@bezbrudu.pl',
  minOrder: 150,
};

export type Unit = 'pcs' | 'm2';

export interface PriceItem {
  id: 'sofa' | 'corner' | 'armchair' | 'chair' | 'mattress1' | 'mattress2' | 'carpet';
  price: number;
  unit: Unit;
  icon: 'sofa' | 'corner' | 'armchair' | 'chair' | 'mattress' | 'mattress2' | 'carpet';
  max: number;
}

// Set on 2026-10-16 at or below the Warsaw median (bs1.pl, warszawa-pranie-dywanow.pl, mobiwash.pl, kb.pl).
export const prices: PriceItem[] = [
  { id: 'sofa', price: 139, unit: 'pcs', icon: 'sofa', max: 9 },
  { id: 'corner', price: 189, unit: 'pcs', icon: 'corner', max: 9 },
  { id: 'armchair', price: 69, unit: 'pcs', icon: 'armchair', max: 12 },
  { id: 'chair', price: 29, unit: 'pcs', icon: 'chair', max: 24 },
  { id: 'mattress1', price: 79, unit: 'pcs', icon: 'mattress', max: 9 },
  { id: 'mattress2', price: 129, unit: 'pcs', icon: 'mattress2', max: 9 },
  { id: 'carpet', price: 15, unit: 'm2', icon: 'carpet', max: 300 },
];

export const districts = [
  'Bemowo', 'Białołęka', 'Bielany', 'Mokotów', 'Ochota', 'Praga-Południe',
  'Praga-Północ', 'Rembertów', 'Śródmieście', 'Targówek', 'Ursus', 'Ursynów',
  'Wawer', 'Wesoła', 'Wilanów', 'Włochy', 'Wola', 'Żoliborz',
];

export const langs = ['pl', 'en', 'ru', 'uk'] as const;
export type Lang = (typeof langs)[number];

export const langPath = (l: Lang) => (l === 'pl' ? '/' : `/${l}/`);
export const langLabel: Record<Lang, string> = { pl: 'PL', en: 'EN', ru: 'RU', uk: 'UA' };
export const langName: Record<Lang, string> = { pl: 'Polski', en: 'English', ru: 'Русский', uk: 'Українська' };
