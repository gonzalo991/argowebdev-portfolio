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
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.2s ease"
            }}
        >
            {/* IMAGE */}
            <div className="card-image">
                <figure className="image is-4by3">
                    <img
                        src={imageUrl}
                        alt={title}
                        style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%"
                        }}
                    />
                </figure>
            </div>

            {/* CONTENT */}
            <div
                className="card-content"
                style={{
                    padding: "0.9rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    flexGrow: 1  
                }}
            >
                {/* TITLE */}
                <p
                    className="title is-6"
                    style={{
                        color: "#f9fafb",
                        marginBottom: "0.25rem"
                    }}
                >
                    {title}
                </p>

                {/* DESCRIPTION */}
                <div
                    style={{
                        color: "#d1d5db",
                        fontSize: "0.85rem",
                        lineHeight: "1.4",
                        whiteSpace: "pre-line",
                        maxHeight: "120px",
                        overflow: "hidden"
                    }}
                >
                    {description}
                </div>
            </div>

            {/* FOOTER */}
            <footer
                className="card-footer"
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)"
                }}
            >
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{
                            color: "#38bdf8",
                            fontSize: "0.85rem"
                        }}
                    >
                        <span className="icon mr-1">
                            <GrGithub />
                        </span>
                        Code
                    </a>
                )}

                {githubLinkBackend && (
                    <a
                        href={githubLinkBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{
                            color: "#38bdf8",
                            fontSize: "0.85rem"
                        }}
                    >
                        <span className="icon mr-1">
                            <GrGithub />
                        </span>
                        API
                    </a>
                )}

                {projectLink && (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-footer-item"
                        style={{
                            color: "#22c55e",
                            fontSize: "0.85rem"
                        }}
                    >
                        <span className="icon mr-1">
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