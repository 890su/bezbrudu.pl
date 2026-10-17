# bezbrudu.pl

Landing page for Bez Brudu (upholstery and mattress cleaning, Warsaw). Astro static site, four languages: `/` (PL), `/en/`, `/ru/`, `/uk/`. Hosted on Cloudflare Workers with static assets; a small Worker (`worker/`) forwards leads from `/api/lead` to Telegram.

## Local

```bash
npm install
npm run dev        # http://localhost:4321 (forms return an error here: no /api/lead)
npm run build      # static output in dist/
npm run cf:dev     # build + run the Worker locally with wrangler
```

## Deploy (Cloudflare Workers, auto-deploy from GitHub)

1. Workers & Pages → Create application → Connect GitHub → pick `890su/bezbrudu.pl`.
2. Build command `npm run build`, deploy command `npx wrangler deploy` (config in `wrangler.jsonc`).
3. Worker → Settings → Variables and Secrets, add as **secrets**:
   - `TG_BOT_TOKEN`: token from @BotFather
   - `TG_CHAT_ID`: chat or group id that receives leads
4. Every push to `main` builds and deploys.

Manual deploy from this machine: `npx wrangler login`, then `npm run deploy`.

The bot token never reaches the browser (the old site kept it in client JS).

## Before launch

- Real phone and WhatsApp number in `src/data/site.ts` (`phoneDisplay`, `phoneHref`, `whatsappHref`).
- Prices live in `src/data/site.ts`; texts in `src/data/i18n.ts` (all four languages).
- Real photos of work can be added later; no section pretends to have them.

The previous static version is kept locally in `bezbrudu.pl/` (not in the repository).
