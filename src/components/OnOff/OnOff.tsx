import React, {useState} from 'react';
import './OnOff.css'

type ButtonPropsType = {
  turn: boolean
    setTurn: (turn: boolean) => void
}


export function OnOff(props: ButtonPropsType) {

    //let [turn, setTurn] = useState(false);
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.turn ? 'aquamarine' : 'white'
    };

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.turn ? 'white' : 'red'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.turn ? 'aquamarine' : 'red'
    };

    return (
        <div>
            <div style={onStyle}
                 onClick={() => {props.setTurn(true)}}> On
            </div>
            <div style={offStyle}
                 onClick={() => {props.setTurn(false)}}>Off
            </div>
            <div style={indicatorStyle}>{}</div>
        </div>
    )
};


