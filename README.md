# Portfolio — Enrique Ríos Flores

Personal portfolio built with Astro 5 (islands architecture), React 19, Tailwind CSS 4,
and nanostores. The page is statically pre-rendered; interactive parts hydrate as islands.

## Stack

- **Astro 5** — static output, pre-renders the whole page; islands hydrate on demand
  (`client:load` for above-the-fold chrome, `client:visible` for below-fold sections).
- **React 19** via `@astrojs/react` — every interactive or locale-aware component.
- **nanostores + @nanostores/react** — shared `localeStore`, `themeStore`, and
  `swarmTriggerStore` so every island reacts instantly to a toggle.
- **Tailwind CSS 4** via the `@tailwindcss/vite` Vite plugin (not the v3-era
  `@astrojs/tailwind` integration). `src/styles.css` keeps plain Tailwind 4 syntax.
- **Bun** — installs dependencies and runs every script.

## Commands

```bash
bun install       # install dependencies
bun run dev       # Astro dev server at http://localhost:4321
bun run build     # static production build into dist/
bun run preview   # serve dist/ locally
bun run typecheck # tsc --noEmit
```

## Structure

```
astro.config.mjs        # Astro config: @astrojs/react + Tailwind 4 via @tailwindcss/vite
public/
  favicon.svg
src/
  layouts/Base.astro    # HTML shell, SEO defaults (EN), pre-paint theme script, store sync
  pages/index.astro     # page composition; wires every island with client:* directives
  stores/
    locale.ts           # locale atom (default EN, localStorage "portfolio-locale")
    theme.ts            # theme atom (localStorage "portfolio-theme", OS preference fallback)
    swarm.ts            # wordmark click counter consumed by the agent swarm easter egg
  hooks/
    useLocale.ts        # useStore-backed LocaleController
    useTheme.ts         # useStore-backed ThemeController
    useReveal.ts        # IntersectionObserver reveal animation
  i18n/
    types.ts            # content contract shared by every locale
    en.ts               # English dictionary (default)
    es.ts               # Spanish dictionary
    index.ts            # locale registry and guards
  components/           # presentational components + store-backed island wrappers
  lib/cn.ts             # clsx + tailwind-merge helper
```

## Islands and hydration strategy

`src/pages/index.astro` composes the page:

- `NavBar`, `HeroSection`, `BackgroundFx`, `SwarmLayer` use `client:load`
  (above the fold or always-active layers).
- `ExperienceSection`, `StackSection`, `BackgroundSection`, `Footer` use
  `client:visible` and hydrate when scrolled into view. Their pre-rendered
  markup is visible immediately; hydration only adds the reveal animations and
  locale reactivity.

`src/layouts/Base.astro` owns every document side effect: an inline pre-paint
script applies the stored theme before first paint (no flash), and a small
sync script keeps `<html lang>`, `<title>`, the meta description, the theme
class, and localStorage in sync with the stores.

The reveal animation (`useReveal`) is attached per island: Hero observes its
own subtree and each Section observes its own, so sections reveal independently.

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
agents that bounce around the viewport (`AgentSwarm`). The click increments
`swarmTriggerStore`, which the swarm island consumes. Positions live in refs
and are applied straight to the DOM through `requestAnimationFrame`.

Every animation is gated behind `prefers-reduced-motion`. Visitors who ask for
reduced motion get the static layout, the aurora stops drifting, and the swarm
never spawns.

## Language behavior

The server-rendered HTML and SEO metadata are always English. The site always
opens in English on the client too; the browser's preferred language is
deliberately ignored. Only an explicit choice by the visitor is persisted
(`localStorage`, key `portfolio-locale`), and every island switches instantly
through `localeStore`.

## Deployment

`bun run build` emits a fully static `dist/` — deploy it to any static host,
container, or reverse proxy without a Node or Bun runtime in production. The
repository ships a multi-stage Dockerfile that builds with Bun and serves the
result with nginx.
