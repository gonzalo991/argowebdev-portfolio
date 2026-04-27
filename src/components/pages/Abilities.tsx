const Abilities: React.FC = () => {
    const sections = [
        {
            title: "Backend",
            items: ["Node.js", "NestJS", "Express"],
            highlight: true
        },
        {
            title: "Frontend",
            items: ["React", "Next.js"]
        },
        {
            title: "Databases",
            items: ["PostgreSQL", "MongoDB"]
        },
        {
            title: "DevOps",
            items: ["Docker", "CI/CD", "GCP"]
        }
    ];

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: "800px" }}>

                {/* HEADER */}
                <div className="has-text-centered mb-5">
                    <h2 className="title is-3" style={{ color: "#38bdf8" }}>
                        Technical Stack
                    </h2>

                    <p
                        className="is-size-6 mt-2"
                        style={{
                            color: "#9ca3af",
                            maxWidth: "500px",
                            margin: "0 auto"
                        }}
                    >
                        Technologies I use to build and scale real-world applications
                    </p>
                </div>

                {/* GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                        gap: "20px",
                        justifyItems: "center"
                    }}
                >

                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            style={{
                                textAlign: "center",
                                width: "100%",
                                maxWidth: "180px"
                            }}
                        >
                            {/* TITLE */}
                            <p
                                style={{
                                    color: section.highlight ? "#38bdf8" : "#f9fafb",
                                    fontWeight: 600,
                                    marginBottom: "8px",
                                    fontSize: "0.9rem"
                                }}
                            >
                                {section.title}
                            </p>

                            {/* TAGS */}
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    gap: "6px",
                                    minHeight: "24px"
                                }}
                            >
                                {section.items.map((item, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            backgroundColor: "#1f2937",
                                            color: "#d1d5db",
                                            border: "1px solid #374151",
                                            fontSize: "0.75rem",
                                            padding: "4px 8px",
                                            borderRadius: "6px"
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Abilities;