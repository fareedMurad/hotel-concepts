import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const localize = () => {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: require('../languages/en-us.json')
      },
      es: {
        translation: require('../languages/es.json')
      }
    },
    lng: 'en-us',
    fallbackLng: 'en-us',
    interpolation: {
      escapeValue: false
    }
  });
};

export { localize };
