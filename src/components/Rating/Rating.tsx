import React from 'react';

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClickChange: (value: RatingValueType) => void
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star selected={props.value > 0} onClickChange={props.onClickChange} value={1}/>
            <Star selected={props.value > 1} onClickChange={props.onClickChange} value={2}/>
            <Star selected={props.value > 2} onClickChange={props.onClickChange} value={3}/>
            <Star selected={props.value > 3} onClickChange={props.onClickChange} value={4}/>
            <Star selected={props.value > 4} onClickChange={props.onClickChange} value={5}/>
        </div>
    );
  }

type StarPropsType = {
selected: boolean
    value: RatingValueType
    onClickChange: (value:RatingValueType) => void
}

  function Star(props: StarPropsType) {
         console.log('Star rendering')
return <span onClick={() => props.onClickChange(props.value)}>{props.selected ? <b>star </b> : 'star '}</span>

  }

  export default Rating;