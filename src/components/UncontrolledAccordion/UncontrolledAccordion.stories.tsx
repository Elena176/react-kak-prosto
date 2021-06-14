import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

/*
const Template: Story<ButtonProps> = (args: UncontrolledAccordionPropsType) => <UncontrolledAccordion {...args} />;
*/

/*export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};*/
const callback = action('UncontrolledAccordion mode change event fired');

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}


