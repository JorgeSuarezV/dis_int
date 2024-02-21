import type {Meta, StoryObj} from '@storybook/react';
import DayPicker from './index';

const meta: Meta<typeof DayPicker> = {
   title: 'DayPicker',
   component: DayPicker,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Docs: StoryObj<typeof DayPicker> = {
   render: (args) =>  
   <div>
      <DayPicker {...args} text={args.text ?? 'L'}/>
   </div>
};
