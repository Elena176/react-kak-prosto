import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion (props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} changeCollapsed={ () => setCollapsed(!collapsed)}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
        title: string
    changeCollapsed: () => void
    }

function AccordionTitle(props: AccordionTitlePropsType)
    {

        console.log('AccordionTitle rendering');
        return <h3 onClick={() => {props.changeCollapsed()}}>{props.title}</h3>
    }

function AccordionBody()
    {
        console.log('AccordionBody rendering');
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        );
    };
