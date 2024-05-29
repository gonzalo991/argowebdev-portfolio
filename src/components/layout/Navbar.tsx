import { Link } from "react-router-dom";
import '../../css/navbar.css';
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isActiveLink, setIsActiveLink] = useState<string>("Home");

    const handleIsOpen = (): void => {
        setIsOpen(!isOpen);
    }

    const handleActiveLink = (linkName: string): void => {
        setIsActiveLink(linkName);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/**
                <div className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo" />
                </div>
    */}
                <a role="button" className={`navbar-burger ${isOpen ? "is-active" : ""}`} aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample"
                    onClick={handleIsOpen}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>


            <div id="navbarBasicExample" className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link to="/" className={`navbar-item ${isActiveLink === "Home" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Home")}
                    >
                        Home
                    </Link>

                    <Link to="/about" className={`navbar-item ${isActiveLink === "About" ? "active" : ""}`}
                        onClick={() => handleActiveLink("About")}
                    >
                        About
                    </Link>

                    <Link to="/abilities" className={`navbar-item ${isActiveLink === "Abilities" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Abilities")}
                    >
                        Backup
                    </Link>

                    <Link to="/videos" className={`navbar-item ${isActiveLink === "Videos" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Videos")}
                    >
                        Videos
                    </Link>

                    <Link to="/projects" className={`navbar-item ${isActiveLink === "Projects" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Projects")}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;