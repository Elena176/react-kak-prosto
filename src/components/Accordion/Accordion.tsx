import React from 'react';

type ItemType ={
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    /**
     * elements that are showed when accordion is opened (not collapsed)
     */
    items: ItemType[] // или  Array<string>
    onClick: (value: any) => void
}

 export function Accordion (props: AccordionPropsType) {
    console.log('Accordion rendering');
        return <div>
            <AccordionTitle title={props.titleValue}  onChange={props.onChange}/>
            {!props.collapsed  && <AccordionBody items={props.items}
                                                 onClick={props.onClick}/>}
            {/*{props.collapsed === false && <AccordionBody/>}*/}
        </div>
}

type AccordionTitlePropsType =
    {
        title: string
        onChange: () => void
    }

function AccordionTitle(props: AccordionTitlePropsType)
    {
        console.log('AccordionTitle rendering');
        return <h3 onClick={(e) =>props.onChange()}>{props.title}</h3>
    }

    type AccordionBodyPropsType ={
    items:ItemType[]
        onClick: (value: any) => void
    }
function AccordionBody(props: AccordionBodyPropsType) {
        console.log('AccordionBody rendering');
        return (
            <div>
                <ul>
                    {props.items.map((i, index) => <li
                        onClick={() => {props.onClick(i.value)}}
                        key={index}>{i.title}</li>)}
                </ul>
            </div>
        );
    };
