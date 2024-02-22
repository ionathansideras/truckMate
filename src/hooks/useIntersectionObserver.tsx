import { useEffect, useRef } from "react";

// Define the custom hook
export function useIntersectionObserver() {
    // Create a ref to store references to each section
    const sectionRefs = useRef<(HTMLDivElement | HTMLFormElement | null)[]>([]);

    // Use the useEffect hook to set up the Intersection Observer
    useEffect(() => {
        // Create a new Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            // For each entry
            entries.forEach((entry) => {
                // Get the parent element of the entry
                const parentElement = entry.target.parentElement;
                // If the entry is intersecting (visible in the viewport)
                if (entry.isIntersecting) {
                    parentElement?.classList.add(`visible`);
                } else {
                    parentElement?.classList.remove(`visible`);
                }
            });
        });

        // For each ref in sectionRefs
        sectionRefs.current.forEach((ref) => {
            // If the ref is not null
            if (ref) {
                // Start observing the ref
                observer.observe(ref);
            }
        });

        // When the component unmounts
        return () => {
            // For each ref in sectionRefs
            sectionRefs.current.forEach((ref) => {
                // If the ref is not null
                if (ref) {
                    // Stop observing the ref
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    // Return the sectionRefs ref
    return sectionRefs;
}