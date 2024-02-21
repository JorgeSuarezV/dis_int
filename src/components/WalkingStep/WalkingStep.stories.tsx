import { Meta, StoryObj } from "@storybook/react";
import WalkingStep from ".";

const meta: Meta<typeof WalkingStep> = {
    title: "WalkingStep",
    component: WalkingStep,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof WalkingStep> = {
    render: (args) => 
    <div>
        <WalkingStep {...args} minutes={args.minutes ?? 10} meters={args.meters ?? 100}/>
    </div>
}