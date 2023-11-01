import React from "react";
import {IconProps} from "../IconInterface";


function PlusSVG({width = 24, height = 24, color = '#171717'}: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color}/>
        </svg>
    )
}

export default PlusSVG;