import {Link} from 'react-router-dom'

const Button = ({url, name, type, icon, disabled}) => {

    const renderImage = (icon, name) => {
        return (
            <>
                <img src={icon} alt={name}/>
                <span>{name}</span>
            </>
        )
    }

    return (
        <>
            {
            !!url
                ? <Link to={url} className={'btn ' + type}>{icon ? renderImage(icon, name) : name}</Link>
                : <button className={'btn ' + type} disabled={disabled}>{icon ? renderImage(icon, name) : name}</button>
            }
        </>
    );
};

export default Button;
