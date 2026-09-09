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

            <p style={{ color: "#d1d5db", marginBottom: "1rem", fontSize: "1.1rem" }}>
                I bridge the gap between business requirements and production-ready software, 
                delivering end-to-end applications built for stability and scalability.
            </p>

            <p style={{ color: "#9ca3af", marginBottom: "1rem" }}>
                My technical core centers on Clean Architecture, domain-driven backend design with NestJS, 
                and responsive frontends with Next.js. I focus on writing maintainable code, 
                optimizing database performance (SQL/NoSQL), and automating deployments with Docker and GCP.
            </p>

            <p style={{ color: "#9ca3af" }}>
                Whether integrating complex third-party services, handling IoT/NFC workflows, 
                or establishing security protocols, I prioritize pragmatic solutions that simplify long-term software maintenance.
            </p>

        </div>
    );
};

export default About;