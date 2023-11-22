import type {Meta, StoryObj} from '@storybook/react';
import FamilyMember from './index';

const meta: Meta<typeof FamilyMember> = {
   title: 'FamilyMember',
   component: FamilyMember,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof FamilyMember> = {
   render: (args) => 
   <div className='w-[300px]'>
        <FamilyMember{...args} name={args.name ?? 'Ines'}  type={args.type ?? 'Hija'} />
   </div>
};
