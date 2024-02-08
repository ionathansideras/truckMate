// Import the primary color constant
import { PRIMARY_COLOR } from "../consts";

/**
 * Returns an object with styles for a green button.
 * The border color and text color are set to the primary color.
 */
function greenButton() {
    return {
        borderColor: PRIMARY_COLOR,
        color: PRIMARY_COLOR,
    };
}
/**
 * Returns an object with default styles for a button.
 * The border color and text color are set to an empty string, which will default to the CSS values.
 */
function defaultButton() {
    return {
        borderColor: "",
        color: "",
    };
}
// Export the greenButton and defaultButton functions
export { greenButton, defaultButton };