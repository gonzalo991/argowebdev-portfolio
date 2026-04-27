import { CardProps } from "../../interfaces/CardProps";
import vonhaus from "../img/vonhaus.png";
import digitalMirage from '../img/digitalmirage.png';
import nfseek from '../img/nfseek.png';

let vonhausString: string = vonhaus;
let digitalMirageString: string = digitalMirage;
let nfseekString: string = nfseek;

export const projects: CardProps[] = [
    {
        title: "NFSeek",
        description: `
           • Production-ready platform (Next.js + Node.js)
           • JWT auth + RBAC + security layers  
            • Payments & integrations (Stripe, WooCommerce)  
            • Refactor → clean architecture  
            • ↓ latency ~40%
            `,
        imageUrl: nfseekString,
        githubLink: "",
        githubLinkBackend: "",
        projectLink: "https://nfseek.com"
    },
    {
        title: "Von Haus Lola Mora",
        description: `
            • Developed backend APIs and admin system for real business operations
            • Reduced manual work through custom admin dashboard
            • Designed data structures and business logic for content management
            • Delivered fullstack solution used in production by real users
            `,
        imageUrl: vonhausString,
        githubLink: "https://github.com/gonzalo991/von-haus-frontend",
        githubLinkBackend: "https://github.com/gonzalo991/von-haus-backend",
        projectLink: "https://www.vonhauslolamora.com.ar/"
    },
    {
        title: "Digital Mirage E-Commerce",
        description: `
            • Built fullstack e-commerce system (MERN stack)
            • Implemented product, cart and API workflows
            • Focused on backend integration and data flow
            `,
        imageUrl: digitalMirageString,
        githubLink: "https://github.com/gonzalo991/Digital-Mirage-Frontend",
        githubLinkBackend: "https://github.com/gonzalo991/Digital-Mirage-Backend",
        projectLink: "https://gonzalo991.github.io/Digital-Mirage-Frontend/"
    },
];