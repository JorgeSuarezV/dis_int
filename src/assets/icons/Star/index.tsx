import React from "react";
import {IconProps} from "../IconInterface";


function StarSVG({width = 20, height = 20, color = '#171717'}: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="star">
                <path id="Vector" d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
                      fill={color}/>
            </g>
        </svg>
    )
}

export default StarSVG;