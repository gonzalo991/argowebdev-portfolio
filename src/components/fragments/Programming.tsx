import "../../css/abilities.css";
import flask from "../icon/flask.jpg";
import express from "../icon/express.png";
import next from "../icon/nextjs.png";
import python from "../icon/python.jpg";
import html from "../icon/html.png";
import css from "../icon/css.png";
import javascript from "../icon/javascript.png";
import typescript from "../icon/typescript.png";
import java from "../icon/java.png";
import spring from "../icon/spring-boot-logo.png";

const Programming: React.FC = () => {
    const nestLogoUrl = "https://imgs.search.brave.com/MBfBI3Juf-OJ216GfFIjSrouky7b9TNvZKhKT-f9_hs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzgwODkw/My9zY3JlZW5zaG90/cy8zODMxODYyL2Ry/aWJiYmxlX3N6YWJs/b25fXzFfMS5wbmc_/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy";
    const mysqlLogo = "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg";
    const mongodbLogo = "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Picture.png";
    const expoLogo = "https://play-lh.googleusercontent.com/algsmuhitlyCU_Yy3IU7-7KYIhCBwx5UJG4Bln-hygBjjlUVCiGo1y8W5JNqYm9WW3s=w240-h480-rw";
    const fastApiLogo = "https://imgs.search.brave.com/gEiAq38ZjKX2BSxywJvwP2CXk9jt9FzsjoM4D3SFEX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5zdmdjZG4uaW8v/bG9nb3MvZmFzdGFw/aS5zdmc";

    return (
        <>
            <div className="frameworks">
                <h3 className="programming-titulo ms-5">Frameworks</h3>

                <div className="text-center mt-3 mb-3">
                    <img className="programming-icon" src={nestLogoUrl} alt="logo de nest js" />
                    <img className="programming-icon" src={flask} alt="logo de flask" />
                    <img className="programming-icon" src={spring} alt="logo de spring boot" />
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
                            <img className="programming-icon" src={java} alt="logo java" />
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