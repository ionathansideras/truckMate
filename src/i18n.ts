// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import el from "./translations/el.json";
import en from "./translations/en.json";

i18n.use(initReactI18next) // Pass in the i18n instance to initReactI18next
    .init({
        resources: {
            el: {
                translation: el,
            },
            en: {
                translation: en,
            },
            // Add more languages as needed
        },
        lng: "el", // Set the default language to 'el'
        fallbackLng: "en",

        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
