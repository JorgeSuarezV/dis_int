import { StoryObj, Meta } from '@storybook/react';
import Switch, {SwitchProps} from '.';

const meta: Meta<typeof Switch> = {
   title: 'Switch',
   component: Switch,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof Switch> = {
   render: (args) => <Switch {...args}/> 
};