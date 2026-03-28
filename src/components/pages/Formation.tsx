import { certificados } from "../data/certifications";

const Formation: React.FC = () => {
    return (
        <div className="container">
            <h2 className="title has-text-centered mt-5" style={{ color: "#60a5fa" }}>Education & Certifications</h2>
          
            <div style={{
                width: "60px",
                height: "2px",
                background: "#3b82f6",
                margin: "10px auto 0"
            }} />

            <div className="columns is-centered mt-5">
                <div className="column is-8">

                    {certificados.map((cert, idx) => (
                        <div
                            className="box mb-4 has-text-centered"
                            style={{ backgroundColor: "#111827" }}
                            key={idx}>

                            <p className="title is-6" style={{ color: "#f9fafb" }}>
                                {cert.titulo}
                            </p>

                            <p className="subtitle is-6" style={{ color: "#d1d5db" }}>
                                {cert.institucion}
                            </p>

                            <p className="is-size-7" style={{ color: "#9ca3af" }}>
                                {cert.fechaInicio} - {cert.fechaFin}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Formation;