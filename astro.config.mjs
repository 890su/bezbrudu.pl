// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The one place the production domain lives. Switch to https://bezbrudu.pl once it is ours.
  site: 'https://bezbrudu.com.pl',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en', 'ru', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
});
