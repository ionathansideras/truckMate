import { overviewData } from "../data/overviewData";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import OverviewData from "../interfaces/overviewData";

export default function SiteOverview() {
    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Use the custom useIntersectionObserver hook
    const sectionRefs = useIntersectionObserver();

    // Render the component
    return (
        <div className="overview">
            {/* Map over the overviewData array to create a section for each item */}
            {overviewData.map((item: OverviewData, index: number) => {
                return (
                    <section
                        key={index}
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
