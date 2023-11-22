import type {Meta, StoryObj} from '@storybook/react';
import OptionButton from './index';

const meta: Meta<typeof OptionButton> = {
   title: 'OptionButton',
   component: OptionButton,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof OptionButton> = {
   render: (args) => <OptionButton/>
};