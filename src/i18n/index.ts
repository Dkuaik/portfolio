import { en } from "./en";
import { es } from "./es";
import { LOCALE, type Dictionary, type Locale } from "./types";

export const DICTIONARIES: Record<Locale, Dictionary> = {
  [LOCALE.EN]: en,
  [LOCALE.ES]: es,
};

export const LOCALE_LABELS: Record<Locale, string> = {
  [LOCALE.EN]: "EN",
  [LOCALE.ES]: "ES",
};

export function isLocale(value: unknown): value is Locale {
  return value === LOCALE.EN || value === LOCALE.ES;
}

export * from "./types";
