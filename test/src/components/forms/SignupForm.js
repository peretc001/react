import Button from "../common/Button";
import LoginForm from "../components/forms/LoginForm";

const SignupForm = () => {
    return (
        <div className="login">
            <h1>Войти</h1>
            <p>Добро пожаловать, рады видеть вас снова 👋</p>

            <div className="social">
                <Button icon="facebook" name="Войти через Facebook" type="btn-outline btn-with-icon"/>
                <Button icon="google" name="Войти через Google" type="btn-outline btn-with-icon"/>
            </div>

            <p>или</p>

            <LoginForm/>
        </div>
    );
};

export default SignupForm;
