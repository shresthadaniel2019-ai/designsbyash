## Home — Team + Features/Stats + Page Speed

Append three sections to `src/routes/index.tsx` after `<Services />`. No other files change.

### `MeetTheTeam`
- `<section className="bg-wood-50 py-20 px-6 lg:px-20">`, inner `flex flex-col lg:flex-row items-center gap-12`.
- Left `lg:w-2/5`: placeholder `w-full max-w-sm aspect-[3/4] bg-wood-200 rounded-2xl flex items-center justify-center mx-auto` → "Team Photo" `text-wood-400`. Below, `mt-4 text-center` logo `text-lg font-bold text-wood-950` with `ASH` in `text-orange`.
- Right `lg:w-3/5`: eyebrow, h2, subtitle, body copy, and TanStack `<Link to="/about">` styled `mt-6 inline-block text-orange font-semibold hover:text-amber transition` with "Learn More About Us →".

### `FeaturesStats`
- `<section className="bg-wood-950 py-20 px-6 lg:px-20">`.
- Eyebrow / h2 / paragraph as spec'd.
- Features data array of 6 `{ title, desc }`. Grid `mt-10 grid grid-cols-1 md:grid-cols-2 gap-6`. Each item `flex` with `Check` icon in `w-10 h-10 rounded-full bg-orange/10 text-orange flex items-center justify-center flex-shrink-0` and content `ml-4` (title `text-white font-semibold`, desc `text-wood-400 text-sm mt-1`).
- CTA `mt-8` → "Get Started" linking to `/contact`.
- Stats row `mt-16 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center`. 3 stats: `500K+ / Lines of Code Written`, `100% / Happy Customers`, `5/5 / Google Reviews`. Number `text-4xl font-bold text-orange`, label `text-wood-400 text-sm mt-1`.

### `PageSpeed`
- `<section className="bg-wood-50 py-20 px-6 lg:px-20">`, inner `flex flex-col lg:flex-row items-center gap-12`.
- Left `lg:w-1/2`: `w-full aspect-video bg-wood-200 rounded-xl border border-wood-200 flex items-center justify-center text-wood-400` → "Speed Test Screenshot".
- Right `lg:w-1/2`: h2, paragraph, "Schedule a Call" button to `/contact`.

### Imports
Add `Check` to existing Lucide import. Render all three sections in the `Index` component.