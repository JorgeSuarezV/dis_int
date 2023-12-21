import React, {HTMLAttributes} from "react";

export interface PhoneFrameProps extends HTMLAttributes<HTMLDivElement> {
    screen: number
    setScreen: (screen: number) => void
}

function PhoneFrame({children, setScreen}: PhoneFrameProps) {
    return (
        <>
            <button className={"bg-white mr-2"} onClick={() => setScreen(0)}>Screen 0</button>
            <button className={"bg-white"} onClick={() => setScreen(1)}>Screen 1</button>
            <div className='flex w-full h-full justify-center content-center'>
                <div className=' w-[412px] h-[892px] '>
                    {children}
                </div>
            </div>
        </>
    )
}


export default PhoneFrame