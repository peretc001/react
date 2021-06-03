import Button from "../common/Button";
import TextField from "../common/TextField";

const Login = () => {
    return (
        <div className="login">
            <h1>Войти</h1>
            <p>Добро пожаловать, рады видеть вас снова 👋</p>

            <div className="social">
                <Button icon="facebook" name="Войти через Facebook" type="btn-outline btn-with-icon"/>
                <Button icon="google" name="Войти через Google" type="btn-outline btn-with-icon"/>
            </div>

            <p>или</p>

            <form action="" className="form">
                <div className="form-group">
                    <TextField type="email" name="login" placeholder="Email" validate="email"/>
                </div>
                <div className="form-group">
                    <TextField type="password" name="password" placeholder="Пароль" validate="password"/>
                </div>

                <Button name="Войти в аккаунт" type="btn-accent"/>
            </form>
        </div>
    );
};

export default Login;
