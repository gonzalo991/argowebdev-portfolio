import { Link } from "react-router-dom";
import '../../css/navbar.css';
import { useState } from "react";

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isActiveLink, setIsActiveLink] = useState<string>("Home");

    const handleIsOpen = (): void => {
        setIsOpen(!isOpen);
        return;
    }

    const handleActiveLink = (linkName: string): void => {
        setIsActiveLink(linkName);
        return;
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </div>

                <a role="button" className={`navbar-burger ${isOpen ? "is-active" : ""}`} aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample"
                    onClick={handleIsOpen}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end mr-5 pr-5">
                    <Link to="/" className={`navbar-item m-3 p-2 ${isActiveLink === "Home" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Home")}
                    >
                        Home
                    </Link>

                    <Link to="/about" className={`navbar-item m-3 p-2 ${isActiveLink === "About" ? "active" : ""}`}
                        onClick={() => handleActiveLink("About")}
                    >
                        About
                    </Link>

                    <Link to="/abilities" className={`navbar-item m-3 p-2 ${isActiveLink === "Abilities" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Abilities")}
                    >
                        Backup
                    </Link>

                    <Link to="/media" className={`navbar-item m-3 p-2 ${isActiveLink === "Media" ? "active" : ""}`}
                        onClick={() => handleActiveLink("Media")}
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;