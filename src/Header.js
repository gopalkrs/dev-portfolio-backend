import Profile from "./images/profile.svg";
import "./styles/Header.css";

function Header() {
    return (
        <div className="header-container">
            <h1 className="header-main-tag">The Developer Profile</h1>
            <div className="header-image-container">
                <img className="header-image" src={Profile} alt="background" />
            </div>
        </div>
   );
}
export default Header;