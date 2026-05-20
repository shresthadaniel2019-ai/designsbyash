## Plan: Fix dark/light mode and hero divider

### 1. `src/styles.css`
- Remove the global dark-mode overrides that force `bg-wood-950`, `bg-wood-50`, `bg-white`, and `text-wood-*` colors to invert. They cause "always-dark" sections to flip and override `dark:` variants.
  - Drop: `.dark .bg-white`, `.dark .bg-wood-50`, `.dark .bg-wood-100`, `.dark .bg-wood-200`, `.dark .text-wood-950/900/800/700/600`, `.dark .border-wood-100/200/300`, `.dark input/textarea/select`.
- Keep the `:root` and `.dark` semantic token overrides (`--color-background`, `--color-foreground`, etc.) so shadcn components still themed.
- Rewrite `.hero-divider`: simple gradient fade instead of clip-path.
  ```css
  .hero-divider {
    position: relative;
    z-index: 1;
    height: 60px;
    margin-top: -1px;
    background: linear-gradient(to bottom, #09090b 0%, transparent 100%);
    pointer-events: none;
  }
  ```

### 2. `src/routes/index.tsx`
Apply explicit Tailwind classes per the spec:

- **Hero**: `bg-wood-950` (no dark variant). Already correct — verify text classes use literal `text-white` / `text-wood-400` (these no longer get inverted after step 1).
- **YouTubeExplainer, Services, FeaturesStats, MidScrollCTA, FinalCTA**: keep `bg-wood-950` only, text stays `text-white` / `text-wood-400`.
- **MeetTheTeam**, **PageSpeed**, **VideoTestimonials**: change section background to `bg-wood-50 dark:bg-wood-900`.
  - Headings: `text-wood-950 dark:text-white`
  - Body paragraphs: `text-wood-600 dark:text-wood-300`
  - Sub-labels (`text-wood-500`, `text-wood-400` placeholders): add `dark:text-wood-400`
  - Inner cards in VideoTestimonials: `bg-white dark:bg-wood-800`
  - Photo / screenshot placeholders: `bg-wood-200 dark:bg-wood-800`
- Hero JSX: remove the old `<div className="hero-divider" />` if it sits inside the Hero fragment with weird wrapping — keep it placed immediately after `</section>` with no margin, so the gradient blends seamlessly.

### 3. `src/components/Navbar.tsx`
Already uses `bg-wood-950` + `text-white` literally. After step 1 removes the inversion overrides, navbar stays dark in both modes automatically. No change needed beyond verifying.

### 4. `src/components/Footer.tsx`
Verify it uses `bg-wood-950` with literal white/light text classes. If it relies on `text-wood-600` for body text expecting dark-mode inversion, swap to `text-wood-400` so it stays readable on the dark background in both modes. (Will read the file during implementation and adjust only if needed.)

### 5. Other routes (about, contact, services, pricing, privacy, terms)
These routes previously depended on the global `.dark .bg-wood-50` / `.dark .text-wood-950` overrides for dark mode. After removing those overrides, they will appear light in dark mode. Add `dark:` variants to their section backgrounds and text colors so they continue to respond to the toggle:
- Section bg: `bg-wood-50` → `bg-wood-50 dark:bg-wood-900`, `bg-white` → `bg-white dark:bg-wood-800`
- Headings/body text: add matching `dark:text-white` / `dark:text-wood-300`
- Form inputs: `dark:bg-wood-800 dark:border-wood-700 dark:text-white`

### Verification
- Toggle theme in preview, confirm: hero/navbar/footer/always-dark sections stay dark; MeetTheTeam/PageSpeed/VideoTestimonials swap between `wood-50` and `wood-900`; divider blends without a visible triangle; other routes still respond to dark mode.
