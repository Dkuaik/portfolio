import { useStore } from "@nanostores/react";

import { THEME, themeStore, toggleTheme, type Theme } from "../stores/theme";

export { THEME };
export type { Theme };

export interface ThemeController {
  theme: Theme;
  toggle: () => void;
}

export function useTheme(): ThemeController {
  const theme = useStore(themeStore);
  return { theme, toggle: toggleTheme };
}
