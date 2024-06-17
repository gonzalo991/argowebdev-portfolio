import { GrGithub, GrLinkedin } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../css/index.css";
import "../../css/keyframes.css";

const Contact: React.FC = () => {
    const correo = 'gonxaraya991@gmail.com';
    const asunto = 'He visto tu portfolio y me interesa una reunion por meet o zoom';
    const mensaje = '';

    const handleRedactarCorreo = () => {
        window.location.href = `mailto:${correo}?subject=${asunto}&body=${mensaje}`;
    };

    return (
        <>
            <div className="secciones-contacto">
                <div className="seccion-email">
                    <p className="email"><IoIosMail className="email-icon" /> <span>Email:</span> gonxaraya991@gmail.com</p>

                    <button className="email-boton" onClick={handleRedactarCorreo}>Redactar correo</button>
                </div>

                <div className="seccion-social">
                    <Link to="https://github.com/gonzalo991" className="github-contacto" target="_blank">
                        <GrGithub className="github-contacto-icon" />
                    </Link>

                    <Link to="https://www.linkedin.com/in/gonzalo-araya-416a6520b/"
                        className="linkedin-contacto" target="_blank">
                        <GrLinkedin className="linkedin-contacto-icon" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contact;