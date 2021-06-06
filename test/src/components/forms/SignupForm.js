import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";
import { useHistory } from "react-router-dom";

const SignupForm = () => {
    const history = useHistory();

    const [user, setUser] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)
    const [promoCode, showPromoCode] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()

        user && email && password ? redirectToPage('/confirm') : console.log('false')
    }

    const redirectToPage = (url) => history.push(url)

    const checkValidateUser = (value) => setUser(value)
    const checkValidateEmail = (value) => setEmail(value)
    const checkValidatePassword = (value) => setPassword(value)

    return (
        <form action="" className="form" onSubmit={sendForm}>
            <div className="form-group">
                <TextField type="text" name="user" placeholder="Имя" validateType="length" onValidate={checkValidateUser}/>
            </div>
            <div className="form-group">
                <TextField type="email" name="login" placeholder="Email" validateType="email" onValidate={checkValidateEmail}/>
            </div>
            <div className="form-group">
                <TextField type="password" name="password" placeholder="Пароль" validateType="length" onValidate={checkValidatePassword}/>
            </div>

            {promoCode
                ?
                    <div className="form-group">
                        <TextField type="text" name="promo" placeholder="Промокод"/>
                    </div>
                :
                    <div className="promo">
                        <span className="btn btn-text" onClick={() => showPromoCode(true)}>У меня есть промокод</span>
                    </div>
            }

            <Button name="Создать аккаунт" type="btn-accent" icon="" disabled={!(user && email && password)}/>

            <div className="policy">
                <p>Создавая аккаунт, я согласен с <Button url="/policy" name="условиями оферты" type="btn-text" icon=""/></p>
            </div>
        </form>
    );
};

export default SignupForm;
