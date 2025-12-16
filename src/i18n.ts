import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import commonEN from './locales/en/common.json';
import heroEN from './locales/en/hero.json';
import aboutEN from './locales/en/about.json';
import projectsEN from './locales/en/projects.json';
import contactEN from './locales/en/contact.json';
import footerEN from './locales/en/footer.json';

import commonSV from './locales/sv/common.json';
import heroSV from './locales/sv/hero.json';
import aboutSV from './locales/sv/about.json';
import projectsSV from './locales/sv/projects.json';
import contactSV from './locales/sv/contact.json';
import footerSV from './locales/sv/footer.json';

// Detect user's preferred language
const getBrowserLanguage = () => {
  const browserLang = navigator.language.toLowerCase();
  // Check if browser language is Swedish
  if (browserLang.startsWith('sv')) {
    return 'sv';
  }
  return 'en'; // Default to English
};

// Get saved language from localStorage or use browser language
const savedLanguage = localStorage.getItem('language');
const defaultLanguage = savedLanguage || getBrowserLanguage();

// Configure i18n
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        common: commonEN,
        hero: heroEN,
        about: aboutEN,
        projects: projectsEN,
        contact: contactEN,
        footer: footerEN,
      },
      sv: {
        common: commonSV,
        hero: heroSV,
        about: aboutSV,
        projects: projectsSV,
        contact: contactSV,
        footer: footerSV,
      },
    },
    lng: defaultLanguage, // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    defaultNS: 'common', // Default namespace
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem('language', lng);
});

export default i18n;
