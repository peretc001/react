import { useState } from 'react';

const TextField = ({type, name, placeholder, validateType}) => {
    const [inputClass, setInputClass] = useState('');

    const emailCheckRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // Определяем какую валидацию вызвать
    const checkValidate = (value) => {
        const functions = {
            email: () => isValidEmail(value),
            password: () => isValidLength(value, 3)
        }

        return functions[validateType](value)
    }

    // Проверка на email
    const isValidEmail = (value) => setClass(Number(emailCheckRegex.test(value)))

    // Проверка на длину
    const isValidLength = (value, count) => setClass(Number(value.length >= count))

    // Меняем состояние
    const setClass = (index) => {
        const classes = ['invalid', 'valid']

        return setInputClass(classes[index])
    }

    return (
        <>
            <input type={type} className={inputClass} name={name} placeholder={placeholder} onInput={e => checkValidate(e.target.value)} />
        </>
    );
}

export default TextField;
