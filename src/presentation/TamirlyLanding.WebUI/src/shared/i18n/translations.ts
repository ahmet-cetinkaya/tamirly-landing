import { Locales } from "./enums/Locales";
import { TranslationKeys } from "./enums/TranslationKeys";

type Translations = Record<TranslationKeys, Record<Locales, string>>;

export const translations: Translations = {
  // Navigation
  [TranslationKeys.NAV_FEATURES]: {
    [Locales.EN]: "Features",
    [Locales.TR]: "Özellikler",
  },
  [TranslationKeys.NAV_HOW_IT_WORKS]: {
    [Locales.EN]: "How it Works",
    [Locales.TR]: "Nasıl Çalışır",
  },
  [TranslationKeys.NAV_SUPPORTED_BRANDS]: {
    [Locales.EN]: "Supported Brands",
    [Locales.TR]: "Desteklenen Markalar",
  },
  [TranslationKeys.NAV_DOWNLOAD_APP]: {
    [Locales.EN]: "Download App",
    [Locales.TR]: "Uygulamayı İndir",
  },

  // Hero
  [TranslationKeys.HERO_BADGE_FREE]: {
    [Locales.EN]: "Free For Use",
    [Locales.TR]: "Ücretsiz Kullanım",
  },
  [TranslationKeys.HERO_TITLE_LINE_1]: {
    [Locales.EN]: "Offline Reliability.",
    [Locales.TR]: "Çevrimdışı Güvenilirlik.",
  },
  [TranslationKeys.HERO_TITLE_LINE_2]: {
    [Locales.EN]: "Instant Solutions.",
    [Locales.TR]: "Anında Çözümler.",
  },
  [TranslationKeys.HERO_DESCRIPTION]: {
    [Locales.EN]:
      "{appName} is an offline-capable mobile application that serves as a comprehensive database for electronic appliance error codes, their meanings, and recommended solution steps.",
    [Locales.TR]:
      "{appName}, elektronik ev aletleri hata kodları, anlamları ve önerilen çözüm adımları için kapsamlı bir veritabanı sunan çevrimdışı çalışabilen bir mobil uygulamadır.",
  },
  [TranslationKeys.HERO_DESCRIPTION_PLAIN]: {
    [Locales.EN]:
      "Tamirly is an offline-capable mobile application that serves as a comprehensive database for electronic appliance error codes, their meanings, and recommended solution steps.",
    [Locales.TR]:
      "Tamirly, elektronik ev aletleri hata kodları, anlamları ve önerilen çözüm adımları için kapsamlı bir veritabanı sunan çevrimdışı çalışabilen bir mobil uygulamadır.",
  },
  [TranslationKeys.HERO_BTN_ANDROID]: {
    [Locales.EN]: "Get for Android",
    [Locales.TR]: "Android için İndir",
  },
  [TranslationKeys.HERO_BTN_HOW_IT_WORKS]: {
    [Locales.EN]: "See how it works",
    [Locales.TR]: "Nasıl çalıştığını gör",
  },
  [TranslationKeys.HERO_FEATURE_OFFLINE]: {
    [Locales.EN]: "100% Offline",
    [Locales.TR]: "%100 Çevrimdışı",
  },
  [TranslationKeys.HERO_FEATURE_BRANDS]: {
    [Locales.EN]: "50+ Brands",
    [Locales.TR]: "50+ Marka",
  },
  [TranslationKeys.HERO_FEATURE_UPDATES]: {
    [Locales.EN]: "Regular Updates",
    [Locales.TR]: "Düzenli Güncellemeler",
  },

  // Features
  [TranslationKeys.FEATURES_TITLE]: {
    [Locales.EN]: "Everything a Technician Needs",
    [Locales.TR]: "Bir Teknisyenin İhtiyacı Olan Her Şey",
  },
  [TranslationKeys.FEATURES_DESCRIPTION]: {
    [Locales.EN]: "{appName} is built to work in the field. No signal? No problem. Get accurate diagnostics instantly.",
    [Locales.TR]:
      "{appName} sahada çalışmak üzere tasarlandı. Sinyal yok mu? Sorun değil. Anında doğru teşhisler alın.",
  },
  [TranslationKeys.FEATURES_OFFLINE_TITLE]: {
    [Locales.EN]: "100% Offline Database",
    [Locales.TR]: "%100 Çevrimdışı Veritabanı",
  },
  [TranslationKeys.FEATURES_OFFLINE_DESC]: {
    [Locales.EN]:
      "Access thousands of error codes without an internet connection. Perfect for basements or remote locations.",
    [Locales.TR]:
      "İnternet bağlantısı olmadan binlerce hata koduna erişin. Bodrum katlar veya uzak bölgeler için mükemmel.",
  },
  [TranslationKeys.FEATURES_SEARCH_TITLE]: {
    [Locales.EN]: "Brand Specific Search",
    [Locales.TR]: "Markaya Özel Arama",
  },
  [TranslationKeys.FEATURES_SEARCH_DESC]: {
    [Locales.EN]:
      "Filter by manufacturer like Mitsubishi, Daikin, LG, and Samsung to find the exact model information.",
    [Locales.TR]:
      "Tam model bilgilerini bulmak için Mitsubishi, Daikin, LG ve Samsung gibi üreticilere göre filtreleyin.",
  },
  [TranslationKeys.FEATURES_FIXES_TITLE]: {
    [Locales.EN]: "Step-by-Step Fixes",
    [Locales.TR]: "Adım Adım Çözümler",
  },
  [TranslationKeys.FEATURES_FIXES_DESC]: {
    [Locales.EN]:
      "Don't just see the error—fix it. We provide detailed recommended actions and possible causes for every code.",
    [Locales.TR]:
      "Sorunu sadece görmeyin, düzeltin. Her kod için detaylı önerilen eylemler ve olası nedenler sunuyoruz.",
  },
  [TranslationKeys.FEATURES_LANG_TITLE]: {
    [Locales.EN]: "Multi-Language Support",
    [Locales.TR]: "Çoklu Dil Desteği",
  },
  [TranslationKeys.FEATURES_LANG_DESC]: {
    [Locales.EN]:
      "Interface and database available in multiple languages to help technicians worldwide work efficiently.",
    [Locales.TR]:
      "Teknisyenlerin dünya çapında verimli çalışmasına yardımcı olmak için çoklu dilde arayüz ve veritabanı.",
  },
  [TranslationKeys.FEATURES_HISTORY_TITLE]: {
    [Locales.EN]: "History & Saved",
    [Locales.TR]: "Geçmiş ve Kaydedilenler",
  },
  [TranslationKeys.FEATURES_HISTORY_DESC]: {
    [Locales.EN]: "Quickly access previously viewed errors or save frequently encountered codes for instant retrieval.",
    [Locales.TR]:
      "Daha önce görüntülenen hatalara hızla erişin veya sık karşılaşılan kodları anında geri çağırmak için kaydedin.",
  },
  [TranslationKeys.FEATURES_LED_TITLE]: {
    [Locales.EN]: "LED Pattern Decoder",
    [Locales.TR]: "LED Deseni Çözücü",
  },
  [TranslationKeys.FEATURES_LED_DESC]: {
    [Locales.EN]:
      "Identify errors even without a digital display by decoding the blinking LED patterns on the unit board.",
    [Locales.TR]:
      "Ünite kartındaki yanıp sönen LED desenlerini çözerek dijital ekran olmadan bile hataları belirleyin.",
  },

  // Workflow
  [TranslationKeys.WORKFLOW_TITLE]: {
    [Locales.EN]: "Simple Workflow",
    [Locales.TR]: "Basit İş Akışı",
  },
  [TranslationKeys.WORKFLOW_DESCRIPTION]: {
    [Locales.EN]: "Three steps to solve any appliance issue.",
    [Locales.TR]: "Herhangi bir cihaz sorununu çözmek için üç adım.",
  },
  [TranslationKeys.WORKFLOW_STEP1_TITLE]: {
    [Locales.EN]: "Select Appliance & Brand",
    [Locales.TR]: "Cihaz ve Marka Seçin",
  },
  [TranslationKeys.WORKFLOW_STEP1_DESC]: {
    [Locales.EN]: "Choose the appliance type (AC, Fridge, Boiler) and the specific brand.",
    [Locales.TR]: "Cihaz tipini (Klima, Buzdolabı, Kombi) ve ilgili markayı seçin.",
  },
  [TranslationKeys.WORKFLOW_STEP2_TITLE]: {
    [Locales.EN]: "Enter Code",
    [Locales.TR]: "Kodu Girin",
  },
  [TranslationKeys.WORKFLOW_STEP2_DESC]: {
    [Locales.EN]: "Type the error code displayed on the screen or select the LED pattern.",
    [Locales.TR]: "Ekranda görüntülenen hata kodunu yazın veya LED desenini seçin.",
  },
  [TranslationKeys.WORKFLOW_STEP3_TITLE]: {
    [Locales.EN]: "Fix It",
    [Locales.TR]: "Tamir Edin",
  },
  [TranslationKeys.WORKFLOW_STEP3_DESC]: {
    [Locales.EN]: "Follow the recommended actions to repair the fault immediately.",
    [Locales.TR]: "Arızayı hemen gidermek için önerilen işlemleri takip edin.",
  },

  // Brands
  [TranslationKeys.BRANDS_TITLE]: {
    [Locales.EN]: "Trusted Database for Major Brands",
    [Locales.TR]: "Büyük Markalar İçin Güvenilir Veritabanı",
  },

  // CTA
  [TranslationKeys.CTA_TITLE]: {
    [Locales.EN]: "Ready to simplify your repairs?",
    [Locales.TR]: "Tamir işlerinizi kolaylaştırmaya hazır mısınız?",
  },
  [TranslationKeys.CTA_DESCRIPTION]: {
    [Locales.EN]: "Download {appName} today and carry a complete library of appliance repair manuals in your pocket.",
    [Locales.TR]:
      "{appName} uygulamasını bugün indirin ve tam bir cihaz tamir kılavuzu kütüphanesini cebinizde taşıyın.",
  },
  [TranslationKeys.CTA_BUTTON]: {
    [Locales.EN]: "Download for Android",
    [Locales.TR]: "Android için İndir",
  },

  // Footer
  [TranslationKeys.FOOTER_DESCRIPTION]: {
    [Locales.EN]: "Find appliance error codes & solutions. Offline repair guide.",
    [Locales.TR]: "Ev aletleri hata kodlarını ve çözümlerini bulun. Çevrimdışı tamir rehberi.",
  },
  [TranslationKeys.FOOTER_HEADER_PRODUCT]: {
    [Locales.EN]: "Product",
    [Locales.TR]: "Ürün",
  },
  [TranslationKeys.FOOTER_LINK_DOWNLOAD]: {
    [Locales.EN]: "Download",
    [Locales.TR]: "İndir",
  },
  [TranslationKeys.FOOTER_HEADER_SUPPORT]: {
    [Locales.EN]: "Support",
    [Locales.TR]: "Destek",
  },
  [TranslationKeys.FOOTER_LINK_CONTACT]: {
    [Locales.EN]: "Contact Us",
    [Locales.TR]: "İletişim",
  },
  [TranslationKeys.FOOTER_LINK_SUGGEST]: {
    [Locales.EN]: "Suggest a Brand",
    [Locales.TR]: "Marka Öner",
  },
  [TranslationKeys.FOOTER_HEADER_LEGAL]: {
    [Locales.EN]: "Legal",
    [Locales.TR]: "Yasal",
  },
  [TranslationKeys.FOOTER_LINK_PRIVACY]: {
    [Locales.EN]: "Privacy Policy",
    [Locales.TR]: "Gizlilik Politikası",
  },
  [TranslationKeys.FOOTER_COPYRIGHT]: {
    [Locales.EN]: "All rights reserved.",
    [Locales.TR]: "Tüm hakları saklıdır.",
  },

  // Common
  [TranslationKeys.PAGE_TITLE]: {
    [Locales.EN]: "Tamirly: Repair Guide",
    [Locales.TR]: "Tamirly: Tamir Rehberi",
  },

  // Privacy Policy
  [TranslationKeys.PRIVACY_TITLE]: {
    [Locales.EN]: "Privacy Policy",
    [Locales.TR]: "Gizlilik Politikası",
  },
  [TranslationKeys.PRIVACY_LAST_UPDATED]: {
    [Locales.EN]: "Last updated: December 2025",
    [Locales.TR]: "Son güncelleme: Aralık 2025",
  },
  [TranslationKeys.PRIVACY_INTRO_TITLE]: {
    [Locales.EN]: "1. Introduction",
    [Locales.TR]: "1. Giriş",
  },
  [TranslationKeys.PRIVACY_INTRO_TEXT]: {
    [Locales.EN]:
      'Welcome to Tamirly ("we," "our," or "us"). We respect your privacy and are committed to protecting it through our compliance with this policy.',
    [Locales.TR]:
      'Tamirly\'ye ("biz", "bizim" veya "bize") hoş geldiniz. Gizliliğinize saygı duyuyoruz ve bu politikaya uyum sağlayarak gizliliğinizi korumaya kararlıyız.',
  },
  [TranslationKeys.PRIVACY_DATA_TITLE]: {
    [Locales.EN]: "2. Data Collection",
    [Locales.TR]: "2. Veri Toplama",
  },
  [TranslationKeys.PRIVACY_DATA_TEXT_1]: {
    [Locales.EN]:
      "Tamirly is an offline-first application. We do not collect, store, or share any personal data, usage data, or telemetry from your device.",
    [Locales.TR]:
      "Tamirly çevrimdışı öncelikli bir uygulamadır. Cihazınızdan herhangi bir kişisel veri, kullanım verisi veya telemetri toplamıyoruz, saklamıyoruz veya paylaşmıyoruz.",
  },
  [TranslationKeys.PRIVACY_DATA_TEXT_2]: {
    [Locales.EN]:
      "Because the app operates entirely offline after the initial download, we have no mechanism to track how you use the application, which error codes you search for, or any other activity within the app.",
    [Locales.TR]:
      "Uygulama ilk indirmeden sonra tamamen çevrimdışı çalıştığından, uygulamayı nasıl kullandığınızı, hangi hata kodlarını aradığınızı veya uygulama içindeki başka herhangi bir etkinliği izleme mekanizmamız yoktur.",
  },
  [TranslationKeys.PRIVACY_PERMISSIONS_TITLE]: {
    [Locales.EN]: "3. Device Permissions",
    [Locales.TR]: "3. Cihaz İzinleri",
  },
  [TranslationKeys.PRIVACY_PERMISSIONS_TEXT]: {
    [Locales.EN]:
      "The application may request basic permissions necessary for its core offline functionality (such as storage access to save user preferences locally), but this data never leaves your device.",
    [Locales.TR]:
      "Uygulama, temel çevrimdışı işlevselliği için gerekli temel izinleri (kullanıcı tercihlerini yerel olarak kaydetmek için depolama erişimi gibi) talep edebilir, ancak bu veriler asla cihazınızdan dışarı çıkmaz.",
  },
  [TranslationKeys.PRIVACY_THIRD_PARTY_TITLE]: {
    [Locales.EN]: "4. Third-Party Services",
    [Locales.TR]: "4. Üçüncü Taraf Hizmetleri",
  },
  [TranslationKeys.PRIVACY_THIRD_PARTY_TEXT]: {
    [Locales.EN]:
      "The application does not integrate with any third-party analytics, advertising, or tracking services.",
    [Locales.TR]: "Uygulama, herhangi bir üçüncü taraf analiz, reklam veya izleme hizmetiyle entegre değildir.",
  },
  [TranslationKeys.PRIVACY_CONTACT_TITLE]: {
    [Locales.EN]: "5. Contact Us",
    [Locales.TR]: "5. İletişim",
  },
  [TranslationKeys.PRIVACY_CONTACT_TEXT]: {
    [Locales.EN]: "If you have any questions about this Privacy Policy, please contact us at:",
    [Locales.TR]:
      "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle şu adresten iletişime geçin:",
  },
  [TranslationKeys.PRIVACY_CONTACT_SUBJECT]: {
    [Locales.EN]: "Privacy Policy Question - Tamirly",
    [Locales.TR]: "Gizlilik Politikası Sorusu - Tamirly",
  },
  [TranslationKeys.PRIVACY_CONTACT_BODY]: {
    [Locales.EN]: "Hello Tamirly Team,\n\nI have a question about the privacy policy:\n",
    [Locales.TR]: "Merhaba Tamirly Ekibi,\n\nGizlilik politikası hakkında bir sorum var:\n",
  },
};
