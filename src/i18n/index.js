import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import fr from "./fr.json";
import es from "./es.json";
import pt from "./pt.json";
import de from "./de.json";

export const SUPPORTED_LANGS = ["en", "fr", "es", "pt", "de"];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      pt: { translation: pt },
      de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGS,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "pryzen-lang",
      caches: ["localStorage"],
    },
  });

export default i18n;
