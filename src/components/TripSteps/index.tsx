import React from "react";
import StartFinishStep from "../StartFinishStep";
import WalkingStep from "../WalkingStep";
import Divider from "../Divider";
import TransportStep from "../TransporStep";
import TransportSteps from "../TransportSteps";
// @ts-ignore
import location from "../../assets/icons/MyLocation.svg";
// @ts-ignore
import threedots from "../../assets/icons/threeDots.svg";
// @ts-ignore
import destination from "../../assets/icons/location_on.svg";
import WalkingSVG from "../../assets/icons/WalkingSVG";
import TransportSmallIcon from "../TransportSmallIcon";
import FinishedTransportTripStepLabel from "../FinishedTransportTripStepLabel";


export interface TripStepsProps {
    steps: any[]
}


export default function TripSteps({steps}: TripStepsProps) {
    return (
        <div className={"w-[80%] flex justify-between flex-grow-3 "}>
            <div className={"flex flex-col flex-grow-1 w-[20%] h-full pt-4 items-center mr-3"}>
                {
                    steps.map((step, index) => {
                        switch (step.type) {
                            case "start":
                                return <svg className={"h-[16px] flex flex-col items-center justify-center w-3"}>
                                    <image href={location}/>
                                </svg>
                            case "walking":
                                return <div className={"flex flex-col justify-center items-center gap-1"}>
                                    <svg className={"h-8 w-2 mr-[-1px]"}>
                                        <image href={threedots}/>
                                    </svg>
                                    <WalkingSVG/>
                                    <svg className={"h-8 w-2 mr-[-1px]"}>
                                        <image href={threedots}/>
                                    </svg>
                                </div>
                            case "transport":
                                return <div className={"flex flex-col justify-center items-center gap-1 mb-1"}>
                                    <TransportSmallIcon transport={step.transport}/>
                                    <div className={!step.stepsOpen ? "bg-red-600 h-28 rounded-b-md w-3 mt-[-16px]" : "bg-red-600 h-[165px] rounded-b-md w-3 mt-[-16px]"}></div>
                                    <div className={"bg-white w-2 h-2 rounded mt-[-14px]"}></div>
                                </div>
                            case "finish":
                                return <svg className={"h-[32px] w-[32px] flex flex-col items-center justify-center"}>
                                    <image href={destination}/>
                                </svg>

                        }
                    })
                }
            </div>
            <div className={"w-full flex-col flex gap-3"}>
                {steps.map((step, index) => {
                    let stepContent;
                    switch (step.type) {
                        case "start":
                            stepContent = <StartFinishStep key={index} title={step.title} description={step.description}
                                                           time={step.time}/>
                            break;
                        case "transport":
                            stepContent = <div className={"w-full flex-col flex gap-3"}>
                                <TransportStep cost={step.cost} subheader={step.startSubheader} time={step.startTime}
                                               title={step.startTitle} transportNumber={step.transportNumber}/>
                                <Divider/>
                                <TransportSteps isOpen={step.stepsOpen} minutes={step.stepsMinutes}
                                                setIsOpen={step.setStepsOpen} steps={step.stopSteps}/>
                                <Divider/>
                                <FinishedTransportTripStepLabel title={step.finishTitle} time={step.finishTime}/>
                            </div>
                            break;
                        case "walking":
                            stepContent = <WalkingStep key={index} meters={step.meters} minutes={step.minutes}/>
                            break;
                        case "finish":
                            stepContent = <StartFinishStep key={index} title={step.title} description={step.description}
                                                           time={step.time}/>
                    }
                    return <div className={"w-full flex flex-col gap-3"}>
                        {stepContent}
                        {index !== steps.length - 1 && <Divider/>}
                    </div>
                })}
            </div>
        </div>
    )
}