import React from 'react';
import {IconProps} from "../IconInterface";

const TrasbordoSVG = ({width = 24, height = 24, color = '#171717',}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.49 15.25V13.5L14 16L16.49 18.5V16.75H22V15.25H16.49ZM19.51 19.5H14V21H19.51V22.75L22 20.25L19.51 17.75V19.5ZM9.5 5.25C10.6 5.25 11.5 4.35 11.5 3.25C11.5 2.15 10.6 1.25 9.5 1.25C8.4 1.25 7.5 2.15 7.5 3.25C7.5 4.35 8.4 5.25 9.5 5.25ZM5.75 8.65L3 22.75H5.1L6.85 14.75L9 16.75V22.75H11V15.2L8.95 13.15L9.55 10.15C10.85 11.75 12.8 12.75 15 12.75V10.75C13.15 10.75 11.55 9.75 10.65 8.3L9.7 6.7C9.35 6.1 8.7 5.75 8 5.75C7.75 5.75 7.5 5.8 7.25 5.9L2 8.05V12.75H4V9.4L5.75 8.65Z"
                fill={color}/>
        </svg>
    );
};

export default TrasbordoSVG;
