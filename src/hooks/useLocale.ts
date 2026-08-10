import { useEffect, useState } from "react";

import { DICTIONARIES, isLocale } from "../i18n";
import { DEFAULT_LOCALE, LOCALE, type Dictionary, type Locale } from "../i18n/types";

const STORAGE_KEY = "portfolio-locale";

/**
 * The site always opens in English unless the visitor explicitly picked another
 * language before — browser language is deliberately NOT used as a fallback.
 */
function readInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

export interface LocaleController {
  locale: Locale;
  dictionary: Dictionary;
  toggle: () => void;
}

export function useLocale(): LocaleController {
  const [locale, setLocale] = useState<Locale>(readInitialLocale);

  const dictionary = DICTIONARIES[locale];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = dictionary.htmlLang;
    document.title = dictionary.ui.documentTitle;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", dictionary.ui.documentDescription);
  }, [locale, dictionary]);

  const toggle = () => {
    setLocale((current) => (current === LOCALE.EN ? LOCALE.ES : LOCALE.EN));
  };

  return { locale, dictionary, toggle };
}
