const Programming: React.FC = () => {
    return (
        <>
            <div className="frameworks">
                <h3>Frameworks</h3>
                <img src="/icon/spring-boot-logo.png" alt="logo de spring boot" />
                <img src="/icon/flask.jpg" alt="logo de flask" />
                <img src="/icon/express.png" alt="logo de express js" />
                <img src="/icon/nextjs.png" alt="logo de next js" />
            </div>

            <div className="programacion">
                <h3>Lenguajes de Programación</h3>

                <div className="especialidades">
                    <div className="backend">
                        <h5>Backend</h5>
                        <img src="/icon/java.png" alt="logo java" />
                        <img src="/icon/python.png" alt="logo python" />
                        <img src="/icon/node js.png" alt="logo node" />
                    </div>

                    <div className="frontend">
                        <h5>Frontend</h5>
                        <img src="/icon/html.png" alt="logo html" />
                        <img src="/icon/css.png" alt="logo css" />
                        <img src="/icon/javascript.png" alt="logo javascript" />
                        <img src="/icon/typescript.png" alt="logo typescript" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Programming;