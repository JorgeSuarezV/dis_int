import React from "react";
import TransportMediumIcon, {TransportMedium} from "../TransportMediumIcon";
import TransportStateIcon, {TransportState} from "../TransportStateIcon";

interface TransportProps {
    transport: TransportMedium
    title: string
    description: string
    state: TransportState
}

function Transport({transport, title, description, state}: TransportProps) {
    return (
        <div className="flex w-full h-83 p-1 justify-between items-center bg-white">
            <div className={"flex items-center gap-4"}>
                <TransportMediumIcon transport={transport}/>
                <div className={"flex flex-col justify-start items-start w-auto"}>
                    <p className={"overflow-hidden text-black text-ellipsis whitespace-nowrap font-inter text-base font-normal"}>{title}</p>
                    <p className={"overflow-hidden text-black text-ellipsis whitespace-nowrap font-inter text-base font-normal color-greyScale600"}>{description}</p>
                </div>
            </div>
            <TransportStateIcon state={state}/>
        </div>
    )
}

export default Transport