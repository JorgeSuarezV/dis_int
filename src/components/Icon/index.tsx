import React, { ReactNode } from "react";

interface IconProps {
    image: ReactNode;
    width?: number;
    height?: number;
}

export default function Icon({ image, width = 24, height = 24 }: IconProps) {
    return (
        <div className="" style={{ width: `${width}px`, height: `${height}px` }}>
            {image}
        </div>
    );
}
