import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import EditMode from "../../assets/icons/EditMode";
import RouteSteps from "../RouteSteps";
import NotificationBell from "../NotificationBell";
import Switch from "../Switch";
import ArrowUp from "../ArrowUp";


export default function ScheduleTrip() {
    const [isOpened, setIsOpened] = React.useState(false)

    return (
        <div className={"flex-col w-94 px-2 py-1 justify-start gap-16 items-center"}>
            <div className={"flex w-94 py-1 justify-between items-center"}>
                <div className={"flex items-center space-x-4"}>
                    <p className={"text-black font-manrope text-[32px]"}>14:20</p>
                    <p className={"text-gray-900 font-manrope text-[24px]"}>Label</p>
                    {isOpened && <EditMode/>}
                </div>
                <div onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? <ArrowUp/> : <ArrowDown/>}
                </div>
            </div>
            {isOpened &&
                (
                    <div className={"flex justify-between items-center  px-5"}>
                        <RouteSteps/>
                        <div className={"flex gap-2 items-center"}>
                            <NotificationBell/>
                            <Switch isEnabled={true}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}