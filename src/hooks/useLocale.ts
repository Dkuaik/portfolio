import { useStore } from "@nanostores/react";

import { DICTIONARIES } from "../i18n";
import type { Dictionary, Locale } from "../i18n/types";
import { localeStore, toggleLocale } from "../stores/locale";

export interface LocaleController {
  locale: Locale;
  dictionary: Dictionary;
  toggle: () => void;
}

export function useLocale(): LocaleController {
  const locale = useStore(localeStore);
  return { locale, dictionary: DICTIONARIES[locale], toggle: toggleLocale };
}
