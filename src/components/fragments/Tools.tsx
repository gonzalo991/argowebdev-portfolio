import "../../css/abilities.css";
import postman from "../icon/postman.png";
import docker from "../icon/docker.png";
import git from "../icon/git.png";
import scrum from "../icon/scrum.png";
import react from "../icon/react.png";
import bootstrap from "../icon/bootstrap.png";
import bulma from "../icon/bulma.png";
import sass from "../icon/sass.png";
import node from "../icon/node js.png";

const Tools: React.FC = () => {
    const nginxLogo = "https://cdn-icons-png.flaticon.com/512/919/919856.png";
    const rNativeLogo = "https://everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png";;
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
                        <img className="programming-icon" src={node} alt="logo de node" />
                        <img className="programming-icon" src={nginxLogo} alt="logo de nginx" />
                    </div>
                </div>

                <div className="bibliotecas text-center">
                    <h3 className="programming-titulo">Bibliotecas</h3>
                    <div className="bibliotecas-img text-center">
                        <img className="programming-icon" src={react} alt="logo de react" />
                        <img className="programming-icon" src={bootstrap} alt="logo de bootstrap" />
                        <img className="programming-icon" src={bulma} alt="logo de bulma" />
                        <img className="programming-icon" src={sass} alt="logo de sass" />
                        <img className="programming-icon" src={rNativeLogo} alt="logo react native" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools;