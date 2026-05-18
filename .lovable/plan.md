## Pricing Section (reusable)

Create `src/components/PricingSection.tsx` and render it on Home (after `<PageSpeed />`) and on `/pricing` (replacing the "Coming Soon" placeholder).

### Component shape

`PricingSection()` — `'use client'` not needed (TanStack Start uses normal React). Uses `useState<'subscription' | 'lump'>('subscription')`.

Wrapper: `<section className="bg-wood-950 py-20 px-6 lg:px-20">`.
- Centered eyebrow / h2 / paragraph as spec'd.
- Toggle (`mt-8` centered wrapper): `bg-wood-800 rounded-full p-1 inline-flex`. Two `<button>`s; active class applies `bg-orange text-white`, inactive `bg-transparent text-wood-400 hover:text-wood-200`. Both `rounded-full px-6 py-2 font-semibold`.
- Cards container: `mt-10 flex flex-col lg:flex-row gap-8 justify-center max-w-4xl mx-auto`.

### Data model

```ts
type FeatureKind = 'orange' | 'amber' | 'x';
type Feature = { kind: FeatureKind; text: string };
type Card = {
  title: string;
  price: string;
  priceSuffix: string;  // " /month" or " Lump Sum"
  features: Feature[];
  cta: string;
  recommended?: boolean;
};
```

Four card definitions: subscription Starter/Growth (all orange checks) and lump Starter/Growth (mixed orange/amber/x).

### Card component

`function PricingCard(card)`:
- Outer `relative bg-wood-900 border rounded-2xl p-8 w-full max-w-md`, border class `border-orange` when recommended else `border-wood-800`.
- If recommended, render badge `absolute -top-3 right-6 bg-orange text-white text-xs uppercase font-bold px-3 py-1 rounded-full` with "Recommended".
- `Rocket` icon `w-8 h-8 text-orange`.
- Title `text-white font-bold text-xl mt-4`.
- Price row: `<span className="text-4xl font-bold text-white">{price}</span><span className="text-wood-400 text-lg">{priceSuffix}</span>`.
- Features list `mt-6 flex flex-col gap-3`. Each row `flex items-start gap-2`:
  - orange → `<Check className="w-5 h-5 text-orange flex-shrink-0" />`
  - amber → `<Check className="w-5 h-5 text-amber flex-shrink-0" />`
  - x → `<X className="w-5 h-5 text-wood-600 flex-shrink-0" />`
  - text `text-wood-300 text-sm`.
- CTA: TanStack `<Link to="/contact">` styled `mt-8 block bg-orange text-white w-full py-3 rounded-md font-semibold hover:bg-orange-hover transition text-center`.

### Active set selection

`const activeCards = mode === 'subscription' ? [subStarter, subGrowth] : [lumpStarter, lumpGrowth]` then `.map(card => <PricingCard ... />)`.

### Wiring

- `src/routes/index.tsx`: import `PricingSection` and render after `<PageSpeed />`.
- `src/routes/pricing.tsx`: replace the placeholder body with `<PricingSection />` (keep route + head metadata).

Imports for the new component: `useState`, `Link` from `@tanstack/react-router`, Lucide `Check`, `Rocket`, `X`.