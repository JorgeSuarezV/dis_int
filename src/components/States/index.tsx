import React from 'react'
import AltRouteSVG from '../../assets/icons/AltRouteSVG'
import { theme } from '../../assets/theme'
import ScheduleSVG from '../../assets/icons/ScheduleSVG'
import ReportSVG from '../../assets/icons/ReportSVG'
import OkSVG from '../../assets/icons/OkSVG'
import TrasbordoSVG from '../../assets/icons/TrasbordoSVG'
import DisconnectedSVG from '../../assets/icons/DisconnectedSVG'

export const States = ({type}:{type:string}) => {
    switch(type){
        case 'DESVIO':
            return <div className='w-[56px] h-[56px] rounded-full bg-blue-300 flex items-center justify-center' >
                    <AltRouteSVG width={37} height={37} color={theme.primary500} />
                </div>
        case 'DEMORA':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-orange-300 flex items-center justify-center' >
                    <ScheduleSVG width={37} height={37} color='rgba(236, 164, 133, 1)' />
                </div>
            )
        case 'PARO':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-red-300 flex items-center justify-center' >
                    <ReportSVG width={37} height={37} color='rgba(214, 64, 64, 1)' />
                </div>
            )
        case 'OK':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-300 flex items-center justify-center' >
                    <OkSVG width={37} height={37} color='rgba(50, 203, 93, 1)' />
                </div>
            )
        case 'TRASBORDO':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-fuchsia-300 flex items-center justify-center' >
                    <TrasbordoSVG width={37} height={37} color='rgba(193, 64, 214, 1)' />
                </div>
            )
        case 'SIN_INTERNET':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-gray-300 flex items-center justify-center' >
                    <DisconnectedSVG width={37} height={37} color='rgba(91, 91, 91, 1)' />
                </div>
            )
        default:
            return(
                <div className='w-[56px] h-[56px] rounded-full stroke-black' >

                </div>
            )
    }
}