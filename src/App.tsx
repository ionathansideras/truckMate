import Spline3D from "./components/Spline3D";
import Header from "./components/Header";
import LanguageSelection from "./components/LanguageSelection";
import SiteOverview from "./components/SiteOverview";
import WaitList from "./components/WaitList";
import { useRef } from "react";

export default function App() {
    const waitListRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <Header waitListRef={waitListRef}/>
            <Spline3D />
            <LanguageSelection />
            <SiteOverview />
            <WaitList waitListRef={waitListRef} />
        </>
    );
}
