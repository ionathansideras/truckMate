import truckImg from "../assets/header-truck-logo.svg";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <div className="header-logo">
                <img src={truckImg} alt="logo" />
                <h1 className="header-logo-text1">Truck</h1>
                <h1 className="header-logo-text2">mate</h1>
            </div>

            <nav className="header-links">
                <button className="header-button">{t("Home")}</button>
                <button className="header-button">{t("Contact")}</button>
                <button className="header-button-start">
                    {t("Get Started")}
                </button>
            </nav>
        </header>
    );
}
