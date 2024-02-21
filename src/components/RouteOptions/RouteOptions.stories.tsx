import { Meta, StoryObj } from "@storybook/react";
import RouteOptions from ".";

const meta: Meta<typeof RouteOptions> = {
    title: "RouteOptions",
    component: RouteOptions,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof RouteOptions> = {
    render: (args) => 
    <div>
        <RouteOptions {...args}/>
    </div>
};