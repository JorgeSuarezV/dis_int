import type {Meta, StoryObj} from '@storybook/react';
import OptionButton from './index';
import BookmarkerSVG from '../../assets/icons/BookmarkerSVG';

const meta: Meta<typeof OptionButton> = {
   title: 'OptionButton',
   component: OptionButton,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof OptionButton> = {
   render: (args) => <OptionButton{...args} text={args.text ?? 'Text'} icon={<BookmarkerSVG />} />
};