import React from "react";
import Abilities from "./Abilities";
import Developer from "../fragments/Developer";
import Projects from "./Projects";
import Experience from "./Experience";
import Formation from "./Formation";
import About from "./About";

const Home: React.FC = () => {

    return (
        <>

            <div id="developer" className="is-flex is-justify-content-center" style={{ margin: "2em 0 0 0" }}>
                < Developer />
            </div>

            <div id="about" className="is-flex is-justify-content-center" style={{ margin: "2em 0 0 0" }}>
                < About />
            </div>

            <div id="proyectos" >
                <Projects />
            </div>

            <div id="experiencia" >
                <Experience />
            </div>

            <div id="habilidades">
                <Abilities />
            </div>

            <div id="formacion">
                <Formation />
            </div>

        </>

    );
};

export default Home;