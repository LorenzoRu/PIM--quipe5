
import { Link } from "react-router-dom";
import Logo from "../logo";
import Profile from "../profile/profile";
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <div>
                <Link to="/"><Logo className="logo" /></Link>
                
            </div>
            <Profile />
            
        </header>
    )
}