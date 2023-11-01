import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {cva, VariantProps,} from "class-variance-authority";
import Icon from "../Icon";

const buttonVariant = cva(['w-auto sm:w-fit', 'rounded-lg', "flex", "flex-row", "p-y-2.5", "p-x-3", "gap-2"], {
    variants: {
        variant: {
            fulfilled: [
                'bg-primary-500 text-white',
                'hover:bg-primary-700 hover:text-white',
                'disabled:bg-greyScale-300 disabled:text-greyScale-700',
            ],
            outlined: [
                'bg-white text-primary-500 border border-primary-500',
                'hover:bg-primary-100',
                'disabled:bg-greyScale-300 disabled:border-greyScale-300 disabled:text-greyScale-700',
            ],
        },
        size: {
            small: ['px-4 py-2 text-xs'],
            medium: ['px-4 py-3 text-sm'],
            large: ['px-4 py-3 text-base'],
        }
    },
    defaultVariants: {
        variant: 'fulfilled',
        size: 'medium'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
}

const Button = ({variant, size, iconLeft, iconRight, children, ...rest}: ButtonProps) => {
    return (
        <button className={buttonVariant({size, variant})} {...rest}>
            {iconLeft && <Icon width={20} height={20} image={iconLeft}/>}
            {children}
            {iconRight && <Icon width={20} height={20} image={iconRight}/>}
        </button>
    )
}


export default Button