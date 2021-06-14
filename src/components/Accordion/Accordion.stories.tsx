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

/*
const Template: Story<ButtonProps> = (args: AccordionPropsType) => <Accordion {...args} />;
*/

/*export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};*/
const callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;


export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback
}

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback
}

export const ModeChanging = () => {
    const [collapsedAccordion,  setCollapsedAccordion] = useState<boolean>(false)
    return <Accordion titleValue={'Users'} collapsed={collapsedAccordion} onChange={() => setCollapsedAccordion(!collapsedAccordion)} />
}


