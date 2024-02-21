import type {Meta, StoryObj} from '@storybook/react';
import RouteSteps from './index';

const meta: Meta<typeof RouteSteps> = {
   title: 'RouteSteps',
   component: RouteSteps,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof RouteSteps> = {
    render: (args) => <RouteSteps steps={[
        {type: "walking", number: 2},
        {type: "bus", number: 3},
        {type: "subway", number: 4},
        {type: "train", number: 5},
        {type: "walking", number: 6},
    ]}/>
};