
import React from 'react';
import {IconProps} from "../IconInterface";

const MicrophoneSVG = ({ width = 24, height = 24, color = '#171717',}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M12 14.5C13.66 14.5 14.99 13.16 14.99 11.5L15 5.5C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5V11.5C9 13.16 10.34 14.5 12 14.5ZM10.8 5.4C10.8 4.74 11.34 4.2 12 4.2C12.66 4.2 13.2 4.74 13.2 5.4L13.19 11.6C13.19 12.26 12.66 12.8 12 12.8C11.34 12.8 10.8 12.26 10.8 11.6V5.4ZM17.3 11.5C17.3 14.5 14.76 16.6 12 16.6C9.24 16.6 6.7 14.5 6.7 11.5H5C5 14.91 7.72 17.73 11 18.22V21.5H13V18.22C16.28 17.74 19 14.92 19 11.5H17.3Z"
                  fill={color}/>
        </svg>
    );
};

export default MicrophoneSVG;
