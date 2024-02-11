import {Toast } from './toast'

function checkName(name: string) {
  if (name.length < 1) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a valid name!",
    });
    return false;
  }
  return true;
}

export { checkName };