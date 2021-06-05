import SocialButtons from "../components/common/SocialButtons";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
    return (
        <div className="page">
            <h1>Войти</h1>
            <p>Добро пожаловать, рады видеть вас снова 👋</p>

            <SocialButtons/>

            <p className="divider">или</p>

            <LoginForm/>
        </div>
    );
};

export default Login;
