import {Toast } from './toast'
import i18next from 'i18next';

function checkName(name: string) {
  if (name.length < 1) {
    Toast.fire({
      icon: "error",
      title: i18next.t("Oops..."),
      text: i18next.t("Please enter a valid name!"),
    });
    return false;
  }
  return true;
}

export { checkName };