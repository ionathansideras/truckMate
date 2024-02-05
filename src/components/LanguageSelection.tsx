import greekFlag from "../assets/greek-flag.svg";
import englishFlag from "../assets/english-flag.svg";
import { useTranslation } from "react-i18next";

export default function LanguageSelection() {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        // when its clicked if lang is greek change to english and vice versa
        if (i18n.language === "el") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("el");
        }
    };

    return (
        <button onClick={changeLanguage} className="language-toggle-button">
            <p>Translate to</p>
            <img
                src={i18n.language === "el" ? englishFlag : greekFlag}
                alt={i18n.language === "el" ? "English Flag" : "Greek Flag"}
            />
        </button>
    );
}
