import React from 'react';
import HomeSVG from "../../assets/icons/HomeSVG";
import CalendarSVG from "../../assets/icons/CalendarSVG";
import GroupsSVG from "../../assets/icons/GroupsSVG";
import SettingsSVG from "../../assets/icons/SettingsSVG";
import {theme} from "../../assets/theme";
import {NavbarButton} from "../NavbarButton";

const Navbar = () => {
    return (
        <div
            className="absolute inset-x-0 bottom-0 flex w-[412px] h-[106px] p-4 justify-center items-center gap-8 border-t-2 border-gray-200 bg-white">
            <NavbarButton
                icon={<HomeSVG width={40} height={40} color={theme.gray600}/>}
                width={40}
                height={40}
                color={theme.gray600}/>
            <NavbarButton
                icon={<CalendarSVG width={40} height={40} color={theme.gray600}/>}
                width={40}
                height={40}
                color={theme.gray600}/>
            <NavbarButton
                icon={<GroupsSVG width={40} height={40} color={theme.gray600}/>}
                width={40}
                height={40}
                color={theme.gray600}/>
            <NavbarButton
                icon={<SettingsSVG width={40} height={40} color={theme.gray600}/>}
                width={40}
                height={40}
                color={theme.gray600}/>
        </div>
    )
}
export default Navbar