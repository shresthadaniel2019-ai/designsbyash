## Visual Foundation Overhaul

Recolor the entire site (grays → zinc, orange → emerald) and add a class-based dark mode with a theme toggle.

### 1. `src/styles.css` — color tokens + dark mode

- Replace every value inside `@theme` per the spec (keep `wood-*` and `orange*` names so no component needs to change).
- Add a `@custom-variant dark (&:where(.dark, .dark *));` so Tailwind's `dark:` utilities work with the class strategy.
- Add a `.dark { ... }` block that overrides the semantic tokens for dark mode:
  - `--color-background: #09090b`, `--color-foreground: #fafafa`
  - `--color-card: #27272a`, `--color-card-foreground: #fafafa`
  - `--color-popover: #27272a`, `--color-popover-foreground: #fafafa`
  - `--color-border: #3f3f46`, `--color-input: #3f3f46`
  - `--color-secondary / muted / accent: #27272a` with `#fafafa` foreground
  - `--color-muted-foreground: #a1a1aa`
- Add scoped element overrides under `.dark` for the existing palette usage so all pages flip without rewriting components:
  - `.dark .bg-white { background-color: #27272a; }`
  - `.dark .bg-wood-50 { background-color: #18181b; }`
  - `.dark .bg-wood-100 { background-color: #27272a; }`
  - `.dark .bg-wood-950` stays `#09090b` (already correct)
  - `.dark .text-wood-950 { color: #fafafa; }`
  - `.dark .text-wood-900 { color: #f4f4f5; }`
  - `.dark .text-wood-700 { color: #d4d4d8; }`
  - `.dark .text-wood-600 { color: #a1a1aa; }`
  - `.dark .border-wood-200 { border-color: #3f3f46; }`
  - `.dark .border-wood-100 { border-color: #3f3f46; }`
  - Form inputs: `.dark input, .dark textarea, .dark select { background-color: #27272a; color: #fafafa; border-color: #3f3f46; }`

This scoped-override approach means we don't have to touch every page file.

### 2. `src/components/ThemeProvider.tsx` (new)

- React context with `theme: "light" | "dark"` and `toggleTheme()` / `setTheme()`.
- On mount: read `localStorage.getItem("theme")`, default `"light"`, apply/remove `dark` class on `document.documentElement`.
- On change: persist to localStorage and update the html class.
- Export `useTheme()` hook.

### 3. `src/components/ThemeToggle.tsx` (new)

- Small button using `lucide-react` `Sun` / `Moon` icons, calls `toggleTheme()`.
- Styled to fit the navbar (`text-wood-300 hover:text-orange`).

### 4. `src/components/Navbar.tsx`

- Import and render `<ThemeToggle />` next to the "Get a Quote" button (desktop) and in the mobile drawer.

### 5. `src/routes/__root.tsx`

- Wrap `RootComponent`'s tree in `<ThemeProvider>`.
- In `RootShell`, add an inline `<script>` in `<head>` that runs before render:
  ```js
  (function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();
  ```
  This prevents the light-mode flash on first paint.

### Out of scope / preserved

- No component logic changes. No new pages. Existing route files keep their current class names — the dark overrides in `styles.css` do the visual flip.
- Footer, legal pages, hero sections all inherit the new palette automatically.

### Verification

- Build passes.
- Toggle in navbar flips the site; preference persists across reloads.
- No flash of light theme when reloading in dark mode.
