import logo from '../assets/logo.svg'
import Button from "./buttons/Button";

function Header() {
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="LiveDune"/>
            </a>

            <p className="signup">У вас нет аккаунта?</p>
            <Button url="/signup" name="Регистрация" type="btn-accent"/>
        </header>
    );
}

export default Header;
