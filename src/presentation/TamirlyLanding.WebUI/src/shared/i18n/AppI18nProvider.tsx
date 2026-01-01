import type II18n from "@packages/acore-ts/i18n/abstraction/II18n";
import type { ParentProps } from "solid-js";
import { createContext, createEffect, createSignal, onMount, useContext } from "solid-js";
import { i18nInstance } from "./instance";
import { translations } from "./translations";
import { Locales } from "./enums/Locales";
import { TranslationKeys } from "./enums/TranslationKeys";

// Define Context Types
type AppI18nContextType = {
  i18n: II18n;
  t(key: TranslationKeys): string;
  locale: () => Locales;
  setLocale: (locale: Locales) => void;
};

// Create Context
const I18nContext = createContext<AppI18nContextType>();

// Export reusable hook accessing THIS context
export const useAppI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useAppI18n must be used within AppI18nProvider");
  }
  return context;
};

// Define Props
interface AppI18nProviderProps extends ParentProps {
  initialLocale?: Locales;
}

export const AppI18nProvider = (props: AppI18nProviderProps) => {
  // Use the singleton instance
  const i18n = i18nInstance;

  // Initialize signal with prop (URL state) -> instance (store/ls) -> fallback
  const startLocale = props.initialLocale || (i18n.currentLocale.get() as Locales) || Locales.EN;

  // Sync instance if prop provided and different
  if (props.initialLocale && i18n.currentLocale.get() !== props.initialLocale) {
    i18n.currentLocale.set(props.initialLocale);
  }

  const [locale, setLocale] = createSignal<Locales>(startLocale);

  // Reactive translation function
  const t = (key: TranslationKeys) => {
    return i18n.translate(locale(), key);
  };

  onMount(() => {
    // Ensure instance has translations
    if (Object.keys(i18n.translations).length === 0) {
      i18n.translations = translations;
    }

    // Load preferred locale (already done in instance.ts, but syncing here)
    const current = i18n.currentLocale.get() as Locales;
    if (current && Object.values(Locales).includes(current)) {
      setLocale(current);
    }
  });

  // Sync signal with store
  createEffect(() => {
    const updateLocale = () => {
      const newLocale = i18n.currentLocale.get() as Locales;
      setLocale(newLocale);
    };
    i18n.currentLocale.subscribe(updateLocale);
    return () => i18n.currentLocale.unsubscribe(updateLocale);
  });

  // Setter wrapper
  const updateLocale = (newLocale: Locales) => {
    i18n.currentLocale.set(newLocale);
    i18n.savePreferredLocale(newLocale);
    setLocale(newLocale);
  };

  const contextValue: AppI18nContextType = {
    i18n,
    t,
    locale,
    setLocale: updateLocale,
  };

  return <I18nContext.Provider value={contextValue}>{props.children}</I18nContext.Provider>;
};
