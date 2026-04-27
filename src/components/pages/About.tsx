import "../../css/index.css";

const About: React.FC = () => {
    return (
        <div className="container has-text-centered" style={{ maxWidth: "800px" }}>
            <h2 className="title has-text-centered"
                style={{
                    color: "#60a5fa",
                    letterSpacing: "0.5px"
                }}
            >
                About me
            </h2>

            <p style={{ color: "#d1d5db", marginBottom: "1rem" }}>
                I focus on solving real product problems, not just building features.
            </p>

            <p style={{ color: "#9ca3af", marginBottom: "1rem" }}>
                My work usually involves improving existing systems — reducing latency,
                fixing architectural issues, and making applications more reliable in production.
            </p>

            <p style={{ color: "#9ca3af" }}>
                I enjoy taking unclear requirements and turning them into clean,
                maintainable backend solutions that scale with real usage.
            </p>

        </div>
    );
};

export default About;