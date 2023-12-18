import React from "react";


interface WalkingStepProps {
    minutes: number
    meters: number
}

export default function WalkingStep({minutes, meters}: WalkingStepProps) {
    return (
        <p className={"text-zinc-700 text-sm font-normal font-Inter"}>Camina {minutes} min ({meters}m)</p>
    )
}