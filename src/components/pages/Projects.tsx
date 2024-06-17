import Card from "../fragments/Card";
import { projects } from "../data/projects";
import "../../css/index.css";

const Projects: React.FC = () => {
    return (
        <>
            <h1 className="programming-titulo">Proyectos</h1>

            <div className="proyectos-container">
                {
                    projects.map(project => {

                        const { title, description, imageUrl, githubLink, githubLinkBackend, projectLink }: {
                            title: string;
                            description: string;
                            imageUrl: string;
                            githubLink: string;
                            githubLinkBackend: string;
                            projectLink: string;
                        } = project;

                        return (
                            <Card title={title} description={description}
                                imageUrl={imageUrl} githubLink={githubLink}
                                githubLinkBackend={githubLinkBackend} projectLink={projectLink} />

                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects;