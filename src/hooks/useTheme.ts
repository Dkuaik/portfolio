import { useEffect, useState } from "react";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

const STORAGE_KEY = "portfolio-theme";

function isTheme(value: unknown): value is Theme {
  return value === THEME.LIGHT || value === THEME.DARK;
}

function readInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isTheme(stored)) return stored;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? THEME.DARK : THEME.LIGHT;
}

export interface ThemeController {
  theme: Theme;
  toggle: () => void;
}

export function useTheme(): ThemeController {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === THEME.DARK);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => {
    setTheme((current) => (current === THEME.DARK ? THEME.LIGHT : THEME.DARK));
  };

  return { theme, toggle };
}
