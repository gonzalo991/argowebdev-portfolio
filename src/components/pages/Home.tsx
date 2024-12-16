import React from "react";
import Abilities from "./Abilities";
import Developer from "../fragments/Developer";
import Projects from "./Projects";
import Experience from "./Experience";
import Formation from "./Formation";
import "../../css/developer.css";

const Home: React.FC = () => {

    return (
        <>

            <div id="developer" className="presentacion is-flex is-justify-content-center" style={{ margin: "2em 0 0 0" }}>
                < Developer />
            </div>

            <div className="habilidades mt-5" id="habilidades">
                <Abilities />
            </div>

            <div id="proyectos" className="mt-5">
                <Projects />
            </div>

            <div id="experiencia" className="mt-5">
                <Experience />
            </div>

            <div id="formacion" className="mt-5">
                <Formation />
            </div>

        </>

    );
};

export default Home;