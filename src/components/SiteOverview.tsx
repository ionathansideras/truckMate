import { overviewData } from "../data/overviewData";
import { useTranslation } from "react-i18next";

interface OverviewData {
    title: string;
    text: string;
    img: string;
    alt: string;
    elementId: string;
    elementClass: string;
}

export default function SiteOverview() {
    const { t } = useTranslation();

    return (
        <div className="overview">
            {overviewData.map((item: OverviewData, index: number) => {
                return (
                    <section
                        key={index}
                        id={item.elementId}
                        className={item.elementClass}
                    >
                        <div className="overview-info">
                            <h1>{t(item.title)}</h1>
                            <p>{t(item.text)}</p>
                        </div>
                        <img src={item.img} alt={item.alt} />
                    </section>
                );
            })}
        </div>
    );
}
