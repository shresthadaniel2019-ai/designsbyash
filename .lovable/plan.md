Note: this project uses TanStack Start file-based routing (`src/routes/`), not `src/pages/` + `App.tsx`. I'll adapt your spec to the existing architecture — same outcome, correct file locations. Navigation + Footer are already provided globally by `src/routes/__root.tsx`, so each page just renders its content.

## 1. Create `src/routes/terms-of-service.tsx`
- `createFileRoute("/terms-of-service")` with route-specific `head()` meta (title, description, og:title, og:description).
- Component renders a `<main>` with `bg-wood-50 py-20 px-6 lg:px-20` wrapper and an inner `max-w-3xl mx-auto` article.
- Semantic HTML, exactly as provided:
  - `<h1>` "Terms of Service" (text-wood-950 text-4xl font-bold)
  - Header block: **DesignsbyASH** + "Effective Date: May 1, 2026"
  - 17 numbered sections rendered as `<h3>` (text-wood-950 text-xl font-bold mt-10 mb-3)
  - `<p>` paragraphs in `text-wood-600 leading-relaxed`, `<strong>` for bold inline labels
  - `<ul>` bullet lists where the source uses dashes
  - Section 17 contact block with email/phone/location
  - Final acknowledgement paragraph
- All legal text rendered verbatim — no summarization.

## 2. Create `src/routes/privacy-policy.tsx`
- Same pattern: `createFileRoute("/privacy-policy")` + route-specific `head()` meta.
- Same wrapper / typography classes as Terms page for consistency.
- 12 sections rendered as `<h3>`, with `<strong>` sub-labels (e.g. "(a) Information You Provide Directly:") and `<ul>` bullet lists exactly as provided.
- Final contact block + acknowledgement.

## 3. Update `src/components/Footer.tsx`
- The footer already shows the literal text "Privacy Policy | Terms of Service" but as plain `<span>`. Replace with two `<Link>`s:
  - `<Link to="/privacy-policy">Privacy Policy</Link>` ` | ` `<Link to="/terms-of-service">Terms of Service</Link>`
  - Classes: `text-wood-500 hover:text-orange transition text-sm` to match existing muted footer style.
- Also update the copyright year span from "© 2025 DesignsbyASH" to "© 2026 DesignsbyASH" to match the effective date context (optional — flag for confirmation if you prefer to keep 2025).

## Items adapted from your spec
- **No `src/pages/` or `App.tsx`** — TanStack Start uses `src/routes/`; routes are auto-registered by the Vite plugin, no manual route table edits.
- **No per-page Navigation/Footer imports** — `__root.tsx` already wraps every route with `<Navbar />` + `<Outlet />` + `<Footer />`. Adding them inside individual pages would render them twice.
- **ScrollToTop** — TanStack Router scrolls to top on navigation by default; no separate component needed.
- **Dark mode** — the project uses a fixed wood/orange palette (not a light/dark theme toggle); I'll follow the existing token system (`text-wood-950`, `text-wood-600`, `bg-wood-50`, etc.) used across all other pages. No `ThemeProvider`/`ThemeToggle` exists, so nothing there will be touched.

## Technical details
- Heading hierarchy: one `<h1>` per page, `<h3>` for numbered sections (matches your `###` markdown).
- Paragraph spacing: `space-y-4` inside each section, `mt-10` between sections.
- Lists: `list-disc list-inside text-wood-600 space-y-1` with `<strong>` for the bolded label portions.
- Contact blocks: `<address className="not-italic">` containing email as `mailto:` link and phone as `tel:` link for a11y.
