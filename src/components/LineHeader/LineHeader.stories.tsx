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
   <div className='w-[300px]'>
        <LineHeader{...args} state={'detour'} title={'Titulo'}/>
        <LineHeader{...args} state={'delayed'} title={'Titulo'}/>
        <LineHeader{...args} state={'strike'} title={'Titulo'}/>
        <LineHeader{...args} state={'ok'} title={'Titulo'}/>
        <LineHeader{...args} state={'transshipment'} title={'Titulo'}/>
        <LineHeader{...args} state={'offline'} title={'Titulo'}/>
   </div>
};
