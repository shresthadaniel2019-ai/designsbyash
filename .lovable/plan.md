## Home — Featured Work + Services

Append two new sections to `src/routes/index.tsx` after `<YouTubeExplainer />`. No other files change.

### Section 1 — `FeaturedWork`
- `<section className="bg-wood-50 py-20 px-6 lg:px-20">`
- Centered eyebrow + h2 + paragraph (exact copy/classes from spec).
- `grid grid-cols-1 md:grid-cols-3 gap-8 mt-12`.
- 3 cards from `[{ n: "01" }, { n: "02" }, { n: "03" }]`:
  - Card: `relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300`.
  - Number badge: `absolute top-4 left-4 z-10 bg-orange text-white font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center`.
  - Image placeholder: `w-full aspect-[4/3] bg-wood-100 flex items-center justify-center text-wood-400 text-sm` → "Project Screenshot".
  - Content `p-5`: title `text-wood-950 font-bold text-lg`, description `text-wood-600 text-sm mt-2 line-clamp-2`.

### Section 2 — `Services`
- `<section className="bg-wood-950 py-20 px-6 lg:px-20">`
- Centered eyebrow + h2 + paragraph (exact copy/classes from spec).
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12`.
- Services data array (icon component + title + desc) for the 6 entries listed.
- Card: `bg-wood-900 border border-wood-800 rounded-xl p-6 hover:border-orange transition-all duration-300`.
- Icon wrap: `w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center` with `<Icon className="w-6 h-6 text-orange" />`.
- Title `mt-4 text-white font-bold text-lg`. Desc `mt-2 text-wood-400 text-sm leading-relaxed`.

### Imports
Add Lucide icons to the existing import: `Monitor`, `Search`, `Smartphone`, `Settings`, `Zap`, `MapPin`. `line-clamp-2` ships with Tailwind v4 by default — no plugin needed.