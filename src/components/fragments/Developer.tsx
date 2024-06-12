import { Link } from "react-router-dom";
import "../../css/home.css";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";


const Developer: React.FC = () => {
    return (
        <>
            <div className="dev-presentacion">
                <div className="dev-nombre">
                    <div className="subtitulos">
                        <h1 className="dev-titulo">Soy Gonzalo &#128526;</h1>
                        <h3 className="dev-subtitulo">Técnico Universitario en Programación</h3>
                        <h5 className="dev-subtitulo-dos">Fullstack Developer</h5>
                    </div>
                </div>

                <div className="dev-img">
                    <img className="foto-presentacion"
                        src="/img/mifoto.jpg"
                        alt="oscar gonzalo araya fullstack developer" />
                </div>

                <div className="botones">
                    <Link to="" className="curriculum-boton">Descargar Cv</Link>
                </div>

                <div className="sociales">
                    <Link to="https://github.com/gonzalo991" className="github-boton">
                        <FaGithub />
                    </Link>
                    <Link to="https://www.linkedin.com/in/gonzalo-araya-416a6520b/"
                        className="linkedin-boton">
                        <GrLinkedin />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Developer;