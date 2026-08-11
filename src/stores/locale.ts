import { atom } from "nanostores";

import { isLocale } from "../i18n";
import { DEFAULT_LOCALE, LOCALE, type Locale } from "../i18n/types";

export const LOCALE_STORAGE_KEY = "portfolio-locale";

/**
 * The site always opens in English unless the visitor explicitly picked another
 * language before — browser language is deliberately NOT used as a fallback.
 * Guarded for SSR/build time, where there is no localStorage.
 */
function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export const localeStore = atom<Locale>(readInitialLocale());

export function toggleLocale(): void {
  const next = localeStore.get() === LOCALE.EN ? LOCALE.ES : LOCALE.EN;
  localeStore.set(next);
  localStorage.setItem(LOCALE_STORAGE_KEY, next);
}
