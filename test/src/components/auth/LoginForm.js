import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()
        console.log('done')
    }

    const checkValidateEmail = (value) => setEmail(value)
    const checkValidatePassword = (value) => setPassword(value)

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                <div className="form-group">
                    <TextField type="email" name="login" placeholder="Email" validateType="email" onValidate={checkValidateEmail}/>
                </div>
                <div className="form-group">
                    <TextField type="password" name="password" placeholder="Пароль" validateType="password" onValidate={checkValidatePassword}/>
                </div>

                <Button name="Войти в аккаунт" type="btn-accent" icon="" disabled={!(email && password)}/>

                <div className="remember">
                    <Button url="/remember" name="Забыли пароль?" type="btn-text" icon=""/>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
