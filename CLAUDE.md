
Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Project

Static portfolio built with Astro 5 (islands), React 19, Tailwind CSS 4, and
nanostores. All scripts run through Bun: `bun install`, `bun run dev` (Astro dev
server), `bun run build`, `bun run preview`, `bun run typecheck`.

## Frontend

- Astro 5 with `output: "static"`; React islands via `@astrojs/react`.
- Tailwind CSS 4 is wired through the `@tailwindcss/vite` Vite plugin in
  `astro.config.mjs` (`vite.plugins`). Do NOT add `@astrojs/tailwind` — that is
  the v3-era integration and is incompatible with Tailwind 4. Keep
  `src/styles.css` in Tailwind 4 syntax (`@import "tailwindcss"`, `@theme`).
- Shared cross-island state lives in `src/stores/` (nanostores atoms):
  locale, theme, and the swarm easter-egg trigger. Components read them through
  `useLocale` / `useTheme` / `useStore` — never through props drilled from a page.
- Document side effects (`<html lang>`, `document.title`, meta description,
  theme class, localStorage persistence) are centralized in `src/layouts/Base.astro`.
- Locale defaults to English always — never read the browser language. Persisted
  in localStorage key `portfolio-locale`. Theme uses key `portfolio-theme` with a
  pre-paint inline script in the layout head to avoid FOUC.
- Interactive islands use `client:load` above the fold and `client:visible`
  below it. Static markup with no interactivity stays plain Astro.
- Use `bun test` for tests.
