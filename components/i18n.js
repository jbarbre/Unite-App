import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../translations/en.json";
import translationAR from "../translations/ar.json";
import translationZH from "../translations/zh.json";
import translationFR from "../translations/fr.json";
import translationRU from "../translations/ru.json";
import translationES from "../translations/es.json";
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

