import TextField from "../common/TextField";
import Button from "../common/Button";
import {useState} from "react";
import { useHistory } from "react-router-dom";

const SendEmailForm = () => {
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [isValidEmail, setValidEmail] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()

        email === 'example@example.com' ? setError(false) : setError(true)
        email === 'example@example.com' ? redirectToPage('/') : console.log('false')
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

                <Button name="Отправить  заново" type="btn-accent" icon="" disabled={!isValidEmail}/>

                <div className="back">
                    <Button url="/confirm" name="Отменить" type="btn-text grey"/>
                </div>
            </form>
        </div>
    );
};

export default SendEmailForm;
