import "../../css/abilities.css";
import flask from "../icon/flask.jpg";
import express from "../icon/express.png";
import next from "../icon/nextjs.png";
import python from "../icon/python.jpg";
import html from "../icon/html.png";
import css from "../icon/css.png";
import javascript from "../icon/javascript.png";
import typescript from "../icon/typescript.png";

const Programming: React.FC = () => {
    const nestLogoUrl = "https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png";
    const mysqlLogo = "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg";
    const mongodbLogo = "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Picture.png";
    const expoLogo = "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s=w240-h480-rw";

    return (
        <>
            <div className="frameworks">
                <h3 className="programming-titulo ms-5">Frameworks</h3>

                <div className="text-center mt-3 mb-3">
                    <img className="programming-icon" src={nestLogoUrl} alt="logo de nest js" />
                    <img className="programming-icon" src={flask} alt="logo de flask" />
                    <img className="programming-icon" src={express} alt="logo de express js" />
                    <img className="programming-icon" src={next} alt="logo de next js" />
                    <img className="programming-icon" src={expoLogo} alt="logo de expo" />
                </div>
            </div>

            <div className="programming">
                <h3 className="programming-titulo">Lenguajes de Programación</h3>

                <div className="especialidades">
                    <div className="backend">
                        <h5 className="programming-subtitulo mt-3 mb-3">Backend y Bases de datos</h5>
                        <div className="programming-img text-center">
                            <img className="programming-icon" src={javascript} alt="logo javascript" />
                            <img className="programming-icon" src={python} alt="logo python" />
                            <img className="programming-icon" src={mysqlLogo} alt="logo de mysql" />
                            <img className="programming-icon" src={mongodbLogo} alt="logo de mongo db" />
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