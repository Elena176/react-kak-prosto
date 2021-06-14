import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

/*
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
*/

/*export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};*/
const callback = action('on or off clicked');

export const OnMode = () => <UncontrolledOnOff  defaultOn={true} onChange={callback} />
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback} />


