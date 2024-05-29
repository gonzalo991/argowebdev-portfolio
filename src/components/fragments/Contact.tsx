import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
    return (
        <>
            <p><MdEmail /> Email: gonxaraya991@gmail.com</p>
            <br />
            <p> <FaGithub /></p>
            <br />
            <p><GrLinkedin /></p>
        </>
    )
}

export default Contact;