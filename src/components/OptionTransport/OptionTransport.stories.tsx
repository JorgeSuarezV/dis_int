import type {Meta, StoryObj} from '@storybook/react';
import OptionTransport from './index';
import SmallBusSVG from '../../assets/icons/SmallBusSVG';

const meta: Meta<typeof OptionTransport> = {
   title: 'OptionTransport',
   component: OptionTransport,
   parameters: {
      layout: 'centered',
   },
    tags: ['autodocs']
};

export default meta;

export const Docs: StoryObj<typeof OptionTransport> = {
   render: (args) => <OptionTransport{...args} icon= {<SmallBusSVG/>} text={args.text ?? 'Text'}/>
};