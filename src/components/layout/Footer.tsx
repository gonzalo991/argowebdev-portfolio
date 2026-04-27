import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                backgroundColor: "#0f172a",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "2rem 0"
            }}
        >
            <div className="container">

                <div className="columns is-vcentered">

                    {/* LEFT */}
                    <div className="column is-6 has-text-centered-mobile">
                        <p style={{ color: "#f9fafb", fontWeight: 600 }}>
                            Gonzalo Araya
                        </p>

                        <p style={{ color: "#9ca3af", fontSize: "0.85rem" }}>
                            Backend Engineer — Node.js • PostgreSQL • APIs
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="column is-6 has-text-right has-text-centered-mobile">

                        <a
                            href="https://github.com/gonzalo991"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginRight: "1rem", color: "#d1d5db" }}
                        >
                            <GrGithub size={18} />
                        </a>

                        <a
                            href="https://linkedin.com/in/gonzalo-araya-416a6520b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#d1d5db" }}
                        >
                            <GrLinkedin size={18} />
                        </a>

                    </div>
                </div>

                {/* BOTTOM */}
                <div className="has-text-centered mt-4">
                    <p style={{ color: "#6b7280", fontSize: "0.75rem" }}>
                        © {new Date().getFullYear()} All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;