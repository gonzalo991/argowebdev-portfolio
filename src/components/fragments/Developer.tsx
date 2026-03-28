import { GrGithub, GrLinkedin } from "react-icons/gr";
import mifoto from "../img/mifoto.png";
import curriculum from "../files/CvGonzaloAraya.pdf";

const Developer: React.FC = () => {
    return (
        <section
            className="hero is-fullheight-with-navbar"
            style={{ backgroundColor: "#0f172a" }}
        >
            <div className="hero-body">
                <div className="container">

                    <div className="columns is-vcentered is-variable is-8">

                        {/* TEXTO */}
                        <div className="column is-6-desktop is-12-mobile has-text-centered-mobile">

                            <h1 className="title is-2-mobile is-1-desktop mt-5" style={{ color: "#f9fafb" }}>
                                Fullstack Engineer
                            </h1>

                            <h2
                                className="subtitle mt-4 is-5-mobile is-4-desktop"
                                style={{
                                    color: "#d1d5db",
                                    maxWidth: "520px",
                                    margin: "0 auto"
                                }}
                            >
                                Building scalable production systems with{" "}
                                <strong style={{ color: "#38bdf8" }}>
                                    React, Next.js and Node.js
                                </strong>
                            </h2>

                            <p
                                className="mt-4"
                                style={{
                                    color: "#9ca3af",
                                    maxWidth: "520px",
                                    margin: "0 auto"
                                }}
                            >
                                Focused on clean architecture, performance optimization
                                and delivering real-world applications used in production.
                            </p>


                            {/* BOTONES */}
                            <div className="buttons mt-5 is-centered is-justify-content-flex-start-desktop">

                                {/* PRIMARY */}
                                <a
                                    href={curriculum}
                                    download
                                    className="button is-medium is-fullwidth-mobile"
                                    style={{
                                        backgroundColor: "#38bdf8",
                                        color: "#0f172a",
                                        fontWeight: 600,
                                        border: "none",
                                        minWidth: "220px",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#0ea5e9";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "#38bdf8";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    Download CV
                                </a>

                                {/* SECONDARY */}
                                <a
                                    href="#proyectos"
                                    className="button is-medium is-fullwidth-mobile"
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#f9fafb",
                                        border: "1px solid #374151",
                                        minWidth: "220px",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "#38bdf8";
                                        e.currentTarget.style.color = "#38bdf8";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "#374151";
                                        e.currentTarget.style.color = "#f9fafb";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    View Projects
                                </a>

                            </div>


                            {/* SOCIAL */}
                            <div
                                className="mt-5 is-flex is-justify-content-center is-justify-content-flex-start-desktop is-align-items-center"
                                style={{ gap: "1.25rem" }}
                            >

                                <a
                                    href="https://github.com/gonzalo991"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#d1d5db",
                                        transition: "all 0.2s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = "#38bdf8";
                                        e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#d1d5db";
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    }}
                                >
                                    <GrGithub size={24} />
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
                                        e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#d1d5db";
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    }}
                                >
                                    <GrLinkedin size={24} />
                                </a>

                            </div>
                        </div>

                        {/* IMAGEN */}
                        <div className="column is-6-desktop is-12-mobile has-text-centered mt-5-mobile">
                            <figure className="image is-inline-block">
                                <img
                                    src={mifoto}
                                    alt="Gonzalo Araya Fullstack Engineer"
                                    style={{
                                        width: "100%",
                                        maxWidth: "280px",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                                    }}
                                />
                            </figure>
                        </div>

                    </div>

                </div>
            </div>
        </section >
    );
};

export default Developer;