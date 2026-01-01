import { type Component } from "solid-js";
import { useAppI18n, AppI18nProvider } from "../i18n/AppI18nProvider";
import { Locales } from "../i18n/enums/Locales";
import { i18nInstance } from "../i18n/instance";
import { SITE_URL } from "../constants";

const LocaleSwitcherContent: Component<{ currentPath: string }> = (props) => {
  const { locale, setLocale } = useAppI18n();

  const getTargetHref = () => {
    const current = locale();
    const next = current === Locales.EN ? Locales.TR : Locales.EN;

    // Use I18n.getLocaleUrl() for proper URL transformation
    const baseUrl = typeof window !== "undefined" ? window.location.origin : SITE_URL;
    const href = typeof window !== "undefined" ? window.location.href : `${SITE_URL}${props.currentPath}`;
    const url = new URL(href, baseUrl);
    const targetUrl = i18nInstance.getLocaleUrl(url, next, Locales.EN);

    return targetUrl.pathname + targetUrl.search;
  };

  const handleClick = () => {
    // Optimistically update state so switching feels instant alongside navigation
    const next = locale() === Locales.EN ? Locales.TR : Locales.EN;
    setLocale(next);
  };

  return (
    <a
      href={getTargetHref()}
      onClick={handleClick}
      class="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface hover:bg-surface/80 border border-border-color transition-all text-sm font-medium text-text-main cursor-pointer no-underline"
    >
      <span
        classList={{ "font-bold text-text-main": locale() === Locales.EN, "text-text-muted": locale() !== Locales.EN }}
      >
        EN
      </span>
      <span class="text-text-muted/50">|</span>
      <span
        classList={{ "font-bold text-text-main": locale() === Locales.TR, "text-text-muted": locale() !== Locales.TR }}
      >
        TR
      </span>
    </a>
  );
};

// Export as an island that wraps itself
interface LocaleSwitcherProps {
  initialLocale?: Locales;
  currentPath: string;
}

const LocaleSwitcher: Component<LocaleSwitcherProps> = (props) => {
  return (
    <AppI18nProvider initialLocale={props.initialLocale}>
      <LocaleSwitcherContent currentPath={props.currentPath} />
    </AppI18nProvider>
  );
};

export default LocaleSwitcher;
