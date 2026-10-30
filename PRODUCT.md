# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated (2026-10-16): the user allowed a stack change; hosting is Cloudflare. Chosen: Astro static output with one page per language (`/`, `/en/`, `/ru/`, `/uk/`) for SEO and self-hosted fonts, deployed as a Cloudflare Worker with static assets from GitHub; the Worker (`worker/`) handles `/api/lead` and sends leads to Telegram so the bot token stays server-side. The previous static site is kept in `bezbrudu.pl/` for reference.

## Users

Residents of Warsaw and surroundings (up to ~30 km), mostly people renting or owning flats: young families with kids and pets, allergy sufferers, people moving in/out of a rental, landlords preparing a flat. They usually land from Google on a phone, with a concrete stained sofa, corner sofa or mattress in front of them, and want to know quickly: will it come clean, how much will it cost, when can you come. A sizeable share are Ukrainian, Russian and English speakers living in Warsaw.

## Product Purpose

Bez Brudu cleans upholstered furniture, mattresses and carpets on site at the customer's home using hot-water extraction. The site exists to turn a visitor into a lead: a phone call/WhatsApp message or a request form with an approximate price. Success is a lead with service, phone number and enough detail to quote.

## Positioning

On-site extraction cleaning in the customer's own flat in Warsaw, with a transparent price list at the Warsaw market average, a published travel fee by district, a re-clean guarantee, and service in four languages (PL/EN/RU/UA), which most local competitors do not offer.

## Operating Context

- Contact: phone and WhatsApp +48 453 269 150, email info@bezbrudu.com.pl, two forms (quick quote and full contact).
- Hours: Mon–Fri 8:00–20:00, Sat 9:00–18:00.
- Area: Warsaw districts (Mokotów, Ursynów, Wilanów, Śródmieście, Praga Południe/Północ, Wola, Żoliborz, Bielany, Targówek, Bemowo, Ursus, Ochota, Białołęka, Rembertów) and surroundings.
- Drying time after extraction: 2–4 hours.

## Capabilities and Constraints

Services: sofa/couch, corner sofa (narożnik), armchair, chairs, mattress (single/double, one or both sides), carpet/rug/fitted carpet on site.

Prices set on 2026-10-17 at or slightly above the Warsaw average (market reference: bs1.pl, warszawa-pranie-dywanow.pl, mobiwash.pl, kb.pl):

- Sofa 2–3 seats: from 169 zł
- Corner sofa: from 229 zł (large/U-shaped: individual quote)
- Armchair: from 79 zł
- Chair: from 35 zł
- Mattress single: from 109 zł (one side); double: from 169 zł (one side)
- Carpet / fitted carpet on site: from 20 zł/m²
- Minimum order 150 zł for the service

Travel fee, charged once per visit, by distance from Ursynów:

- Free: Ursynów
- +30 zł: Mokotów, Wilanów, Włochy, Piaseczno
- +50 zł: Bemowo, Ochota, Praga-Południe, Śródmieście, Ursus, Wawer, Wola, Janki, Konstancin-Jeziorna, Pruszków
- +70 zł: Białołęka, Bielany, Praga-Północ, Rembertów, Targówek, Wesoła, Żoliborz
- Other towns: quoted on request

First-order discount: cleaning the drawn sofa on the home page to 100% issues a one-time code (CZYSTO-XXXXX, −10% on the service, travel excluded, valid 90 days). Codes live in Cloudflare KV; a lead reports each code as valid, already used or unknown.

DIY rental (page `/wynajem/`, added 2026-10-30): a dedicated Kärcher Puzzi 10/1 (to be bought; the owner's Puzzi 100 stays for the cleaning service), delivered and collected on one evening route (18–21, or morning 8–10; weekends also daytime). Day 79 zł, weekend 139 zł, extras: upholstery dryer +29 zł, pet odour kit +29 zł; same travel zones as the service; deposit 200 zł by BLIK; same-day orders until 14:00. Guarantee: if the result disappoints, within 7 days the team cleans the item and deducts the rental from the service price. Market check (Warsaw, Oct 2026): 10+ rental firms at 39–80 zł/day; none sells the result, support in other languages or a guarantee.

Undecided: business address (JSON-LD has none), Telegram bot credentials (set by the owner as Worker secrets).

## Brand Commitments

Name "Bez Brudu" ("without dirt"), domain bezbrudu.pl. Polish-first copy, friendly and direct, informal "Ty". No existing logo asset (current mark is a text glyph).

## Evidence on Hand

None real yet. The business is new: there are no confirmed client counts, years of experience, Google rating or customer reviews, and no photos of work, equipment or team (`images/` is empty). Future work must not fabricate statistics, ratings, testimonials or before/after photos; illustrative visuals must be clearly non-photographic or labelled, and real photos are to be added later.

## Product Principles

1. Price clarity first: a visitor should see what their item costs before they have to talk to anyone.
2. Two equal paths to contact: call/WhatsApp and a request form, both reachable from anywhere on the page, on a phone.
3. Prove with method and guarantee, not invented numbers.
4. Every language is a first-class citizen; no text baked into images.

## Accessibility & Inclusion

Mobile-first (most traffic from phones), WCAG AA contrast, visible labels on form fields, 44px touch targets, reduced-motion respected. Copy must fit in four languages (RU/UA strings run longer than PL).
