import { experiencia } from "../data/experience";
import "../../css/experiencia.css";

const Experience: React.FC = () => {
    return (
        <>
            <h3 className="experiencia-titulo text-center mt-5 mb-5">Experiencia Laboral</h3>

            {
                experiencia.map((exp, idx) => {
                    const { empresa, puesto, fechaInicio, fechaFin, descripcion }: {
                        empresa: string;
                        puesto: string;
                        fechaInicio: string;
                        fechaFin: string;
                        descripcion: string;
                    } = exp;

                    return (
                        <div className="experiencia-contenedor mt-3 mb-4 ms-4 me-4 text-center" key={idx}>
                            <h4 className="experiencia-texto mt-3 mb-3"><span>Empresa:</span> {empresa}</h4>
                            <p className="experiencia-texto"><span>Puesto:</span> {puesto}</p>
                            <p className="experiencia-texto"><span>Fecha Inicio:</span> {fechaInicio}</p>
                            <p className="experiencia-texto"><span>Fecha Fin:</span> {fechaFin}</p>
                            <p className="experiencia-texto"><span>Descripcion:</span> {descripcion}</p>
                            <hr className="linea mt-5 mb-2" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Experience;