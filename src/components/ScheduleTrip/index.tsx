import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import EditMode from "../../assets/icons/EditMode";
import RouteSteps from "../RouteSteps";
import NotificationBell from "../NotificationBell";
import Switch from "../Switch";
import ArrowUp from "../../assets/icons/ArrowUp";
import WeekPicker from "../WeekPicker";
import Button from "../Button";
import MiniMap from "../../assets/icons/MiniMap";
import TrashBin from "../../assets/icons/TrashBin";


export default function ScheduleTrip() {
    const [isOpened, setIsOpened] = React.useState(false)

    return (
        <div className={"flex flex-col w-94 px-2 py-1 rounded-2xl justify-start gap-4"}>
            <div className={"flex w-94 py-1 justify-between items-center"}>
                <div className={"flex items-center space-x-4"}>
                    <p className={"text-black font-Manrope text-[32px]"}>14:20</p>
                    <p className={"text-gray-900 font-Manrope text-[24px]"}>Label</p>
                    {isOpened && <EditMode/>}
                </div>
                <div onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? <ArrowUp/> : <ArrowDown/>}
                </div>
            </div>
            {isOpened &&
                <>
                    <div className={"flex justify-between items-center px-5"}>
                        <RouteSteps/>
                        <div className={"flex gap-2 items-center"}>
                            <NotificationBell/>
                            <Switch isEnabled={true}/>
                        </div>
                    </div>
                    <div className={"flex justify-between items-center px-5"}>
                        <WeekPicker/>
                    </div>
                    <div className={"flex justify-between items-center px-5"}>
                        <Button iconLeft={<MiniMap/>} variant={"outlined"}>Detalles</Button>
                        <Button iconLeft={<TrashBin/>} variant={"fulfilled"} color={"red"}>Borrar</Button>
                    </div>
                </>
            }
        </div>
    )
}