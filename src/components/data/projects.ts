import { CardProps } from "../../interfaces/CardProps";
import reciclarg from "../img/reciclarg.png";
import vonhaus from "../img/vonhaus.png";
import digitalMirage from '../img/digitalmirage.png';

let reciclargString: string = reciclarg;
let vonhausString: string = vonhaus;

let digitalMirageString: string = digitalMirage;

export const projects: CardProps[] = [
    {
        "title": "Reciclarg",
        "description": "Página web dedicada a concientizar a la comunidad Mendocina sobre la importancia y los métodos existentes de reciclaje. Idea original del Equipo Los Chiperos para competir en el Hackathon 2022 apadrinados por la UTN - FR San Rafael de Mendoza.",
        "imageUrl": reciclargString,
        "githubLink": "https://github.com/gonzalo991/hackathon2022-reciclarg",
        "githubLinkBackend": "https://github.com/gonzalo991/von-haus-backend",
        "projectLink": "https://reciclarg.onrender.com/"
    },
    {
        "title": "Von Haus Lola Mora",
        "description": "Aplicación web creada para el criadero de perros pastor alemán Von Haus Lola Mora de la ciudad de El Tala - Salta. Su finalidad es promocionar y dar a conocer el criadero para que el cliente pueda tener más ventas a nivel local, nacional e internacional.",
        "imageUrl": vonhausString,
        "githubLink": "https://github.com/gonzalo991/von-haus-frontend",
        "githubLinkBackend": "https://github.com/gonzalo991/von-haus-backend",
        "projectLink": "https://www.vonhauslolamora.com.ar/"
    },
    {
        "title": "Digital Mirage E-Commerce",
        "description": "Este es un proyecto academico realizado con mi equipo durante la carrera de Técnico Universitario en programación usando las tecnologias MERN.",
        "imageUrl": digitalMirageString,
        "githubLink": "https://github.com/gonzalo991/Digital-Mirage-Frontend",
        "githubLinkBackend": "https://github.com/gonzalo991/Digital-Mirage-Backend",
        "projectLink": "https://gonzalo991.github.io/Digital-Mirage-Frontend/"
    },
];