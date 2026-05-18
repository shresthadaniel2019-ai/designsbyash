## Home Hero + Divider

Replace the placeholder in `src/routes/index.tsx` with two stacked sections.

### Hero (`<section>`)
- `bg-wood-950 min-h-[85vh] py-20 px-6 lg:px-20 flex items-center`
- Inner: `w-full flex flex-col lg:flex-row items-center gap-12`
- **Left** (`lg:w-3/5`):
  - Eyebrow `<p>`: "Hand-Coded, Custom Designs" — `text-orange uppercase tracking-[0.2em] text-sm font-semibold`
  - `<h1 class="mt-4 text-white text-4xl lg:text-6xl font-bold leading-tight">`: "Small Business Website Design That Delivers"
  - `<p class="mt-6 text-wood-400 text-lg leading-relaxed max-w-xl">`: full copy as spec'd
  - TanStack `<Link to="/contact">` styled as button: `mt-8 inline-block bg-orange text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-hover hover:scale-105 transition-all duration-300`
- **Right** (`lg:w-2/5 flex items-center justify-center mt-12 lg:mt-0`):
  - Placeholder div: `w-full max-w-md aspect-[4/3] bg-wood-900 rounded-2xl border border-wood-800 flex items-center justify-center` containing `"Device Mockup Image"` in `text-wood-500 text-sm`

### Decorative divider (`<div>`, outside hero padding)
- Outer: `w-full h-24 bg-wood-50 relative`
- Inner: `w-full h-24 bg-gradient-to-b from-wood-950 to-transparent opacity-20 flex items-center justify-center` with `"Treeline Divider — replace with SVG"` in `text-wood-400 text-xs`

No other files change. Update the route's `head()` description to reflect the hero.