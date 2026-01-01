import I18n from "@packages/acore-ts/i18n/I18n";
import { translations } from "./translations";
import { Locales } from "./enums/Locales";

export const i18nInstance = new I18n();
i18nInstance.translations = translations;

// Initialize with default or cached locale
let preferred: string | null = null;
if (typeof window !== "undefined") {
  preferred = i18nInstance.loadPreferredLocale();
}

// We can cast the string to Locales if valid, else default to EN
const initLocale =
  preferred && Object.values(Locales).includes(preferred as Locales) ? (preferred as Locales) : Locales.EN;

i18nInstance.currentLocale.set(initLocale);
