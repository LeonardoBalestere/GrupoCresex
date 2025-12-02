# Copilot / AI assistant instructions for Landing Page GRUPO CRESEX

This file gives focused, actionable guidance to an AI coding assistant working on this repository.

1) Quick start (developer workflows)
- Install: `npm i` (see `package.json`).
- Dev server: `npm run dev` (Vite, opens on `http://localhost:3000`).
- Build: `npm run build` → output to `build/` (Vite `outDir` configured in `vite.config.ts`).

2) Big picture architecture
- Framework: React 18 with Vite and the `@vitejs/plugin-react-swc` plugin.
- Routing: Single-page app using `react-router-dom`. Primary routes are declared in `src/App.tsx` and map to files under `src/pages/`.
- UI organization: reusable primitives and Radix-based components live under `src/components/ui/` (see many files there). Page-level views are under `src/pages/` and small sections under `src/components/` (e.g. `Header`, `Footer`, `HeroSection`).
- Styling: Tailwind utility classes are used throughout; global CSS variables and design tokens live in `src/styles/globals.css` (preferred place to add brand tokens).

3) Important project-specific conventions
- Vite aliases: `vite.config.ts` maps some imports to non-standard names. You will encounter imports like `sonner@2.0.3` or `figma:asset/<hash>.png` — Vite alias resolves these to the real package/file. When adding packages or assets, update `vite.config.ts` if you intend to use a similar alias.
- `@` alias: maps to `./src` (e.g. `import X from '@/components/...')` — use for concise absolute imports.
- Pages & routes: route paths are in Portuguese (e.g. `/servicos`, `/fundadora`). When adding a new page, create `src/pages/NewPage.tsx` and add a `<Route path="/sua-rota" element={<NewPage/>} />` in `src/App.tsx`.
- UI primitives: Add common components to `src/components/ui/`. Keep presentational section-level components in `src/components/` and page-specific components in `src/pages/` alongside the page when appropriate.
- Motion/animation: animations are implemented with `motion/react` (aliased as `motion`). Use this consistently for animated elements instead of ad-hoc CSS transitions.

4) Import examples the assistant should follow
- Package alias import: `import { Toaster } from "sonner@2.0.3";` (Vite alias resolves it).
- Asset alias import (figma image): `import logo from "figma:asset/e8a1af6ffc99fdcaf7bcd74a6087b01f31a4bff7.png";` (vite.config.ts maps it to `src/assets/...`).
- Absolute import via `@`: `import { Header } from "@/components/Header";`

5) Build & dependency notes for the assistant
- Vite target: `esnext`. Keep modern syntax; transpilation uses SWC plugin.
- If you add new 3rd-party packages, update `package.json` and re-run `npm i`. If you plan to reference them using the project's alias pattern (e.g. `pkg@version`), also add a corresponding alias in `vite.config.ts`.

6) Files to inspect for context when making changes
- `vite.config.ts` — important for aliases and dev server settings (port 3000, open on start).
- `package.json` — scripts and dependency versions.
- `src/App.tsx` — routing and top-level layout (Header/Footer/Toaster).
- `src/components/` — sections and shared UI. `src/components/ui/` contains primitives and Radix wrappers.
- `src/pages/` — route views. Follow existing naming & path conventions.
- `src/styles/globals.css` — theme tokens, font, and base layout styles.

7) What not to change without confirmation
- Avoid renaming or removing Vite aliases in `vite.config.ts` without confirming: many imports use those exact alias strings.
- Do not change route slugs (`/servicos`, etc.) unless updating links in `Header` and `Footer` accordingly.

8) PR suggestions and messages
- Minimal PR title: `feat: <short description>` or `fix: <short description>`.
- In PR description, list the top-level files changed (e.g. `src/pages/X`, `src/components/Y`, `vite.config.ts`). Mention if `vite.config.ts` or `package.json` changed.

If any of these sections are unclear or you want deeper examples (e.g. a sample new page + route), tell me which area to expand and I'll iterate.
