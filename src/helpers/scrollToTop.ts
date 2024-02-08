// function to scroll to top of the page smoothly
export default function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}