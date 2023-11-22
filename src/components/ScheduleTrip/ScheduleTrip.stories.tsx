import type {Meta, StoryObj} from '@storybook/react';
import ScheduleTrip from './index';

const meta: Meta<typeof ScheduleTrip> = {
   title: 'ScheduleTrip',
   component: ScheduleTrip,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof ScheduleTrip> = {
    render: (args) => <ScheduleTrip/>
};