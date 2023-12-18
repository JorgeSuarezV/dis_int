import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import ArrowUp from "../../assets/icons/ArrowUp";

export interface TransportStepsProps {
    steps: string[]
    minutes: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export default function TransportSteps({steps, minutes, isOpen, setIsOpen}: TransportStepsProps) {
    return (
        <div>
            <div className={"flex gap-4  items-center w-full h-5 text-zinc-600 text-xs font-medium font-Inter"}
                 onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ArrowUp/> : <ArrowDown/>}
                <p className={"text-zinc-600 text-xs font-medium font-Inter"}>{steps.length + " "}paradas ({minutes} min)</p>
            </div>
            {isOpen && <div className={"flex-col flex ml-9 w-full"}>
                {steps.map((step, index) =>
                    <p className={"text-neutral-600 text-xs font-medium font-Inter"} key={index}>
                        {step}
                    </p>)}
            </div>
            }
        </div>
    )
}