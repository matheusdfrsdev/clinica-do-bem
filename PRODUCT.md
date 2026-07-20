# Product

## Register

brand

## Platform

web

## Users

Women in Foz do Iguaçu seeking routine women's health care — preventive visits, contraception (DIU/Implanon insertion and removal), Papanicolau exams, and general gynecological consultations. Many arrive anxious or privacy-conscious, especially those investigating a sensitive concern like an IST; the experience needs to read as confidential and judgment-free before it reads as clinically competent. A secondary line of general nursing services (wound care, catheter changes, ostomy care) serves the wider local community but isn't the primary audience the page is written for.

## Product Purpose

A single-page marketing site for Clínica do Bem, a real clinic in Foz do Iguaçu (PR), that converts visitors into WhatsApp bookings. Success is measured in booking messages sent, with a phone call as the accepted fallback for visitors who'd rather talk than type.

## Positioning

Humanized, unhurried women's health care in a city where the alternative is a rushed, impersonal clinic visit — every screen should make a visitor believe she'll be heard, not processed.

## Conversion & proof

- Primary and secondary CTA: WhatsApp scheduling message (primary, repeated at every major section); phone call to the clinic's number (secondary fallback for visitors who prefer to talk).
- The line a visitor remembers after 10 seconds: this clinic listens, keeps things confidential, and makes booking a five-minute WhatsApp message.
- Belief ladder: safe and confidential → clinically competent → booking is easy. Copy and layout should resolve emotional safety before leaning on credentials or process detail.
- Proof on hand: six named Google Reviews testimonials (5-star, with patient names and initials) already embedded in the testimonials wall — this is the complete proof set; no additional certifications, photos, or reviews to source right now.

## Brand Personality

Warm, humanized, safe. The clinic's voice favors acolhimento (welcoming care) and emotional safety over clinical formality — competence is present but never leads with coldness or urgency.

## Anti-references

Sterile, corporate-hospital sites (stock photography, blue-and-white palettes, impersonal tone) and generic local-business template layouts with no distinct personality. The existing pink/teal direction is on-brand and should be preserved and refined, not replaced.

## Design Principles

- Institutional copy addresses the patient directly ("Você é recebida...", "Você conta com...") rather than leading with the clinic as the grammatical subject ("A Clínica do Bem oferece..."). Applies to narrative/prose copy (hero, Sobre, section taglines) — not to headings, button labels, or the FAQ/testimonials/localização copy, which weren't in scope for this pass and may still read clinic-first.
- Lead with emotional safety, not clinical authority — warmth resolves before competence does.
- Every section reinforces the same low-friction path to a WhatsApp message; never bury or dilute the CTA.
- Sensitive topics (ISTs, gynecological exams) are written and designed with extra care for an anxious first-time reader.
- Prefer specific, named proof (real testimonials, real address, real hours) over generic trust signals.
- Preserve the established pink/teal identity rather than introducing a competing visual language.

## Accessibility & Inclusion

Keyboard navigation (skip link, visible focus ring, FAQ accordion managed via `aria-expanded`/`aria-hidden`/`inert`) and alt text follow WCAG AA. Color contrast is the one deliberate exception: the brand's pink and teal are used at full saturation everywhere they carry visible content (buttons, badges, icons, emphasis text), which falls below AA on those elements — a client-confirmed brand-fidelity tradeoff, not an oversight (see DESIGN.md's Full-Saturation Rule). AA-level contrast is preserved wherever it doesn't cost brand fidelity: running body text, the keyboard focus ring, and the skip-to-content link. Tone/wording around IST and gynecological procedure copy is written with extra care for visitors who may be anxious about a sensitive exam.

## Site Structure

Two static HTML pages, no client-side routing, no build step:
- **`index.html`** — the single-scroll marketing page. A fixed topbar (quick phone/WhatsApp/hours contact) sits above the fixed header/nav; below them, sections run: Hero (`#inicio`) → Sobre (`#sobre`) → Serviços (`#servicos`, two groups: "Saúde da Mulher" and "Cuidados de Enfermagem Geral") → mid-page solid-pink CTA band → Depoimentos (`#depoimentos`, testimonial wall) → FAQ (`#faq`) → Localização (`#localizacao`, map + info cards) → CTA Final, which doubles as the `#contato` anchor the nav's "Contato" link scrolls to (there's no separate contact section/form) → Footer. A floating WhatsApp button and an off-screen skip-link sit outside this section flow.
- **`privacidade.html`** — standalone privacy-policy page, reachable only from the footer link (not in main nav), `noindex`ed. Reads as finished — no visible draft notice or `[A DEFINIR]` placeholders — but see "Known placeholders" below for what that appearance doesn't cover.

## Technology & Implementation

- Static HTML/CSS/vanilla JS — no framework, no build step, no package manager.
- Fonts: Plus Jakarta Sans (headings) + Manrope (body) from Google Fonts, loaded via `<link rel="preload">` plus a `media="print" onload="this.media='all'"` swap so the stylesheet doesn't block first render; `<noscript>` fallback for JS-disabled visitors.
- Icons: Lucide (`unpkg.com/lucide@1.24.0`, loaded via `<script>` + `data-lucide` attributes, initialized by `lucide.createIcons()` in `script.js`), plus one hand-inlined SVG `<symbol>` sprite for the WhatsApp glyph, reused across every WhatsApp CTA instance instead of duplicating the path.
- Images: the logo and both photos ship as a JPEG/PNG original plus a WEBP variant, served through `<picture>`/`<source>`.
- All interactivity — scroll header, mobile menu, scroll reveal, scrollspy, FAQ accordion, footer year — lives in one file, `script.js`.

## SEO

- `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags on `index.html`.
- JSON-LD `MedicalClinic` structured data: trade name plus `legalName`/`taxID` (Clínica do Bem Foz Enfermagem Especializada LTDA, CNPJ 59.997.893/0001-34), image, url, phone, e-mail, address, opening hours, social profiles (`sameAs`).
- `sitemap.xml` — one entry, the homepage; `privacidade.html` is deliberately excluded (see noindex below).
- `robots.txt` — allows all crawling, points to the sitemap.
- `privacidade.html` carries `<meta name="robots" content="noindex">` — intentional, since it's an internal draft (see "Known placeholders").

## Performance

- The font-loading swap described above removes the Google Fonts stylesheet from the critical rendering path.
- Hero photo: `fetchpriority="high"` plus explicit `width`/`height` to avoid layout shift; every other image and the map `iframe` below the fold use `loading="lazy"`.
- WEBP served via `<picture>` with JPEG/PNG fallback for browsers without WEBP support.
- `prefers-reduced-motion: reduce` is honored globally (see DESIGN.md's Elevation / Scroll Reveal / Testimonial Wall notes) — not a load-time optimization, but it avoids unnecessary animation work for visitors who've opted out.

## Features Implemented

- WhatsApp deep-link CTA (pre-filled message) repeated in the topbar, header, mobile menu, hero, services, mid-page CTA band, testimonials, footer, and final CTA, plus a floating button — with a `tel:` fallback CTA alongside it in the topbar and the final CTA section.
- Fixed topbar above the header with quick-contact info (phone, WhatsApp, hours) — always visible, doesn't hide on scroll; sheds content progressively on narrow viewports (see DESIGN.md's Topbar entry).
- FAQ accordion (single item open at a time, animates to real content height, `aria-hidden`/`inert` on closed answers).
- Testimonial wall: an auto-scrolling pure-CSS loop on desktop/tablet (pauses on hover, replaced by a static frame under reduced motion); on mobile it's a different mechanism — the loop is off entirely and the row becomes a manual, native swipe carousel, one full-width card per page (mandatory scroll-snap, no autoplay), with six pagination dots below it that track the active card and double as tap-to-jump shortcuts.
- Scrollspy navigation — the active nav link tracks whichever section is centered in the viewport, matching the click behavior exactly.
- Mobile hamburger menu with icon-morph toggle; the WhatsApp float button auto-hides while it's open.
- Scroll-reveal entrance animation on every major content block, staggered within grids.

## Known Placeholders — Don't Treat as Finished Without Checking

- **`privacidade.html` reads as finished but has not been reviewed by a lawyer.** At the client's request the visible draft notice and every `[A DEFINIR]` placeholder were removed: company identification (razão social Clínica do Bem Foz Enfermagem Especializada LTDA, CNPJ 59.997.893/0001-34) and the two responsible nurses (Marcus Vinícius Gomes de Farias, COREN 706.207; Charlene dos Santos Moreira, COREN 662.943) are filled in, the data-retention section now states a definitive 20-year period, and the page carries a real "last updated" date. The DPO line was removed outright rather than filled in — no Encarregado de Dados has been officially designated; don't reintroduce a DPO placeholder without a real name. None of this content has been confirmed by the clinic's legal counsel — the retention-period wording and LGPD framing were drafted by AI assistance. The page is publication-ready in *appearance* only; flag this if legal risk on this page comes up later.
- **The "Ver todas as avaliações no Google" link points to a Google Maps search**, not the clinic's verified Google Business Profile — a documented stand-in (see the comment above it in `index.html`) until the direct profile URL is available.

## Deliberate Decisions to Preserve

Full rationale lives in DESIGN.md; this is the maintenance-facing summary.
- Booking flow is WhatsApp-first by design — there is no contact form, and none is planned. Don't add one without revisiting the Conversion & proof strategy above.
- Brand pink/teal are used at full saturation everywhere they carry visible content, even where that drops color contrast below WCAG AA — an explicit, client-confirmed choice prioritizing brand fidelity over that specific compliance target (DESIGN.md's Full-Saturation Rule). Don't "fix" this toward darker AA-safe variants.
- `.btn-outline` (the "Prefere ligar?" button) is intentionally teal-at-rest / pink-on-hover with white text at rest — a deliberate, twice-confirmed client inversion of the other two buttons. Don't normalize it to match `.btn-pink`.
- The clinic treats minor patients. `privacidade.html` §10 documents the LGPD Art. 14 handling (guardian consent) this requires — keep that section in sync if the clinic's intake policy for minors changes.
