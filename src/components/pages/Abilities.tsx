import Programming from "../fragments/Programming";
import Tools from "../fragments/Tools";
import "../../css/abilities.css";


const Abilities: React.FC = () => {


    return (
        <>
            <h1 className="habilidades-titulo text-center ms-5 mt-5">Stack Tecnológico</h1>

            <div className="herramientas-bibliotecas">
                <Tools />
            </div>

            <div className="frameworks-programacion">
                < Programming />
            </div>
        </>
    )
}

export default Abilities;