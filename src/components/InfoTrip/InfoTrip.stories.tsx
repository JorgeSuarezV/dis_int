import type {Meta, StoryObj} from '@storybook/react';
import InfoTrip from './index';

const meta: Meta<typeof InfoTrip> = {
   title: 'InfoTrip',
   component: InfoTrip,
   parameters: {
    layout: 'centered',
    },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof InfoTrip> = {
   render: (args) => 
   <div>
        <InfoTrip{...args} type={args.type ?? 'duration'} text={args.text ?? '5'}/>
   </div>
};
