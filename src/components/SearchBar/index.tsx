import React from 'react';
import SearchSVG from "../../assets/icons/SearchSVG";
import MicrophoneSVG from "../../assets/icons/MicrophoneSVG";
import {theme} from "../../assets/theme";

interface SearchBarProps {
    placeholder: string;
}

export default function SearchBar({placeholder}: SearchBarProps) {
    return (
        <div
            className='w-[360px] h-[43px] px-4 py-3 bg-white rounded-3xl shadow border border-neutral-300 justify-start items-center gap-2 inline-flex'>
            <SearchSVG color={theme.gray700}/>
            <input placeholder={placeholder} type='text'
                   className="w-[264px] h-[19px] text-neutral-500 text-base font-normal font-['Inter'] outline-none"/>
            <MicrophoneSVG color={theme.gray700}/>
        </div>
    );
}