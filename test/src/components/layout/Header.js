import logo from '../../assets/logo.svg'
import Button from "../common/Button";
import {useLocation,Link} from 'react-router-dom'

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="LiveDune"/>
            </Link>

            {!location.pathname.includes('signup')
                ?
                <>
                    <p className="signup">У вас нет аккаунта?</p>
                    <Button url="/signup" name="Регистрация" type="btn-accent"/>
                </>
                :
                <>
                    <p className="signup">Уже есть аккаунт?</p>
                    <Button url="/" name="Войти" type="btn-accent"/>
                </>
            }
        </header>
    )
}

export default Header;
