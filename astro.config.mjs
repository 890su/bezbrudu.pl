// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bezbrudu.pl',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'ru', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
});
