import React from "react";
import PlusSVG from "../../assets/icons/PlusSVG";


function IconButton() {
    return (
        <div className={"flex justify-center items-center p-4 h-16 w-16 bg-primary-500 rounded-2xl"}>
            <PlusSVG color={'white'}/>
        </div>
    )
}

export default IconButton