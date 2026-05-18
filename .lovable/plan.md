## Home — Written Testimonials + Final CTA

Append two sections to `src/routes/index.tsx` after `<PricingSection />`. No other files change.

### `WrittenTestimonials`
- `<section className="bg-wood-50 py-20 px-6 lg:px-20">`.
- Centered eyebrow + h2.
- Carousel: reuse the same arrow-scroll pattern as `TestimonialsCarousel` with its own `useRef`. Scroll container: `mt-12 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2`, wrapper `relative`.
- 10 cards via `Array.from({ length: 10 })`. Card: `bg-white rounded-xl p-8 shadow-md snap-start flex-shrink-0 min-w-[85vw] md:min-w-[380px]`.
  - Avatar: `w-14 h-14 rounded-full bg-wood-200 flex items-center justify-center text-wood-500 font-bold text-lg` → "CN".
  - Quote `mt-4 text-wood-600 italic leading-relaxed`.
  - Name `mt-4 text-wood-950 font-bold text-sm`.
  - Business `text-wood-500 text-sm`.
  - Rating row `mt-2 flex items-center gap-2`: `5.0` (`text-wood-950 font-bold text-sm`) then 5 `Star w-4 h-4 fill-amber text-amber`.
- Arrow buttons (`hidden md:flex`, `-left-4`/`-right-4`, `bg-orange text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-hover transition items-center justify-center top-1/2 -translate-y-1/2 absolute`) wired to `scrollBy(±cardWidth + 24)`.

### `FinalCTA`
- `<section className="bg-wood-950 py-16 px-6 lg:px-20 text-center relative overflow-hidden">`.
- Two decorative `<div>`s: `hidden lg:block absolute top-1/2 -translate-y-1/2 w-36 h-48 bg-wood-900 rounded-xl opacity-30` — one `left-8`, one `right-8`. `aria-hidden`.
- Center content `relative z-10`:
  - Eyebrow "Reach Out Today" `text-orange uppercase tracking-[0.2em] text-sm font-semibold`.
  - h2 `mt-3 text-white text-3xl lg:text-4xl font-bold` "Let's Create the Website Your Business Deserves".
  - TanStack `<Link to="/contact">` `mt-6 inline-block bg-orange text-white px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-orange-hover hover:scale-105 transition-all` "Give Us a Call".

Render both at the end of `Index`. No new imports needed (Star/ChevronLeft/ChevronRight already imported).