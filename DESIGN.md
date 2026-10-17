---
name: Bez Brudu
description: On-site upholstery cleaning in Warsaw, drawn as a furniture instruction sheet in two inks on paper.
colors:
  paper: "#f5f5f0"
  white: "#ffffff"
  ink: "#121212"
  ink-2: "#3b3b38"
  rule: "rgba(18, 18, 18, 0.2)"
  blue: "#0b5fd9"
  blue-deep: "#0a4aab"
  on-blue: "#ffffff"
  on-blue-2: "#e3eeff"
  on-blue-rule: "rgba(255, 255, 255, 0.28)"
  dirt: "#8a6a3b"
  error: "#b3261e"
  error-on-blue: "#ffd9d4"
typography:
  display:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.05rem, 0.9rem + 3.75vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.7rem, 1.05rem + 1.9vw, 2.8rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.45rem, 1.2rem + 0.8vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "1.02rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.2vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
  button:
    fontFamily: "'Unbounded Variable', 'Arial Narrow', sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "'Onest Variable', system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1rem + 0.25vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Onest Variable', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Onest Variable', system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  none: "0px"
  base: "4px"
  circle: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 9vw, 136px)"
  wrap: "1320px"
  header: "68px"
  touch: "44px"
  control: "48px"
  control-block: "58px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 20px"
    height: "{spacing.control}"
  button-ink-hover:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 20px"
    height: "{spacing.control}"
  button-paper-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
  button-line-on-blue:
    backgroundColor: "transparent"
    textColor: "{colors.on-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.base}"
    padding: "0 20px"
    height: "{spacing.control}"
  button-line-on-blue-hover:
    backgroundColor: "{colors.on-blue}"
    textColor: "{colors.blue}"
  button-block:
    height: "{spacing.control-block}"
    width: "100%"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.base}"
    padding: "12px 14px"
    height: "50px"
  field-on-blue:
    backgroundColor: "transparent"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
    padding: "12px 0"
    height: "50px"
  stepper-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.base}"
    size: "40px"
  stepper-button-hover:
    backgroundColor: "{colors.on-blue}"
    textColor: "{colors.blue}"
  stepper-value-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
    rounded: "{rounded.base}"
    width: "46px"
    height: "40px"
  numeral-step:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    size: "40px"
  numeral-pin:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    size: "28px"
  parts-sheet:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    padding: "clamp(28px, 3vw, 40px) 0 40px clamp(24px, 3vw, 44px)"
  contact-field:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.on-blue}"
    padding: "clamp(72px, 9vw, 128px) 0"
  paper-form:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "clamp(24px, 3vw, 40px)"
  footer:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.on-blue-2}"
    padding: "28px 0"
  mobile-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "64px"
  mobile-bar-main:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
---

# Design System: Bez Brudu

## Overview

**Creative North Star: "The Instruction Sheet"**

The whole site is printed like the leaflet that comes in a flat-pack box: wordless outline drawings, circled numerals, a parts list that is the price list, and a warning box where the honest caveats go. It is set in two inks on one paper. Black line ink draws every object and every rule; cobalt is a printed field that owns whole regions of the sheet rather than decorating small things. Nothing is photographed and nothing glows, because there is nothing real to photograph yet and the system refuses to pretend otherwise.

Dirt is the only third colour, and it is a material, not an accent: warm-brown halftone dots on a 45° screen whose density is the amount of dirt. Clean is white. The hero sofa is drawn white under a layer of dirt dots; scrubbing removes dots and reveals white fabric, so the state of the object is carried by tone, not by labels or colour-coding. The same logic runs through the step drawings and the stain samples.

Density is calm and editorial: generous section padding, long hairline-ruled lists, content set on a 12-column feel with asymmetric splits (7/5, 4/8, 6/5). The system explicitly rejects the cleaning-category default of white and mint gradients, bubbles, sparkles and stock photos of a smiling worker.

**Key Characteristics:**
- Paper ground everywhere; cobalt as whole printed fields (parts-list sheet, contact, footer), never as tinted bands.
- One pen: outline drawings at a single contour weight with non-scaling strokes.
- Halftone dots are the only way dirt appears; white fill is the only way clean appears.
- Structure from 1.5px ink hairlines, not from cards, shadows or background changes.
- Circled ink numerals for sequence and for callouts pinned to the object by leader lines.
- Flat print: no gradients, no glass, no shadows of any kind.

## Colors

Two inks on near-neutral paper, plus a dirt tone that only ever describes dirt.

### Primary
- **Print Cobalt** (`blue`): the second ink. It owns whole regions: the parts-list sheet in the first viewport (bleeding to the right viewport edge on desktop, full width on mobile), the contact section, and the primary slot of the mobile action bar. Outside those fields it appears only as a state colour: ink-button hover, FAQ summary hover, focus rings, text selection and the caret.
- **Deep Cobalt** (`blue-deep`): the footer field only, one step darker so the sheet ends on a heavier band of the same ink.

### Neutral
- **Instruction Paper** (`paper`): the only page ground. Also the fill of the paper-coloured buttons on cobalt, the contact form sheet, the active stepper value chip, and text on ink.
- **Line Ink** (`ink`): every drawn contour, every structural hairline, headings, body text, circled numerals, the ink button and the mobile action bar.
- **Soft Ink** (`ink-2`): secondary copy: leads, captions, field labels on paper, definition terms.
- **Pencil Rule** (`rule`): 1px row dividers inside lists (spec rows, mobile nav links) where a full ink hairline would be too loud.
- **Clean White** (`white`): drawn fabric (the fill under the dirt, the "clean" state), input wells on paper, and the hover lift of paper-coloured controls.
- **On-Cobalt White / Pale** (`on-blue`, `on-blue-2`): primary and secondary text on cobalt fields; `on-blue-rule` divides rows inside the fields.

### Tertiary
- **Halftone Dirt** (`dirt`): drawn dirt and nothing else. Dots on a 45° screen (7-unit pitch in the hero canvas and stain samples, 6-unit in the small step drawings); dot radius scales with the square root of dirt density. Where dirt is itself a line (pet hair, odour wafts in the stain samples) it is drawn as a thin dirt-coloured stroke.

### Status
- **Validation Red** (`error`, `error-on-blue`): form validation only, on paper and on cobalt respectively.

### Named Rules
**The Paper Ground Rule.** Paper is the only ground. A section never gets a tinted background band; if it needs separating, it gets a 1.5px ink hairline. The only non-paper grounds are full cobalt fields.

**The White Means Clean Rule.** White is never a surface for layout. It is the colour of clean fabric in drawings, the well of an input, and the hover lift of a paper control. Anything else white is a mistake.

**The Field, Not Accent Rule.** Cobalt is printed as a field that owns a region edge to edge. It is not used for chips, badges, icon tints or decorative strokes on paper; on paper it only marks interaction state.

**The Dirt Is Dots Rule.** The dirt colour describes dirt and only dirt, as halftone dots whose density is the state (a thin dirt stroke only where the dirt is itself a line, such as hair). It is never a background, a text colour, or a decorative accent.

**The Validation-Only Red Rule.** Red exists for invalid form fields and their status message. It is never used for emphasis, prices, warnings or stains (the warning box is ink).

## Typography

**Display Font:** Unbounded Variable (with Arial Narrow, sans-serif)
**Body Font:** Onest Variable (with system-ui, sans-serif)

Both are self-hosted variable fonts (`@fontsource-variable/unbounded`, `@fontsource-variable/onest`, `wght` axis).

**Character:** Unbounded is the instruction leaflet's wide, technical stencil voice for names, numbers and commands; Onest is a plain, friendly reading face that carries four languages without fuss.

### Hierarchy
- **Display** (600, `clamp(2.05rem, 0.9rem + 3.75vw, 4.5rem)`, 1.03, −0.04em): the hero H1 only, max 14ch, balanced.
- **Headline** (600, `clamp(1.7rem, 1.05rem + 1.9vw, 2.8rem)`, 1.08, −0.03em): section H2s, max 22ch, balanced. The guarantee headline runs one step larger (up to 3.4rem) as the page's second statement.
- **Title** (600, `clamp(1.45rem, 1.2rem + 0.8vw, 1.9rem)`, 1.1, −0.03em): the parts-list sheet title and form titles (1.3–1.4rem).
- **Title Small** (600, 1.02–1.05rem, 1.25, −0.02em): step caption leads, warning-box title, spec table title.
- **Numeral** (600, `clamp(2rem, 1.6rem + 1.2vw, 2.6rem)`, 1, −0.04em, tabular): the running total. Smaller Unbounded numerals (stepper values, scrub meter, circled step numbers at weight 700) share the voice.
- **Button** (600, 0.9rem, −0.01em): every button and the mobile bar labels; block buttons step to 0.95rem.
- **Lead** (400, `clamp(1.05rem, 1rem + 0.25vw, 1.2rem)`, 1.55, Soft Ink): intro paragraphs, max 56ch (hero lead 64ch).
- **Body** (400, 17px, 1.55): running text and answers, max 62ch.
- **Label** (600, 0.85rem): form field labels, always visible above the field.

### Named Rules
**The Two Voices Rule.** Unbounded speaks for anything that is a name, a number or a command: headings, buttons, prices, totals, numerals, nav on mobile. Onest speaks for anything that is read. Never set a paragraph in Unbounded.

**The Tabular Numbers Rule.** Every number that can change or be compared (prices, quantities, totals, the cleaned percentage, district fees) uses tabular figures so columns and live updates do not jitter.

## Layout

A single centred column (`wrap`, max 1320px, side gutter `clamp(16px, 4vw, 40px)`) holding asymmetric two-part grids: hero 7fr / 5fr (min 400px for the sheet), stains 4fr / 8fr, guarantee 6fr / 5fr, FAQ 4fr / 7fr, contact 5fr / 6fr. Sections breathe on `clamp(72px, 9vw, 136px)` vertical padding and are divided by 1.5px ink hairlines at their top edge. The header is sticky at 68px on paper and gains its ink hairline only once the page scrolls.

The parts-list sheet sits in the hero's right column and its cobalt field bleeds past the wrap to the right viewport edge; below 1080px it becomes a full-bleed band under the sofa. Sequences (the four steps, the three hero callouts) sit in one strip divided by vertical hairlines and fold to 2 then 1 columns, with the circled numeral moving into a left gutter on phones.

Responsive steps: 1180px (steps 4→2, stains stack under their heading), 1080px (hero goes single column, menu collapses to a paper drop panel, fixed ink action bar appears at the bottom and body gains 64px bottom padding), 720px (callout legend moves under the drawing with numbered pins on the sofa, stains 2-up, form rows stack), 600px (steps single column, spec and contact rows stack), 560px (header call button becomes icon-only, call/WhatsApp stack). Touch targets are at least 44px; primary controls 48px; block submits 58px.

### Named Rules
**The Hairline, Not Band Rule.** Sections, lists and strips are separated by 1.5px ink hairlines (heavy edges at 2px, row dividers at 1px Pencil Rule). Background colour changes are reserved for whole cobalt fields.

**The One Strip Rule.** A sequence of instruction panels is one strip, ruled top and bottom and split by vertical hairlines. Never wrap steps in individual cards.

## Elevation & Depth

The system is flat print. There are no shadows, no glass, no blur and no gradients; depth comes only from the overlap of drawn line over white fill over paper, and from ink fields. Two `box-shadow` declarations exist in the build and neither is elevation: a `0 0 0 100vmax` spread clipped by `clip-path` to bleed the parts-list field to the viewport edge, and an inset 1px red ring that doubles an invalid field's border.

### Named Rules
**The Two Inks Rule.** Everything is printed in black line and cobalt field on paper, plus dirt dots. No gradients, no translucent glass, no drop or offset shadows. If something needs to stand forward, give it a heavier line or put it on an ink field.

## Shapes

Square-ish and drafted. Controls, inputs, the warning box and the contact form sheet use a 4px corner; underline inputs on cobalt have none. Circles are reserved for numerals (step numbers 40px, callout numbers 28px, pins on the drawing 30 drawing units) and for the dot that ends a leader line.

Drawings are outline only, one pen: contours at 2px (2.4px on the large hero sofa), with `vector-effect: non-scaling-stroke` so the line weight stays constant at any size; secondary details at 1.4–1.6px; a 3px stroke only for a tick or emphasis mark inside a step drawing. Icons are drawn on a 48-unit grid with their stroke compensated to render at 2px at every size. Floors are dotted 2/7 dashes. Leader lines (1.5px) run from a callout's numeral in the legend to a dot on the object's contour.

### Named Rules
**The One Pen Rule.** Every drawing, icon and logo is outline-only at one contour weight with non-scaling strokes. Fills are only white (clean fabric) or halftone (dirt). No filled pictograms, no duotone icons, no glyph icons.

**The Pinned Label Rule.** Labels about an object are pinned to it: a circled ink numeral in the legend and a leader line ending in a dot on the drawing, or a numbered pin on the drawing itself on small screens. Labels do not float in badges over the art.

## Components

### Buttons
Blunt, printed and fast: solid ink or paper blocks with Unbounded labels and a trailing arrow that nudges 3px on hover.
- **Shape:** gently squared (4px), 2px border slot (transparent unless outlined), 48px min height, 0 20px padding; block variant full width at 58px.
- **Ink (primary on paper):** ink fill, paper text; hover fills cobalt. Used for the header call button and the contact submit.
- **Paper (primary on cobalt):** paper fill, cobalt text; hover lifts to white. Used for the sheet's call, WhatsApp and send buttons.
- **Line on cobalt:** transparent with a 70% white border; hover fills white with cobalt text.
- **Link button:** underlined ink text (1.5px underline), 44px hit area, hover cobalt. Used for the scrub "clean all" and "reset" controls.
- **Focus:** 3px cobalt outline at 2px offset on paper; the outline turns paper inside cobalt fields.
- **Busy:** `aria-busy` drops opacity to 0.7 with a progress cursor.

### Inputs / Fields
- **On paper:** white well, ink text, 1.5px ink border, 4px corner, 50px min height, 12px 14px padding; label in Label style above. Selects carry an inline chevron drawn in the same pen.
- **On cobalt:** no well; a 2px white underline, no corner, label in pale on-blue.
- **Focus:** 3px cobalt outline (paper outline on cobalt).
- **Error:** red border plus inset 1px red ring on paper; on cobalt the underline turns pale red and thickens to 3px. The status line below uses the matching red.

### Navigation
- **Desktop:** paper sticky header; logo (cobalt square mark with the sofa drawn in white line) and lowercase Unbounded wordmark; Onest 500 links that underline on hover; a language switch as one 1.5px ink-bordered segmented strip whose current item is filled ink.
- **Mobile (≤1080px):** a 48px outlined menu button opens a paper panel under the header with Unbounded links ruled by Pencil Rule lines; a fixed ink action bar at the bottom carries call, WhatsApp and an cobalt price slot.

### Parts-List Sheet (signature)
The price calculator, printed as the parts list of an assembly leaflet on an cobalt field. Each row: a 40px outline icon of the item, its name and "from" price in pale tabular figures, and a stepper (two 40px outlined square buttons around an Unbounded quantity). A row with a quantity bolds its name and the quantity sits on a paper chip. Rows are divided by `on-blue-rule` hairlines. Below: the running total in Numeral style, a note, the paper call/WhatsApp pair, a ruled "or" divider, underline fields and a paper block submit.

### Scrubbable Sofa (signature)
The hero drawing: a three-seat sofa in white fill and 2.4px ink line, covered by a canvas of halftone dirt dots (45° screen, 7-unit pitch, density from soft stain fields). Pointer or touch strokes erase dots with a 46-unit round nozzle; a drawn extractor head follows the pointer. One automatic stroke clears a stripe down the middle 700ms after the drawing is in view (cubic ease-out over 1100ms); with reduced motion the stripe appears instantly. A meter beneath reports the cleaned percentage in tabular Unbounded.

### Instruction Strip
Four numbered panels in one strip ruled top and bottom by ink hairlines and split by vertical hairlines. Each panel: a 40px circled ink numeral, an outline drawing whose sofa changes state from dirty (halftone) to clean (white), and a caption with an Unbounded lead sentence.

### Warning Box
The one bordered container: a 2px ink frame with 4px corners, an outline warning triangle in a 44px column, an Unbounded title and Soft Ink text. Used for honest caveats, never for promotion.

### Hairline Lists
Spec tables, FAQ and contact details are definition lists ruled by hairlines (2px ink at the head, 1.5px ink between FAQ items, 1px Pencil Rule between spec rows). District lists use dotted leaders to a right-aligned tabular fee, like a parts index. FAQ items open with a plus that rotates 45°.

## Do's and Don'ts

### Do:
- **Do** keep paper (`#f5f5f0`) as the only ground and separate sections with 1.5px ink hairlines.
- **Do** give cobalt whole regions (the parts-list sheet, contact, deep cobalt footer) and let the parts-list field bleed to the viewport edge.
- **Do** draw dirt only as warm-brown halftone dots on a 45° screen, with density carrying the amount of dirt, and draw clean as white fill.
- **Do** draw every object and icon outline-only at one contour weight (2px, 2.4px on the hero) with non-scaling strokes.
- **Do** number sequences and callouts with circled ink numerals and pin labels to the object with leader lines ending in a dot.
- **Do** set instruction panels in one strip split by hairlines.
- **Do** use Unbounded with tabular figures for every price, quantity and total.

### Don't:
- **Don't** use white + mint gradients, bubbles, sparkles or stock photos of a smiling worker.
- **Don't** use gradients, glass, blur, or drop and offset shadows; the system is two inks on paper.
- **Don't** tint section backgrounds or put content in floating cards; use hairlines and ink fields.
- **Don't** use the dirt colour for anything that is not dirt, or white as a layout surface.
- **Don't** use red for anything except form validation.
- **Don't** use filled, duotone or glyph icons; draw them in the same pen as the furniture.
- **Don't** invent photos, ratings, counts or testimonials to fill a visual slot; illustrations stay plainly drawn.
