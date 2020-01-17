import React, {useEffect, useState} from 'react';

const Btn = () => {

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        console.log('hit');
    }, [flag]);

    const setFalseFlag = () => {
        setFlag(false);
    }

    const setTrueFlag = () => {
        setFlag(true);
    }

    return (
        <>
        <button onClick={setFalseFlag}>False</button>
        <button onClick={setTrueFlag}>True</button>
        {flag ? <div>true</div> : <div>false</div>} 
        </>
    )
}

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

export default Btn;