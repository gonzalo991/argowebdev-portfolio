import React from "react";
import Abilities from "./Abilities";
import Developer from "../fragments/Developer";
import "../../css/developer.css";

const Home: React.FC = () => {

    return (
        <>

            <div className="presentacion is-flex is-justify-content-center " style={{ margin: "2em 0 0 0" }}>
                < Developer />
            </div>

            <div className="habilidades">
                <Abilities />
            </div>
        </>

    );
};

export default Home;