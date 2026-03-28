import { CardProps } from "../../interfaces/CardProps";
import { GrGithub, GrLink } from "react-icons/gr";

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    githubLink,
    githubLinkBackend,
    projectLink
}) => {
    return (
        <div
            className="card"
            style={{
                backgroundColor: "#111827",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}
        >
            {/* IMAGE */}
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageUrl} alt={title} />
                </figure>
            </div>

            {/* CONTENT */}
            <div className="card-content">
                <p
                    className="title is-5"
                    style={{ color: "#f9fafb" }}
                >
                    {title}
                </p>

                <div
                    className="content"
                    style={{
                        color: "#d1d5db",
                        whiteSpace: "pre-line",
                        fontSize: "0.95rem"
                    }}
                >
                    {description}
                </div>
            </div>

            {/* FOOTER */}
            <footer className="card-footer">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{ color: "#38bdf8" }}
                    >
                        <span className="icon mr-2">
                            <GrGithub />
                        </span>
                        Front
                    </a>
                )}

                {githubLinkBackend && (
                    <a
                        href={githubLinkBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{ color: "#38bdf8" }}
                    >
                        <span className="icon mr-2">
                            <GrGithub />
                        </span>
                        Back
                    </a>
                )}

                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{ color: "#22c55e" }}
                    >
                        <span className="icon mr-2">
                            <GrLink />
                        </span>
                        Live
                    </a>
                )}
            </footer>
        </div>
    );
};

export default Card;