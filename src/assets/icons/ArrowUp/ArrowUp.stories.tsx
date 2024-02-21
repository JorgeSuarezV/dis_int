import type {Meta, StoryObj} from '@storybook/react';
import ArrowUp from './index';

const meta: Meta<typeof ArrowUp> = {
   title: 'ArrowUp',
   component: ArrowUp,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof ArrowUp> = {
   render: (args) => <ArrowUp/>
};
