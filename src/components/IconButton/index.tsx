import React, { ReactNode } from "react";
import PlusSVG from "../../assets/icons/PlusSVG";
import { cva } from "class-variance-authority";

interface IconButtonProps{
    icon?: ReactNode;
    disabled?: boolean;
}

const variants = cva(["flex justify-center items-center p-4 h-16 w-16 rounded-2xl "],
    {
        variants: {
            variant:{
                enabled: ['bg-primary-500 cursor-pointer'],
                disabled: ['bg-primary-200']
            }
        }
    }
);

const IconButton = ({ icon, disabled }: IconButtonProps) => {
    return (
        <div className={variants({ variant: disabled ? 'disabled':'enabled' })} >
            { icon ?? <PlusSVG color={'white'}/> }
        </div>
    )
};

export default IconButton;