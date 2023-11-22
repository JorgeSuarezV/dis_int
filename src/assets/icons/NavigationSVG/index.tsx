import React from 'react';
import {IconProps} from "../IconInterface";

const NavigationSVG = ({width = 24, height = 24, color = '#171717',}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.5L4.5 20.79L5.21 21.5L12 18.5L18.79 21.5L19.5 20.79L12 2.5Z"
                  fill={color}/>
        </svg>
    );
};

export default NavigationSVG;
