import { useState, useEffect } from "react";

export function useCheckPageIsBottom() {
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const scrollTop =
                (document.documentElement &&
                    document.documentElement.scrollTop) ||
                document.body.scrollTop;
            const scrollHeight =
                (document.documentElement &&
                    document.documentElement.scrollHeight) ||
                document.body.scrollHeight;
            if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
                setIsBottom(true);
            } else {
                setIsBottom(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return isBottom;
}
