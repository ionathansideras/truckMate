// Import the Toast instance from the 'toast' module
import {Toast} from './toast'

// Define a function to check if an email is valid
function checkEmail(email: string) {
    // Define a regular expression to test the email
    // The regular expression checks for zero or more non-whitespace characters before and after both "@" and "."
    const re = /\S*@\S*\.\S*/;
    // If the email matches the regular expression
    if (re.test(email)) {
        // Return true
        return true;
    } else {
        // If the email does not match the regular expression, display a toast with an error message
        Toast.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
        });
        // And return false
        return false;
    }
}

// Export the checkEmail function
export { checkEmail };