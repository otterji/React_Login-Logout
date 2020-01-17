import React from 'react';
import { ButtonStyled} from './ButtonStyled';

const Btn = (props) => {
    const submit = () => {
        props.submitFn();
    }

    return (
        <ButtonStyled onClick={submit}>Login</ButtonStyled>
    )
}
export default Btn;
// class Btn extends React.Component {
//     constructor() {
//         super();
//     }

//     componentWillMount() {
//         console.log('logic');
//     }

//     render() {
//         return (
//             <div>hi</div>
//         )
//     }
// }

