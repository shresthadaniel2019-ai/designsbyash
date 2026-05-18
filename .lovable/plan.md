## Inner Pages — About, Services, Pricing, Contact

Rewrite the 4 route files. Extract a tiny shared `PageHero` (eyebrow + h1 + paragraph on `bg-wood-950`) and a `BottomCTA` for About/Services into `src/components/PageBits.tsx` to avoid duplication. Pricing imports the existing `PricingSection`. Contact form is visual-only.

### `src/components/PageBits.tsx` (new)
- `PageHero({ eyebrow, title, description })`: `bg-wood-950 py-20 px-6 lg:px-20 text-center` with eyebrow / h1 / paragraph using the spec'd tokens.
- `BottomCTA()`: `bg-wood-950 py-12 text-center` → "Ready to Work Together?" + "Get in Touch" linking to `/contact`.

### `src/routes/about.tsx` (rewrite)
- `<PageHero>` ("About Us" / "The Team Behind DesignsbyASH" / Edmonton tagline).
- Story section `bg-wood-50 py-16 px-6 lg:px-20` → `flex flex-col lg:flex-row gap-12 items-center`. Left: `max-w-md aspect-square bg-wood-200 rounded-2xl` placeholder. Right: h2 "Our Story", two `text-wood-600 leading-relaxed` paragraphs, then 3 values list using Lucide `Check w-5 h-5 text-orange` + `text-wood-950 font-semibold`.
- `<BottomCTA />`.
- Head meta updated to descriptive copy.

### `src/routes/services.tsx` (rewrite)
- `<PageHero>` ("Our Services" / "Everything Your Business Needs Online" / tagline).
- One wrapper `bg-wood-50 py-16 px-6 lg:px-20` containing 3 rows mapped from data. Row: `flex flex-col items-center gap-12 py-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`. Text side: title `text-wood-950 text-2xl font-bold`, two `text-wood-600 leading-relaxed` sentences, `Link to="/contact"` "Learn More →" `text-orange font-semibold mt-4 inline-block`. Image side: `w-full lg:w-1/2 aspect-video bg-wood-200 rounded-xl` placeholder.
- `<BottomCTA />`.

### `src/routes/pricing.tsx` (rewrite)
- `<PageHero>` ("Pricing" / "Simple, Transparent Pricing" / tagline).
- `<PricingSection />`.
- FAQ section `bg-wood-50 py-16 px-6 lg:px-20` with inner `max-w-3xl mx-auto`. h2 "Common Questions". 4 accordion items in a small client `FAQItem` component: `useState(open)`. Each item: `border-b border-wood-200 py-4`. Button row: `w-full flex justify-between items-center text-left text-wood-950 font-semibold cursor-pointer`. `ChevronDown w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`. Answer paragraph rendered only when open: `text-wood-600 text-sm mt-2`.

### `src/routes/contact.tsx` (rewrite)
- `<PageHero>` ("Contact" / "Let's Talk About Your Project" / tagline).
- Section `bg-wood-50 py-16 px-6 lg:px-20` → `flex flex-col lg:flex-row gap-12`.
- Left form `lg:w-1/2`. `<form onSubmit={(e) => e.preventDefault()}>` `flex flex-col gap-4`. Each field wrapped in label + input. Inputs/textarea use spec'd classes. Textarea `rows={5}`. Submit button styled per spec.
- Right `lg:w-1/2`: h3 "Book a Call", paragraph, Calendly placeholder `w-full h-64 bg-wood-100 rounded-xl border-2 border-dashed border-wood-300 flex items-center justify-center text-wood-400`. Then `mt-8` h3 "Contact Info" with 4 lines (`M–F 9am – 5pm MST`, phone, email, address) `text-wood-600 text-sm flex flex-col gap-2`.

All pages keep their `createFileRoute` + `head()` meta with route-specific title/description.