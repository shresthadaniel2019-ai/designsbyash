## Home — Testimonials Carousel + YouTube Section

Two new sections appended to `src/routes/index.tsx`, immediately after the existing decorative divider. No other files change.

### Section 1 — Video Testimonials Carousel

Extract into a small client component inside the file (`TestimonialsCarousel`) so the scroll-arrow handlers can use a `useRef` on the scroll container.

- Wrapper `<section className="bg-wood-50 py-20 px-6 lg:px-20">`.
- Centered `<h2>` with the exact copy and classes.
- Relative wrapper `mt-12 relative` containing:
  - Scroll container `ref={scrollRef}` — `flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2`.
  - 7 cards via `Array.from({ length: 7 })`. Each card:
    - `bg-white rounded-xl shadow-md p-5 snap-start flex-shrink-0 flex flex-col md:flex-row min-w-[90vw] md:min-w-[560px]`
    - Video block: `w-full md:w-[280px] aspect-video bg-wood-900 rounded-lg flex items-center justify-center` with `<Play className="w-10 h-10 text-wood-500" />`.
    - Content: `pt-4 pl-0 md:pt-0 md:pl-6 flex-1`. Row of 5 `<Star className="w-5 h-5 fill-amber text-amber" />`. Quote `mt-3 text-wood-600 italic text-sm`. Attribution `mt-3 text-wood-950 font-semibold text-sm`.
  - Arrow buttons absolutely positioned (`hidden md:flex`), `top-1/2 -translate-y-1/2`, `-left-4` / `-right-4`, `bg-orange text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-hover transition items-center justify-center`. Lucide `ChevronLeft` / `ChevronRight`. Click handler scrolls by one card width: `scrollRef.current.scrollBy({ left: ±(cardWidth + 24), behavior: 'smooth' })` — derive card width from the first child's `offsetWidth`, fallback to 560.

`scrollbar-hide` utility: not built in by default. Add a small `@layer utilities` rule in `src/styles.css` that hides scrollbars across browsers (`::-webkit-scrollbar { display: none }`, `scrollbar-width: none`).

### Section 2 — YouTube Explainer Placeholder

- `<section className="bg-wood-950 py-20 px-6 lg:px-20">`.
- Inner `flex flex-col lg:flex-row items-center gap-12`.
- Left `lg:w-1/2`: eyebrow, `<h2>`, `<p>`, and TanStack `<Link to="/contact">` with "Start Today →" text-orange/font-semibold/hover:text-amber transition.
- Right `lg:w-1/2`: `w-full aspect-video bg-wood-900 rounded-xl border border-wood-800 flex flex-col items-center justify-center` containing Lucide `PlayCircle` (`w-16 h-16 text-wood-500`) and caption `mt-3 text-wood-500 text-sm`.

Lucide imports added: `Play`, `Star`, `ChevronLeft`, `ChevronRight`, `PlayCircle`.