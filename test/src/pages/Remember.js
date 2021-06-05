import remember from '../assets/icons/remember.svg'
import RememberForm from "../components/forms/RememberForm";

const Remember = () => {
    return (
        <div className="page forgot-password">
            <div className="icon">
                <img src={remember} alt=""/>
            </div>
            <h1>Восстановить пароль</h1>
            <p>Введите e-mail, на который регистрировались ранее</p>

            <RememberForm/>
        </div>
    )
}

export default Remember;
