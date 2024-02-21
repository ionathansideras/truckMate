import emailImg from "../assets/email2.svg";
import phoneImg from "../assets/phone2.svg";
import addressImg from "../assets/address2.svg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ContactProps } from "../interfaces/refProps";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { checkEmail } from "../helpers/checkEmail";
import { checkName } from "../helpers/checkName";
import { checkMessage } from "../helpers/checkMessage";
import {sendEmail} from "../helpers/sendEmail";

export default function Contact({ contactRef }: ContactProps) {
    // Use the custom hook to get the sectionRefs ref
    const sectionRefs =  useIntersectionObserver();
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!checkName(Name)) return;
        if (!checkEmail(email)) return;
        if (!checkMessage(message)) return;
        sendEmail({sectionRefs});
        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <div className="contact" ref={contactRef}>
            <div className="contact-left" id="contact-left">
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    ref={(el: HTMLFormElement | null) =>
                        (sectionRefs.current[0] = el)
                    }
                >
                    <h1>{t("Get in Touch")}</h1>
                    <input
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        name="user_name"
                        type="text"
                        placeholder={t("Name")}
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="user_email"
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("Message...")}
                    ></textarea>
                    <button>{t("Send Message")}</button>
                </form>
            </div>

            <div className="contact-right" id="contact-right">
                <div
                    className="contact-information"
                    ref={(el: HTMLDivElement | null) =>
                        (sectionRefs.current[1] = el)
                    }
                >
                    <h1>{t("Information")}</h1>
                    <div>
                        <p>
                            <img src={addressImg} alt="address-icon" />
                            {t("Address")}
                        </p>
                        <h4>Elenis Palaiologinas 5, Limassol, 3040</h4>
                    </div>
                    <div>
                        <p>
                            <img src={phoneImg} alt="phone-icon" />
                            {t("Phone")}
                        </p>
                        <h4>+30 6945825666</h4>
                    </div>
                    <div>
                        <p>
                            <img src={emailImg} alt="email-icon" />
                            Email
                        </p>
                        <h4>info@truckmate.gr</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
