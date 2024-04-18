// Node.js or third-party libraries
import { useState } from "react";
import { useTranslation } from "react-i18next";

// my own codebase
import { greenButton, defaultButton } from "../helpers/buttonFormStyles";
import truckImg from "../assets/data.svg";
import emailImg from "../assets/email2.svg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { WaitListProps } from "../interfaces/refProps";
import { addEmailToDatabase } from "../helpers/addEmailToDatabase";
import { checkRole } from "../helpers/checkRole";
import { checkEmail } from "../helpers/checkEmail";

// component to display the wait list section of the page
export default function WaitList({ waitListRef }: WaitListProps) {
    // Use the custom hook to get the sectionRefs ref
    const sectionRefs = useIntersectionObserver();

    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // state to store if its driver or user
    const [role, setRole] = useState("");

    // state to store the email
    const [email, setEmail] = useState("");

    // function to handle the form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!checkRole(role)) return;
        if (!checkEmail(email)) return;
        addEmailToDatabase(email, role);
        setEmail("");
        setRole("");
    };

    return (
        <div className="wait-list" id="wait-list" ref={waitListRef}>
            <img className="wait-list-truck" src={truckImg} alt="truck" />
            <div
                className="wait-list-form-container"
                ref={(el: HTMLDivElement | null) =>
                    (sectionRefs.current[0] = el)
                }
            >
                <form className="wait-list-form" onSubmit={handleSubmit}>
                    <h1>{t("Wait List")}</h1>
                    <p>
                        {t(
                            "Be a part of our journey subscribe to our wait list"
                        )}
                    </p>

                    <div className="wait-list-email-input">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder={t("Enter your email")}
                        />
                        <div className="wait-list-email">
                            <img src={emailImg} alt="email-icon" />
                        </div>
                    </div>

                    <div className="wait-list-brake">
                        <hr />
                        <p>{t("Choose your role")}</p>
                        <hr />
                    </div>

                    <div className="wait-list-role">
                        <div
                            style={
                                role === "driver"
                                    ? greenButton()
                                    : defaultButton()
                            }
                            onClick={() => setRole("driver")}
                        >
                            {t("Driver")}
                        </div>
                        <div
                            style={
                                role === "user"
                                    ? greenButton()
                                    : defaultButton()
                            }
                            onClick={() => setRole("user")}
                        >
                            {t("User")}
                        </div>
                    </div>

                    <button className="wait-list-submit">
                        {t("Subscribe")}
                    </button>
                </form>
            </div>
        </div>
    );
}
