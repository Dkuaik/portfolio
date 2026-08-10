import { cn } from "../lib/cn";
import { LOCALE, LOCALE_LABELS } from "../i18n";
import type { LocaleController } from "../hooks/useLocale";

interface LocaleToggleProps extends LocaleController {
  ariaLabel: string;
}

const ORDERED_LOCALES = [LOCALE.EN, LOCALE.ES] as const;

export function LocaleToggle({ locale, toggle, ariaLabel }: LocaleToggleProps) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-zinc-300 p-0.5 font-mono text-xs transition hover:border-accent-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-zinc-700 dark:hover:border-accent-400"
    >
      {ORDERED_LOCALES.map((option) => (
        <span
          key={option}
          className={cn(
            "rounded-full px-2 py-1 transition",
            option === locale
              ? "bg-accent-500/15 text-accent-700 dark:text-accent-300"
              : "text-zinc-500 dark:text-zinc-500",
          )}
        >
          {LOCALE_LABELS[option]}
        </span>
      ))}
    </button>
  );
}
