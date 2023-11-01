import React from 'react'
import {ReactNode} from "react";

interface BottomSheetProps {
    children?: ReactNode;
}
export const BottomSheet = ({children}: BottomSheetProps) => {
    return (
        <div className="w-[412px] h-[368px] rounded-lg drop-shadow-custom ">
            <div className={"flex justify-center items-center w-full h-9 rounded-t-lg  border-b-1  border-"}>
                <div className={"w-8 h-1 bg-greyScale-600 rounded-lg"}/>
            </div>
            {children}
        </div>
    )
}

export default BottomSheet