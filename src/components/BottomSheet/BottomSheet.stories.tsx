import { StoryObj, Meta } from '@storybook/react';
import BottomSheet from '.';

const meta: Meta<typeof BottomSheet> = {
   title: 'BottomSheet',
   component: BottomSheet,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof BottomSheet> = {
   render: (args) => <BottomSheet /> 
};