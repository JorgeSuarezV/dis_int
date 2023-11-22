import React from "react";
import {TransportState, TransportStateIcon} from "../TransportStateIcon";
import IconButton from "../IconButton";
import {RatingStarts} from "../RatingStars";

export interface LineHeaderProps {
    title: string,
    state: TransportState
}

export default function LineHeader({title, state}: LineHeaderProps) {
    return (
        <div className={"flex w-380 justify-between items-center"}>
            <div className={"flex justify-start items-center gap-4"}>
                <div>
                    <p className={"overflow-hidden text-black whitespace-nowrap font-sans text-3xl font-semibold leading-normal"}>{title}</p>
                    <RatingStarts/>
                </div>
                <TransportStateIcon state={state}/>
            </div>
            <IconButton/>
        </div>
    )
}