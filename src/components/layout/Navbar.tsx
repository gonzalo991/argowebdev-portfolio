import { useState } from "react";

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsActive(false);
        }
    };

    return (
        <nav
            className="navbar is-fixed-top"
            style={{
                backgroundColor: "#0f172a",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
            }}
        >
            <div className="container">

                {/* BRAND */}
                <div className="navbar-brand">
                    <a
                        className="navbar-item has-text-weight-semibold"
                        style={{ color: "#f9fafb" }}
                    >
                        Gonzalo Araya
                    </a>

                    {/* BURGER */}
                    <a
                        role="button"
                        className={`navbar-burger ${isActive ? "is-active" : ""}`}
                        onClick={() => setIsActive(!isActive)}
                        style={{ color: "#f9fafb" }}
                    >
                        <span />
                        <span />
                        <span />
                    </a>
                </div>

                {/* MENU */}
                <div
                    className={`navbar-menu ${isActive ? "is-active" : ""}`}
                    style={{
                        backgroundColor: "#0f172a" // 🔥 clave para mobile
                    }}
                >
                    <div className="navbar-end">

                        {[
                            { label: "About", id: "developer" },
                            { label: "Skills", id: "habilidades" },
                            { label: "Experience", id: "experiencia" },
                            { label: "Projects", id: "proyectos" },
                            { label: "Education", id: "formacion" }
                        ].map((item) => (
                            <a
                                key={item.id}
                                className="navbar-item"
                                onClick={() => scrollToSection(item.id)}
                                style={{
                                    color: "#d1d5db",
                                    transition: "all 0.2s ease",
                                    textAlign: "center"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#38bdf8";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#d1d5db";
                                }}
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;