import React, {ChangeEvent, useRef, useState} from 'react';
import { Meta } from '@storybook/react';




export default {
  title: 'input',

} as Meta;

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  }
  return <><input onChange={onChange}/> -{value}</>;
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  const saveOnClick = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)}
  return <><input ref={inputRef}/> <button onClick={saveOnClick}>save</button>-actual value: {value}</>;
}

export const ControlledInput = () => {
  const[parentValue, setParentValue] = useState('');
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  };
  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
  const[parentValue, setParentValue] = useState(true);
  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  };
  return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const[parentValue, setParentValue] = useState<string | undefined>(undefined);
  const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  };
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={'1'}>Odessa</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Minsk</option>
  </select>
}
export const ControlledInputWithFixedValue= () => <input value={'it-incubator'}/>;

