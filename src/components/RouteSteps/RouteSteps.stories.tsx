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

export const Search: StoryObj<typeof RouteSteps> = {
    render: (args) => <RouteSteps/>
};