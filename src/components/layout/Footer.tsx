import Contact from "../fragments/Contact";
import "../../css/index.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            footer
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contacto is-flex is-justify-content-center">
                            <div className="contenido">
                                <Contact />
                            </div>
                        </div>
                        <div className="copyright">
                            <p>Copyright © 2021 Gonzalo Araya</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;