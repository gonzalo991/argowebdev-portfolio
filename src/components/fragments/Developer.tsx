import { Link } from "react-router-dom";
import "../../css/developer.css";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import About from "../pages/About";
import mifoto from "../img/mifoto.jpg";
import curriculum from "../files/CvOscarGonzaloAraya.pdf";

const Developer: React.FC = () => {
    return (
        <>
            <div className="dev-presentacion">
                <div className="dev-nombre">
                    <div className="subtitulos">
                        <h1 className="dev-titulo mt-5">Soy Gonzalo &#128526;</h1>
                        <h3 className="dev-subtitulo">Técnico Universitario en Programación</h3>
                        <h5 className="dev-subtitulo-dos">Fullstack Developer</h5>
                    </div>
                </div>

                <div className="dev-img">
                    <img className="foto-presentacion"
                        src={mifoto}
                        alt="oscar gonzalo araya fullstack developer" />
                </div>

                <About />

                <div className="botones">
                    <a href={curriculum} className="curriculum-boton" download>Descargar Cv</a>
                </div>

                <div className="sociales">
                    <Link to="https://github.com/gonzalo991" className="github-boton" target="_blank">
                        <GrGithub className="github-boton-icon" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/gonzalo-araya-416a6520b/"
                        className="linkedin-boton" target="_blank">
                        <GrLinkedin className="linkedin-boton-icon" />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Developer;