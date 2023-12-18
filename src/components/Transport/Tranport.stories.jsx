// Transport.stories.tsx
import * as React from "react";
import Transport from "../Transport";


export default {
    title: "Transport",
    component: Transport,
}

const Template = (args) =>
    <div className={"w-[320px] bg-black h-[150px] flex justify-center items-center"}>
        <Transport {...args} />;
    </div>

export const Train = Template.bind({});
Train.args = {
    transport: "train",
    title: "Train Title",
    description: "Train Description",
    state: "ok",
};
