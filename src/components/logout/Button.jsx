import React from 'react';
import { ButtonStyled} from '../Login/ButtonStyled';

const LogoutBtn = (props) => {
    const submit = () => {
        props.submitFn();
    }

    return (
        <ButtonStyled onClick={submit}>Logout</ButtonStyled>
    )
}


export default LogoutBtn;