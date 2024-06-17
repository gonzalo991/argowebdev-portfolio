import { CardProps } from "../../interfaces/CardProps";
import "../../css/card.css";
import { GrGithub } from "react-icons/gr";
import { GrLink } from "react-icons/gr";
import { Link } from "react-router-dom";


const Card: React.FC<CardProps> = (props) => {
    const { title, description, imageUrl, githubLink, githubLinkBackend, projectLink } = props;

    return (
        <div className="card tarjeta">
            <div className="card-image mb-5">
                <figure className="image">
                    <img className="card-img" src={imageUrl} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                </div>
            </div>
            {(githubLink || projectLink) && (
                <footer className="card-footer">
                    {githubLink && (
                        <p className="card-footer-item">
                            <span>
                                <p className="icon-titulo">Front</p>
                                <Link target="_blank" className="github-boton" to={githubLink}><GrGithub className="github-boton-icon" /></Link>
                            </span>
                        </p>
                    )}
                    {githubLinkBackend && (
                        <p className="card-footer-item">
                            <span>
                                <p className="icon-titulo">Back</p>
                                <Link target="_blank" className="github-boton" to={githubLinkBackend}><GrGithub className="github-boton-icon" /></Link>
                            </span>
                        </p>
                    )}
                    {projectLink && (
                        <p className="card-footer-item">
                            <span>
                                <p className="icon-titulo">Link</p>
                                <Link target="_blank" className="github-boton" to={projectLink}><GrLink className="github-boton-icon" /></Link>
                            </span>
                        </p>
                    )}
                </footer>
            )}
        </div>
    );
};

export default Card;