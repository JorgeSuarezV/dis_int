import React, { ReactNode } from 'react'
import { RatingStarts } from '../RatingStars';
import { States } from '../States';

interface BottomSheetProps {
    children?: ReactNode;
}
export const BottomSheet = ({children}: BottomSheetProps) => {
    return (
        <div className="w-[412px] h-[368px] rounded-3xl drop-shadow-custom bg-white">
            <div className={"flex justify-center items-center w-full h-9 rounded-t-3xl  border-b-1  border-grayScale600"}>
                <div className={"w-8 h-1 bg-greyScale-600 rounded-lg"}/>
            </div>
            {children}
        </div>
    )
}

export default BottomSheet