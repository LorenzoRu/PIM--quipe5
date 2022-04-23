import Logo from "../logo";
import { Link } from "react-router-dom";
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <div>
                <Logo className="logo" />
            </div>
            <Link to="/login">
                <img src="/img/profil.svg" alt="profil" className="profil" />
            </Link>
        </header>
    )
}