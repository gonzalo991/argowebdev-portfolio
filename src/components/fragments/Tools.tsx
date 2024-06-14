import "../../css/abilities.css";

const Tools: React.FC = () => {
    return (
        <>
            <div className="herramientas">
                <h3 className="programming-titulo">Herramientas</h3>
                <img className="programming-icon" src="/icon/postman.png" alt="logo de postman" />
                <img className="programming-icon" src="/icon/docker.png" alt="logo de docker" />
                <img className="programming-icon" src="/icon/git.png" alt="logo de git" />
                <img className="programming-icon" src="/icon/scrum.png" alt="logo de scrum" />
            </div>
            <div className="bibliotecas">
                <h3 className="programming-titulo">Bibliotecas</h3>
                <img className="programming-icon" src="/icon/react.png" alt="logo de react" />
                <img className="programming-icon" src="/icon/bootstrap.png" alt="logo de bootstrap" />
                <img className="programming-icon" src="/icon/bulma.png" alt="logo de bulma" />
                <img className="programming-icon" src="/icon/sass.png" alt="logo de sass" />
            </div>
        </>
    )
}

export default Tools;