import carRoof from "../assets/car-roof-storage-carrying-parcel-boxes.svg";
import maps from "../assets/maps.svg";
import mobileApp from "../assets/mobile-app.svg";
import cashOn from "../assets/cash-on-delivery-payment.svg";
import invest from "../assets/invest.svg";
import team from "../assets/team.svg";

// Overview data to map over and build the site overview
export const overviewData = [
    {
        title: "Revolutionize your trucking career:",
        text: "Earn more, work smarter,connect stronger",
        img: cashOn,
        alt: "Cash on delivery icon",
        elementClass: "overview-section column",
    },
    {
        title: "Go beyond standard job boards:",
        text: "Connecting you immediately to people and businesses with moving needs",
        img: maps,
        alt: "Maps icon",
        elementClass: "overview-section reverse",
    },
    {
        title: "Gain more control:",
        text: "Manage your schedule, choose your jobs and enjoy the freedom of being your own boss with TruckMate",
        img: carRoof,
        alt: "Car roof with parcel boxes icon",
        elementClass: "overview-section column",
    },
    {
        title: "Build your driver profile and reputation:",
        text: "Showcase your skills and experience to attract higher-paying jobs and build trust with clients.",
        img: mobileApp,
        alt: "Mobile app icon",
        elementClass: "overview-section reverse",
    },
    {
        title: "Connect with a supportive community:",
        text: "Network with other drivers, share best practices and get help whenever you need it the most.",
        img: team,
        alt: "team icon",
        elementClass: "overview-section column",
    },
    {
        title: "Invest in your future",
        text: "Build your skills, network with industry professionals and enhance your profession",
        img: invest,
        alt: "invest icon",
        elementClass: "overview-section reverse",
    },
];