import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TransportStateIcon, {TransportState} from '../TransportStateIcon';

export default {
    title: 'TransportStateIcon',
    component: TransportStateIcon,
} as ComponentMeta<typeof TransportStateIcon>;

const Template: ComponentStory<typeof TransportStateIcon> = (args) => <TransportStateIcon {...args} />

export const Detour = Template.bind({});
Detour.args = {
    state: 'detour' as TransportState,
};

export const Delayed = Template.bind({});
Delayed.args = {
    state: 'delayed' as TransportState,
};

export const Strike = Template.bind({});
Strike.args = {
    state: 'strike' as TransportState,
};

export const Ok = Template.bind({});
Ok.args = {
    state: 'ok' as TransportState,
};

export const Transshipment = Template.bind({});
Transshipment.args = {
    state: 'transshipment' as TransportState,
};

export const Offline = Template.bind({});
Offline.args = {
    state: 'offline' as TransportState,
};
