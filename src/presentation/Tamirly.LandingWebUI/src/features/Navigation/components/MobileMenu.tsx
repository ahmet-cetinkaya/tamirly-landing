import { createSignal, Show, type Component } from "solid-js";
import Button from "../../../shared/components/Button";
import Icon from "../../../shared/components/Icon";
import { APP_DOWNLOAD_LINK } from "../../../shared/constants";
import { AppI18nProvider, useAppI18n } from "../../../shared/i18n/AppI18nProvider";
import { TranslationKeys } from "../../../shared/i18n/enums/TranslationKeys";
import type { Locales } from "../../../shared/i18n/enums/Locales";

interface Link {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  links: Link[];
  initialLocale?: Locales;
}

const MobileMenuContent: Component<MobileMenuProps> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const { t } = useAppI18n();

  const toggle = () => setIsOpen(!isOpen());

  return (
    <div class="md:hidden block">
      <button
        onClick={toggle}
        class="text-text-muted hover:text-primary transition-colors p-2"
        aria-label="Toggle menu"
      >
        <Icon name={isOpen() ? "close" : "menu"} />
      </button>

      <Show when={isOpen()}>
        <div class="fixed top-20 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border-color p-4 shadow-2xl flex flex-col gap-4 animate-[fade-in_0.2s_ease-out] z-50">
          {props.links.map((link) => (
            <a
              href={link.href}
              class="text-text-main hover:text-primary py-2 px-4 rounded-lg hover:bg-surface transition-colors font-medium block"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div class="pt-4 border-t border-border-color space-y-4">
            <Button href={APP_DOWNLOAD_LINK} icon="android" class="w-full justify-center">
              {t(TranslationKeys.NAV_DOWNLOAD_APP)}
            </Button>
          </div>
        </div>
      </Show>
    </div>
  );
};

const MobileMenu: Component<MobileMenuProps> = (props) => {
  return (
    <AppI18nProvider initialLocale={props.initialLocale}>
      <MobileMenuContent {...props} />
    </AppI18nProvider>
  );
};

export default MobileMenu;
