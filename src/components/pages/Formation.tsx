import { certificados } from "../data/certifications";

const Formation: React.FC = () => {
    return (
        <section className="section" style={{ paddingTop: "2rem" }}>
            <div className="container">

                {/* HEADER */}
                <div className="has-text-centered mb-5">
                    <h2
                        className="title is-4"
                        style={{ color: "#38bdf8", marginBottom: "0.5rem" }}
                    >
                        Education & Certifications
                    </h2>

                    <div
                        style={{
                            width: "50px",
                            height: "2px",
                            background: "#38bdf8",
                            margin: "0.5rem auto"
                        }}
                    />
                </div>

                {/* LIST */}
                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem"
                    }}
                >
                    {certificados.map((cert, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "0.6rem 0.8rem",
                                borderRadius: "8px",
                                backgroundColor: "#0f172a", // 🔥 fondo sutil
                                border: "1px solid rgba(255,255,255,0.04)",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)";
                            }}
                        >
                            {/* LEFT */}
                            <div>
                                <p
                                    style={{
                                        color: "#f9fafb",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        marginBottom: "0.1rem"
                                    }}
                                >
                                    {cert.titulo}
                                </p>

                                <p
                                    style={{
                                        color: "#9ca3af",
                                        fontSize: "0.8rem"
                                    }}
                                >
                                    {cert.institucion}
                                </p>
                            </div>

                            {/* RIGHT */}
                            <p
                                style={{
                                    color: "#6b7280",
                                    fontSize: "0.75rem",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {cert.fechaInicio} — {cert.fechaFin}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Formation;