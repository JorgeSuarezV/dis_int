import { StoryObj, Meta } from '@storybook/react';
import TransportMediumIcon from '.';

const meta: Meta<typeof TransportMediumIcon> = {
   title: 'TransportMediumIcon',
   component: TransportMediumIcon,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof TransportMediumIcon> = {
   render: (args) => <TransportMediumIcon transport={args.transport ?? 'train'} /> 
};