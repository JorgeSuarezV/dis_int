import React from "react";
import {TransportState, TransportStateIcon} from "../TransportStateIcon";
import IconButton from "../IconButton";
import {RatingStarts} from "../RatingStars";
import Bookmarker from "../Bookmarker";

export interface LocationHeaderProps {
    title: string,
}
export default function LocationHeader({title}: LocationHeaderProps) {
    return (
        <div className={"flex w-380 justify-between items-center"}>
            <div className={"flex justify-start items-center"}>
                <div>
                    <p className={"overflow-hidden text-black overflow-ellipsis whitespace-no-wrap font-Manrope text-2xl font-semibold"}>{title}</p>
                    <RatingStarts/>
                </div>
            </div>
            <div className={"flex g-8"}>
                <Bookmarker isBooked={false}/>
                <IconButton/>
            </div>
        </div>
    )
}