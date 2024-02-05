import Spline3D from "./components/Spline3D";
import Header from "./components/Header";
import LanguageSelection from "./components/LanguageSelection";
import SiteOverview from "./components/SiteOverview";

export default function App() {
    return (
        <>
            <Header />
            <Spline3D />
            <LanguageSelection />
            <SiteOverview />
        </>
    );
}
