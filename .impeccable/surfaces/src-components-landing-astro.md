---
version: 1
slug: "src-components-landing-astro"
primary_target: "src/components/Landing.astro"
related_targets: ["src/pages/index.astro"]
---

# Landing (bezbrudu.pl, all four language routes)

Scope: the single-page landing at /, /en/, /ru/, /uk/. Visitor mode: Persuade.
Audience: Warsaw residents on a phone, a stained sofa or mattress in front of them. Job: see what it costs and book. Action: price list calculator → request form; or call/WhatsApp, equal weight.
Proof: method (hot-water extraction on site), drying 2–4 h, free travel in Warsaw, re-clean guarantee, four languages, market-average prices. No stats, ratings, reviews or photos exist; none may be invented.
Memorable moment: scrubbing the halftone dirt off the line-drawn sofa leaves a clean stripe, like a real extractor pass.

## Direction contract

THESIS: The page is a furniture instruction sheet for getting a clean sofa: wordless line drawings, numbered steps, a parts list that is the price list. It refuses the category default of white + mint gradients, bubbles, sparkles and stock photos of a smiling worker.

OWN-WORLD: Near-neutral paper (#F5F5F0), black 2px line ink (#121212), committed ultramarine fields (#2238D6) that own whole regions (parts-list sheet, contact, footer), dirt only as warm-brown halftone dots (#8A6A3B) whose density is the state. Unbounded for display, Onest for text, tabular numerals. Outline-only drawings, square-ish corners (4px), hairline rules like a manual, circled step numerals, "1×" quantities, warning-box callouts.

STORY: The visitor sees their own dirty sofa drawn, wipes a clean stripe across it, reads the price of their exact items, and sends the list or calls. Below: the four-step instruction, what stains we take on (honestly), the guarantee, the area, FAQ, contact.

FIRST VIEWPORT: Desktop: left 7/12 holds the H1 (Unbounded, ~4.5rem) and below it the large line-drawn sofa covered in halftone dirt with leader-line callouts (2–4 h, extraction, free travel); a drag/auto stroke clears a stripe. Right 5/12 is a full-height ultramarine parts-list sheet: item rows with steppers, running total, primary "Send for quote" button, call and WhatsApp below. Mobile: H1, sofa, then the sheet.

FORM: Furniture-assembly instruction sheet (position 4 of 7), raised by screentone tone-as-material, labels pinned to the object, two-ink discipline, active empty paper. seed: none (unavailable)
Signature interaction: pointer/touch scrub erasing the halftone dirt layer (canvas mask) with an automatic first stroke; reduced motion shows a static half-cleaned state.
Motion grammar: one authored hero moment (the stroke), steppers tick the total, everything else is instant and visible by default.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Real phone number / WhatsApp, address for JSON-LD, Telegram bot token and chat id (Cloudflare env vars).
- Real photos of work to add later (there is no slot that pretends to have them).
