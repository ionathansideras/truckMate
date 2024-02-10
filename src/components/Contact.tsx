import emailImg from "../assets/email2.svg";
import phoneImg from "../assets/phone2.svg";
import addressImg from "../assets/address2.svg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ContactProps } from "../interfaces/refProps";

export default function Contact({ contactRef }: ContactProps) {
    // Use the custom hook to get the sectionRefs ref
    const sectionRefs = useIntersectionObserver();

    return (
        <div className="contact" id="contact" ref={contactRef}>
            <form
                className="contact-form" id="contact-form"
            >
                <h1  ref={(el: HTMLDivElement | null) =>
                    (sectionRefs.current[0] = el)
                }>Get in Touch</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message..."></textarea>
                <button>Send</button>
            </form>

            <div className="contact-information" id="contact-information">
                <h1 ref={(el: HTMLDivElement | null) =>
                    (sectionRefs.current[1] = el)
                }>Information</h1>
                <div>
                    <p>
                        <img src={addressImg} alt="address-icon" />
                        Address
                    </p>
                    <h4>1234 Street Name, City, United States</h4>
                </div>
                <div>
                    <p>
                        <img src={phoneImg} alt="phone-icon" />
                        Phone
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
