// Import the truck image from the assets directory
import truckImg from "../assets/header-truck-logo.svg";

// Import the useTranslation hook from the 'react-i18next' library
import { useTranslation } from "react-i18next";

// Define the Header component
export default function Header() {
    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Render the Header component
    return (
        <header>
            {/* Logo section */}
            <div className="header-logo">
                {/* Display the truck image */}
                <img src={truckImg} alt="logo" />
                {/* Display the text 'Truck' */}
                <h1 className="header-logo-text1">Truck</h1>
                {/* Display the text 'mate' */}
                <h1 className="header-logo-text2">mate</h1>
            </div>

            {/* Navigation links */}
            <nav className="header-links">
                {/* Home button */}
                <button className="header-button">{t("Home")}</button>
                {/* Contact button */}
                <button className="header-button">{t("Contact")}</button>
                {/* Get Started button */}
                <button className="header-button-start">
                    {t("Get Started")}
                </button>
            </nav>
        </header>
    );
}