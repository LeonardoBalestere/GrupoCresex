# AGENTS.md — Landing Page GRUPO CRESEX

## Project shape
- Vite + React 18 SPA. `src/main.tsx` mounts `src/App.tsx` and imports `src/index.css`.
- `src/styles/globals.css` exists, but it is **not** the active CSS entry today.
- Build output goes to `build/`.

## App architecture
- `src/App.tsx` owns all top-level routing and layout: `Router` → `ScrollToTop` → `Header` → page `<Routes>` → `Footer` → `Toaster`.
- Current routes are Portuguese slugs: `/`, `/membros`, `/servicos`, `/projetos`, `/profissionais`, `/enasex`, `/NossaHistória`, `/contato`.

## Primitive UI architecture (STRICT ENFORCEMENT)
- **BANNED:** Do not use raw HTML tags like `<div>` (for layout), `<p>`, `<h1>`, `<h2>`, or `<button>`.
- **REQUIRED:** You must use the established primitives in `src/components/ui/`: `<Flex>`, `<Text>`, `<Button>`, and `<Card>`.
- The unified width wrapper lives at `src/components/layout/container.tsx`. Every major section content block must be wrapped in `<Container>`.
- **No Inline Styles:** `style={{...}}` is strictly prohibited. All styling must be handled via Tailwind classes or primitive variants.

## Component boundaries
- Page screens live in `src/pages/` (`HomePage.tsx`, `ServicesPage.tsx`, etc.).
- Shared sections live in `src/components/` (`Header`, `Footer`, `HeroSection`, `ScrollReveal*`).
- Reusable primitives and Radix wrappers live in `src/components/ui/`.

## Motion and scrolling
- Animations use `motion/react`.
- The repo’s scroll-animation pattern is centralized in `ScrollReveal.tsx`, `ScrollRevealTitle.tsx`, and `ScrollRevealCard.tsx`.
- **CRITICAL:** Any `<section>` containing a `ScrollReveal` component MUST have the `overflow-hidden` Tailwind class to prevent horizontal scrollbars on mobile viewports.

## Styling & UX Conventions
- **Mobile-First Responsiveness:** All layouts must assume a mobile screen first. Use `md:` and `lg:` prefixes for desktop overrides.
- **Fluidity:** Hardcoded widths are banned. Use `w-full max-w-[Xpx]` instead of `w-[Xpx]`.
- **Spacing:** Do not use arbitrary padding/margins (e.g., `pl-[15px]`). Rely on the `gap` property in `<Flex>` components or standard Tailwind margin classes (`mb-8`, `mt-12`).
- **Typography Alignment:** Center text on mobile, left-align on desktop for split sections (`text-center md:text-left`).
- Global type scale and color variables are custom (`--text-2xl`, `--text-xl`, `--background`, `--primary`, etc.).

## Assets and aliases
- `@` resolves to `./src` in `vite.config.ts`.
- Use `ImageWithFallback` for remote images or unstable image sources.

## Developer workflow
- Install dependencies: `npm i`.
- Run locally: `npm run dev` (Vite opens on `http://localhost:3000`).
- Build: `npm run build`.
- `vite.config.ts` copies `_redirects` into `build/_redirects`; keep `_redirects` at the repo root.