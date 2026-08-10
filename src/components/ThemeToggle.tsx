import { MoonIcon, SunIcon } from "./Icons";
import { THEME, type ThemeController } from "../hooks/useTheme";

interface ThemeToggleProps extends ThemeController {
  ariaLabel: string;
}

export function ThemeToggle({ theme, toggle, ariaLabel }: ThemeToggleProps) {
  const isDark = theme === THEME.DARK;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-accent-500 hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-accent-400 dark:hover:text-accent-300"
    >
      {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
    </button>
  );
}
