import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import Rating, {RatingValueType} from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
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

export const EmptyStars = () => <Rating value={0} onClickChange={x=>x} />
export const Rating1 = () => <Rating value={1} onClickChange={x=>x} />
export const Rating2 = () => <Rating value={2} onClickChange={x=>x} />
export const Rating3 = () => <Rating value={3} onClickChange={x=>x} />
export const Rating4 = () => <Rating value={4} onClickChange={x=>x} />
export const Rating5 = () => <Rating value={5} onClickChange={x=>x} />

export const RatingChanging = () => {
   const [rating, setRating] = useState<RatingValueType>(5);
    return  <Rating value={rating} onClickChange={setRating} />
};

