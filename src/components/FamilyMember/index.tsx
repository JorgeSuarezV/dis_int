import React, { ReactNode } from "react";
import Icon from "../Icon";
// @ts-ignore
import avatar from "../../assets/images/avatar.png";
import TransportStateIcon from "../TransportStateIcon";

interface FamilyMemberProps{
    name:string;
    type:string;
    icon:ReactNode;
}
export default function FamilyMember({name, type, icon}:FamilyMemberProps) {
    return (
        <div className={"flex w-88 justify-between items-center"}>
            <div className={"flex w-46 items-center space-x-2 flex-none"}>
                {icon ?? <Icon height={56} width={56} image={<img src={avatar} alt={""}/>}/>}
                <div className={"w-23 h-12 flex-none"}>
                    <p className={"truncate text-gray-800"}>{name}</p>
                    <p className={"overflow-hidden text-gray-500 truncate"}>{type}</p>
                </div>
            </div>
            <TransportStateIcon state={"ok"}/>
        </div>
    )
}