import { atom } from "nanostores";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

export const THEME_STORAGE_KEY = "portfolio-theme";

function isTheme(value: unknown): value is Theme {
  return value === THEME.LIGHT || value === THEME.DARK;
}

function readInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return THEME.LIGHT;
  }

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (isTheme(stored)) return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? THEME.DARK : THEME.LIGHT;
}

export const themeStore = atom<Theme>(readInitialTheme());

export function toggleTheme(): void {
  const next = themeStore.get() === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  themeStore.set(next);
  localStorage.setItem(THEME_STORAGE_KEY, next);
}
