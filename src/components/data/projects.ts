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
            • Production full-stack ecosystem (Next.js & NestJS/Node.js)
            • Engineered end-to-end architecture with JWT auth, RBAC & SOC2 security practices
            • Integrated payment systems (Stripe) and communications APIs (Vonage, GoAffPro)
            • Refactored backend services and data layer, reducing latency by ~40%
            `,
        imageUrl: nfseekString,
        githubLink: "",
        githubLinkBackend: "",
        projectLink: "https://nfseek.com"
    },
    {
        title: "Von Haus Lola Mora",
        description: `
            • Full-stack web application & custom admin system used in production
            • Built responsive UI components connected to RESTful APIs and database services
            • Designed database schemas and automated content management workflows
            • Streamlined client operations, eliminating manual admin overhead
            `,
        imageUrl: vonhausString,
        githubLink: "https://github.com/gonzalo991/von-haus-frontend",
        githubLinkBackend: "https://github.com/gonzalo991/von-haus-backend",
        projectLink: "https://vonhauslolamora.vercel.app/"
    },
    {
        title: "Digital Mirage E-Commerce",
        description: `
            • End-to-end e-commerce system built with React, Node.js & MongoDB
            • Implemented dynamic product management, persistent cart & order processing workflows
            • Designed secure JWT authentication, RESTful endpoints, and database state handling
            `,
        imageUrl: digitalMirageString,
        githubLink: "https://github.com/gonzalo991/Digital-Mirage-Frontend",
        githubLinkBackend: "https://github.com/gonzalo991/Digital-Mirage-Backend",
        projectLink: ""
    },
];