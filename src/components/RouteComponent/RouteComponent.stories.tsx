import type {Meta, StoryObj} from '@storybook/react';
import RouteComponent from './index';

const meta: Meta<typeof RouteComponent> = {
   title: 'RouteComponent',
   component: RouteComponent,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof RouteComponent> = {
    render: (args) => 
    <div className='w-[300px]'>
        <RouteComponent/>
    </div>
};