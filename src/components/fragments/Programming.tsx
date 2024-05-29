import flask from "../../../public/icon/flask.jpg";
import spring from "../../../public/icon/spring-boot-logo.png";
import java from "../../../public/icon/java.png";
import express from "../../../public/icon/express.png";
import next from "../../../public/icon/nextjs.png";
import python from "../../../public/icon/python.jpg";
import node from "../../../public/icon/node js.png";
import html from "../../../public/icon/html.png";
import css from "../../../public/icon/css.png";
import js from "../../../public/icon/javascript.png";
import ts from "../../../public/icon/typescript.png";

const Programming: React.FC = () => {
    return (
        <>
            <div className="frameworks">
                <h3>Frameworks</h3>
                <img src={spring} alt="logo de spring boot" />
                <img src={flask} alt="logo de flask" />
                <img src={express} alt="logo de express js" />
                <img src={next} alt="logo de next js" />
            </div>

            <div className="programacion">
                <h3>Lenguajes de Programación</h3>

                <div className="especialidades">
                    <div className="backend">
                        <h5>Backend</h5>
                        <img src={java} alt="logo java" />
                        <img src={python} alt="logo python" />
                        <img src={node} alt="logo node" />
                    </div>

                    <div className="frontend">
                        <h5>Frontend</h5>
                        <img src={html} alt="logo html" />
                        <img src={css} alt="logo css" />
                        <img src={js} alt="logo javascript" />
                        <img src={ts} alt="logo typescript" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Programming;