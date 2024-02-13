import { Toast } from "./toast";
import i18next from 'i18next';

function checkRole(role: string) {

  if (role === "driver" || role === "user") {
    return true;
  } else {
    Toast.fire({
      icon: "error",
      title: i18next.t("Oops..."),
      text: i18next.t("Please choose a role!"),
    });
    return false;
  }
}

export { checkRole };