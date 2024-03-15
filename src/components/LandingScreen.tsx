import phone1 from "../assets/phone1.png";
import phone4 from "../assets/image5-portrait.png";
import phone3 from "../assets/phone3.png";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function LandingScreen() {
    // Use the custom useIntersectionObserver hook
    const sectionRefs = useIntersectionObserver();

    return (
        <main className="main-container">
            <section
                className="phones-container"
                ref={(el: HTMLFormElement | null) =>
                    (sectionRefs.current[0] = el)
                }
            >
                <img id="phone1" src={phone1} alt="phone1" />
                <img id="phone4" src={phone4} alt="phone4" />
                <img id="phone3" src={phone3} alt="phone3" />
            </section>
        </main>
    );
}
