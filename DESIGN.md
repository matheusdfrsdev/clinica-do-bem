---
name: Clínica do Bem
description: Warm, humanized women's health clinic landing page built to convert visitors into WhatsApp bookings.
colors:
  pink: "#FD6498"
  pink-dark: "#C8215A"
  pink-tint: "#FFE7EF"
  pink-wash: "#FFF0F5"
  teal: "#7FCCB8"
  teal-tint: "#E6F6F1"
  ink: "#232323"
  body-text: "#525C68"
  border: "#E9EDF2"
  surface-soft: "#F8F9FB"
  surface: "#FFFFFF"
  surface-base: "#FFFCFA"
  footer-bg: "#181818"
  whatsapp-green: "#25D366"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(26px, 2.6vw, 38px)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.3px"
  title:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "14.5px–19px"
    fontWeight: 700
    lineHeight: "1.3–1.35"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px–17px"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px–15px"
    fontWeight: 400
    lineHeight: "1.2–1.75"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px–13px"
    fontWeight: "600–700"
    lineHeight: 1.2
    letterSpacing: "0.5px–1px"
rounded:
  pill: "50px"
  xl: "28px"
  lg: "24px"
  md: "20px"
  callout: "16px"
  sm: "14px"
  xs: "12px"
  circle: "50%"
spacing:
  section-y: "100px"
  section-y-dense: "80px"
  section-y-close: "130px"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "40px"
  gap-xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-outline:
    backgroundColor: "{colors.teal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-on-pink:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.pink}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  badge:
    backgroundColor: "{colors.pink-tint}"
    textColor: "{colors.pink}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px 28px"
    shadow: "0 4px 20px rgba(35, 35, 35, 0.05)"
---

# Design System: Clínica do Bem

## 1. Overview

**Creative North Star: "The Trusted Confidante"**

Clínica do Bem's interface reads like a conversation with someone who has your back — soft, unhurried, never clinical-cold. Warm Blossom Pink carries emotional warmth and is the page's dominant voice; Calm Sage Teal sits underneath as a quieter counterpoint, standing in for the clinic's broader nursing-care work. Nothing on the page shouts: rounded pill buttons, soft gradients, and generous whitespace all work together to feel like a welcoming room rather than a waiting one.

This system explicitly rejects the sterile, corporate-hospital look (stock photography, blue-and-white palettes, impersonal tone) and the generic local-business template feel. Every choice should earn its place as something a real, careful clinic would choose — not a stock theme with a clinic's name pasted on top.

**Key Characteristics:**
- Soft, rounded geometry everywhere (pills, 20–28px card corners, circular icon badges) — no hard edges on any structural surface.
- Warm Blossom Pink leads; Calm Sage Teal supports; both appear mostly as soft tints, with pink also used at full saturation as the single solid CTA band.
- One continuous, flat background (`--bg-base`) runs the full length of the page, with no per-section gradient washes, color blocking, or corner glows — a colored radial glow that read fine against the old tinted gradients became two isolated blobs once the surrounding section went flat, so the hero and closing CTA carry no glow at all now. Content cards carry a shallow ambient shadow to stay legible against the shared background.
- Generous section rhythm (100px vertical padding as the default beat) that varies deliberately at the page's open and close — with no background shift between sections, this whitespace (plus typography) is what separates one section from the next.

## 2. Colors

The palette is built from two soft, desaturated accents over a near-white neutral base, with the base pink used at full saturation in one solid "drenched" section — restrained enough to read calm, warm enough to never feel clinical.

### Primary
- **Warm Blossom Pink** (`#FD6498`): the brand's dominant color, used directly everywhere pink appears — buttons, badges, emphasis spans, icons, step numbers, testimonial stars/initials, hover states, decorative underlines, and as the solid fill of the mid-page CTA band. Measured at 2.82:1 against white, it falls short of WCAG AA (4.5:1 text / 3:1 non-text) on every element where it carries white or dark-on-light content — buttons, badges, heading emphasis, step labels, testimonial stars/initials, icons.
- **Warm Blossom Pink Deep** (`#C8215A`, 5.50:1 on white): used only for the keyboard focus ring and the skip-to-content link — not used anywhere in the page's default-visible content.
- **Warm Blossom Pink Tint** (`#FFE7EF`): backgrounds for badges, avatar chips, and gradient washes where pink needs to recede into a surface rather than pop as an accent.
- **Pink Wash** (`#FFF0F5`): the open-state background of FAQ items.

### Secondary
- **Calm Sage Teal** (`#7FCCB8`): used directly everywhere teal appears — icons, fills, badge text, section markers, testimonial-avatar initials, the button cursor-fill microinteraction on `.btn-pink`/`.btn-white` (hover only, see Buttons), and `.btn-outline`'s own resting background (the one button that's solid teal at rest, not pink — its hover fill is `--pink` instead, the inverse of the other two buttons). Measures 1.87:1 on white, below AA wherever it carries content as text/icons; white button labels over it (both as `.btn-outline`'s resting background and as `.btn-pink`/`.btn-white`'s hover fill) land near ~1.75:1 — accepted per the Always-White-Label Rule under Buttons, not an oversight.
- **Calm Sage Teal Tint** (`#E6F6F1`): backgrounds for teal-flavored badges, avatar chips, and gradient washes — the teal equivalent of the pink tint.

### Neutral
- **Ink** (`#232323`): all headings and primary body copy that needs full contrast (footer/card titles, nav text on hover-adjacent states).
- **Body Text** (`#525C68`): the default running-text color for descriptions, paragraphs, and secondary copy — meets 4.5:1+ against every surface it appears on.
- **Border** (`#E9EDF2`): hairline dividers and card outlines throughout; never used as a decorative stripe.
- **Surface Soft** (`#F8F9FB`): a hairline divider color now — the border between links in the mobile nav panel. No longer a background anywhere; FAQ items moved to plain white (see the FAQ Accordion component note) to match every other card on the unified `--bg-base` page.
- **Surface** (`#FFFFFF`): the default card and header background.
- **Surface Base** (`#FFFCFA`): the single, barely-warm near-white background shared by every section except the mid-page pink CTA band and the dark footer — this is what replaced the earlier per-section tinted/gradient backgrounds.
- **Footer Background** (`#181818`): the one dark surface on the page, used only in the footer to anchor the page's close.

### Utility
- **WhatsApp Green** (`#25D366`): WhatsApp's own brand color, used only for the floating WhatsApp button and the matching social-icon hover state in the footer — never used for the page's own booking CTAs, which stay pink.

### Named Rules
**The Tint-Don't-Saturate Rule.** Both accent colors appear far more often as a soft tint (backgrounds, badges, gradient washes at 6–20% opacity) than as a solid fill. The one exception is the mid-page CTA band, which commits fully to solid pink.

**The Full-Saturation Rule.** `--pink` and `--teal` are used at their base saturation everywhere they carry visible content — buttons, badges, icons, emphasis text, hover states, decorative marks. This means `.btn-pink`, `.btn-outline`, badge text, `.text-pink` emphasis, step numbers, testimonial stars/initials, and every icon sit below WCAG AA contrast. `--pink-dark` is reserved exclusively for the keyboard focus ring and the skip-to-content link, where AA-level contrast is required; it does not appear in default-visible content.

## 3. Typography

**Display Font:** Plus Jakarta Sans (with sans-serif fallback)
**Body Font:** Manrope (with sans-serif fallback)

**Character:** Plus Jakarta Sans carries confident, rounded geometric warmth for anything that needs to lead; Manrope stays quiet and highly readable underneath. The pairing is deliberately close in register (both humanist sans) so the page never feels like it's switching voices — only switching volume.

### Hierarchy
- **Display** (800, `clamp(32px, 4vw, 52px)`, 1.2 line-height, -0.5px tracking): the hero H1 only — the page's single "big" statement.
- **Headline** (700, `clamp(26px, 2.6vw, 38px)`, 1.25 line-height, -0.3px tracking): every section title (`.section-title`). Deliberately a step below the hero display size so section titles never compete with the H1.
- **Title** (700, 14.5–19px, 1.3–1.35 line-height): card titles and names (service cards, testimonial names, info-card values, service-group titles).
- **Body** (400, 16–17px, 1.75 line-height): primary running copy — hero and section descriptions; capped at ~520px measure for readability.
- **Body Small** (400, 12–15px, 1.2–1.75 line-height): secondary running copy at the paragraph end of the range (FAQ answers, testimonial text, legal/policy paragraphs, footer description) down to single-line captions at the small end (testimonial source line, info-card sub-line, footer legal line, hero float-card caption).
- **Label** (600–700, 12–13px, 0.5–1px tracking, uppercase where used): badges, testimonial-avatar initials, info-card labels, footer column headings, the "Mais procurado" service card tag.

### Named Rules
**The One Big Statement Rule.** Only the hero H1 uses the display size. Section titles read as a clear step down (`clamp(26px,2.6vw,38px)` vs. `clamp(32px,4vw,52px)`) so repeating six section headers down the page never reads as six equally loud shouts.

**The Document Heading exception.** `privacidade.html` is the site's one long-form, multi-section document (nine numbered legal sections) rather than a single-scroll marketing page, so its `h2` elements use a dedicated 22px/700-weight step between Title and Headline — a real role for in-document navigation, not drift.

## 4. Elevation

The page runs on a single flat background — `--bg-base` (`#FFFCFA`, a barely-warm near-white) — behind every section except two deliberately preserved moments: the mid-page CTA band (solid pink) and the dark footer. Sections no longer differentiate themselves with tinted or gradient backgrounds, or with corner/radial glows; the hero and closing CTA previously carried colored radial glows meant to blend into their own gradient backgrounds, but once the surrounding gradient was removed those glows read as isolated color blobs, so they were removed rather than kept as floating spots. Separation between sections now comes entirely from generous vertical rhythm (80–130px) and typography, not color blocking. Because resting cards can no longer rely on a color contrast against their section, every content card now carries a shallow ambient shadow (`--shadow-card`) alongside its 1px border, with a slightly deeper shadow plus a `translateY(-4px)` lift on hover. Deeper, more deliberate shadows remain reserved for the small set of elements meant to feel physically separated from the page: the hero/about photo frame, the sticky header once scrolled, the mobile menu panel, and the map embed. The floating stat cards over the hero photo (`.float-card`) are the one exception that separates via a colored `1.5px solid currentColor` stroke instead of a shadow — border color follows each card's own accent (`--pink` / `--teal`, the same value already coloring its icon) rather than the neutral `--border` used everywhere else. Their icons are filled solid (`fill: currentColor` forced over Lucide's default `fill="none"` — the library ships stroke-only, with no filled variant) rather than left as thin outlines, which is why the second card uses plain `shield` instead of `shield-check`: a compound icon's second path (the checkmark) would fill into an unreadable blob, so only single-closed-path icons get the filled treatment. The two cards also carry a slow (4.5s), gentle vertical bob (`translateY(0)` ↔ `translateY(-8px)`, `ease-in-out`, infinite) — `.float-card-2` runs on a negative `animation-delay` so the two float out of phase rather than bobbing in lockstep. Neutralized by the site's shared `prefers-reduced-motion: reduce` rule like every other animation.

### Shadow Vocabulary
- **Card resting shadow** (`--shadow-card`, `box-shadow: 0 4px 20px rgba(35,35,35,0.05)`): the default for content cards on the unified background — service cards, FAQ items, info cards. Paired with the existing `1px solid var(--border)`, not a replacement for it.
- **Card hover shadow** (`--shadow-card-hover`, `box-shadow: 0 10px 32px rgba(35,35,35,0.09)`): paired with `transform: translateY(-4px)` on hover/focus for service cards — a deliberate, subtle lift, not a decorative one.
- **Ambient photo lift** (`box-shadow: 0 20px 60px rgba(0,0,0,0.1)`): the hero and about-section photo frames — the page's most deliberately "lifted" surface.
- **Scrolled header** (`box-shadow: 0 8px 30px rgba(35,35,35,0.06)`, alongside a `1px solid var(--border)` and a 72%-opacity white blur backdrop): all fade in together on the header's `::before` layer once `.header` gains `.scrolled` — the header carries no fill, border, or shadow at all at rest (see Navigation).
- **Mobile menu panel** (`box-shadow: 0 8px 32px rgba(0,0,0,0.08)`): the slide-down mobile nav.
- **Map embed** (`box-shadow: 0 8px 40px rgba(0,0,0,0.08)`): the location section's map container.
- **Testimonial card** (`box-shadow: 0 4px 14px rgba(35,35,35,0.04)`): the lowest-opacity, tightest-blur shadow in the system, deliberately — it reads as a faint lift under a premium editorial card, not a UI affordance, and stays short enough not to visibly bleed into the 24px gap between adjacent cards in the marquee. Paired with the card's existing `1px solid var(--border)`, not a shadow-instead-of-border swap.

### Named Rules
**The Border-Plus-Shadow Rule** (supersedes the earlier Border-Before-Shadow Rule). Content cards default to a 1px border *and* a shallow `--shadow-card` — on a single-background page the border alone no longer reads clearly against a same-color section. Deeper, more expressive shadows stay earned only by elements meant to feel physically separated from the page (photos, step icons, the map, the scrolled header, the testimonial cards) — the hero's floating stat cards use a colored border instead, see the exception above.

## 5. Components

### Buttons
- **Shape:** full pill (`border-radius: 50px`).
- **Primary** (`.btn-pink`): solid Warm Blossom Pink (`--pink`, `#FD6498`) fill, white text, `16px 32px` padding, 700 weight, no shadow. Used for the WhatsApp booking action in the nav, mobile menu, hero, services, and testimonials sections.
- **Outline** (`.btn-outline`): the one button on the page that's solid `--teal` at rest, not pink — a deliberate, client-requested exception so the closing CTA's secondary "prefer to call" action reads as visually distinct from the primary WhatsApp action beside it. No border (despite the class name, kept for the `tel:` styling hook rather than renamed) and white text — client-confirmed even at the ~1.75:1 contrast that produces against `--teal`, see the Text color note below.
- **On-Pink** (`.btn-white`): solid white fill, pink text — the inverse of `.btn-pink`, used exclusively inside the solid-pink mid-page CTA band, where a pink-on-pink button would disappear.
- **Hover / Focus:** `transform: scale(0.98)` press-in on all three variants, layered with the cursor-fill microinteraction below.

**Cursor-origin fill (signature microinteraction).** A circle grows from the exact point the cursor entered — not the button's center — via `clip-path: circle(0% at var(--btn-x) var(--btn-y))` animating to `circle(150% ...)`. Fill color is `--teal` on `.btn-pink`/`.btn-white`, but `--pink` on `.btn-outline` — a deliberate inversion, since `.btn-outline` is already solid `--teal` at rest (see the Outline entry above); `--teal`-on-`--teal` would be invisible, and the client specifically wanted this one button's hover to read as "green resting state, pink on hover," the mirror of the other two. `script.js` writes `--btn-x`/`--btn-y` (as a % of the button's own box) on `mouseenter` *and* `mouseleave`, so the fill also collapses back toward wherever the cursor exited, rather than always shrinking to center — the same origin-point logic running in both directions. `isolation: isolate` on the button plus `z-index: -1` on the fill's `::before` keeps it under the label/icon without touching their stacking; `border-radius: inherit` on the `::before` keeps the fill pill-shaped once the circle outgrows the button's corners.

**Triggered by `.is-filling`, not `:hover` — a fixed timing bug, not a style choice.** The fill's growth used to be driven by `:hover::before`. That produced a real bug on repeat hovers: the browser treats `:hover` as already active by the moment `mouseenter`'s handler runs, so the transition sometimes captured the *previous* interaction's `--btn-x`/`--btn-y` as its starting point while only the target used the freshly-written coordinates — the circle's center visibly drifted from the old entry point to the new one as it grew, instead of originating cleanly at radius 0 in the right spot. `script.js` now writes the coordinates, forces a reflow (`void btn.offsetWidth`, which requires a real layout pass) to make the browser commit that value in an actual rendered frame, and only then toggles `.is-filling` — guaranteeing radius-0 always starts at the correct, current point. Don't revert this back to a plain `:hover` trigger to "simplify" it; the bug will come back.

**Deliberately asymmetric timing.** Growing in and collapsing out use different `transition` values (the `.is-filling::before` rule's `transition` fully overrides the base rule's, rather than the two merging): entering is `0.9s` with `--ease-btn-fill-in` (`cubic-bezier(0.65, 0, 0.35, 1)`, "easeInOutCubic" — no front-loaded rush, so the radius visibly climbs from the very first frame instead of most of the growth finishing before it registers); leaving is a snappier `0.35s` with the standard `--ease`. Two earlier easing choices were tried and rejected here: `--ease-reveal` (fine for the scroll-reveal's small 24px slide, but its curve front-loads nearly all motion into the first sliver of duration, so a button-sized fill looked like it "popped" rather than grew) and a first pass at `--ease-btn-fill` (an easeOutExpo curve, still too fast-reading at the button's scale even at 0.6s). Growing slow-and-visible while collapsing fast is the intended feel, not an oversight — don't "fix" it into a matched pair.

**The resting color stays pink — except `.btn-outline`, by name.** `.btn-pink`'s and `.btn-white`'s own backgrounds are untouched at rest, hover fill only; this was a deliberate choice, confirmed with the client, specifically to preserve the "keep pink dominant, never use WhatsApp's own green for the clinic's CTA" rule elsewhere in this doc. `.btn-outline` is the one named, client-requested exception — it's solid `--teal` at rest, not pink, to visually separate the "prefer to call" action from the WhatsApp CTA beside it (see the Outline entry above). Don't extend `.btn-outline`'s green-at-rest treatment to `.btn-pink`/`.btn-white`, and don't walk `.btn-outline` back to pink, without re-confirming — both directions contradict a decision made explicitly, not by drift.

**The Always-White-Label Rule — with one necessary exception.** Every button's text is white, resting and hover both, regardless of what color the background or hover fill happens to be. This is an explicit client call, made twice: first keeping `.btn-pink`/`.btn-white`'s hover text white instead of switching to `--dark` for better contrast against the `--teal` fill, then extending it to `.btn-outline`'s *resting* state too (originally shipped with `--dark` text for the ~8:1 contrast a permanent, non-hover label would normally need — client asked for white anyway, accepting the ~1.75:1 that produces against `--teal`). The one button this rule does *not* reach: `.btn-white`'s own *resting* text stays `--pink`, because `.btn-white`'s resting background is white — white-on-white text would be fully invisible, not just low-contrast, so the instruction can't apply there literally. (`.btn-white`'s *hover* text is white, per the rule, once the `--teal` fill gives it something to sit on.) This exception was an implementation call, not a client confirmation — flag it back if `.btn-white`'s resting label should read differently. Don't reintroduce a `--dark` (or other) text-color swap anywhere else without re-confirming — this isn't an oversight to "fix" toward better contrast, it's a standing rule.

### Badges
- **Style:** pill shape, tinted background (pink-tint or teal-tint) with matching solid-color text, 13px 600-weight label text, 0.5px tracking, `6px 16px` padding.
- **State:** static — badges are labels, not interactive controls.

### Cards / Containers
- **Corner Style:** 20px radius for content cards (service, testimonial), 24px for the map embed, 16px for FAQ items, info cards, and inline notices/callouts (e.g. `privacidade.html`'s draft-notice box), 28px for the photo frame, 18px for the floating stat cards, 12px for icon tiles (info-card icons).
- **Background:** white cards on the page's single `--bg-base` background — including FAQ items now, which moved off `--bg-soft` to match every other card.
- **Shadow Strategy:** `--shadow-card` by default on content cards (see Elevation) — separation from the unified background comes from the 1px border plus a shallow ambient shadow, not the border alone.
- **Border:** `1px solid var(--border)` on nearly every card — `rgba(253,100,152,0.18)` on the three featured service cards (see Service Card Badge below).
- **Internal Padding:** 32px 28px (service cards), 24px 28px (testimonial cards), 24px 26px (info cards).

### Service Card Badge
A small "★★★★★ Mais procurado" tag (`.servico-badge`) marks the three highest-intent services (Consulta de Enfermagem Ginecológica, Inserção e Remoção de DIU, Inserção e Remoção de Implanon) inside the "Saúde da Mulher" service group. It's a solid-pink pill (11px, 700 weight, white text), positioned `absolute` at `top: 0; right: 28px` and pulled up by `transform: translateY(-50%)` so half of it sits above the card's own border — a "flag" that reads as a corner accent, not a UI element competing for space inside the card. Deliberately doesn't add height or padding to the card (`.servico-card` keeps its standard 32px 28px); the featured cards' `border-color` shifts to `rgba(253,100,152,0.18)` (vs. the neutral `--border` everywhere else) as the only other visual difference — no shadow or size change, so "featured" reads as a quiet accent, not an ad banner. Text is wrapped in an `aria-hidden` span with the badge's own `aria-label`, matching the same pattern the testimonials-section rating badge already uses for decorative star glyphs.

### Inputs / Fields
Not present in the current site — the entire conversion path routes through WhatsApp/tel links rather than a form.

### Navigation
- **Style:** fixed header, transparent at rest so it blends into the page background — no fill, border, or shadow. A separate `::before` layer (72%-translucent white, `blur(12px)` backdrop-filter, `1px solid var(--border)`, `0 8px 30px rgba(35,35,35,0.06)` shadow) sits behind the content and fades in via opacity plus an 8px `translateY` once `script.js` adds `.scrolled` — triggered at `window.scrollY > 50`, high enough that a stray scroll wobble doesn't flip it. Splitting the "glass" into its own layer lets background/blur/border/shadow animate together without touching the layout of `.header-inner` sitting on top of it.
- **Typography:** 14px/500-weight nav links in Body Text color.
- **Hover/active:** link text color and the animated underline (`::after`, 2px, `border-radius: 2px`) both use the base `--pink` — grows from 0 to full width on hover, the page's only underline-reveal interaction.
- **Scrollspy:** a `.is-active` class renders identically to `:hover` (same color, same full-width underline) and is driven by a single `IntersectionObserver` in `script.js` per nav link's section (`rootMargin: -45% 0px -45% 0px`, so only the section currently crossing the vertical center of the viewport counts as "current"). Scrolling into a section highlights its nav link exactly as if the visitor had clicked it — clicking and scrolling converge on the same visual state.
- **Mobile:** hamburger → X icon-morph toggle; full-width slide-down panel with the same nav links plus the CTA button repeated at the bottom.

### Scroll Reveal (signature component)
Every major content block on the page (`.reveal`) fades in and rises 24px into place the first time it crosses 15% into the viewport, via a single `IntersectionObserver` in `script.js` (threshold `0.15`, `rootMargin: 0px 0px -5% 0px`), using `--duration-reveal` (400ms) and `--ease-reveal` (`cubic-bezier(0.25, 1, 0.5, 1)`) — deliberately slower and "looser" than the `--ease` used for buttons/menus elsewhere. Each element reveals once and is then unobserved; scrolling back up never re-hides it. Grid groups (service cards, location info cards) wrap in `.reveal-stagger`, and their `.reveal` children stagger via `animation-delay: calc(var(--i) * 90ms)`, using the `--i` index already set inline per card — `calc()` instead of a handful of hardcoded `:nth-child` rules because some groups (the 6-card "Saúde da Mulher" service group) exceed 4 items.

**The reveal-uses-animation-not-transition rule.** `.reveal.is-visible` triggers a `@keyframes reveal-in` *animation*, not a `transition`. Cards like `.servico-card` already own a `transition` for their hover lift (`transform` + `box-shadow`); a `transition`-based reveal shares the `transition` CSS property with that hover rule, and same-specificity cascade means whichever rule sits later in the stylesheet (the card's own) wins outright — silently dropping the reveal's opacity transition (so it snapped instead of fading) and leaking its `transition-delay` stagger into every later hover interaction (high-`--i` cards felt sluggish to lift on hover). `animation-*` is a distinct property from `transition-*`, so the two now coexist without a cascade fight: the entrance plays once via `animation` on scroll-in, and hover afterward is handled entirely by the card's own unrelated `transition`. Any future card style that adds its own `transition` is safe by construction — it can never again collide with the reveal.

`.reveal` defaults to fully visible outside `@media (prefers-reduced-motion: no-preference)`, so content never gets stuck invisible if JS fails to load; under `prefers-reduced-motion: reduce`, `script.js` adds `.is-visible` to every target immediately instead of observing, and the site's shared reduced-motion rule collapses `animation-duration` to near-zero regardless.

### FAQ Accordion (signature component)
Resting state uses plain white with a border and `--shadow-card` (like every other card on the page); the open state shifts background to Pink Wash (`#FFF0F5`) and the border to a pink-tinted line (`rgba(253,100,152,0.25)`), while the chevron icon fills solid base `--pink` (white icon on it) and rotates 180°. Answers animate to their real `scrollHeight` rather than a fixed max-height, and only one item stays open at a time.

### WhatsApp Floating Button (signature component)
Fixed bottom-right circular button (`border-radius: 100px`) in WhatsApp's brand green (`#25D366`), icon-only at rest, expanding to reveal a text label on hover via `max-width` transition (desktop/pointer devices only). Hides (`opacity: 0`, scaled down) via a `.is-hidden` state while the mobile menu is open, so it never overlaps the menu panel or its own CTA.

### CTA Band (signature component)
A full-bleed solid-pink section (`.cta-section`) between Serviços and Depoimentos — the one place the palette commits fully to a solid pink surface rather than a tint. Two soft white radial glows (`rgba(255,255,255,0.14–0.18)`, blurred) sit in the top-right and bottom-left corners for atmosphere. Heading and body copy switch to white/white-85% inside the band; the CTA button switches to the `.btn-white` on-pink variant. The `:focus-visible` ring inside this section switches from `--pink-dark` to `--dark` (5.58:1), since `--pink-dark` only reaches ~1.95:1 against this solid pink background.

### Skip Link
An off-screen "Pular para o conteúdo" link (`.skip-link`), positioned `top: -100px` by default and only entering the viewport on keyboard focus. Uses `--pink-dark` for both background and text color. Its `border-radius: 0 0 12px 12px` (square top, rounded bottom corners) is the one asymmetric-radius element in the system, matching its flush-to-viewport-edge position.

### Testimonial Wall (signature component)
A single horizontal row of all 6 real testimonial cards, scrolling left-to-right on a pure-CSS `translateX` loop (no JS, no autoplay timer), 90s per full pass — deliberately slow and calm. The track holds the real card set once plus an `aria-hidden` duplicate immediately after, so animating to `-50%` of the track's own width always lands exactly on the seam between the two sets — the loop never visibly restarts. The loop pauses on `:hover` and is replaced by a static resting frame under `prefers-reduced-motion: reduce` (an explicit `animation: none` override, not just a shortened duration — see the Reduced Motion note in style.css for why a shortened duration alone would freeze the row on its hidden duplicate instead of its real cards).

**Card** (`.testimonial-card`): a deliberate exception to the flat-by-default system — 20px radius and `1px solid var(--border)` like every other card, plus the Testimonial card shadow (see Elevation), kept intentionally shallow (`4px`/`14px` offset/blur, 0.04 opacity) so it never visibly bleeds into the 24px gap to the next card — the border alone marks the boundary between cards. Every card is a fixed `280px` tall (no masonry, no per-card variation) with `24px 28px` padding — top/bottom tightened for vertical rhythm, left/right left untouched. Structure, top to bottom: a large 30px `quote` icon in `--pink` (replaces the star row used elsewhere — the rating itself lives once, in the section badge above the title, not repeated per card); the testimonial text (15px Body Small, 1.75 line-height, the upper end of both documented ranges, for a more editorial feel than the site's other secondary copy) sitting close to the footer below it (12px gap, no divider line); then the avatar/name/subtitle footer — `.testimonial-name` steps up to 16px (top of the Title range) against a 12px muted subtitle for a clearer hierarchy than the 14.5px used elsewhere for names. Each quote is a condensed rewrite of the real Google review (same meaning, repetitive phrasing trimmed) sized so it always fits the fixed height at any card width without truncation — this is a content decision, not a CSS clamp.

## 6. Do's and Don'ts

### Do:
- **Do** keep pink as the dominant, teal as the supporting accent — never let teal outweigh pink in a single section.
- **Do** use the pill shape (`50px` radius) for every button and badge; it's the system's single strongest shape signal.
- **Do** default new content cards to a `1px solid var(--border)` line plus a shallow `--shadow-card` (see the Border-Plus-Shadow Rule) — the border alone no longer separates a card from the page now that every section shares `--bg-base`.
- **Do** cap section title size at `clamp(26px,2.6vw,38px)` — the hero H1 is the only element allowed the larger display scale.
- **Do** write copy around sensitive topics (ISTs, gynecological procedures) with the same unhurried, non-judgmental warmth as the rest of the page — this is a strategic requirement, not just a tone preference.
- **Do** keep the WhatsApp booking CTA in a single color (`.btn-pink`, or `.btn-white` on a solid-pink background) everywhere it appears.
- **Do** use the base `--pink`/`--teal` (`#FD6498`/`#7FCCB8`) for everything visible — buttons, badges, icons, emphasis text, hover states, decorative marks — even where it means contrast sits below AA (see the Full-Saturation Rule).
- **Do** keep `--pink-dark` reserved for the keyboard focus ring and the skip-to-content link.

### Don't:
- **Don't** introduce a cold, corporate-hospital aesthetic — no stock photography, no blue-and-white clinical palettes, no impersonal tone.
- **Don't** let the page read as a generic local-business template — every section should feel specific to this clinic, not a swapped-in theme.
- **Don't** add a deep or decorative shadow to a resting content card; keep it to the shallow `--shadow-card` value — the more expressive shadows stay reserved for the photo frame, floating stat cards, step icons, scrolled header, mobile menu, and map.
- **Don't** reintroduce a tinted or gradient background, or a corner/radial glow, on a section; every section shares the flat `--bg-base` except the mid-page pink CTA band and the dark footer. A colored glow that blended into the old tinted gradients reads as an isolated blob on the flat background — don't bring it back.
- **Don't** use sharp (0px) corners on any structural surface — cards, buttons, and containers all sit at 12px radius or above. The 2px radius on the nav underline is a functional micro-mark, not a structural corner, and isn't part of that floor.
- **Don't** dilute the WhatsApp CTA's visual priority — it must stay the single most prominent action in the hero, services, and final CTA sections.
- **Don't** use `--pink-dark` in default-visible content (badges, buttons, icons, emphasis text, hover states) — reserved exclusively for the focus ring and skip link.
