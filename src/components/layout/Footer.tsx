const Footer: React.FC = () => {
    return (
        <footer
            className="footer"
            style={{
                backgroundColor: "#0f172a",
                borderTop: "1px solid rgba(255,255,255,0.05)"
            }}
        >
            <div className="content has-text-centered">

                <p
                    className="mb-2"
                    style={{ color: "#f9fafb" }}
                >
                    <strong style={{ color: "#38bdf8" }}>
                        Gonzalo Araya
                    </strong>{" "}
                    — Fullstack Engineer
                </p>

                <p
                    className="is-size-7"
                    style={{ color: "#9ca3af" }}
                >
                    © {new Date().getFullYear()} All rights reserved
                </p>

                <div className="mt-4">

                    <a
                        href="https://github.com/gonzalo991"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            marginRight: "1rem",
                            color: "#d1d5db",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#38bdf8";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gonzalo-araya-416a6520b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#d1d5db",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#38bdf8";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#d1d5db";
                        }}
                    >
                        LinkedIn
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;