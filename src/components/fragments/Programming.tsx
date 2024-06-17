import "../../css/abilities.css";

const Programming: React.FC = () => {
    return (
        <>
            <div className="frameworks">
                <h3 className="programming-titulo ms-5">Frameworks</h3>

                <div className="text-center mt-3 mb-3">
                    <img className="programming-icon" src="/icon/spring-boot-logo.png" alt="logo de spring boot" />
                    <img className="programming-icon" src="/icon/flask.jpg" alt="logo de flask" />
                    <img className="programming-icon" src="/icon/express.png" alt="logo de express js" />
                    <img className="programming-icon" src="/icon/nextjs.png" alt="logo de next js" />
                </div>
            </div>

            <div className="programming">
                <h3 className="programming-titulo">Lenguajes de Programación</h3>

                <div className="especialidades">
                    <div className="backend">
                        <h5 className="programming-subtitulo mt-3 mb-3">Backend</h5>
                        <div className="programming-img text-center">
                            <img className="programming-icon" src="/icon/java.png" alt="logo java" />
                            <img className="programming-icon" src="/icon/python.jpg" alt="logo python" />
                            <img className="programming-icon" src="/icon/node js.png" alt="logo node" />
                        </div>
                    </div>

                    <div className="frontend">
                        <h5 className="programming-subtitulo mt-3 mb-3">Frontend</h5>
                        <div className="programming-img text-center">
                            <img className="programming-icon" src="/icon/html.png" alt="logo html" />
                            <img className="programming-icon" src="/icon/css.png" alt="logo css" />
                            <img className="programming-icon" src="/icon/javascript.png" alt="logo javascript" />
                            <img className="programming-icon" src="/icon/typescript.png" alt="logo typescript" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Programming;