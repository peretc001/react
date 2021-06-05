import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";

const LoginForm = () => {
    //TODO: Доделать
    const [validForm, setValidate] = useState(false)
    const [required, updateRequired] = useState({
        email: false,
        password: false
    })

    const sendForm = (e) => {
        e.preventDefault()
        console.log('done')
    }

    // Поднимаем наверх
    const checkValidate = (value) => updateRequired(required[value.type] = value.isValid)

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                <div className="form-group">
                    <TextField type="email" name="login" placeholder="Email" validateType="email" onValidate={checkValidate}/>
                </div>
                <div className="form-group">
                    <TextField type="password" name="password" placeholder="Пароль" validateType="password" onValidate={checkValidate}/>
                </div>

                <Button name="Войти в аккаунт" type="btn-accent" icon="" disabled={!validForm}/>
            </form>
        </div>
    );
};

export default LoginForm;
