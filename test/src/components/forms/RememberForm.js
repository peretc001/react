import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";
import { useHistory } from "react-router-dom";

const RememberForm = () => {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isValidEmail, setValidEmail] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()

        email === 'example@example.com' ? setError(false) : setError(true)
        email === 'example@example.com' ? redirectToPage('/send-login') : console.log('false')
    }

    const redirectToPage = (url) => history.push(url)

    const getValue = (value) => setEmail(value)

    const checkValidateEmail = (value) => setValidEmail(value)

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                <div className="form-group">
                    {error ? <span className="error">Возможно вы ошиблись в указании почтового сервиса</span> : ''}
                    <TextField type="email" name="login" value={email} placeholder="Email" validateType="email" onValidate={checkValidateEmail} getValue={getValue}/>
                </div>

                <Button name="Восстановить пароль" type="btn-accent" icon="" disabled={!isValidEmail}/>

                <div className="back">
                    <Button url="/" name="Отменить" type="btn-text grey"/>
                </div>
            </form>
        </div>
    );
};

export default RememberForm;
