import postman from "../../../public/icon/postman.png";
import docker from "../../../public/icon/docker.png";
import git from "../../../public/icon/git.png";
import scrum from "../../../public/icon/scrum.png";
import react from "../../../public/icon/react.png";
import bootstrap from "../../../public/icon/bootstrap.png";
import bulma from "../../../public/icon/bulma.png";
import sass from "../../../public/icon/sass.png";

const Tools: React.FC = () => {
    return (
        <>
            <div className="herramientas">
                <h3>Herramientas</h3>
                <img src={postman} alt="logo de postman" />
                <img src={docker} alt="logo de docker" />
                <img src={git} alt="logo de git" />
                <img src={scrum} alt="logo de scrum" />
            </div>
            <div className="bibliotecas">
                <h3>Bibliotecas</h3>
                <img src={react} alt="logo de react" />
                <img src={bootstrap} alt="logo de bootstrap" />
                <img src={bulma} alt="logo de bulma" />
                <img src={sass} alt="logo de sass" />
            </div>
        </>
    )
}

export default Tools;