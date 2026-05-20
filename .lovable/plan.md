# 5 Targeted Animation & Navigation Fixes

Scope: only the 5 fixes below. No other site changes.

## Fix 1 + 2: Dynamic Island Navbar with Dropdowns (`src/components/Navbar.tsx`)

Rewrite as floating pill navbar:
- `fixed top-4 left-1/2 -translate-x-1/2 z-50`, `h-14`, `rounded-full`, `px-6`
- `bg-zinc-900/85 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20`
- On scroll past 20px: bump shadow to `shadow-xl shadow-black/40`
- Stays dark in both themes (no dark: variants on bg)
- Add top padding/offset awareness — since navbar is now `fixed` (not `sticky`), the page content needs no change but the navbar no longer reserves layout space; this is intentional per the spec
- Logo: `Designsby` + `<span class="text-emerald-500">ASH</span>` (use the emerald token — currently `text-orange` maps to emerald per the project's tokens)

Desktop links: Home, About▾, Services▾, Pricing, Contact, then ThemeToggle and Get a Quote button.

Dropdowns (About + Services):
- Hover-triggered using `onMouseEnter`/`onMouseLeave` on the wrapper
- Chevron `w-3 h-3` rotates 180° when open
- Panel: absolute, `top-full mt-2`, `bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl p-2 min-w-[200px]`
- Items: `block rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors duration-200`
- Open animation: opacity 0→1 + translateY(-8px→0), 200ms ease-out (conditional classes driven by open state)
- Invisible `h-2` bridge between trigger and panel so cursor can cross gap

About items: Meet the Team→/about, FAQ→/faq, Reviews→/reviews
Services items: Web Design→/web-design-service, Google Business Profile→/google-business-profile, SEO Services→/seo-services

Mobile (`< md`):
- Hamburger inside the pill on the right
- Overlay: `fixed inset-0 bg-zinc-900/95 backdrop-blur-xl`, slides in from right (translateX 100%→0, 300ms ease)
- Stacked nav; About + Services are accordion togglers (ChevronDown rotates) with indented sub-items
- Get a Quote at bottom

## Fix 3: Pricing Toggle Slider + Card Crossfade (`src/components/PricingSection.tsx`)

Replace the current `transform: translateX` slider with a measured sliding pill:
- Refs on both toggle buttons; on mount + on `mode` change, read `offsetLeft`/`offsetWidth` of the active button and store `{left, width}` in state
- Render an absolutely positioned `<span>` with `bg-orange rounded-full` and inline `style={{ left, width, transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)' }}`
- Active button text `text-white`, inactive `text-wood-400`

Card crossfade:
- Add `isTransitioning` state and `displayedMode` state (separate from `mode`)
- Click handler: if same mode, no-op; else set `isTransitioning=true`, after 150ms swap `displayedMode = mode` and set `isTransitioning=false`
- Cards container: `transition-opacity duration-150 ease`, `opacity-0` when transitioning, else `opacity-100`
- Remove the existing `key={mode}` + `animate-fade-in` swap

## Fix 4: FAQ Tabs with Sliding Pill (`src/routes/faq.tsx`)

The file already has 3 tabs and accordions. Upgrade the tab bar to a measured sliding pill (same technique as Fix 3):
- Refs on each tab button; track `{left, width}` of the active tab in state, update on mount + tab change + window resize
- Render absolute `<span class="bg-orange rounded-full">` with inline `style` and 300ms cubic-bezier transition
- Tab buttons become transparent (remove the `bg-orange` from active button); active text `text-white`, inactive `text-zinc-400 hover:text-zinc-200`
- Wrap tab content in a div that briefly drops to `opacity-0` then back to `opacity-100` (200ms) on tab change — use a small `useEffect` keyed on `tab`
- Enforce single-open accordion per tab: lift the open-index state from `FAQItem` into the parent and pass `isOpen` + `onToggle(i)` down; closing the previously open item happens automatically
- Keep existing grid-rows 0fr↔1fr accordion animation and chevron rotation
- Keep all existing Q&A content untouched

## Fix 5: Get a Quote Fill Animation (`src/components/Navbar.tsx`)

Used in both desktop and mobile navbars:

```tsx
<Link to="/contact" className="relative overflow-hidden bg-orange text-white px-5 py-2.5 rounded-md font-semibold group">
  <span className="absolute inset-0 bg-orange-hover transform scale-x-0 origin-left transition-transform duration-[400ms] ease-out group-hover:scale-x-100" />
  <span className="relative z-10">Get a Quote</span>
</Link>
```

Uses existing `bg-orange` / `bg-orange-hover` tokens (which map to the project's emerald per the design system) rather than hardcoded `emerald-500/600`, to stay consistent with the rest of the site.

## Notes
- No changes to routes, content, copy, or other components.
- All color references use existing tokens (`bg-orange`, `text-orange`, `bg-wood-*`) except the navbar's intentionally-fixed dark glass surface which uses `zinc-900/*` + `white/10` per spec.
- Navbar shift from `sticky` to `fixed` is intentional per spec; pages already manage their own top spacing via `PageHero`, so no layout regressions expected, but I'll verify on Home + Pricing after the edit.
