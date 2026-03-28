import "../../css/index.css";

const Contact: React.FC = () => {
    const correo = 'gonxaraya991@gmail.com';
    const asunto = 'He visto tu portfolio y me interesa una reunion por meet o zoom';
    const mensaje = '';

    const handleRedactarCorreo = () => {
        window.location.href = `mailto:${correo}?subject=${asunto}&body=${mensaje}`;
    };

    return (
        <>
            <div className="buttons is-centered mt-4">
                <a className="button is-primary" onClick={handleRedactarCorreo}>
                    Contact Me
                </a>

                <a href="https://github.com/gonzalo991" target="_blank" className="button is-light">
                    GitHub
                </a>

                <a href="https://linkedin.com/in/gonzalo-araya-416a6520b/" target="_blank" className="button is-light">
                    LinkedIn
                </a>
            </div>
        </>
    )
}

export default Contact;