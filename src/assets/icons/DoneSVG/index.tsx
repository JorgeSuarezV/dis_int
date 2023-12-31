import React from 'react';
import {IconProps} from "../IconInterface";

const DoneSVG = ({width = 24, height = 24, color = '#171717',}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                  fill={color}/>
        </svg>
    );
};

export default DoneSVG;
