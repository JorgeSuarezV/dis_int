import React, {ReactNode} from 'react'

interface NavbarButtonProps {
    icon: ReactNode;
    width: number;
    height: number;
    color: string;
}

export const NavbarButton = ({icon, width, height, color}: NavbarButtonProps) => {
    return (
        <div className={` cursor-pointer p-3 rounded-full hover:bg-gray-100`}>
            {icon}
        </div>
    )
}