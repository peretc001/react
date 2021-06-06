import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";

const LoginForm = () => {
    const [result, setResult] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [wrongEmail, setWrongEmail] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [isValidEmail, setValidEmail] = useState(false)
    const [isValidPassword, setValidPassword] = useState(false)

    const sendForm = async (e) => {
        e.preventDefault()

        await setWrongEmail(email !== 'example@example.com')
        await setWrongPassword(password !== 'password2021')

        setResult(email === 'example@example.com' && password === 'password2021')
    }

    const getEmail = (value) => setEmail(value)
    const getPassword = (value) => setPassword(value)

    const checkValidateEmail = (value) => setValidEmail(value)
    const checkValidatePassword = (value) => setValidPassword(value)

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                {result ? <div className="done">Здравствуйте!!!</div> : ''}
                <div className="form-group">
                    <TextField type="email" name="login" value={email} placeholder="Email" validateType="email"
                               onValidate={checkValidateEmail} getValue={getEmail}/>
                </div>
                <div className="form-group">
                    <TextField type="password" name="password" value={password} placeholder="Пароль"
                               validateType="length" onValidate={checkValidatePassword} getValue={getPassword}/>
                </div>

                {wrongEmail || wrongPassword ? <span className="login-error">Неверный е-mail или пароль</span> : ''}
                <Button name="Войти в аккаунт" type="btn-accent" icon="" disabled={!(isValidEmail && isValidPassword)}/>

                <div className="remember">
                    <Button url="/remember" name="Забыли пароль?" type="btn-text" icon=""/>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
