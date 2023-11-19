import React, {HTMLAttributes} from "react";

function PhoneFrame({children}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className='flex w-full h-full justify-center content-center'>
            <div className=' w-[412px] h-[892px] '>
                {children}
            </div>
        </div>
    )
}


export default PhoneFrame