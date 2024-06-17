import Contact from "../fragments/Contact";
import "../../css/index.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="contenido text-center">
                <Contact />
            </div>

            <div className="copyright">
                <p>Copyright © 2021 Gonzalo Araya</p>
            </div>
        </footer>
    )
}

export default Footer;