import type {Meta, StoryObj} from '@storybook/react';
import Bookmarker from './index';

const meta: Meta<typeof Bookmarker> = {
   title: 'Bookmarker',
   component: Bookmarker,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof Bookmarker> = {
   render: (args) => 
   <div className='flex flex-col gap-4'>
        <Bookmarker{...args} isBooked={true}/>
        <Bookmarker{...args}/>
   </div>
};
