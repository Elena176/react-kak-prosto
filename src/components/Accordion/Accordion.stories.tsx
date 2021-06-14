import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;


const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback
}


export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Menu',
    collapsed: true,
    items: []


}

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: 'Users',
    collapsed: false,
    items: [{title: 'Elena',value: 1},
        {title: 'Denis', value: 2},
        {title: 'Nastya', value: 3}]

}

export const ModeChanging = () => {
    const [collapsedAccordion,  setCollapsedAccordion] = useState<boolean>(false)
    return <Accordion
        titleValue={'Users'}
        collapsed={collapsedAccordion}
        onChange={() => setCollapsedAccordion(!collapsedAccordion)}
        items={[
            {title: 'Elena',value: 1},
            {title: 'Denis', value: 2},
            {title: 'Nastya', value: 3}
        ]}
    onClick={onClickCallback}
    />
}


