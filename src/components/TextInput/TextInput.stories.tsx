import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import TextInput, {inputState} from '../TextInput';

export default {
    title: 'TextInput',
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) =>
    <div className={"w-[300px] bg-white h-[150px] flex justify-center items-center"}>
        <TextInput {...args} />
    </div>

export const Default = Template.bind({});
Default.args = {
    inputState: 'default' as inputState,
    label: 'Default Input',
    helperText: 'This is a helper text',
};

export const Error = Template.bind({});
Error.args = {
    ...Default.args,
    inputState: 'error' as inputState,
    helperText: 'This is a helper text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    inputState: 'disabled' as inputState,
    helperText: 'This is a helper text',
};
