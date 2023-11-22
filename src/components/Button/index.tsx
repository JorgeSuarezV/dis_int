import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import {cva, VariantProps,} from "class-variance-authority";
import Icon from "../Icon";

const buttonVariant = cva(['w-auto sm:w-fit', 'rounded-[16px]', "flex", "flex-row", "p-y-2.5", "p-x-3", "gap-2"], {
    variants: {
        variant: {
            fulfilled: [
                'text-white',
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
        },
        color: {
            primary: ["bg-primary-500"],
            red: ["bg-red-500 hover:bg-red-700"],
        }
    },
    defaultVariants: {
        variant: 'fulfilled',
        size: 'medium',
        color: 'primary'
    }
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    color?: "primary" | "red"
}

const Button = ({variant, size, iconLeft, iconRight, children, color, ...rest}: ButtonProps) => {
    return (
        <button className={buttonVariant({size, variant, color})} {...rest}>
            {iconLeft && <Icon width={20} height={20} image={iconLeft}/>}
            {children}
            {iconRight && <Icon width={20} height={20} image={iconRight}/>}
        </button>
    )
}


export default Button