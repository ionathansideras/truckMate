import { Toast } from "./toast";

function checkMessage(message: string) {
  if (message.length > 300) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Message is too long, the maximum length is 300 characters.",
    });
    return false;
  } else if (message.length < 1) {
    Toast.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter a message!",
    });
    return false;
  }
  return message;
}

export { checkMessage };