import { overviewData } from "../data/overviewData";

interface OverviewData {
    id: number;
    title: string;
    text: string;
    img: string;
    alt: string;
    elementId: string;
    elementClass: string;
}

export default function SiteOverview() {
    return (
        <div className="overview">
            {overviewData.map((item: OverviewData) => {
                return (
                    <section
                        key={item.id}
                        id={item.elementId}
                        className={item.elementClass}
                    >
                        <div className="overview-info">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                        <img src={item.img} alt={item.alt} />
                    </section>
                );
            })}
        </div>
    );
}
