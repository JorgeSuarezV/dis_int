import React from "react";

export interface StartFinishStepProps {
    title: string
    description?: string
    time: string
}
export default function StartFinishStep({title, description, time}: StartFinishStepProps) {
    return (
        <div className="w-full h-10 justify-between items-center inline-flex">
            <div className="flex-grow flex flex-col justify-center h-16 relative">
                <p className="text-zinc-700 text-lg font-normal font-Inter">{title}</p>
                {description && <p className="h-5 left-0 top-[21px] text-neutral-500 text-sm font-normal font-Inter">{description}</p>}
            </div>
            <div className="w-10 h-5 text-neutral-500 text-sm font-normal font-Inter">{time}</div>
        </div>
    )
}