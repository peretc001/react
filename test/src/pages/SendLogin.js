import sendEmail from "../assets/icons/send-email.svg";
import Button from "../components/common/Button";

const SendLogin = () => {
    return (
        <div className="page forgot-password">
            <div className="icon">
                <img src={sendEmail} alt=""/>
            </div>
            <h1>Письмо отправлено</h1>
            <p>На указанный вами e-mail было отправлено письмо для смены пароля</p>

            <Button url="/" name="Вернуться на главную" type="btn-accent"/>

        </div>
    );
};

export default SendLogin;
