import type { APIRoute } from 'astro';
import { langs, routes, type Page } from '../data/site';
import { dicts } from '../data/i18n';

export const GET: APIRoute = ({ site }) => {
  const urls = (Object.keys(routes) as Page[])
    .flatMap((page) => {
      const alternates = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${dicts[l].htmlLang}" href="${new URL(routes[page][l], site)}"/>`)
        .join('\n');
      return langs.map((l) => `  <url>\n    <loc>${new URL(routes[page][l], site)}</loc>\n${alternates}\n  </url>`);
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
