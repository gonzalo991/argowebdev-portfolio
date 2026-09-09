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
                <figure className="image is-16by9">
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

            {/* CONTENT (Flex Grow para estirar todas las cards por igual) */}
            <div
                className="card-content"
                style={{
                    padding: "1rem",
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

                {/* DESCRIPTION (Se adapta sin cortar líneas fijos) */}
                <div
                    style={{
                        color: "#d1d5db",
                        fontSize: "0.85rem",
                        lineHeight: "1.45",
                        whiteSpace: "pre-line",
                        flexGrow: 1
                    }}
                >
                    {description}
                </div>
            </div>

            {/* FOOTER (Pinchado abajo de todo con marginTop auto) */}
            <footer
                className="card-footer"
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    marginTop: "auto"
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