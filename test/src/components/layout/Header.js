import logo from '../../assets/logo.svg'
import Button from "../common/Button";
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="LiveDune"/>
            </Link>

            <p className="signup">У вас нет аккаунта?</p>
            <Button url="/signup" name="Регистрация" type="btn-accent"/>
        </header>
    );
}

export default Header;
