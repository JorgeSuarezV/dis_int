import React from "react";
import {IconProps} from "../IconInterface";

function SwapSVG({width = 24, height = 24, color = '#171717'}: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 13.5V6.325L5.425 8.9L4 7.5L9 2.5L14 7.5L12.575 8.9L10 6.325V13.5H8ZM15 22.5L10 17.5L11.425 16.1L14 18.675V11.5H16V18.675L18.575 16.1L20 17.5L15 22.5Z"
                fill={color}/>
        </svg>
    )
}

export default SwapSVG