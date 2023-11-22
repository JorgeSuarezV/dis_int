import { Story, Meta } from '@storybook/react';
import Switch, {SwitchProps} from '.';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    isEnabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    },
  tags: ['autodocs']
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
};
