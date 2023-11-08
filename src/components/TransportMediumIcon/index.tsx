import React, {ReactNode} from "react";
import BusSVG from "../../assets/icons/BusSVG";
import SubwaySVG from "../../assets/icons/SubwaySVG";
import TrainSVG from "../../assets/icons/TrainSVG";

export type TransportMedium = "train" | "subway" | "bus"

export interface TransportProps {
    transport: TransportMedium
}


function TransportMediumIcon({transport}: TransportProps) {
    const transportRecord: Record<TransportMedium, ReactNode> = {
        bus: <BusSVG/>,
        subway: <SubwaySVG/>,
        train: <TrainSVG/>
    }

    return (
        <div className={'w-[56px] h-[56px] rounded-full flex items-center justify-center bg-greyScale-200'}>
            {transportRecord[transport]}
        </div>
    )
}

export default TransportMediumIcon;