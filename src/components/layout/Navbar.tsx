import { Link } from "react-router-dom";
import '../../css/navbar.css';
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";

const Navbar: React.FC = () => {
    const [isActiveLink, setIsActiveLink] = useState<string>("Home");

    const handleActiveLink = (linkName: string): void => {
        setIsActiveLink(linkName);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><IoLogoReact /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto justify-content-center text-center"> {/* Alineación horizontal en el centro */}
                        <li className="nav-item">
                            <Link to="/" className={`navbar-item ${isActiveLink === "Home" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Home")}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/certifications" className={`navbar-item ${isActiveLink === "Certifications" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Certifications")}
                            >
                                Certifications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`navbar-item ${isActiveLink === "About" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("About")}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/videos" className={`navbar-item ${isActiveLink === "Videos" ? "active" : ""} text-white`}
                                onClick={() => handleActiveLink("Videos")}
                            >
                                Videos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;