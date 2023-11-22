import { Story, Meta } from '@storybook/react';
import StarSVG from '../../assets/icons/StarSVG';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
    },
  tags: ['autodocs']
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}   variant='fulfilled' children='Fulfilled' iconLeft={<StarSVG />} iconRight={<StarSVG />} />;
