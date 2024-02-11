import { Toast } from "./toast";

function checkRole(role: string) {
  if (role === "driver" || role === "user") {
    return true;
  } else {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Please choose a role!",
    });
    return false;
  }
}

export { checkRole };