import { Toast } from "./toast";
import i18next from 'i18next';

function checkMessage(message: string) {
  if (message.length > 300) {
    Toast.fire({
      icon: "error",
      title: i18next.t("Oops..."),
      text: i18next.t("Message is too long, the maximum length is 300 characters."),
    });
    return false;
  } else if (message.length < 1) {
    Toast.fire({
      icon: "error",
      title: i18next.t("Oops..."),
      text: i18next.t("Please enter a message!"),
    });
    return false;
  }
  return message;
}

export { checkMessage };