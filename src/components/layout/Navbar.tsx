import { Link } from "react-router-dom";
import '../../css/navbar.css';
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isActiveLink, setIsActiveLink] = useState<string>("Home");

    const handleActiveLink = (linkName: string): void => {
        setIsActiveLink(linkName);
    }

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto justify-content-center text-center"> {/* Alineación horizontal en el centro */}
                        <li className="nav-item">
                            <Link to="/" className={`navbar-item ${isActiveLink === "Inicio" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Inicio")}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/certificaciones" className={`navbar-item ${isActiveLink === "Certificaciones" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Certificaciones")}
                            >
                                Certificaciones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experiencia" className={`navbar-item ${isActiveLink === "Experiencia" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Experiencia")}
                            >
                                Experiencia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/proyectos" className={`navbar-item ${isActiveLink === "Proyectos" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Proyectos")}
                            >
                                Proyectos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;