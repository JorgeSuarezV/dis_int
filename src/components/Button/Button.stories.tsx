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

export const Template: Story<ButtonProps> = (args) => <Button {...args}   variant={args.variant ?? 'fulfilled'} children={args.children ?? 'Fulfilled'} iconLeft={<StarSVG />} iconRight={<StarSVG />} />;
