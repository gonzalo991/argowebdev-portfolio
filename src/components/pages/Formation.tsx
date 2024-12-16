import "../../css/experiencia.css";
import { certificados } from "../data/certifications";

const Formation: React.FC = () => {
    return (
        <>
            <h3 className="experiencia-titulo text-center mt-5 mb-5">Formación y Certificaciones</h3>

            <div className="container-exp">
                {
                    certificados.map((cert, idx) => {
                        const { institucion, titulo, fechaInicio, fechaFin }: {
                            institucion: string;
                            titulo: string;
                            fechaInicio: string;
                            fechaFin: string;
                        } = cert;

                        return (
                            <div className="experiencia-contenedor mt-3 mb-4 ms-4 me-4 text-center" key={idx}>
                                <h4 className="experiencia-texto mt-3 mb-3"><span>Institución:</span> {institucion}</h4>
                                <p className="experiencia-texto"><span>Título:</span> {titulo}</p>
                                <p className="experiencia-texto"><span>Fecha Inicio:</span> {fechaInicio}</p>
                                <p className="experiencia-texto"><span>Fecha Fin:</span> {fechaFin}</p>
                                <hr className="linea mt-5 mb-3" />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Formation;