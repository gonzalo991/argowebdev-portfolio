import React from "react";
import Abilities from "./Abilities";
import "../../css/developer.css";
import Developer from "../fragments/Developer";

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