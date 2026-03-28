const Abilities: React.FC = () => {
    return (
        <section className="section">
            <div className="container">

                {/* HEADER */}
                <div className="has-text-centered mb-6">
                    <h2
                        className="title is-3"
                        style={{ color: "#38bdf8" }}
                    >
                        Technical Strengths
                    </h2>

                    <div style={{
                        width: "60px",
                        height: "2px",
                        background: "#3b82f6",
                        margin: "10px auto 0"
                    }} />

                    <p
                        className="is-size-6 mt-3"
                        style={{ color: "#9ca3af" }}
                    >
                        Core technologies and principles I use to build scalable,
                        production-ready systems.
                    </p>
                </div>

                {/* GRID */}
                <div className="columns is-multiline">

                    {/* FRONTEND */}
                    <div className="column is-6">
                        <div
                            className="box"
                            style={{
                                backgroundColor: "#111827",
                                height: "100%"
                            }}
                        >
                            <h3
                                className="title is-5"
                                style={{ color: "#f9fafb" }}
                            >
                                Frontend
                            </h3>

                            <p style={{ color: "#38bdf8", fontWeight: 600 }}>
                                React · Next.js · TypeScript
                            </p>

                            <p style={{ color: "#d1d5db" }}>
                                Component-based architecture, scalable state
                                management and performance optimization.
                            </p>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className="column is-6">
                        <div
                            className="box"
                            style={{
                                backgroundColor: "#111827",
                                height: "100%"
                            }}
                        >
                            <h3
                                className="title is-5"
                                style={{ color: "#f9fafb" }}
                            >
                                Backend
                            </h3>

                            <p style={{ color: "#38bdf8", fontWeight: 600 }}>
                                Node.js · Express · NestJS
                            </p>

                            <p style={{ color: "#d1d5db" }}>
                                REST APIs, authentication, modular architecture
                                and scalable server-side systems.
                            </p>
                        </div>
                    </div>

                    {/* DATABASES */}
                    <div className="column is-6">
                        <div
                            className="box"
                            style={{
                                backgroundColor: "#111827",
                                height: "100%"
                            }}
                        >
                            <h3
                                className="title is-5"
                                style={{ color: "#f9fafb" }}
                            >
                                Databases
                            </h3>

                            <p style={{ color: "#38bdf8", fontWeight: 600 }}>
                                MongoDB · PostgreSQL
                            </p>

                            <p style={{ color: "#d1d5db" }}>
                                Data modeling, indexing strategies and query
                                optimization for high performance.
                            </p>
                        </div>
                    </div>

                    {/* DEVOPS */}
                    <div className="column is-6">
                        <div
                            className="box"
                            style={{
                                backgroundColor: "#111827",
                                height: "100%"
                            }}
                        >
                            <h3
                                className="title is-5"
                                style={{ color: "#f9fafb" }}
                            >
                                DevOps & Tools
                            </h3>

                            <p style={{ color: "#38bdf8", fontWeight: 600 }}>
                                Docker · Git · CI/CD
                            </p>

                            <p style={{ color: "#d1d5db" }}>
                                Containerization, deployment pipelines and
                                production environment management.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Abilities;