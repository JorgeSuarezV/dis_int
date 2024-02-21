import { Meta, StoryObj } from "@storybook/react";
import Divider from ".";

const meta: Meta<typeof Divider> = {
    title: "Divider",
    component: Divider,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof Divider> = {
    render: (args) => 
    <div className='w-[300px]'>
        <Divider/>
    </div>
};
