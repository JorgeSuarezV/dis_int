import React, {ReactNode} from "react";

interface IconProps {
    image: ReactNode;
    width?: number,
    height?: number
    color?: string
}

export default function Icon({image, width = 24, height = 24, color = '#171717'}:IconProps) {
    return (
        <div className={"max-w-6 h-10 bg-red-900"}>
            {image}
        </div>
    )
}