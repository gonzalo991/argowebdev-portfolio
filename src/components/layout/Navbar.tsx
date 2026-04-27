import { useState } from "react";

const Navbar: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);

        if (el) {
            const navbarHeight = 80;
            const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

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
                        backgroundColor: "#0f172a",
                        textAlign: "center"
                    }}
                >
                    <div className="navbar-end">

                        {[
                            { label: "About", id: "developer" },
                            { label: "Projects", id: "proyectos" },
                            { label: "Experience", id: "experiencia" },
                            { label: "Skills", id: "habilidades" },
                            { label: "Education", id: "formacion" }
                        ].map((item) => (
                            <a
                                key={item.id}
                                className="navbar-item"
                                onClick={() => scrollToSection(item.id)}
                                style={{
                                    color: "#d1d5db",
                                    fontSize: "0.95rem"
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