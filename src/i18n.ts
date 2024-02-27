import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "./locales/en/common.json";
import commonIT from "./locales/it/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: commonEN,
    },
    it: {
      translation: commonIT,
    },
  },
  lng: "en",
});
