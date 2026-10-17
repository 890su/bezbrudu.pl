// Worker entry: /api/lead goes to the lead handler, everything else is the static Astro build.
import { handleLead } from './lead.js';
import { issuePromo } from './promo.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    // One canonical host: www.<domain> → <domain>.
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    if (pathname === '/api/promo') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      return issuePromo(env);
    }
    if (pathname === '/api/lead') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleLead(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
