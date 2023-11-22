import React from "react";
import Bookmarker from "../Bookmarker";


export default function OptionButton() {
    return (
        <div className={"flex w-96 h-[73px] px-4 items-center space-x-8 hover:bg-greyScale-100"}>
            <Bookmarker isBooked={true} width={40} height={40}/>
            <p className={"overflow-hidden text-black truncate"}>Guardado</p>
        </div>
    )
}