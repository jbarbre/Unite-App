import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/translations/en.json";
import translationAR from "./assets/translations/ar.json";
import translationZH from "./assets/translations/zh.json";
import translationFR from "./assets/translations/fr.json";
import translationRU from "./assets/translations/ru.json";
import translationES from "./assets/translations/es.json";
const resources = {
    en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
      cn: {
        translation: translationZH,
      },
      fr: {
        translation: translationFR,
      },
      ru: {
        translation: translationRU,
      },
      es: {
        translation: translationES,
      }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

