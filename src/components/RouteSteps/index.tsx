import React from "react";
import WalkingSVG from "../../assets/icons/WalkingSVG";
import ArrowRight from "../../assets/icons/ArrowRight";
import SmallBusSVG from "../../assets/icons/SmallBusSVG";


export default function RouteSteps() {
    return (
        <div className={"flex justify-start items-center"}>
            <div className={"w-6 h-8"}>
                <div className={"relative"}>
                    <WalkingSVG/>
                </div>
                <p className={"text-gray-800 font-inter text-sm relative bottom-3 left-4"}>2</p>
            </div>
            <ArrowRight/>
                <SmallBusSVG/>
            <div className={"flex p-1 px-2 py-1 items-center justify-center gap-2 rounded-md bg-red-600"}>
                <p className={"overflow-hidden text-white text-ellipsis font-Inter text-sm font-normal leading-normal"}>30</p>
            </div>
            <ArrowRight/>
            <div className={"w-6 h-8"}>
                <div className={"relative"}>
                    <WalkingSVG/>
                </div>
                <p className={"text-gray-800 font-inter text-sm relative bottom-3 left-4"}>3</p>
            </div>
        </div>
    )
}