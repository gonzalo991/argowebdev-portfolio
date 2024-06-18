import "../../css/abilities.css";
import postman from "../icon/postman.png";
import docker from "../icon/docker.png";
import git from "../icon/git.png";
import scrum from "../icon/scrum.png";
import react from "../icon/react.png";
import bootstrap from "../icon/bootstrap.png";
import bulma from "../icon/bulma.png";
import sass from "../icon/sass.png";

const Tools: React.FC = () => {
    return (
        <>
            <div className="tools">
                <div className="herramientas text-center">
                    <h3 className="programming-titulo">Herramientas</h3>
                    <div className="herramientas-img">
                        <img className="programming-icon" src={postman} alt="logo de postman" />
                        <img className="programming-icon" src={docker} alt="logo de docker" />
                        <img className="programming-icon" src={git} alt="logo de git" />
                        <img className="programming-icon" src={scrum} alt="logo de scrum" />
                    </div>
                </div>
                <div className="bibliotecas text-center">
                    <h3 className="programming-titulo">Bibliotecas</h3>
                    <div className="bibliotecas-img text-center">
                        <img className="programming-icon" src={react} alt="logo de react" />
                        <img className="programming-icon" src={bootstrap} alt="logo de bootstrap" />
                        <img className="programming-icon" src={bulma} alt="logo de bulma" />
                        <img className="programming-icon" src={sass} alt="logo de sass" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools;