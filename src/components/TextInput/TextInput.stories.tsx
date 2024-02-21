import { Meta, StoryObj} from '@storybook/react';
import TextInput from '../TextInput';

const meta: Meta<typeof TextInput> = {
    title: 'TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof TextInput> = {
    render: (args) =>
        <div className={"w-[300px] bg-white h-[150px] flex justify-center items-center"}>
            <TextInput {...args} inputState={args.inputState ?? 'default'} label={args.label ?? 'Label'} helperText={args.helperText ?? 'Helper Text'}/>
        </div>
};