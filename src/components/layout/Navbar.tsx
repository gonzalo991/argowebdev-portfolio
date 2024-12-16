import { Link } from "react-router-dom";
import '../../css/navbar.css';
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isActiveLink, setIsActiveLink] = useState<string>("Inicio");

    const handleActiveLink = (linkName: string): void => {
        setIsActiveLink(linkName);
    };

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto justify-content-center text-center">
                        <li className="nav-item">
                            <Link
                                to="#developer" // Cambié "to" por "#developer"
                                className={`navbar-item ${isActiveLink === "Inicio" ? "active" : ""} text-white`}
                                onClick={() => {
                                    handleActiveLink("Inicio");
                                    window.scrollTo({ top: document.getElementById("developer")?.offsetTop, behavior: 'smooth' }); // Desplazar a la sección "developer"
                                }}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#habilidades" // Cambié "to" por "#habilidades"
                                className={`navbar-item ${isActiveLink === "Certificaciones" ? "active" : ""} text-white`}
                                onClick={() => {
                                    handleActiveLink("Certificaciones");
                                    window.scrollTo({ top: document.getElementById("habilidades")?.offsetTop, behavior: 'smooth' }); // Desplazar a la sección "habilidades"
                                }}
                            >
                                Certificaciones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#experiencia" // Cambié "to" por "#experiencia"
                                className={`navbar-item ${isActiveLink === "Experiencia" ? "active" : ""} text-white`}
                                onClick={() => {
                                    handleActiveLink("Experiencia");
                                    window.scrollTo({ top: document.getElementById("experiencia")?.offsetTop, behavior: 'smooth' }); // Desplazar a la sección "experiencia"
                                }}
                            >
                                Experiencia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#proyectos" // Cambié "to" por "#proyectos"
                                className={`navbar-item ${isActiveLink === "Proyectos" ? "active" : ""} text-white`}
                                onClick={() => {
                                    handleActiveLink("Proyectos");
                                    window.scrollTo({ top: document.getElementById("proyectos")?.offsetTop, behavior: 'smooth' }); // Desplazar a la sección "proyectos"
                                }}
                            >
                                Proyectos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;