import "../../css/abilities.css";
import spring from "../icon/spring-boot-logo.png";
import flask from "../icon/flask.jpg";
import express from "../icon/express.png";
import next from "../icon/nextjs.png";
import java from "../icon/java.png";
import python from "../icon/python.jpg";
import node from "../icon/node js.png";
import html from "../icon/html.png";
import css from "../icon/css.png";
import javascript from "../icon/javascript.png";
import typescript from "../icon/typescript.png";
import angular from "../icon/angular.png";

const Programming: React.FC = () => {
    return (
        <>
            <div className="frameworks">
                <h3 className="programming-titulo ms-5">Frameworks</h3>

                <div className="text-center mt-3 mb-3">
                    <img className="programming-icon" src={spring} alt="logo de spring boot" />
                    <img className="programming-icon" src={flask} alt="logo de flask" />
                    <img className="programming-icon" src={express} alt="logo de express js" />
                    <img className="programming-icon" src={next} alt="logo de next js" />
                    <img className="programming-icon" src={angular} alt="logo de angular js" />
                </div>
            </div>

            <div className="programming">
                <h3 className="programming-titulo">Lenguajes de Programación</h3>

                <div className="especialidades">
                    <div className="backend">
                        <h5 className="programming-subtitulo mt-3 mb-3">Backend</h5>
                        <div className="programming-img text-center">
                            <img className="programming-icon" src={java} alt="logo java" />
                            <img className="programming-icon" src={python} alt="logo python" />
                            <img className="programming-icon" src={node} alt="logo node" />
                        </div>
                    </div>

                    <div className="frontend">
                        <h5 className="programming-subtitulo mt-3 mb-3">Frontend</h5>
                        <div className="programming-img text-center">
                            <img className="programming-icon" src={html} alt="logo html" />
                            <img className="programming-icon" src={css} alt="logo css" />
                            <img className="programming-icon" src={javascript} alt="logo javascript" />
                            <img className="programming-icon" src={typescript} alt="logo typescript" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Programming;