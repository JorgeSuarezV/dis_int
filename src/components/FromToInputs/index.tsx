import React from "react";
import KeyBoardLefArrowSVG from "../../assets/icons/KeyBoardLefArrowSVG";
import SwapSVG from "../../assets/icons/SwapSVG";

interface FromToInputsProps {
    onChange1?: (value: string) => void
    onChange2?: (value: string) => void
}

function FromToInputs({onChange1, onChange2}: FromToInputsProps) {
    const [value1, setValue1] = React.useState("")
    const [value2, setValue2] = React.useState("")
    return (
        <div className={"flex flex-col justify-start items-start w-full p-4 gap-4"}>
            <div className={"flex flex-row justify-start h-[43]px w-full gap-4 items-center"}>
                <div className={"w-[24px] h-[24px] hover:cursor-pointer"}>
                    <KeyBoardLefArrowSVG width={24} height={24} color={"#707070"}/>
                </div>
                <input value={value1} onChange={(e) => {
                    setValue1(e.target.value)
                    onChange1?.(e.target.value)

                }}
                       className={"flex-grow flex w-full h-11 p-3 px-4 rounded-3xl outline-none border border-gray-300"}/>
            </div>
            <div className={"flex flex-row justify-start h-[43]px w-full gap-4 items-center"}>
                <input value={value2}
                       onChange={(e) => {
                           setValue2(e.target.value)
                           onChange2?.(e.target.value)
                       }}
                       className={"flex-grow flex w-full h-11 p-3 px-4 rounded-3xl outline-none border border-gray-300"}/>
                <div>
                    <div className={"w-[24px] h-[24px] hover:cursor-pointer"} onClick={() => {
                        const temp = value1
                        setValue1(value2)
                        setValue2(temp)
                    }}>
                        <SwapSVG width={24} height={24} color={"#707070"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FromToInputs;
