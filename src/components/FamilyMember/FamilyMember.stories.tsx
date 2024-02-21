// @ts-ignore
import avatar from "../../assets/images/avatar.png";
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

export const Docs: StoryObj<typeof FamilyMember> = {
   render: (args) => 
   <div className='w-[300px]'>
        <FamilyMember{...args} name={args.name ?? 'Name'}  type={args.type ?? 'Type'} icon={args.icon ?? <img src={avatar} alt={""}/>}/>
   </div>
};
