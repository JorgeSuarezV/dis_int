import { Meta, StoryObj } from "@storybook/react";
import StartFinishStep from "."

const meta: Meta<typeof StartFinishStep> = {
    title: 'StartFinishStep',
    component: StartFinishStep,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof StartFinishStep> = {
    render: (args) => 
    <div className='w-[300px]'>
        <StartFinishStep{...args} title={args.title ?? 'Title'} description={args.description ?? 'Description'} time={args.time ?? 'Time'}/>
    </div>
};