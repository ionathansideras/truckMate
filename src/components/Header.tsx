// Import the truck image from the assets directory
import truckImg from "../assets/header-truck-logo.svg";

// Import the useTranslation hook from the 'react-i18next' library
import { useTranslation } from "react-i18next";
import scrollToTop from "../helpers/scrollToTop";
import { WaitListProps, ContactProps } from "../interfaces/refProps";

// Define the Header component
export default function Header({ waitListRef, contactRef }: WaitListProps & ContactProps) {
    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Function to handle the scroll to the wait list section
    const handleScollToWaitList = () => {
        // Check if the waitListRef is not null
        if (waitListRef.current) {
            // Scroll to the waitListRef
            waitListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    // Function to handle the scroll to the contact section
    const handleScollToContact = () => {
        // Check if the contactRef is not null
        if (contactRef.current) {
            // Scroll to the contactRef
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
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
                <button className="header-button" onClick={scrollToTop}>
                    {t("Home")}
                </button>
                {/* Contact button */}
                <button
                    onClick={handleScollToContact}
                    className="header-button"
                >
                    {t("Contact")}
                </button>
                {/* Get Started button */}
                <button
                    onClick={handleScollToWaitList}
                    className="header-button-start"
                >
                    {t("Get Started")}
                </button>
            </nav>
        </header>
    );
}
