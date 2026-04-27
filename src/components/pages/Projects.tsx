import "../../css/index.css";
import Card from "../fragments/Card";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
    return (
        <section className="section" style={{ paddingTop: "2rem" }}>
            <div className="container">

                {/* HEADER */}
                <div className="has-text-centered mb-5">
                    <h2
                        className="title is-3"
                        style={{
                            color: "#38bdf8",
                            marginBottom: "0.5rem"
                        }}
                    >
                        Selected Work
                    </h2>

                    <div
                        style={{
                            width: "50px",
                            height: "2px",
                            background: "#38bdf8",
                            margin: "0.5rem auto"
                        }}
                    />

                    <p
                        style={{
                            color: "#9ca3af",
                            maxWidth: "520px",
                            margin: "0.75rem auto 0",
                            fontSize: "0.95rem"
                        }}
                    >
                        Backend-focused systems built for real production use,
                        optimized for performance, scalability and business impact.
                    </p>
                </div>

                {/* GRID DESKTOP / SLIDER MOBILE */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.25rem",
                        alignItems: "stretch"
                    }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            style={{
                                transition: "transform 0.2s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <Card {...project} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;