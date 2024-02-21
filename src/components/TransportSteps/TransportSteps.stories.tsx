import { Meta, StoryObj } from "@storybook/react";
import TransportSteps from ".";

const meta: Meta<typeof TransportSteps> = {
    title: "TransportSteps",
    component: TransportSteps,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof TransportSteps> = {
    render: (args) => 
    <div>
        <TransportSteps {...args} steps={args.steps ?? ['Step 1', 'Step 2', 'Step 3']}/>
    </div>
};