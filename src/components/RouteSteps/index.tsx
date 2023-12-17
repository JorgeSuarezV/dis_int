import React, {ReactNode} from "react";
import WalkingSVG from "../../assets/icons/WalkingSVG";
import ArrowRight from "../../assets/icons/ArrowRight";
import SmallBusSVG from "../../assets/icons/SmallBusSVG";
import Icon from "../Icon";
import SubwaySVG from "../../assets/icons/SubwaySVG";
import TrainSVG from "../../assets/icons/TrainSVG";

export type TranpostStep = "walking" | "bus" | "subway" | "train"

interface RouteStepsProps {
    steps: {
        type: TranpostStep,
        number: number
    }[]
}

export default function RouteSteps({steps}: RouteStepsProps) {
    const transportItemRecord: Record<TranpostStep, (number: number) => ReactNode> = {
        walking: (number) => (
            <div className={"w-6 h-8"}>
                <div className={"relative"}>
                    <WalkingSVG/>
                </div>
                <p className={"text-gray-800 font-Inter text-sm relative bottom-3 left-4"}>{number}</p>
            </div>
        ),
        bus: (number) => (
            <div className={"flex items-center"}>
                <SmallBusSVG/>
                <div className={"flex p-1 px-2 py-1 h-5 items-center justify-center gap-2 rounded-md bg-red-600"}>
                    <p className={"overflow-hidden text-white text-ellipsis font-Inter text-sm font-normal leading-normal"}>{number}</p>
                </div>
            </div>
        ),
        subway: (number) => (
            <div className={"flex items-center"}>
                <Icon image={<SubwaySVG width={24} height={24}/>}/>
                <div className={"flex p-1 px-2 py-1 h-5 items-center justify-center gap-2 rounded-md bg-red-600"}>
                    <p className={"overflow-hidden text-white text-ellipsis font-Inter text-sm font-normal leading-normal"}>{number}</p>
                </div>
            </div>
        ),
        train: (number) => (
            <div className={"flex items-center"}>
                <Icon image={<TrainSVG height={24} width={24}/>}/>
                <div className={"flex p-1 px-2 py-1 h-5 items-center justify-center gap-2 rounded-md bg-red-600"}>
                    <p className={"overflow-hidden text-white text-ellipsis font-Inter text-sm font-normal leading-normal"}>{number}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={"flex justify-start items-center"}>
            {steps.map((step, index) => (
                <div key={index} className={"flex items-center justify-center gap-2"}>
                    {transportItemRecord[step.type](step.number)}
                    {index !== steps.length - 1 && <ArrowRight/>}
                </div>
            ))}
        </div>
    )
}