import { CardProps } from "../../interfaces/CardProps";
import vonhaus from "../img/vonhaus.png";
import digitalMirage from '../img/digitalmirage.png';
import pockyfai from '../img/PockyfaiSplash.png';
import nfseek from '../img/nfseek.png'; 

let vonhausString: string = vonhaus;
let digitalMirageString: string = digitalMirage;
let nfseekString: string = nfseek;

export const projects: CardProps[] = [
    {
        title: "NFSeek",
        description: `
• Production-ready platform (Next.js + Node.js)
• Implemented secure authentication (JWT + refresh tokens, roles, reCAPTCHA)
• Integrated Stripe payments, WooCommerce and GoAffPro coupon system
• Refactored legacy monolithic codebase applying clean architecture principles
• Optimized performance (caching, memoization, API reduction, pagination)
• Improved load times and overall UX in real production environment
        `,
        imageUrl: nfseekString,
        githubLink: "", 
        githubLinkBackend: "",
        projectLink: "https://nfseek.com" 
    },
    {
        title: "Von Haus Lola Mora",
        description: `
• Fullstack web application (React + Node.js)
• Designed backend APIs for content management
• Built admin dashboard for operational efficiency
• Deployed to production for real business usage
        `,
        imageUrl: vonhausString,
        githubLink: "https://github.com/gonzalo991/von-haus-frontend",
        githubLinkBackend: "https://github.com/gonzalo991/von-haus-backend",
        projectLink: "https://www.vonhauslolamora.com.ar/"
    },
    {
        title: "Digital Mirage E-Commerce",
        description: `
• Fullstack MERN e-commerce application
• Implemented product management and cart system
• Integrated frontend and backend workflows
• Built as a team-based production simulation
        `,
        imageUrl: digitalMirageString,
        githubLink: "https://github.com/gonzalo991/Digital-Mirage-Frontend",
        githubLinkBackend: "https://github.com/gonzalo991/Digital-Mirage-Backend",
        projectLink: "https://gonzalo991.github.io/Digital-Mirage-Frontend/"
    },
    {
        title: "Pockyfai Mobile App",
        description: `
• Mobile app for personal finance tracking
• Built with React Native + Expo
• Features: expenses, income, savings tracking
• Published for real users on Android
        `,
        imageUrl: pockyfai,
        githubLink: "",
        githubLinkBackend: "",
        projectLink: "https://play.google.com/store/apps/details?id=com.gonzalo991.pockyfai"
    }
];