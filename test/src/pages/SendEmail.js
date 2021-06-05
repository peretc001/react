import SendEmailForm from "../components/forms/SendEmailForm";

const SendEmail = () => {
    return (
        <div className="page confirm send-email">
            <h1>Мне не пришло письмо</h1>
            <div className="description">
                <p>Письмо может прийти с задержкой в 5-10 минут.</p>
                <p>Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку <a href="mailto:support@livedune.ru">support@livedune.ru</a> и мы активируем ваш аккаунт.</p>
            </div>

            <div className="form-wrapper">
                <SendEmailForm/>
            </div>
        </div>
    );
};

export default SendEmail;
