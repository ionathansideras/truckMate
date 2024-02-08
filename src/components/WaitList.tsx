import truckImg from "../assets/truck.png";
import emailImg from "../assets/email.png";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { WaitListProps } from "../interfaces/refProps";

export default function WaitList({ waitListRef }: WaitListProps) {
    // Use the custom hook to get the sectionRefs ref
    const sectionRefs = useIntersectionObserver();

    // Use the useTranslation hook to get the t function for translation
    const { t } = useTranslation();

    // state to store if its driver or user
    const [role, setRole] = useState("");

    // Function to handle the form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                            type="email"
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
                            style={{
                                borderColor: role === "driver" ? "#63A11B" : "",
                                color: role === "driver" ? "#63A11B" : "",
                            }}
                            onClick={() => setRole("driver")}
                        >
                            {t("Driver")}
                        </div>
                        <div
                            style={{
                                borderColor: role === "user" ? "#63A11B" : "",
                                color: role === "user" ? "#63A11B" : "",
                            }}
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
