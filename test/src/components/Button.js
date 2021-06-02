const Button = (props) => {
    return (
        <div>
            {
            !!props.url
                ? <a href={props.url} className="btn btn-accent">{props.name}</a>
                : <button className="btn btn-accent">{props.name}</button>
            }
        </div>
    );
};

export default Button;
