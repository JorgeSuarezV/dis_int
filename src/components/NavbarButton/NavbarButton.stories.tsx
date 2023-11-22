import type {Meta, StoryObj} from '@storybook/react';
import {NavbarButton} from './index';
import HomeSVG from '../../assets/icons/HomeSVG';
import CalendarSVG from '../../assets/icons/CalendarSVG';
import GroupsSVG from '../../assets/icons/GroupsSVG';
import SettingsSVG from '../../assets/icons/SettingsSVG';

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
        />
   </div>
};