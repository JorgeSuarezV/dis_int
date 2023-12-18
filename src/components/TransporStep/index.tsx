import React from "react";

export interface TransporStepProps {
    title: string
    transportNumber: number
    subheader: string
    time: Date
    cost: string
}

export default function TransportStep({title, transportNumber, subheader, time, cost}: TransporStepProps) {
    return (
        <div className={"flex h-12 w-full justify-between items-center"}>
            <div className={"flex flex-col h-12 justify-between items-start text-zinc-700 text-sm font-medium font-Inter"}>
                <p>{title}</p>
                <div className={"flex justify-start items-center gap-2"}>
                    <div className={"flex p-1 px-2 py-1 h-5 items-center justify-center gap-2 rounded-md bg-red-600"}>
                        <p className={"text-white text-sm font-normal font-Inter"}>{transportNumber}</p>
                    </div>
                    <p className={"text-neutral-500 text-xs font-normal font-Inter"}>{subheader}</p>
                </div>
            </div>
            <div className={"flex flex-col h-12 justify-between items-end"}>
                <p className={"text-neutral-500 text-sm font-normal font-Inter"}>{time.getHours()}:{time.getMinutes()}</p>
                <p className={"text-neutral-400 text-sm font-normal font-Inter"}>${cost}</p>
            </div>
        </div>
    )
}