import React, { ReactNode, useMemo } from 'react'
import ScheduleSVG from '../../assets/icons/ScheduleSVG';
import { theme } from '../../assets/theme';
import DistanceSVG from '../../assets/icons/DistanceSVG';
import CostsSVG from '../../assets/icons/CostsSVG';

type TripType = 'duration' | 'distance' | 'costs'

interface InfoTripProps{
    type: TripType;
    text: string;
}    

const InfoTrip = ({ type, text, }: InfoTripProps) => {

    const infoRecord: Record<TripType, { icon: ReactNode, amount: string, info:string  }> = useMemo(() => {
        return {
            duration: {
                icon: <ScheduleSVG width={28} height={28} color={theme.gray700}/>,
                amount: text + ' min',
                info: 'Duracion',
            },
            distance: {
                icon: <DistanceSVG width={28} height={28} color={theme.gray700} />,
                amount: text +' m',
                info: 'Distancia',
            },
            costs: {
                icon: <CostsSVG width={28} height={28} color={theme.gray700} />,
                amount: '$'+text,
                info: 'Gastos',
            },
        }
    }, [])

    return(
        <div className="flex items-center gap-1.5">
            {infoRecord[type].icon}
            <div className="flex flex-col items-start gap-1">
                <p className="overflow-hidden text-greyScale-700 overflow-ellipsis whitespace-nowrap font-Inter text-base font-normal">
                    {infoRecord[type].amount}
                </p>
                <p className="overflow-hidden text-greyScale-700 overflow-ellipsis whitespace-nowrap font-Inter text-base font-normal">
                    {infoRecord[type].info}
                </p>
            </div>
        </div>
    )
}

export default InfoTrip