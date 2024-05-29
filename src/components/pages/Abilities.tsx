import Programming from "../fragments/Programming";
import Tools from "../fragments/Tools";


const Abilities: React.FC = () => {


    return (
        <>
            <h1>Stack Tecnológico</h1>

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