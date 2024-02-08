// Import the Spline component from the @splinetool/react-spline library
import Spline from "@splinetool/react-spline";

// Define the Spline3D component
export default function Spline3D() {
    // Render the component
    return (
        // Create a container for the Spline component
        <div className="canvas-container">
            {/* Render the Spline component with a specific scene */}
            <Spline scene="https://prod.spline.design/OTfm4ibJXcRVr1k7/scene.splinecode" />
        </div>
    );
}