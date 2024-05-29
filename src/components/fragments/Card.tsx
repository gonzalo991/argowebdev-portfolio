const Card: React.FC = () => {
    return (
        <>
            <div className="card"
                style={{ height: "25%", width: "75%"}} // pasar al css
            >
                <div className="card-image">
                    <figure className="image"
                    >
                        <img
                            src="https://imgs.search.brave.com/ARf-PXQYvaMXDkMjycSuxGL9wcLOyhRoUoRTGFX9qmQ/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5m/cnNyLnV0bi5lZHUu/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDMvMDMtUHJv/Z0RlY29TbXJ0Lmpw/Zw"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img
                                    src="https://bulma.io/assets/images/placeholders/96x96.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">Oscar Gonzalo Araya</p>
                            <p className="subtitle is-6">@programador fullstack</p>
                        </div>
                    </div>

                    <div className="content" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item">
                        <span>
                            Ir a
                            <a href="https://twitter.com/codinghorror/status/506010907021828096">
                                Github
                            </a>
                        </span>
                    </p>
                    <p className="card-footer-item">
                        <span> Ir a <a href="#">LinkedIn</a> </span>
                    </p>
                </footer>
            </div>

        </>
    )
}

export default Card;