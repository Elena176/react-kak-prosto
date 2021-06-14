import React, {useState} from 'react';
import './UncontrolledOnOff.css'

type ButtonPropsType = {
    defaultOn: boolean
onChange: (turn: boolean) => void
}


export function UncontrolledOnOff(props: ButtonPropsType) {

    let [turn, setTurn] = useState(props.defaultOn ? props.defaultOn : false);
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: turn ? 'aquamarine' : 'white'
    };

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: turn ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: turn ? 'aquamarine' : 'red'
    };

    const onClicked = () => {
        setTurn(true)
            props.onChange(true)
    }

    const offClicked = () => {
        setTurn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}> On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}>{}</div>
        </div>
    )
};