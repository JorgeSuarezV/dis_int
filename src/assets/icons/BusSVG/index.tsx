import React from "react";
import {IconProps} from "../IconInterface";

function BusSVG({width = 39, height = 39, color = '#494949'}: IconProps) {
    return (
        <svg width={width} height={height} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3366 4.20679C13.0394 4.20679 6.74219 4.99394 6.74219 10.504V25.4598C6.74219 26.9554 7.34042 28.3093 8.31648 29.3011V32.5441C8.31648 33.41 9.02492 34.1184 9.89078 34.1184H11.4651C12.3309 34.1184 13.0394 33.41 13.0394 32.5441V30.9698H25.6338V32.5441C25.6338 33.41 26.3422 34.1184 27.2081 34.1184H28.7823C29.6482 34.1184 30.3566 33.41 30.3566 32.5441V29.3011C31.3327 28.3093 31.9309 26.9554 31.9309 25.4598V10.504C31.9309 4.99394 26.295 4.20679 19.3366 4.20679ZM19.3366 7.35538C25.1772 7.35538 27.4127 8.07956 28.2628 8.92968H10.5677C11.5123 8.11104 13.795 7.35538 19.3366 7.35538ZM28.7823 24.6727C28.7823 26.4044 27.3655 27.8212 25.6338 27.8212H13.0394C11.3076 27.8212 9.89078 26.4044 9.89078 24.6727V19.9498H28.7823V24.6727ZM28.7823 16.8012H9.89078V12.0783H28.7823V16.8012Z"
                  fill={color}/>
            <path d="M13.8265 26.2469C15.1307 26.2469 16.188 25.1897 16.188 23.8855C16.188 22.5813 15.1307 21.5241 13.8265 21.5241C12.5223 21.5241 11.4651 22.5813 11.4651 23.8855C11.4651 25.1897 12.5223 26.2469 13.8265 26.2469Z"
                  fill={color}/>
            <path d="M24.8466 26.2469C26.1508 26.2469 27.2081 25.1897 27.2081 23.8855C27.2081 22.5813 26.1508 21.5241 24.8466 21.5241C23.5424 21.5241 22.4852 22.5813 22.4852 23.8855C22.4852 25.1897 23.5424 26.2469 24.8466 26.2469Z"
                      fill={color}/>
        </svg>
    )
}

export default BusSVG;