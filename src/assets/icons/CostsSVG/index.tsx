import React from 'react';
import {IconProps} from "../IconInterface";

const CostsSVG = ({width = 24, height = 24, color = '#171717',}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.4551 12.7167C11.8068 12.0283 10.9551 11.3167 10.9551 10.2083C10.9551 8.93667 12.1334 8.05 14.1051 8.05C16.1818 8.05 16.9518 9.04167 17.0218 10.5H19.6001C19.5184 8.49333 18.2934 6.65 15.8551 6.055V3.5H12.3551V6.02C10.0918 6.51 8.27177 7.98 8.27177 10.2317C8.27177 12.9267 10.5001 14.2683 13.7551 15.05C16.6718 15.75 17.2551 16.7767 17.2551 17.8617C17.2551 18.6667 16.6834 19.95 14.1051 19.95C11.7018 19.95 10.7568 18.8767 10.6284 17.5H8.06177C8.20177 20.055 10.1151 21.49 12.3551 21.9683V24.5H15.8551V21.9917C18.1301 21.56 19.9384 20.2417 19.9384 17.85C19.9384 14.5367 17.1034 13.405 14.4551 12.7167Z"
                fill={color}/>
        </svg>
    );
};

export default CostsSVG;
