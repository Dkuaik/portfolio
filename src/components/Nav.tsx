import { LocaleToggle } from "./LocaleToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useLocale } from "../hooks/useLocale";
import type { LocaleController } from "../hooks/useLocale";
import { useTheme } from "../hooks/useTheme";
import type { ThemeController } from "../hooks/useTheme";
import { THEME } from "../hooks/useTheme";
import { triggerSwarm } from "../stores/swarm";
import type { UiStrings } from "../i18n";

interface NavProps {
  initials: string;
  ui: UiStrings;
  theme: ThemeController;
  locale: LocaleController;
  onWordmarkClick: () => void;
}

export function Nav({ initials, ui, theme, locale, onWordmarkClick }: NavProps) {
  const items = [
    { href: "#experience", label: ui.nav.experience },
    { href: "#stack", label: ui.nav.stack },
    { href: "#background", label: ui.nav.background },
  ];

  const themeLabel = theme.theme === THEME.DARK ? ui.switchToLight : ui.switchToDark;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={onWordmarkClick}
          className="font-mono text-sm font-semibold tracking-tight text-zinc-900 transition hover:text-accent-600 dark:text-zinc-100 dark:hover:text-accent-400"
        >
          {initials}
          <span className="animate-caret text-accent-600 dark:text-accent-400">_</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-zinc-600 transition hover:text-accent-600 dark:text-zinc-400 dark:hover:text-accent-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LocaleToggle {...locale} ariaLabel={ui.switchLanguage} />
          <ThemeToggle {...theme} ariaLabel={themeLabel} />
        </div>
      </nav>
    </header>
  );
}

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("");
}

export function NavBar() {
  const locale = useLocale();
  const theme = useTheme();
  const { profile, ui } = locale.dictionary;

  return (
    <Nav
      initials={initialsOf(profile.name)}
      ui={ui}
      theme={theme}
      locale={locale}
      onWordmarkClick={triggerSwarm}
    />
  );
}
