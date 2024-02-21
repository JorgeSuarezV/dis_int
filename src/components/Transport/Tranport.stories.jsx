import Transport from "../Transport";
import { StoryObj, Meta } from '@storybook/react';


const meta = {
    title: "Transport",
    component: Transport,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
}

export default meta;

export const Docs = {   
    render: (args) => (
        <div className={"w-[300px] bg-white h-[90px] flex justify-center items-center"}>
            <Transport {...args} transport={args.transport ?? 'train'} title={args.title ?? 'Title'} description={args.description ?? 'Description'} state={args.state ?? 'ok'}/>
        </div>
    ),
}