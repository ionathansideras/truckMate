import carRoof from "../assets/car-roof-storage-carrying-parcel-boxes.svg";
import maps from "../assets/maps.svg";
import mobileApp from "../assets/mobile-app.svg";
import cashOn from "../assets/cash-on-delivery-payment.svg";
import { v4 as uuidv4 } from "uuid";

export const overviewData = [
    {
        id: uuidv4(),
        title: "Our vision...",
        text: "Extends beyond just facilitating moves",
        img: cashOn,
        alt: "",
        elementId: "",
        elementClass: "overview-section",
    },
    {
        id: uuidv4(),
        title: "We aim to",
        text: "Revolutionise the relocation and trucking industry",
        img: maps,
        alt: "",
        elementId: "we-aim-reversed",
        elementClass: "overview-section",
    },
    {
        id: uuidv4(),
        title: "We believe",
        text: "In making the process efficient, cost-effective and stress free",
        img: carRoof,
        alt: "",
        elementId: "",
        elementClass: "overview-section",
    },
    {
        id: uuidv4(),
        title: "Providing...",
        text: "",
        img: "",
        alt: "",
        elementId: "providing-element",
        elementClass: "overview-section-break",
    },
    {
        id: uuidv4(),
        title: "Tailor made solutions",
        text: "For our Users and Drivers",
        img: mobileApp,
        alt: "",
        elementId: "",
        elementClass: "overview-section",
    },
];
