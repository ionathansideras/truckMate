// Import necessary hooks from React
import { useState, useEffect } from "react";

// Define the custom hook
export function useCheckPageIsBottom() {
    // Create a state variable to store whether the page is at the bottom
    const [isBottom, setIsBottom] = useState(false);

    // Use the useEffect hook to add an event listener for the scroll event
    useEffect(() => {
        // Define the event handler for the scroll event
        function handleScroll() {
            // Get the scroll top position, either from the document element or the body
            const scrollTop =
                (document.documentElement &&
                    document.documentElement.scrollTop) ||
                document.body.scrollTop;

            // Get the scroll height, either from the document element or the body
            const scrollHeight =
                (document.documentElement &&
                    document.documentElement.scrollHeight) ||
                document.body.scrollHeight;

            // If the scroll top position plus the window height plus 50 is greater than or equal to the scroll height,
            // then the page is at the bottom
            if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }
        }

        // Add the event listener for the scroll event
        window.addEventListener("scroll", handleScroll);

        // Return a cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // The empty dependency array means this effect will only run once, when the component mounts

    // Return the isBottom state variable
    return isBottom;
}
