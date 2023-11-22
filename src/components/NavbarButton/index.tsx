import React, {ReactNode} from 'react'

interface NavbarButtonProps {
    icon: ReactNode;
    width: number;
    height: number;
}

export const NavbarButton = ({icon, width, height}: NavbarButtonProps) => {
    return (
        <div className={` w-[${width}px] h-[${height}px] cursor-pointer p-3 rounded-full hover:bg-gray-100`}>
            {icon}
        </div>
    )
}