import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";


export default function ScheduleTrip() {
    const [isOpened, setIsOpened] = React.useState(false)

    return (
        <div className={"flex w-94 px-2 py-1 justify-between items-center"}>
            <div className={"flex items-center space-x-4"}>
                <p className={"text-black font-manrope text-[32px]"}>14:20</p>
                <p className={"text-gray-900 font-manrope text-[24px]"}>Label</p>
            </div>
            <div onClick={() => setIsOpened(true)}>
                <ArrowDown/>
            </div>
        </div>
    )
}