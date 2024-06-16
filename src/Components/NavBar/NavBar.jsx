import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";

export default function NavBar() {
    return (
        <nav id="nav-container">
            <ul id="links-container">
                <img src={logo} className="logo" alt="logo sims" />

                <Link className="link" to="/Simflouz">
                    Simflouz
                </Link>

                <Link className="link" to="/Personnage">
                    Personnage
                </Link>

                <Link className="link" to="/Construction">
                    Construction
                </Link>

                <Link className="link" to="/Like">
                    💙
                </Link>
            </ul>
        </nav>
    );
}
