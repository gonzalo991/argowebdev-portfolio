import React from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                backgroundColor: "#0b0f17",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                padding: "2.5rem 0 1.5rem 0"
            }}
        >
            <div className="container" style={{ maxWidth: "850px", padding: "0 1.5rem" }}>

                {/* TOP ROW */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1.2rem",
                        marginBottom: "1.5rem"
                    }}
                >
                    {/* LEFT: INFO */}
                    <div className="has-text-centered-mobile">
                        <p
                            style={{
                                color: "#f9fafb",
                                fontWeight: 600,
                                fontSize: "1rem",
                                marginBottom: "0.2rem"
                            }}
                        >
                            Gonzalo Araya
                        </p>

                        <p style={{ color: "#9ca3af", fontSize: "0.82rem" }}>
                            Fullstack Engineer <span style={{ color: "#38bdf8" }}>•</span> Node.js • PostgreSQL • APIs
                        </p>
                    </div>

                    {/* RIGHT: SOCIAL LINKS */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                            margin: "0 auto 0 auto" // fallback mobile
                        }}
                    >
                        <a
                            href="https://github.com/gonzalo991"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            style={{
                                color: "#9ca3af",
                                backgroundColor: "#111827",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                padding: "8px",
                                borderRadius: "8px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#38bdf8";
                                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#9ca3af";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <GrGithub size={18} />
                        </a>

                        <a
                            href="https://linkedin.com/in/gonzalo-araya-416a6520b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            style={{
                                color: "#9ca3af",
                                backgroundColor: "#111827",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                padding: "8px",
                                borderRadius: "8px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#38bdf8";
                                e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.4)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#9ca3af";
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <GrLinkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* DIVIDER LINE */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                        marginBottom: "1.2rem"
                    }}
                />

                {/* BOTTOM: COPYRIGHT */}
                <div style={{ textAlign: "center" }}>
                    <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>
                        © {currentYear} Gonzalo Araya. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;