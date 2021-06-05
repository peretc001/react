import Button from "../components/common/Button";

const Confirm = () => {
    return (
        <div className="page confirm">
            <h1>Подтвердите ваш e-mail</h1>
            <p>Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа. </p>
            <Button url="/" name="Перейти к почте" type="btn-accent"/>

            <div className="remember">
                <Button url="/send-email" name="Мне не пришло письмо" type="btn-text"/>
            </div>
        </div>
    );
};

export default Confirm;
