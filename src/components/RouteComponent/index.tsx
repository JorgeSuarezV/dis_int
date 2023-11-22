import React from "react";
import RouteSteps from "../RouteSteps";


export default function RouteComponent() {
    return (
        <div className={"flex w-full justify-between items-center"}>
            <div className={"flex-col justify-start items-start"}>
                <RouteSteps/>
                <p>12:05 - 12:31</p>
            </div>
            <div className={"flex-col justify-start items-start"}>
                <p className={"overflow-hidden text-gray-900 whitespace-nowrap font-sans text-[20px] font-normal leading-normal"}>26
                    min</p>
                <p className={"overflow-hidden text-gray-700 whitespace-nowrap font-sans text-base font-normal leading-normal"}>$
                    127,56</p>
            </div>
        </div>
    )
}