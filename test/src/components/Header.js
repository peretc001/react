import logo from '../assets/LiveDune.svg'
import Button from "./Button";

function Header() {
    return (
        <header className="header">
            <a href="/" className="logo">
                <img src={logo} alt="LiveDune"/>
            </a>

            <p className="signup">У вас нет аккаунта?</p>
            <Button name="Регистрация" url="/signup"/>
        </header>
    );
}

export default Header;
