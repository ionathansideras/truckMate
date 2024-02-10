// Import necessary modules and components
import Spline3D from "./components/Spline3D";
import Header from "./components/Header";
import LanguageSelection from "./components/LanguageSelection";
import SiteOverview from "./components/SiteOverview";
import WaitList from "./components/WaitList";
import Contact from "./components/Contact";
import { useRef } from "react";

// Define the App component
export default function App() {
    // Create a ref to be used with the Header and WaitList components
    const waitListRef = useRef<HTMLDivElement>(null);
    // create a ref to be used with the Header and contact components
    const contactRef = useRef<HTMLDivElement>(null);
    // Render the component
    return (
        <>
            {/* Pass the waitListRef to the Header component */}
            <Header waitListRef={waitListRef} contactRef={contactRef} />
            {/* Render the Spline3D component */}
            <Spline3D />
            {/* Render the LanguageSelection component */}
            <LanguageSelection />
            {/* Render the SiteOverview component */}
            <SiteOverview />
            {/* Pass the waitListRef to the WaitList component */}
            <WaitList waitListRef={waitListRef} />
            {/* Render the Contact component */}
            <Contact contactRef={contactRef}/>
        </>
    );
}
