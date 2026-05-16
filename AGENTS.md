# AGENTS.md — Landing Page GRUPO CRESEX

## Project shape
- Vite + React 18 SPA. `src/main.tsx` mounts `src/App.tsx` and imports `src/index.css`.
- `src/styles/globals.css` exists, but it is **not** the active CSS entry today.
- Build output goes to `build/`.

## App architecture
- `src/App.tsx` owns all top-level routing and layout: `Router` → `ScrollToTop` → `Header` → page `<Routes>` → `Footer` → `Toaster`.
- Current routes are Portuguese slugs: `/`, `/membros`, `/servicos`, `/projetos`, `/profissionais`, `/enasex`, `/NossaHistória`, `/contato`.
- Keep the exact `/NossaHistória` casing; it is used in `Header`, `HomePage`, and `App.tsx`.
- `Footer.tsx` still references `/fundadora`, which does not exist in `App.tsx`; treat that as a repo quirk, not a new convention.

## Component boundaries
- Page screens live in `src/pages/` (`HomePage.tsx`, `ServicesPage.tsx`, `FounderPage.tsx`, etc.).
- Shared sections live in `src/components/` (`Header`, `Footer`, `HeroSection`, `BenefitsSection`, `ScrollReveal*`).
- Reusable primitives and Radix wrappers live in `src/components/ui/`.

## Motion and scrolling
- Animations use `motion/react`, not ad-hoc CSS transitions.
- The repo’s scroll-animation pattern is centralized in `ScrollReveal.tsx`, `ScrollRevealTitle.tsx`, and `ScrollRevealCard.tsx`.
- `ScrollToTop.tsx` resets the viewport on route changes with `window.scrollTo({ behavior: 'instant' })`.

## Styling conventions
- Tailwind utility classes dominate component markup; project tokens and base styles are defined in `src/index.css` and `src/styles/globals.css`.
- Global type scale and color variables are custom (`--text-2xl`, `--text-xl`, `--background`, `--foreground`, etc.).
- The fixed header is expected; pages commonly add `pt-20` to avoid overlap.

## Assets and aliases
- `@` resolves to `./src` in `vite.config.ts`.
- Versioned alias imports such as `sonner@2.0.3` resolve through Vite aliases; preserve that pattern if adding similar imports.
- `figma:asset/e8a1af6ffc99fdcaf7bcd74a6087b01f31a4bff7.png` maps to the logo asset in `src/assets/`.
- Use `ImageWithFallback` for remote images or unstable image sources.

## Developer workflow
- Install dependencies: `npm i`.
- Run locally: `npm run dev` (Vite opens on `http://localhost:3000`).
- Build: `npm run build`.
- `vite.config.ts` copies `_redirects` into `build/_redirects`; keep `_redirects` at the repo root.

## When changing routes or navigation
- Update `src/App.tsx`, `src/components/Header.tsx`, and `src/components/Footer.tsx` together.
- Match existing Portuguese labels and direct `Link`/`navigate()` usage from the current pages.
