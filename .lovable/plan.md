# DesignsbyASH — Initial Scaffold

## Stack adjustments (important)

The template is **TanStack Start + Tailwind v4**, not CRA + React Router v6 + Tailwind v3. I'll honor your spec visually 1:1 but use the project's native stack:

- **Routing**: TanStack Router (file-based in `src/routes/`) instead of React Router v6. Same 5 routes, same shared Navbar/Footer via `__root.tsx`. `<Link>` API is nearly identical.
- **Tailwind config**: Tailwind v4 has no `tailwind.config.js` — custom colors are declared as CSS variables in `src/styles.css` under `@theme`. I'll expose them as `bg-wood-950`, `text-orange`, `bg-orange-hover`, `text-amber`, etc., so your class names work as written.
- **Fonts**: Inter loaded via Google Fonts `<link>` in `__root.tsx` head, set as default sans via `--font-sans` in `@theme`.
- **Light mode only**: I'll strip the `.dark` block from `styles.css`.

If you'd rather I swap in `react-router-dom` v6 instead, say so and I'll adjust.

## Files to create / modify

### `src/styles.css` (rewrite)
- Remove dark mode block and shadcn token noise not needed here.
- Add `@theme` with:
  - `--font-sans: 'Inter', ui-sans-serif, system-ui, ...`
  - Full `--color-wood-50` … `--color-wood-950` palette
  - `--color-orange: #D4772C`, `--color-orange-hover: #BF6A22`
  - `--color-amber: #E8A84C`
- Base: `html { scroll-behavior: smooth }`, body uses Inter.

### `src/routes/__root.tsx` (modify)
- Add Inter Google Fonts `<link>` in `head().links`.
- Replace `RootComponent` body with: `<Navbar /> <main><Outlet /></main> <Footer />`.
- Update default `<title>` to "DesignsbyASH".

### `src/components/Navbar.tsx` (new)
- Sticky `top-0 z-50 bg-wood-950 w-full h-20 px-6 lg:px-20 flex items-center justify-between`.
- Logo: `Designsby<span class="text-orange">ASH</span>`, `text-xl font-bold text-white`.
- Desktop nav (`hidden md:flex gap-8`): Home, About, Services, Pricing, Contact — `text-wood-300 hover:text-orange transition`; active link uses TanStack `activeProps={{ className: 'text-orange' }}`.
- "Get a Quote" button → `/contact`, `bg-orange hover:bg-orange-hover text-white px-5 py-2.5 rounded-md font-semibold`.
- Mobile: Lucide `Menu` button (`md:hidden`). State-controlled slide-in panel from right (`fixed inset-y-0 right-0 w-full bg-wood-950`) with vertical links `gap-6`, CTA button, and Lucide `X` close at top-right.
- Scroll listener: adds `shadow-lg` when `window.scrollY > 20`.

### `src/components/Footer.tsx` (new)
- `bg-wood-950 pt-16 pb-8 px-6 lg:px-20`.
- Treeline placeholder: `h-32 bg-wood-900 rounded-md mb-12 flex items-center justify-center` with italic caption text.
- 3-column grid `grid-cols-1 md:grid-cols-3 gap-12`:
  1. Logo + tagline.
  2. Quick Links (TanStack `<Link>`s).
  3. Contact info lines.
- Bottom bar `mt-12 pt-6 border-t border-wood-800 flex justify-between` with copyright + legal text.

### Routes (new)
- `src/routes/index.tsx` — replace placeholder with centered "Home — sections coming soon".
- `src/routes/about.tsx`, `services.tsx`, `pricing.tsx`, `contact.tsx` — each with `<h1 class="text-wood-950 py-32 text-center text-4xl font-bold">[Name] — Coming Soon</h1>` and per-page `head()` meta (title + description).

## Verification
- Confirm build passes (auto-run).
- Visually verify navbar, mobile drawer, footer, and route navigation in the preview.

Ready to build on approval.