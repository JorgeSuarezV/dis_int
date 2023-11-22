import React, {HTMLAttributes} from "react";
import KeyBoardLefArrowSVG from "../../assets/icons/KeyBoardLefArrowSVG";
import SwapSVG from "../../assets/icons/SwapSVG";

interface FromToInputsProps {
    firstOnClick?: () => void
    secondOnClick?: () => void
    firstInput?: HTMLAttributes<HTMLInputElement>
    secondInput?: HTMLAttributes<HTMLInputElement>
}

function FromToInputs({firstOnClick, secondOnClick, firstInput, secondInput}: FromToInputsProps) {
    return (
        <div className={"flex flex-col justify-start items-start w-full p-4 gap-4"}>
            <div className={"flex flex-row justify-start h-[43]px w-full gap-4 items-center"}>
                <div onClick={firstOnClick}>
                    <KeyBoardLefArrowSVG width={24} height={24} color={"#707070"}/>
                </div>
                <input {...firstInput}
                       className={"flex-grow flex w-full h-11 p-3 px-4 rounded-3xl outline-none border border-gray-300"}/>
            </div>
            <div className={"flex flex-row justify-start h-[43]px w-full gap-4 items-center"}>
                <input {...secondInput}
                       className={"flex-grow flex w-full h-11 p-3 px-4 rounded-3xl outline-none border border-gray-300"}/>
                <div onClick={secondOnClick}>
                    <SwapSVG width={24} height={24} color={"#707070"}/>
                </div>
            </div>
        </div>
    )
}

export default FromToInputs