// Transport.stories.tsx
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Transport from "../Transport";
import {TransportProps} from "../TransportMediumIcon";
import {TransportMedium} from "../TransportMediumIcon";
import {TransportState} from "../TransportStateIcon";


export default {
    title: "Transport",
    component: Transport,
}

const Template = (args) =>
    <div className={"w-[300px] bg-black h-[150px] flex justify-center items-center"}>
        <Transport {...args} />;
    </div>

export const Train = Template.bind({});
Train.args = {
    transport: "train",
    title: "Train Title",
    description: "Train Description",
    state: "ok",
};
