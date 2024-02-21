import { Story, Meta, StoryObj } from '@storybook/react';
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

export const Docs: StoryObj<typeof Button> = {
  render: (args) =>
    <div>
      <Button {...args} iconLeft={<StarSVG />} iconRight={<StarSVG />} >Button</Button>
    </div>
}
