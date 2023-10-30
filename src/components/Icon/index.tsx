import React, {ReactNode} from "react";

interface IconProps {
    image: ReactNode;
}

export default function Icon({image}:IconProps) {
    return (
        <div className={"max-w-6 h-10 bg-red-900"}>
            {image}
        </div>
    )
}