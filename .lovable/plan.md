## Plan: Pricing system update

### 1. `src/components/PricingSection.tsx`

**Data changes**
- `subStarter.features`: drop `"+$250 To Add A Blog"` line.
- `lumpStarter.features`: drop `"+$250 To Add A Blog"` line.
- `subGrowth`: keep existing `"Includes an Editable Blog"`.
- `lumpGrowth`: replace `"+$250 To Add A Blog"` with `"Includes an Editable Blog"`.

**Icons**
- Import `Zap` alongside `Rocket`. Add `icon` field on `Card`. Starter → `Zap`, Growth → `Rocket`. `PricingCard` renders `<card.icon …>`.

**Toggle (animated pill slider)**
- Container: `relative bg-wood-800 rounded-full p-1 inline-flex w-[280px]`.
- Two equal-width buttons (`flex-1 z-10`), text white when active else `text-wood-400`.
- Absolute slider behind them: `absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-orange transition-transform duration-300 ease-out`, with `style={{ transform: mode === "lump" ? "translateX(100%)" : "translateX(0)" }}`.

**Cards crossfade**
- Wrap the cards grid in a keyed container `<div key={mode} className="animate-fade-in">` using the existing Tailwind `animate-fade-in` keyframes from the project.

**Card hover + recommended pulse**
- Add to `PricingCard` root: `transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange`.
- Add CSS keyframe `badge-pulse` (1 → 1.05 → 1, 2s infinite) in `src/styles.css`; apply `animate-[badge-pulse_2s_ease-in-out_infinite]` to the Recommended badge span.

**Copy**
- Eyebrow: `"Website Design Pricing"`.
- Heading: `"Fair Prices. Beautiful Websites."` (already).
- Description: `"Straightforward pricing, honest work. Great websites don't need expensive price tags — they just need to perform for your business."`.

Dark mode: cards/toggle already use literal `bg-wood-900/800` which now stay dark in both modes — no changes.

### 2. `src/styles.css`
Append:
```css
@keyframes badge-pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}
```
(Fade-in keyframe already provided via `tw-animate-css` / Tailwind defaults — verify; if missing, add `fade-in` keyframe.)

### 3. `src/routes/pricing.tsx`

**FAQ data** — replace existing `faqs` with the 5 new Q/A pairs from the spec.

**FAQItem accordion animation**
```tsx
<div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
  <div className="overflow-hidden">
    <p className={`text-wood-600 dark:text-wood-300 text-sm pt-2 transition-opacity duration-200 delay-100 ${open ? "opacity-100" : "opacity-0"}`}>
      {a}
    </p>
  </div>
</div>
```
Chevron already has `transition-transform`; bump to `duration-200`.

**Scroll reveal with stagger**
- Import `useScrollReveal` from `@/hooks/useScrollReveal`.
- `FAQItem` accepts `delay` (1..5), root div gets `ref={useScrollReveal()}` and `className="reveal reveal-delay-${delay} border-b …"`.
- Map index → `delay={(i % 5) + 1}`.

**Footer link + BottomCTA**
- Below the FAQ list:
  ```tsx
  <Link to="/faq" className="mt-8 inline-block text-orange font-semibold hover:underline">
    Have more questions? Visit our full FAQ page →
  </Link>
  ```
  Note: `/faq` route does not exist yet; this will fail TanStack Router's typed `<Link to>` typecheck. Use `<a href="/faq">` instead to avoid creating the route in this change.
- Add `<BottomCTA />` after the FAQ section. Import from `@/components/PageBits`.

**Dark mode**
- Section already updated to `bg-wood-50 dark:bg-wood-900` in previous turn; FAQ item border + text classes already use `dark:` variants. Verify intact.

**Meta** — already matches spec; no change.

### Verification
After edits: toggle subscription/lump → pill slides and cards crossfade; hover a card → lifts with emerald border; Recommended badge pulses gently; open/close an FAQ → smooth height + text fade; FAQ items reveal on scroll with stagger; both themes render correctly.
