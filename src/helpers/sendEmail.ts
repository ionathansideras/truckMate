import emailjs from "@emailjs/browser";
import { Toast } from "./toast";
import i18next from "i18next";

function sendEmail({
    sectionRefs,
}: {
    sectionRefs: React.MutableRefObject<
        (HTMLFormElement | HTMLDivElement | null)[]
    >;
}) {
    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            sectionRefs.current[0] as HTMLFormElement,
            {
                publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            }
        )
        .then(
            () => {
                // Use the Toast instance
                Toast.fire({
                    icon: "success",
                    title: i18next.t("Success"),
                    text: i18next.t("Email sent successfully!"),
                });
            },
            (error) => {
                console.error("Failed to send email. Error: ", error);
                // Use the Toast instance
                Toast.fire({
                    icon: "error",
                    title: i18next.t("error"),
                    text: i18next.t("Error sending email!"),
                });
            }
        );
}

export { sendEmail };
