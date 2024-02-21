import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../SearchBar';

const meta = {
    title: 'SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs = {
    render: (args) => (
        <div className={"w-[300px] bg-white h-[90px] flex justify-center items-center"}>
            <SearchBar {...args} />
        </div>
    ),
}