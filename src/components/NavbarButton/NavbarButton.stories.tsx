import type {Meta, StoryObj} from '@storybook/react';
import {NavbarButton} from './index';
// @ts-ignore
import {HomeSVG, CalendarSVG, GroupsSVG, SettingsSVG} from '../../assets/icons';

const meta: Meta<typeof NavbarButton> = {
   title: 'NavbarButton',
   component: NavbarButton,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof NavbarButton> = {
   render: (args) => 
   <div className='w-[300px] h-[100px]'>
        <NavbarButton {...args}
            icon={<HomeSVG width={40} height={40} color={'theme.gray600'}/>}
            width={40}
            height={40}
            color={'theme.gray600'}/>
        <NavbarButton {...args}
            icon={<CalendarSVG width={40} height={40} color={'theme.gray600'}/>}
            width={40}
            height={40}
            color={'theme.gray600'}/>
        <NavbarButton {...args}
            icon={<GroupsSVG width={40} height={40} color={'theme.gray600'}/>}
            width={40}
            height={40}
            color={'theme.gray600'}/>
        <NavbarButton {...args}
            icon={<SettingsSVG width={40} height={40} color={'theme.gray600'}/>}
            width={40}
            height={40}
            color={'theme.gray600'}/>

   </div>
};