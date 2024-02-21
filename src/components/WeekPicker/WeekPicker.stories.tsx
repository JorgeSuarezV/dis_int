import type {Meta, StoryObj} from '@storybook/react';
import WeekPicker from './index';

const meta: Meta<typeof WeekPicker> = {
   title: 'WeekPicker',
   component: WeekPicker,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof WeekPicker> = {
    render: (args) =>
    <div className='w-[300px]'>
        <WeekPicker/>
    </div>
};