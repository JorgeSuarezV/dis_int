import React from "react";
import {IconProps} from "../IconInterface";

function BookmarkerSVG({width = 24, height = 24, color = '#494949'}: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill={color}/>
        </svg>
    )
}

export default BookmarkerSVG;