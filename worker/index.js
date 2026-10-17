// Worker entry: /api/lead goes to the lead handler, everything else is the static Astro build.
import { handleLead } from './lead.js';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/lead') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleLead(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
