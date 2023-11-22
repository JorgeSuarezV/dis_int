import type {Meta, StoryObj} from '@storybook/react';
import LineHeader from './index';

const meta: Meta<typeof LineHeader> = {
   title: 'LineHeader',
   component: LineHeader,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof LineHeader> = {
   render: (args) => 
   <div className='flex flex-col gap-4 w-[300px]'>
        <LineHeader{...args} state={args.state ?? 'detour'} title={args.title ?? 'Titulo'}/>
   </div>
};
