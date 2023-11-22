import React, {ComponentType, HTMLAttributes, InputHTMLAttributes} from 'react';
import SearchSVG from "../../assets/icons/SearchSVG";
import MicrophoneSVG from "../../assets/icons/MicrophoneSVG";
import {theme} from "../../assets/theme";
import {cva} from "class-variance-authority";
import CloseSVG from "../../assets/icons/CloseSVG";

const containerVariants = cva(["w-full h-43 px-4 py-3 bg-white rounded-3xl shadow border border-neutral-300 flex justify-start items-center gap-2"], {
    variants: {
        variant: {
            flat: ["shadow-none"],
            default: ["shadow"],
        }
    }
});

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement>{
    IconLeft?: ComponentType<{ color: string }>;
    IconRight?: ComponentType<{ color: string }>;
    variant?: "flat" | "default"
}

export default function SearchBar({IconLeft, IconRight, placeholder, variant, value, ...rest}: SearchBarProps) {
    return (
        <div
            className={containerVariants({variant: variant ?? "default"})}>
            {IconLeft ? <IconLeft color={theme.gray700}/> : <SearchSVG color={theme.gray700}/> }
            <input
                {...rest}
                placeholder={placeholder}
                type="text"
                className="w-full h-19 text-neutral-500 text-base font-normal font-Inter outline-none"
            />
            {IconRight ? <IconRight color={theme.gray700}/> : value ? <CloseSVG/> : <MicrophoneSVG color={theme.gray700}/>}
        </div>
    );
}
