import { useState } from 'react';

const TextField = ({type, name, placeholder, validate}) => {
    const [valid, setInput] = useState('');

    const setValidate = (value) => {
        const validateType = {
            email: () => isValidEmail(value),
            password: () => isValidLength(value, 3)
        }

        return validateType[validate](value)
    }

    const setClass = (index) => {
        const classes = ['invalid', 'valid']

        return setInput(classes[index])
    }

    const isValidEmail = (value) => {
        const emailCheckRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return setClass(Number(emailCheckRegex.test(value)))
    }

    const isValidLength = (value, count) => {
        return setClass(Number(value.length >= count))
    }

    return (
        <>
            <input type={type} className={valid} name={name} placeholder={placeholder} onInput={e => setValidate(e.target.value)} />
        </>
    );
}

export default TextField;
