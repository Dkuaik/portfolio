# Portfolio — Enrique Ríos Flores

Personal portfolio built on Bun with React 19 and Tailwind CSS 4.

## Commands

```bash
bun install       # install dependencies
bun run dev       # dev server with HMR at http://localhost:3000
bun run build     # production bundle into dist/
bun run typecheck # tsc --noEmit
```

## Structure

```
index.html            # entry point; sets the theme class before first paint
build.ts              # production build (Bun.build + bun-plugin-tailwind)
bunfig.toml           # registers the Tailwind plugin for the dev server
src/
  main.tsx            # React root
  App.tsx             # page composition
  styles.css          # Tailwind import, theme tokens, dark variant
  i18n/
    types.ts          # content contract shared by every locale
    en.ts             # English dictionary (default)
    es.ts             # Spanish dictionary
    index.ts          # locale registry and guards
  hooks/
    useLocale.ts      # language state, persisted; always defaults to English
    useTheme.ts       # light/dark state, persisted
    useReveal.ts      # IntersectionObserver reveal animation
  components/         # presentational components, data passed as props
  lib/cn.ts           # clsx + tailwind-merge helper
```

## Editing content

All copy lives in `src/i18n/en.ts` and `src/i18n/es.ts`. Both files implement the
`Dictionary` interface from `src/i18n/types.ts`, so adding a field to one locale
without the other is a type error. No component needs to change when the content does.

Adding a third language means creating a new dictionary file and registering it in
`src/i18n/index.ts`.

## Background and motion

`BackgroundFx` renders three decorative layers behind the content: a masked
technical grid, a drifting accent aurora, and a glow that trails the pointer.
Pointer coordinates are written to CSS custom properties directly on the node,
so moving the mouse never re-renders React.

Clicking the wordmark in the navbar releases a short-lived swarm of labelled
agents that bounce around the viewport (`AgentSwarm`). Positions live in refs
and are applied straight to the DOM through `requestAnimationFrame`.

Every animation is gated behind `prefers-reduced-motion`. Visitors who ask for
reduced motion get the static layout, the aurora stops drifting, and the swarm
never spawns.

## Language behavior

The site always opens in English. The browser's preferred language is deliberately
ignored; only an explicit choice by the visitor is persisted (`localStorage`, key
`portfolio-locale`).

## Deployment

`bun run build` emits a fully static `dist/` — deploy it to any static host,
container, or reverse proxy without a Node or Bun runtime in production.
