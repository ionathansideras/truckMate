import { useEffect, useRef } from "react";
import { overviewData } from "../data/overviewData";
import { useTranslation } from "react-i18next";

// Define the shape of the data
interface OverviewData {
    title: string;
    text: string;
    img: string;
    alt: string;
    elementId: string;
    elementClass: string;
}

export default function SiteOverview() {
    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Create a ref to store references to each section
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
                    parentElement?.classList.add(`${parentElement?.id}-visible`);
                } else {
                    parentElement?.classList.remove(`${parentElement?.id}-visible`);
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

    // Render the component
    return (
        <div className="overview">
            {/* Map over the overviewData array to create a section for each item */}
            {overviewData.map((item: OverviewData, index: number) => {
                return (
                    <section
                        key={index}
                        id={item.elementId}
                        className={item.elementClass}
                    >
                        <div
                            className="overview-info"
                            // Store a reference to the div in sectionRefs
                            ref={(el: HTMLDivElement | null) =>
                                (sectionRefs.current[index] = el)
                            }
                        >
                            {/* Translate and display the title and text */}
                            <h1>{t(item.title)}</h1>
                            <p>{t(item.text)}</p>
                        </div>
                        {/* Display the image */}
                        <img src={item.img} alt={item.alt} />
                    </section>
                );
            })}
        </div>
    );
}
