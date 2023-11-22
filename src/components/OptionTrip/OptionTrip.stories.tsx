import type {Meta, StoryObj} from '@storybook/react';
import OptionTrip from '.';

const meta: Meta<typeof OptionTrip> = {
   title: 'OptionTrip',
   component: OptionTrip,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof OptionTrip> = {
   render: (args) => <OptionTrip{...args} arriveTime={args.arriveTime ?? '12:42'} duration={args.duration ?? '26 min'} /> 
};