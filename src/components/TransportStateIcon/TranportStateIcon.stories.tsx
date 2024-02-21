import { Meta, StoryObj } from '@storybook/react';
import TransportStateIcon from '../TransportStateIcon';

const meta: Meta<typeof TransportStateIcon> = {
    title: 'TransportStateIcon',
    component: TransportStateIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof TransportStateIcon> = {
    render: (args) => 
    <div className='flex flex-col gap-4'>
        <TransportStateIcon {...args} state={args.state ?? 'offline'}/>
    </div>
};