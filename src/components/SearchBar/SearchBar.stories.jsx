import React from 'react';
import SearchBar from '../SearchBar';
import SearchSVG from "../../assets/icons/SearchSVG";
import MicrophoneSVG from "../../assets/icons/MicrophoneSVG";
import CloseSVG from "../../assets/icons/CloseSVG";

export default {
    title: 'SearchBar',
    component: SearchBar,
};

const Template = (args) =>
    <div className={"w-[300px] bg-white h-[90px] flex justify-center items-center"}>
        <SearchBar {...args} />
    </div>

export const Default = Template.bind({});
Default.args = {
    IconLeft: SearchSVG,
    IconRight: MicrophoneSVG,
    placeholder: 'Search...',
    variant: 'default',
    value: '',
};

export const FlatVariant = Template.bind({});
FlatVariant.args = {
    ...Default.args,
    variant: 'flat',
};

export const WithValue = Template.bind({});
WithValue.args = {
    ...Default.args,
    value: 'Hello World',
    IconRight: CloseSVG,
};
