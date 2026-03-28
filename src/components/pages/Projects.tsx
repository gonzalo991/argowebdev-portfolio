import Card from "../fragments/Card";
import { projects } from "../data/projects";
import "../../css/index.css";

const Projects: React.FC = () => {
    return (
        <>
            <h2 className="title has-text-centered"
                style={{
                    color: "#60a5fa",
                    letterSpacing: "0.5px"
                }}
            >
                Selected Work
            </h2>

            <div style={{
                width: "60px",
                height: "2px",
                background: "#3b82f6",
                margin: "10px auto 0"
            }} />

            <p className="has-text-centered mt-3">
                Production-ready applications with real-world usage and scalable architecture
            </p>

            <div className="columns is-multiline m-5">
                {projects.map((project, idx) => (
                    <div className="column is-6" key={idx}>
                        <Card {...project} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;