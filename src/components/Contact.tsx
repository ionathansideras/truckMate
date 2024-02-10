import emailImg from "../assets/email2.svg";
import phoneImg from "../assets/phone2.svg";
import addressImg from "../assets/address2.svg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ContactProps } from "../interfaces/refProps";
import { useTranslation } from "react-i18next";

export default function Contact({ contactRef }: ContactProps) {
    // Use the custom hook to get the sectionRefs ref
    const sectionRefs = useIntersectionObserver();

    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="contact" id="contact" ref={contactRef}>
            <form
                className="contact-form" id="contact-form"
                onSubmit={handleSubmit}
            >
                <h1  ref={(el: HTMLDivElement | null) =>
                    (sectionRefs.current[0] = el)
                }>{t("Get in Touch")}</h1>
                <input type="text" placeholder={t("Name")} />
                <input type="email" placeholder="Email" />
                <textarea placeholder={t("Message...")}></textarea>
                <button>{t("Send Message")}</button>
            </form>

            <div className="contact-information" id="contact-information">
                <h1 ref={(el: HTMLDivElement | null) =>
                    (sectionRefs.current[1] = el)
                }>{t("Information")}</h1>
                <div>
                    <p>
                        <img src={addressImg} alt="address-icon" />
                        {t("Address")}
                    </p>
                    <h4>1234 Street Name, City, United States</h4>
                </div>
                <div>
                    <p>
                        <img src={phoneImg} alt="phone-icon" />
                        {t("Phone")}
                    </p>
                    <h4>+123 456 7890</h4>
                </div>
                <div>
                    <p>
                        <img src={emailImg} alt="email-icon" />
                        Email
                    </p>
                    <h4>example@gmail.com</h4>
                </div>
            </div>
        </div>
    );
}