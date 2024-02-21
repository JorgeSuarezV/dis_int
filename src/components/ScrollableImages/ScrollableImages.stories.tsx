import type {Meta, StoryObj} from '@storybook/react';
import {ScrollableImages} from './index';

const meta: Meta<typeof ScrollableImages> = {
   title: 'ScrollableImages',
   component: ScrollableImages,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof ScrollableImages> = {
    render: (args) => <ScrollableImages/>
};