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

export const Docs: StoryObj<typeof TransportMediumIcon> = {
   render: (args) => <TransportMediumIcon{...args} transport={args.transport ?? 'train'}/> 
};