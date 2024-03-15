import phone1 from "../assets/phone1.png";
import phone4 from "../assets/phone4.png";
import phone3 from "../assets/phone3.png";

export default function LandingScreen() {
    return (
        <main className="main-container">
            <section className="phones-container">
                <img id="phone1" src={phone1} alt="phone1" />
                <img id="phone4" src={phone4} alt="phone4" />
                <img id="phone3" src={phone3} alt="phone3" />
            </section>
        </main>
    );
}
