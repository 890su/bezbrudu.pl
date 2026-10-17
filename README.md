# bezbrudu.pl

Landing page for Bez Brudu (upholstery and mattress cleaning, Warsaw). Astro static site, four languages: `/` (PL), `/en/`, `/ru/`, `/uk/`. Leads go to Telegram through a Cloudflare Pages Function.

## Local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ (forms return an error here: no /api/lead)
```

The form endpoint `/api/lead` runs only on Cloudflare (or locally via `npx wrangler pages dev dist`).

## Deploy to Cloudflare Pages

1. Push the repo to GitHub and create a Pages project from it.
2. Build command `npm run build`, output directory `dist`.
3. Settings → Variables and Secrets, add as **secrets**:
   - `TG_BOT_TOKEN`: token from @BotFather
   - `TG_CHAT_ID`: chat or group id that receives leads
4. The `functions/` folder deploys automatically as `/api/lead`.

The bot token never reaches the browser (the old site kept it in client JS).

## Before launch

- Real phone and WhatsApp number in `src/data/site.ts` (`phoneDisplay`, `phoneHref`, `whatsappHref`).
- Prices live in `src/data/site.ts`; texts in `src/data/i18n.ts` (all four languages).
- Real photos of work can be added later; no section pretends to have them.

The previous static version is kept locally in `bezbrudu.pl/` (not in the repository).
