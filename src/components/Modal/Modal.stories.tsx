import { StoryObj, Meta } from '@storybook/react';
import Modal from '.';

const meta: Meta<typeof Modal> = {
   title: 'Modal',
   component: Modal,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Search: StoryObj<typeof Modal> = {
   render: (args) => <Modal title={args.title ?? 'Titulo'} body={args.body ?? 'Description'}  /> 
};