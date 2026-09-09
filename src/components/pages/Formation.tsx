import React from "react";
import { certificados } from "../data/certifications";

const Formation: React.FC = () => {
    // Formatea la fecha: si es el mismo año devuelve "2023", si no "2021 — 2024"
    const formatPeriod = (start: string, end: string) => {
        return start === end ? start : `${start} — ${end}`;
    };

    return (
        <section className="section" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
            <div className="container" style={{ maxWidth: "750px" }}>

                {/* HEADER */}
                <div className="has-text-centered mb-5">
                    <h2
                        className="title is-4"
                        style={{ color: "#38bdf8", marginBottom: "0.4rem" }}
                    >
                        Education & Certifications
                    </h2>

                    <div
                        style={{
                            width: "40px",
                            height: "2px",
                            background: "#38bdf8",
                            margin: "0 auto",
                            borderRadius: "2px"
                        }}
                    />
                </div>

                {/* LIST */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem"
                    }}
                >
                    {certificados.map((cert, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "0.5rem",
                                padding: "0.8rem 1.1rem",
                                borderRadius: "10px",
                                backgroundColor: "#111827",
                                border: "1px solid rgba(255, 255, 255, 0.05)",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.35)";
                                e.currentTarget.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            {/* LEFT: Título e Institución */}
                            <div style={{ flex: "1 1 280px" }}>
                                <p
                                    style={{
                                        color: "#f9fafb",
                                        fontSize: "0.93rem",
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                        marginBottom: "0.2rem"
                                    }}
                                >
                                    {cert.titulo}
                                </p>

                                <p
                                    style={{
                                        color: "#9ca3af",
                                        fontSize: "0.82rem"
                                    }}
                                >
                                    {cert.institucion}
                                </p>
                            </div>

                            {/* RIGHT: Periodo / Fecha */}
                            <div
                                style={{
                                    backgroundColor: "#1f2937",
                                    padding: "3px 10px",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(255, 255, 255, 0.05)"
                                }}
                            >
                                <span
                                    style={{
                                        color: "#38bdf8",
                                        fontSize: "0.75rem",
                                        fontWeight: 500,
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    {formatPeriod(cert.fechaInicio, cert.fechaFin)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Formation;