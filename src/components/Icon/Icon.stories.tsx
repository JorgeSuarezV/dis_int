import type {Meta, StoryObj} from '@storybook/react';

import Icon from './index';
import SearchSVG from "../../assets/icons/SearchSVG";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        image: SearchSVG,
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Search: Story = {
    render: (args) =>
        <div className={"bg-amber-500"}>
            <Icon {...args} image={<SearchSVG/>}/>
        </div>
};

