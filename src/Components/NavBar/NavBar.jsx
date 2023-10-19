import "./NavBar.scss"
import logo from "../../Assets/img/logo.png"

export default function NavBar() {
    return (
        <nav id="nav-container">
            <ul id="links-container">
                <img src={logo} className="logo" alt="logo sims" />

                <a className="link" href="/Douze/Simflouz" >
                    Simflouz
                </a>

                <a className="link" href="/Douze/Personnage" >
                    Personnage
                </a>

                <a className="link" href="/Douze/Construction" >
                    Construction
                </a>
            </ul>
        </nav>
    )
}