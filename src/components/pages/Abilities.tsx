import React from "react";

interface TechCategory {
    title: string;
    items: string[];
    highlight?: boolean;
}

const Abilities: React.FC = () => {
    const sections: TechCategory[] = [
        {
            title: "Backend",
            items: ["Node.js", "NestJS", "Express", "REST APIs"],
            highlight: true
        },
        {
            title: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind"]
        },
        {
            title: "Databases",
            items: ["PostgreSQL", "MongoDB"]
        },
        {
            title: "DevOps & Cloud",
            items: ["Docker", "CI/CD", "GCP", "Git"]
        }
    ];

    return (
        <section className="section">
            <div className="container" style={{ maxWidth: "850px" }}>

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
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "16px",
                        width: "100%"
                    }}
                >
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: "#111827",
                                padding: "1.2rem 1rem",
                                borderRadius: "10px",
                                border: section.highlight
                                    ? "1px solid rgba(56, 189, 248, 0.35)"
                                    : "1px solid rgba(255, 255, 255, 0.05)",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "all 0.2s ease"
                            }}
                        >
                            {/* TITLE */}
                            <p
                                style={{
                                    color: section.highlight ? "#38bdf8" : "#f9fafb",
                                    fontWeight: 600,
                                    marginBottom: "12px",
                                    fontSize: "0.95rem",
                                    letterSpacing: "0.01em"
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
                                    gap: "6px"
                                }}
                            >
                                {section.items.map((item, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            backgroundColor: "#1f2937",
                                            color: "#e5e7eb",
                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                            fontSize: "0.78rem",
                                            padding: "4px 9px",
                                            borderRadius: "6px",
                                            lineHeight: "1.3"
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