
import Logo from "../logo";
import Profile from "../profile/profile";
import './style.css'

export default function Header() {
    return (
        <header className="header">
            <div>
                <Logo className="logo" />
            </div>
            <Profile />
            
        </header>
    )
}