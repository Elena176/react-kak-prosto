import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff,
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

export const OnMode = () => <OnOff turn={true} setTurn={callback} />
export const OffMode = () => <OnOff turn={false} setTurn={callback} />
export const ModeChanging = () => {
    const [turn, setTurn] = useState<boolean>(true)
    return <OnOff turn={turn} setTurn={setTurn} />
}


