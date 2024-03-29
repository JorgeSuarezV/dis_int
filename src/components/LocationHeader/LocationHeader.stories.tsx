import type {Meta, StoryObj} from '@storybook/react';
import LocationHeader from './index';

const meta: Meta<typeof LocationHeader> = {
   title: 'LocationHeader',
   component: LocationHeader,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof LocationHeader> = {
   render: (args) => 
   <div className='w-[300px]'>
        <LocationHeader{...args} title={args.title ?? 'Title'}/>
   </div>
};
