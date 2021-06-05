import React from 'react';
import SocialButtons from "../components/common/SocialButtons";
import SignupForm from "../components/forms/SignupForm";

const Signup = () => {
    return (
        <div className="page">
            <h1>Регистрация</h1>
            <p>Зарегистрируйся и получи доступ к аналитике аккаунтов</p>

            <SocialButtons/>

            <p className="divider">или</p>

            <SignupForm/>
        </div>
    );
};

export default Signup;
