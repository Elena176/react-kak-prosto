import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[] // или  Array<string>
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElement);

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])

    const showItems = () => setActive(!active);

    const onItemClick = (value: any) => {
        props.onChange(value);
        showItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
       if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
           for (let i = 0; i < props.items.length; i++) {
               if (props.items[i].value === hoveredElement) {
                   const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                   if (pretendentElement) {
                       props.onChange(pretendentElement.value)
                       return;
                   }
               }
           }
           if (!selectedItem) {
               props.onChange(props.items[0].value);
           }
       }
       if (e.key === 'Enter' || e.key === 'Escape') {
           setActive(false)
       }
    }
    return (
        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <span className={s.main} onClick={showItems}>
            {selectedItem && selectedItem.title}</span>
        {
            active &&
            <div className={s.items}>
                {props.items.map(i => <div
                    onMouseEnter={() => {setHoveredElement(i.value)}} //при наведении мышкой выделяется элемент
                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    key={i.value}
                    onClick={() => {onItemClick(i.value)}}
                >{i.title}
                </div>)}
            </div>
        }
    </div>
    )
}


