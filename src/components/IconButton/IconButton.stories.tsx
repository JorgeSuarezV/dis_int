import type {Meta, StoryObj} from '@storybook/react';
import IconButton from './index';

const meta: Meta<typeof IconButton> = {
   title: 'IconButton',
   component: IconButton,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof IconButton> = {
   render: (args) => <IconButton {...args} />
};
