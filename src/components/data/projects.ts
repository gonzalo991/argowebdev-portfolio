import { CardProps } from "../../interfaces/CardProps";
import reciclarg from "../img/reciclarg.png";
import vonhaus from "../img/vonhaus.png";

let reciclargString: string = reciclarg;
let vonhausString: string = vonhaus;

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
    }
];