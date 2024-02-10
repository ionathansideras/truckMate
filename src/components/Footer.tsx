// Import the truckmate logo
import truckmate from "../assets/truckmate-logo.png";

// Define the Footer component
export default function Footer() {
    // Render the component
    return (
        // Create a footer element
        <footer>
            {/* Display the truckmate logo */}
            <img src={truckmate} alt="truckmate-logo" />
            {/* Display the copyright notice */}
            <p>Copyright © 2024 Truckmate</p>
        </footer>
    );
}