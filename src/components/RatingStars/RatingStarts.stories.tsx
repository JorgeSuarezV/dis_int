import type {Meta, StoryObj} from '@storybook/react';
import {RatingStarts} from './index';

const meta: Meta<typeof RatingStarts> = {
   title: 'RatingStarts',
   component: RatingStarts,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof RatingStarts> = {
   render: (args) => <RatingStarts/>
};