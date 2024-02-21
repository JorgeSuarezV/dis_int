import type {Meta, StoryObj} from '@storybook/react';

import Icon from './index';
import SearchSVG from "../../assets/icons/SearchSVG";
//@ts-ignore
import profile from "../../assets/images/profile_picture.png"

const meta: Meta<typeof Icon> = {
    title: 'Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export const Docs: StoryObj<typeof Icon> = {
    render: (args) => <Icon {...args} width={136} height={136} image={<img src={profile} alt=''/>}/>
};

