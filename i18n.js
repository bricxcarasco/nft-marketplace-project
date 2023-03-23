import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './public/locales/en/translation.json';
import jaTranslation from './public/locales/ja/translation.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ja',
    fallbackLng: 'ja',
    resources: {
      ja: {
        translation: jaTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;