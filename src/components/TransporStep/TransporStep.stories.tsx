import { Meta, StoryObj } from "@storybook/react";
import TransportStep from ".";

const meta: Meta<typeof TransportStep> = {
    title: "TransportStep",
    component: TransportStep,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

export const Docs: StoryObj<typeof TransportStep> = {
    render: (args) => 
    <div className='w-[300px] h-[100px]'>
        <TransportStep {...args} title={args.title ?? 'Title'} transportNumber={args.transportNumber ?? 1} subheader={args.subheader ?? 'Subheader'} cost={args.cost ?? '100'} time={args.time ?? new Date()}/>
    </div>
};