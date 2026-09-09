import React from "react";
import { experiencia } from "../data/experience";

const Experience: React.FC = () => {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: "900px" }}>

                {/* HEADER */}
                <div className="has-text-centered mb-6">
                    <h2 className="title is-3" style={{ color: "#38bdf8" }}>
                        Experience
                    </h2>

                    <p
                        className="is-size-6 mt-2"
                        style={{
                            color: "#9ca3af",
                            maxWidth: "500px",
                            margin: "0 auto"
                        }}
                    >
                        Building and improving real-world systems in production
                    </p>
                </div>

                {/* TIMELINE */}
                <div style={{ position: "relative", paddingLeft: "20px" }}>

                    {/* VERTICAL LINE */}
                    <div
                        style={{
                            position: "absolute",
                            left: "6px",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            background: "rgba(255,255,255,0.08)"
                        }}
                    />

                    {experiencia.map((exp, idx) => {
                        // Soporta tanto array de strings como string multilínea con bullets
                        const bulletList: string[] = Array.isArray(exp.descripcion)
                            ? exp.descripcion
                            : exp.descripcion
                                  .trim()
                                  .split("\n")
                                  .map((line) => line.replace("•", "").trim())
                                  .filter((line) => line !== "");

                        return (
                            <div
                                key={idx}
                                style={{
                                    position: "relative",
                                    marginBottom: "1.8rem"
                                }}
                            >

                                {/* DOT */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: "-2px",
                                        top: "6px",
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "#38bdf8"
                                    }}
                                />

                                {/* CONTENT BOX */}
                                <div
                                    style={{
                                        backgroundColor: "#111827",
                                        padding: "1.2rem",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(255,255,255,0.05)"
                                    }}
                                >

                                    {/* TOP ROW */}
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            flexWrap: "wrap",
                                            gap: "6px"
                                        }}
                                    >
                                        <h3
                                            style={{
                                                color: "#f9fafb",
                                                fontWeight: 600,
                                                fontSize: "1.05rem"
                                            }}
                                        >
                                            {exp.puesto}
                                        </h3>

                                        <span
                                            style={{
                                                color: "#9ca3af",
                                                fontSize: "0.85rem"
                                            }}
                                        >
                                            {exp.fechaInicio} – {exp.fechaFin}
                                        </span>
                                    </div>

                                    {/* COMPANY */}
                                    <p
                                        style={{
                                            color: "#38bdf8",
                                            fontSize: "0.9rem",
                                            fontWeight: 500,
                                            marginBottom: "0.75rem"
                                        }}
                                    >
                                        {exp.empresa}
                                    </p>

                                    {/* DESCRIPTION BULLETS */}
                                    <ul
                                        style={{
                                            color: "#d1d5db",
                                            paddingLeft: "1.2rem",
                                            margin: 0,
                                            listStyleType: "disc"
                                        }}
                                    >
                                        {bulletList.map((bullet, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    marginBottom: "0.4rem",
                                                    fontSize: "0.88rem",
                                                    lineHeight: "1.5"
                                                }}
                                            >
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default Experience;