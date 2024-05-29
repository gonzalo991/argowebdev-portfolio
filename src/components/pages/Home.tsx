import React from "react";
import Abilities from "./Abilities";
import Projects from "./Projects";
import Card from "../fragments/Card";
import Contact from "../fragments/Contact";
import Experience from "../fragments/Experience";

const Home: React.FC = () => {
    return (
        <>
            {/** Título con mi nombre, profesión y boton para descargar el cv */}
            <div className="presentacion is-flex is-justify-content-center "
                style={{ margin: "2em 0 0 0" }}
            >
                <Card />
            </div>

            <div className="contacto is-flex is-justify-content-center">
                <div className="contenido">
                    <Contact />
                </div>
            </div>

            <div className="habilidades">
                <Abilities />
            </div>

            <div className="proyectos">
                <Projects />
            </div>

            <div className="experiencia-laboral">
                <Experience />
            </div>
        </>
    )
}

export default Home;