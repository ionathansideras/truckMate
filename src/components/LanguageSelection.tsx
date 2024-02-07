// Import the Greek and English flag images from the assets directory
import greekFlag from "../assets/greek-flag.svg";
import englishFlag from "../assets/english-flag.svg";

// Import the useTranslation hook from the 'react-i18next' library
import { useTranslation } from "react-i18next";

// Define the LanguageSelection component
export default function LanguageSelection() {
    // Use the useTranslation hook to get the i18n instance for translation
    const { i18n } = useTranslation();

    // Define a function to change the language
    const changeLanguage = () => {
        // If the current language is Greek, change it to English
        if (i18n.language === "el") {
            i18n.changeLanguage("en");
        } else {
            // If the current language is not Greek, change it to Greek
            i18n.changeLanguage("el");
        }
    };

    // Render the LanguageSelection component
    return (
        // When the button is clicked, call the changeLanguage function
        <button onClick={changeLanguage} className="language-toggle-button">
            {/* Display the text 'Translate to' */}
            <p>Translate to</p>
            {/* Display the flag of the language to switch to */}
            <img
                src={i18n.language === "el" ? englishFlag : greekFlag}
                alt={i18n.language === "el" ? "English Flag" : "Greek Flag"}
            />
        </button>
    );
}