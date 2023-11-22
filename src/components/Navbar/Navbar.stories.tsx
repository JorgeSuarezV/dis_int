import type {Meta, StoryObj} from '@storybook/react';
import Navbar from './index';

const meta: Meta<typeof Navbar> = {
   title: 'Navbar',
   component: Navbar,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof Navbar> = {
   render: (args) => 
   <div className='w-[300px] h-[100px]'>
      <Navbar/>
   </div>
};