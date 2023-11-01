
import React from 'react';
import {IconProps} from "../IconInterface";

const HomeSVG = ({ width = 24, height = 24, color = '#171717' }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
                  fill={color}/>
        </svg>
    );
};

export default HomeSVG;
