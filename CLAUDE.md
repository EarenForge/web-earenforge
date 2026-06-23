# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Important: Next.js version

This project runs **Next.js 16** with **React 19** and **Tailwind CSS v4**. As noted in AGENTS.md, this Next.js version may differ from training data — consult `node_modules/next/dist/docs/` before writing framework code.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (eslint-config-next)
```

There is no test suite.

## Architecture

This is a single-page marketing/portfolio site (Earen Forge) using the Next.js **App Router**.

- **Single page composition**: [app/page.tsx](app/page.tsx) renders the whole site by stacking section components from `components/` in order (Navbar → Hero → Services → Projects → About → Contact → Footer). To change page structure, edit this file; to change a section, edit its component.
- **Providers**: [app/layout.tsx](app/layout.tsx) wraps everything in `ThemeProvider` then `LanguageProvider`. Both are client-side React Context providers. SSR/client mismatch is handled with `suppressHydrationWarning` on `<html>` and `<body>`.
- **Path alias**: `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)). Import as `@/components/...`, `@/data/...`.

### Internationalization

- Three languages: `en`, `es`, `ca`, defined in [data/translations/](data/translations/). Each file exports a deeply-nested object of strings/arrays.
- [data/translations/en.ts](data/translations/en.ts) is the **source of truth for the shape**: `export type Translation = typeof en`. `es.ts` and `ca.ts` must match this structure exactly or TypeScript will error.
- Components consume copy via the `useLanguage()` hook from [components/LanguageProvider.tsx](components/LanguageProvider.tsx): `const { t } = useLanguage()`, then read `t.section.key`. Never hardcode user-facing text in components — add it to all three translation files.
- Selected language persists to `localStorage` under key `language`; default is `en`.

### Theming

- Light/dark theme via [components/ThemeProvider.tsx](components/ThemeProvider.tsx) and the `useTheme()` hook. The active theme is applied as a `light`/`dark` class on `<html>`; persisted to `localStorage` key `theme`; defaults to dark (falls back to OS preference).
- Colors are CSS custom properties in [app/globals.css](app/globals.css), exposed to Tailwind v4 via `@theme inline`. Use the semantic utility classes (`bg-background`, `text-foreground`, `bg-card`, `text-muted`, `border-border`, etc.) instead of hardcoded colors so both themes work. Custom animations (`animate-fade-in-up`, `animate-pulse-slow`, `animate-float`) are also defined here.

### Content data

- Project entries live in [data/projects.ts](data/projects.ts) as a typed array. The Projects section derives its stack filter buttons and featured/non-featured grouping from this array, so adding a project there is enough — no component changes needed. Project images are SVGs under `public/projects/`.

## Conventions

- Any component using hooks, state, or browser APIs must start with `"use client"`. Section components that read `useLanguage()`/`useTheme()` are all client components.
- Use `next/image` (`Image`) for images, as in [components/Projects.tsx](components/Projects.tsx).
