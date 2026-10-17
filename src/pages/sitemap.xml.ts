import type { APIRoute } from 'astro';
import { langs, langPath } from '../data/site';
import { dicts } from '../data/i18n';

export const GET: APIRoute = ({ site }) => {
  const alternates = langs
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${dicts[l].htmlLang}" href="${new URL(langPath(l), site)}"/>`)
    .join('\n');
  const urls = langs
    .map((l) => `  <url>\n    <loc>${new URL(langPath(l), site)}</loc>\n${alternates}\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
