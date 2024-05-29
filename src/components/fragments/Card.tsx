import { CardProps } from "../../interfaces/CardProps";

const Card: React.FC<CardProps> = (props) => {
    const { title, subtitle, description, imageUrl, githubLink, linkedinLink } = props;

    return (
        <div className="card" style={{ height: "25%", width: "75%" }}>
            <div className="card-image">
                <figure className="image">
                    <img src={imageUrl} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{subtitle}</p>
                    </div>
                </div>

                <div className="content">
                    {description}
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            {(githubLink || linkedinLink) && (
                <footer className="card-footer">
                    {githubLink && (
                        <p className="card-footer-item">
                            <span>
                                Ir a <a href={githubLink}>Github</a>
                            </span>
                        </p>
                    )}
                    {linkedinLink && (
                        <p className="card-footer-item">
                            <span> Ir a <a href={linkedinLink}>LinkedIn</a> </span>
                        </p>
                    )}
                </footer>
            )}
        </div>
    );
};

export default Card;