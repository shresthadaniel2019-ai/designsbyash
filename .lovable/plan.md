# Homepage Rewrite Plan

## 1. New scroll-reveal utility

**Create `src/hooks/useScrollReveal.ts`**
- Custom hook returning a ref
- Uses `IntersectionObserver` (threshold 0.15, rootMargin "0px 0px -50px 0px")
- Adds `visible` class on intersect, disconnects after first reveal
- SSR-safe (guard `typeof window`)

**Edit `src/styles.css`** — append:
```css
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 600ms ease-out, transform 600ms ease-out; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
.reveal-delay-5 { transition-delay: 500ms; }

.hero-divider {
  height: 80px;
  background: var(--color-wood-950);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
}
```

**Create `src/hooks/useCountUp.ts`** — animates a number from 0 to target over ~1s once revealed. Handles non-numeric values (`5/5`, `100%`, `500K+`) by parsing the leading number and re-appending the suffix.

## 2. Rewrite `src/routes/index.tsx`

Sections in order, all with `.reveal` on key blocks:

1. **Hero** — keep copy. Replace mockup placeholder text with a fake browser window frame (top bar w/ 3 red/yellow/green dots, empty body). Replace treeline divider div with `<div className="hero-divider dark:hero-divider" />`. Apply reveal to headline/sub/CTA and mockup.

2. **YouTubeExplainer** — same copy, dark mode classes, reveal on text + video; "Start Today →" gets `hover:text-emerald-400` (use existing `hover:text-amber` token which is now emerald-light).

3. **Services** — 6 cards, last card replaced:
   - Icon: `Users` (lucide)
   - Title: "Dedicated Partnership"
   - Desc: "You work directly with our team — no outsourcing, no runaround. When you reach out, a real person who knows your project responds."
   - Update section description to remove "across Canada and beyond" → "who demand performance, quality, and results."
   - Cards: add `hover:-translate-y-2 hover:shadow-2xl hover:border-orange transition-all duration-300`
   - Stagger reveal across cards (delay-1..delay-5 cycling)

4. **MeetTheTeam** — drop Edmonton/Alberta wording. New paragraph as specified. Reveal on text + photo.

5. **FeaturesStats** — update description to spec. Reveal staggered features. Stats use `useCountUp` triggered on reveal.

6. **PageSpeed** — reveal both columns. Dark mode classes verified.

7. **PricingSection** — render existing component as-is.

8. **VideoTestimonials (NEW)** — horizontally scrollable row of 8 cards with snap, Play icon, 5 stars (amber/emerald), placeholder quote, chevron buttons (emerald, hidden on mobile), card hover `-translate-y-1 + shadow-lg`. Min-width 350px desktop / 85vw mobile.

9. **MidScrollCTA (NEW)** — `bg-wood-950` section, centered heading "Convinced Yet?", subtext as specified, emerald "Let's Talk" button linking to `/contact` with `hover:scale-105` glow.

10. **FinalCTA** — keep, add reveal.

**Removed:** TestimonialsCarousel, FeaturedWork, WrittenTestimonials (delete all code, unused imports/icons).

**Meta title:** "DesignsbyASH — Small Business Website Design That Delivers"

## 3. Dark mode

Light sections continue to use `bg-wood-50` and existing `.dark .bg-wood-50` override (→ `#18181b`) in styles.css handles the swap. Dark sections (`bg-wood-950`) remain dark. No per-section `dark:` variants required — overrides already in `styles.css` flip backgrounds/text/borders globally.

## Files touched

- `src/hooks/useScrollReveal.ts` (new)
- `src/hooks/useCountUp.ts` (new)
- `src/styles.css` (append reveal + divider rules)
- `src/routes/index.tsx` (full rewrite)

No changes to `PricingSection`, `Navbar`, `Footer`, `ThemeProvider`, route tree, or other routes.
