import React, {useReducer} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reducer =  (state: boolean, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state;
        default:
            throw new Error('Bad action type');
    }
    return state;
}

export function UncontrolledAccordion (props: UncontrolledAccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
       {/* <AccordionTitle title={props.titleValue} changeCollapsed={ () => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} changeCollapsed={ () => dispatch({type: 'TOGGLE-COLLAPSED'})}/>
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
    }
