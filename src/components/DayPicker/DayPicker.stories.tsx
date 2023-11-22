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

export const Search: StoryObj<typeof DayPicker> = {
   render: (args) =>  
   <div className=''>
        <DayPicker{...args} text={'L'} isEnabled={true}/>
        <DayPicker{...args} text={'L'} isEnabled={false}/>
   </div>
};
