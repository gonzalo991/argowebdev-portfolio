import { experiencia } from "../data/experience";

const Experience: React.FC = () => {
    return (
        <div className="container">
            <h2
                className="title has-text-centered"
                style={{
                    color: "#60a5fa",
                    letterSpacing: "0.5px"
                }}
            >
                Experience
            </h2>

            <div style={{
                width: "60px",
                height: "2px",
                background: "#3b82f6",
                margin: "10px auto 0"
            }} />

            <div className="columns is-centered mt-6">
                <div className="column is-8">

                    {experiencia.map((exp, idx) => (
                        <div
                            className="box mb-5 has-text-centered"
                            style={{
                                backgroundColor: "#111827",
                                borderLeft: "3px solid #3b82f6"
                            }}
                            key={idx}
                        >
                            <h3
                                className="title is-5"
                                style={{ color: "#f9fafb" }}
                            >
                                {exp.puesto}
                            </h3>

                            <p
                                style={{
                                    color: "#3b82f6",
                                    fontWeight: 600
                                }}
                            >
                                {exp.empresa}
                            </p>

                            <p
                                className="is-size-7 mb-3"
                                style={{ color: "#9ca3af" }}
                            >
                                {exp.fechaInicio} - {exp.fechaFin}
                            </p>

                            <div
                                style={{
                                    whiteSpace: "pre-line",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    color: "#d1d5db"
                                }}
                            >
                                {exp.descripcion}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Experience;