import React from 'react';
import SearchSVG from "../../assets/icons/SearchSVG";
import MicrophoneSVG from "../../assets/icons/MicrophoneSVG";
import { theme } from "../../assets/theme";

interface SearchBarProps {
    IconLeft?: React.ComponentType<{ color: string }>;
    IconRight?: React.ComponentType<{ color: string }>;
    placeholder: string;
}

export default function SearchBar({ IconLeft, IconRight, placeholder }: SearchBarProps) {
    return (
        <div className="w-360 h-43 px-4 py-3 bg-white rounded-3xl shadow border border-neutral-300 flex justify-start items-center gap-2">
            {IconLeft && <IconLeft color={theme.gray700} />}
            <input
                placeholder={placeholder}
                type="text"
                className="w-264 h-19 text-neutral-500 text-base font-normal font-Inter outline-none"
            />
            {IconRight && <IconRight color={theme.gray700} />}
        </div>
    );
}
