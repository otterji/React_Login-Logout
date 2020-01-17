import React, {useState} from 'react';
import LoginBtn from "./Button";
import LoginInput from "./Input";
import { ButtonStyled } from './ButtonStyled';
// import { ButtonStyled} from './ButtonStyled';

const Container = () => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const setSubmitValue = () => {
        setIsSubmit(true);
    }
    const Logout = () => {
        setIsSubmit(false);
    }
    // const setLogoutValue = () => {
    //     setisLogout(true);
    // }

    return (
        <>
            { isSubmit 
            ? <>
            <h2>{inputValue} 님, 안녕하세요 !</h2>
            
            <ButtonStyled onClick={Logout}> Logout</ButtonStyled>
            </>
            :
            <>
                <h1>로그인 하세요</h1>
                <h3>ID:  <LoginInput inputFn={setInputValue} /></h3>
                <h3>PW:  <input type="password"></input> </h3>
                
                <LoginBtn submitFn={setSubmitValue} />
            </>}
        </>


    )
}

export default Container;