import Button from "./Button";

const SocialButtons = () => {
    return (
        <div className="social">
            <Button icon="facebook" name="Войти через Facebook" type="btn-outline btn-with-icon"/>
            <Button icon="google" name="Войти через Google" type="btn-outline btn-with-icon"/>
        </div>
    );
};

export default SocialButtons;
