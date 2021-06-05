import { useState } from 'react';

const TextField = ({type, name, placeholder, validateType, onValidate}) => {
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
    const isValidEmail = (value) => setClass(Number(emailCheckRegex.test(value) && value === 'example@example.com'))

    // Проверка на длину
    const isValidLength = (value, count) => setClass(Number(value.length >= count && value === 'password2021'))

    // Меняем состояние
    const setClass = (index) => {
        const classes = ['invalid', 'valid']

        // Поднимаем наверх
        onValidate({ type, name, placeholder, validateType, isValid: classes[index] === 'valid' })

        return setInputClass(classes[index])
    }

    return (
        <>
            <input type={type} className={inputClass} name={name} placeholder={placeholder} onInput={e => checkValidate(e.target.value)} />
        </>
    );
}

export default TextField;
