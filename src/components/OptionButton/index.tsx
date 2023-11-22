import { ReactNode } from "react";

interface OptionButtonProps{
    icon: ReactNode;
    text: string;
}

export default function OptionButton({ icon, text }:OptionButtonProps) {
    return (
        <div className={"flex w-96 h-[73px] px-4 items-center space-x-8 hover:bg-greyScale-100"}>
            {icon}
            <p className={"overflow-hidden text-black truncate"}>{text}</p>
        </div>
    )
}