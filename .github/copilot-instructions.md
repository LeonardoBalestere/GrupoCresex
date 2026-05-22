# Copilot / AI assistant instructions for Landing Page GRUPO CRESEX

This file gives focused, actionable guidance to an AI coding assistant working on this repository.

1) Quick start (developer workflows)
- Install: `npm i` (see `package.json`).
- Dev server: `npm run dev` (Vite, opens on `http://localhost:3000`).
- Build: `npm run build` → output to `build/` (Vite `outDir` configured in `vite.config.ts`).

2) Big picture architecture
- Framework: React 18 with Vite and the `@vitejs/plugin-react-swc` plugin.
- Routing: Single-page app using `react-router-dom`. Primary routes are declared in `src/App.tsx` and map to files under `src/pages/`.
- UI organization: reusable primitives and Radix-based components live under `src/components/ui/`. Page-level views are under `src/pages/` and small sections under `src/components/`.
- Styling: Tailwind utility classes are used throughout. **Inline styles (`style={{...}}`) are strictly forbidden.**

3) Important project-specific conventions
- Vite aliases: `vite.config.ts` maps some imports to non-standard names. You will encounter imports like `sonner@2.0.3` or `figma:asset/<hash>.png` — Vite alias resolves these to the real package/file.
- `@` alias: maps to `./src` (e.g. `import X from '@/components/...')` — use for concise absolute imports.
- Pages & routes: route paths are in Portuguese (e.g. `/servicos`, `/fundadora`).
- Motion/animation: animations are implemented with `motion/react` (aliased as `motion`). Use this consistently for animated elements.

4) Import examples the assistant should follow
- Package alias import: `import { Toaster } from "sonner@2.0.3";`
- Asset alias import: `import logo from "figma:asset/e8a1af6f~~~~fc99fdcaf7bcd74a6087b01f31a4bff7.png";`
- Absolute import via `@`: `import { Header } from "@/components/Header";`

5) Build & dependency notes for the assistant
- Vite target: `esnext`. Keep modern syntax; transpilation uses SWC plugin.

6) Files to inspect for context when making changes
- `vite.config.ts` — important for aliases and dev server settings.
- `src/App.tsx` — routing and top-level layout.
- `src/components/ui/` — primitives and Radix wrappers.
- `src/styles/globals.css` — theme tokens, font, and base layout styles.

7) What not to change without confirmation
- Avoid renaming or removing Vite aliases in `vite.config.ts`.
- Do not change route slugs (`/servicos`, etc.) unless updating links globally.

8) PR suggestions and messages
- Minimal PR title: `feat: <short description>` or `fix: <short description>`.

9) Strict UX/UI & Mobile-First Rules (MANDATORY)
- **Responsive Wrappers:** Any element with `max-w-[...]` MUST be paired with `w-full` to prevent collapsing on 320px screens.
- **Touch Targets:** Standalone `<Button>` elements must be full-width on mobile and auto-sized on desktop (`className="w-full md:w-auto"`).
- **Animation Overflow:** Every outer `<section>` must include `overflow-hidden` to prevent horizontal scrolling caused by off-screen animations.
- **Grid Order:** In responsive grids containing Text and an Image, Text must ALWAYS appear first on mobile (e.g., Image gets `order-2 md:order-1`, Text gets `order-1 md:order-2`).
- **Alignment:** Never hardcode `align="start"` on main flex containers. Use responsive alignment: `className="items-center text-center md:items-start md:text-left w-full"`.