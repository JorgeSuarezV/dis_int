import type {Meta, StoryObj} from '@storybook/react';
import NotificationBell from './index';

const meta: Meta<typeof NotificationBell> = {
   title: 'NotificationBell',
   component: NotificationBell,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof NotificationBell> = {
   render: (args) => <NotificationBell/>
};