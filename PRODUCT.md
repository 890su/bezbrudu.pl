# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated (2026-10-16): the user allowed a stack change; hosting is Cloudflare Pages or Workers. Chosen: Astro static output with one page per language (`/`, `/en/`, `/ru/`, `/uk/`) for SEO, self-hosted fonts, and a Cloudflare Pages Function (`functions/api/lead.js`) that sends leads to Telegram so the bot token stays server-side. The previous static site is kept in `bezbrudu.pl/` for reference.

## Users

Residents of Warsaw and surroundings (up to ~30 km), mostly people renting or owning flats: young families with kids and pets, allergy sufferers, people moving in/out of a rental, landlords preparing a flat. They usually land from Google on a phone, with a concrete stained sofa, corner sofa or mattress in front of them, and want to know quickly: will it come clean, how much will it cost, when can you come. A sizeable share are Ukrainian, Russian and English speakers living in Warsaw.

## Product Purpose

Bez Brudu cleans upholstered furniture, mattresses and carpets on site at the customer's home using hot-water extraction. The site exists to turn a visitor into a lead: a phone call/WhatsApp message or a request form with an approximate price. Success is a lead with service, phone number and enough detail to quote.

## Positioning

On-site extraction cleaning in the customer's own flat in Warsaw, with a transparent price list no higher than the Warsaw market average, free travel within Warsaw, a re-clean guarantee, and service in four languages (PL/EN/RU/UA), which most local competitors do not offer.

## Operating Context

- Contact: phone (number not yet set: `+48 XXX XXX XXX` placeholder), email kontakt@bezbrudu.pl, two forms (quick quote and full contact).
- Hours: Mon–Fri 8:00–20:00, Sat 9:00–18:00.
- Area: Warsaw districts (Mokotów, Ursynów, Wilanów, Śródmieście, Praga Południe/Północ, Wola, Żoliborz, Bielany, Targówek, Bemowo, Ursus, Ochota, Białołęka, Rembertów) and surroundings.
- Drying time after extraction: 2–4 hours.

## Capabilities and Constraints

Services: sofa/couch, corner sofa (narożnik), armchair, chairs, mattress (single/double, one or both sides), carpet/rug/fitted carpet on site.

Prices set on 2026-10-16 at or below the Warsaw median (market reference: bs1.pl, warszawa-pranie-dywanow.pl, mobiwash.pl, kb.pl):

- Sofa 2–3 seats: from 139 zł
- Corner sofa: from 189 zł (large/U-shaped: individual quote)
- Armchair: from 69 zł
- Chair: from 29 zł
- Mattress single: from 79 zł (one side); double: from 129 zł (one side)
- Carpet / fitted carpet on site: from 15 zł/m²
- Free travel within Warsaw; minimum order 150 zł

Undecided: real phone number, real address (JSON-LD currently has placeholder `ul. Przykładowa 1`), Telegram bot credentials (and whether to move them server-side).

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
