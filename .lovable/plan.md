# Plan: About / Contact refresh + FAQ + Reviews pages

## Files

1. **`src/routes/about.tsx`** — rewrite
2. **`src/routes/contact.tsx`** — refresh
3. **`src/routes/faq.tsx`** — new
4. **`src/routes/reviews.tsx`** — new
5. **`src/styles.css`** — minor: add `.hover-lift` helpers if needed; otherwise use Tailwind classes inline

No changes to `routeTree.gen.ts` (auto-generated). No changes to `PageBits.tsx` or `useScrollReveal.ts`.

## Shared patterns

- All animated blocks use `useScrollReveal()` returning a ref, applying `reveal` + optional `reveal-delay-N` (already defined in `styles.css`).
- Hover lift on cards: `transition-all duration-300 hover:-translate-y-1 hover:shadow-xl` (use `-translate-y-1.5` for steps).
- Dark mode: light sections `bg-wood-50 dark:bg-wood-900`; dark sections stay `bg-wood-950`; text `text-wood-950 dark:text-white` / `text-wood-600 dark:text-wood-300`.
- Note: `--color-orange` token is the emerald green (#10b981) — keep using `bg-orange` / `text-orange`.

## 1. About page

Sections in order:
1. `PageHero` — eyebrow "About Us", new title + description.
2. **Our Story** (`bg-wood-50 dark:bg-wood-900`) — two-column: square `Team Photo` placeholder left; heading + 3 paragraphs + 3 value bullets (Check icons in `text-orange`) right. Each column wrapped in its own reveal ref.
3. **Our Process** (`bg-wood-950`, white text both modes) — heading + subtext + 3-card horizontal grid (`grid md:grid-cols-3 gap-6`). Each step card: number badge (01/02/03) in `bg-orange text-white rounded-full`, title, copy. Hover lift; staggered reveal (`reveal-delay-1/2/3`).
4. **Contact CTA** (`bg-wood-50 dark:bg-wood-900`) — heading + subtext + 3 contact cards (`grid md:grid-cols-3 gap-6`): Phone, Mail, MapPin from lucide-react in emerald circle. Card style `bg-white dark:bg-wood-800 rounded-xl shadow-md p-6 text-center` with hover lift; staggered reveal. Email/phone as `<a href="mailto:" />` / `tel:` links.
5. `BottomCTA`.

## 2. FAQ page (new)

- Route: `/faq` with required `head()` meta.
- `PageHero` + FAQ section + `BottomCTA`.
- FAQ section (`bg-wood-50 dark:bg-wood-900`):
  - Tab pill row: 3 buttons in `bg-wood-200 dark:bg-wood-800 rounded-full p-1` container; active button `bg-orange text-white`, inactive transparent + `text-wood-500 dark:text-wood-400`; `transition-colors duration-300`.
  - Tab state via `useState<'finances'|'packages'|'websites'>`.
  - For each tab render `FAQItem` list with the supplied Q/A content. Item structure:
    - `<button>` row: question text + ChevronDown that rotates 180° when open (`transition-transform duration-200`).
    - Answer panel using grid trick: outer `grid transition-[grid-template-rows] duration-300 ease-out` with `grid-rows-[0fr]` closed / `grid-rows-[1fr]` open; inner `overflow-hidden` with padded paragraph.
  - Border `border-b border-wood-200 dark:border-wood-700` per item.
  - Wrap the visible tab content in `useScrollReveal()` ref (re-mount via `key={activeTab}` so animation runs on tab change).

## 3. Reviews page (new)

- Route: `/reviews` with required `head()` meta.
- `PageHero` + reviews section + `BottomCTA`.
- Reviews section (`bg-wood-50 dark:bg-wood-900`):
  - Container: `columns-1 md:columns-2 lg:columns-3 gap-6`.
  - 9 cards, each `break-inside-avoid mb-6 bg-white dark:bg-wood-800 rounded-xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`.
  - Card body: avatar circle (initials), 5 amber Star icons + "5.0", italic quote, name (bold), "Owner, Business Name" muted.
  - Each card uses `useScrollReveal()` via a `RevealCard` wrapper; stagger by cycling `reveal-delay-1..3`.

## 4. Contact page refresh

- Keep existing `PageHero`.
- Replace section body with two-column layout using new styles:
  - Left form: same fields; button gets `hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300`. Inputs get `transition-colors duration-200 focus:border-orange focus:ring-1 focus:ring-orange`.
  - Right column: Book a Call heading + subtext + Calendly placeholder (dashed border) + Contact Info list with Clock/Phone/Mail/MapPin icons in `text-orange` and copy in `text-wood-600 dark:text-wood-300`.
- Wrap left/right columns in their own `useScrollReveal()` refs (different delays).
- Append `BottomCTA`.
- Update meta description.

## Verification

- Build passes (typecheck strict).
- Manually verify in preview: tabs switch with pill slide-style color transition, accordion expands smoothly, masonry doesn't split cards, dark/light mode classes correct on every section, scroll-reveal triggers once.
