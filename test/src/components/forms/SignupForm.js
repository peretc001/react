import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";

const SignupForm = () => {
    const [user, setUser] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)
    const [promoCode, showPromoCode] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()
        console.log('done')
    }

    const checkValidateUser = (value) => setUser(value)
    const checkValidateEmail = (value) => setEmail(value)
    const checkValidatePassword = (value) => setPassword(value)

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                <div className="form-group">
                    <TextField type="text" name="user" placeholder="Имя" validateType="length" onValidate={checkValidateUser}/>
                </div>
                <div className="form-group">
                    <TextField type="email" name="login" placeholder="Email" validateType="email" onValidate={checkValidateEmail}/>
                </div>
                <div className="form-group">
                    <TextField type="password" name="password" placeholder="Пароль" validateType="password" onValidate={checkValidatePassword}/>
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
        </div>
    );
};

export default SignupForm;
