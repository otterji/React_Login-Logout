import React from 'react';
import { InputStyled } from "./InputStyle";

const Input = (props) => {
    const setInput = (event) => {
        props.inputFn(event.target.value);
    }

    return (
        <InputStyled id="loginInput" type="text" onKeyUp={event => setInput(event)} />
        )
};

export default Input;