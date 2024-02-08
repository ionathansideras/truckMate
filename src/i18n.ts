// Import necessary modules
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import language resources
import el from "./translations/el.json";
import en from "./translations/en.json";

// Initialize i18next with the initReactI18next module
i18n.use(initReactI18next) // Pass in the i18n instance to initReactI18next
    .init({
        resources: {
            // Define the resources for the 'el' language
            el: {
                translation: el,
            },
            // Define the resources for the 'en' language
            en: {
                translation: en,
            },
            // Add more languages as needed
        },
        lng: "el", // Set the default language to 'el'
        fallbackLng: "en", // Set the fallback language to 'en'

        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

// Export the initialized i18n instance
export default i18n;