import { Meta, StoryObj } from "@storybook/react";
import FromToInputs from ".";

const meta: Meta<typeof FromToInputs> = {
    title: "FromToInputs",
    component: FromToInputs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof FromToInputs> = {
    render: (args) => 
    <div>
        <FromToInputs {...args}/>
    </div>
};