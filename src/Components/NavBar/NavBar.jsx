import "./NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../Assets/img/logo.png";

export default function NavBar() {
    return (
        <nav id="nav-container">
            <ul id="links-container">
                <img
                    src={
                        "https://upload.wikimedia.org/wikipedia/fr/thumb/3/34/Les_Sims_4_Logo.png/1200px-Les_Sims_4_Logo.png"
                    }
                    className="logo"
                    alt="logo sims"
                />

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
