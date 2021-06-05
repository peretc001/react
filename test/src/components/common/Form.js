import TextField from "./TextField";
import Button from "./Button";
import {useState} from "react";

const Form = ({data}) => {
    const [validForm, setValidate] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()
        console.log('done')
    }

    // Поднимаем наверх
    const checkValidate = (value) => {
        data.find(x => x.type === value.type).isValid = value.isValid

        const isValid = data.filter(x => x.type !== 'button' && x.isValid === true).length === data.filter(x => x.type !== 'button').length
        setValidate(isValid)
    }

    return (
        <div>
            <form action="" className="form" onSubmit={sendForm}>
                {data.filter(x => x.type !== 'button').map(({type, name, placeholder, validateType, isValid}, index) => (
                    <div className="form-group" key={index}>
                        <TextField type={type} name={name} placeholder={placeholder} validateType={validateType} onValidate={checkValidate}/>
                    </div>
                ))}

                {data.filter(x => x.type === 'button').map(({type, name, className, icon}, index) => (
                    <Button key={index} name={name} type={className} icon={icon} disabled={!validForm}/>
                ))}
            </form>
        </div>
    );
};

export default Form;
