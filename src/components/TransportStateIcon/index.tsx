import React, {ReactNode, useMemo} from 'react'
import AltRouteSVG from '../../assets/icons/AltRouteSVG'
import {theme} from '../../assets/theme'
import ScheduleSVG from '../../assets/icons/ScheduleSVG'
import ReportSVG from '../../assets/icons/ReportSVG'
import OkSVG from '../../assets/icons/OkSVG'
import TrasbordoSVG from '../../assets/icons/TrasbordoSVG'
import DisconnectedSVG from '../../assets/icons/DisconnectedSVG'
import {cva, VariantProps} from 'class-variance-authority'

const stateVariant = cva(['w-[56px] h-[56px] rounded-full flex items-center justify-center'], {
    variants: {
        state: {
            detour: [
                "bg-blue-300"
            ],
            delayed: [
                "bg-orange-300"
            ],
            strike: [
                "bg-red-300"
            ],
            ok: [
                "bg-green-300"
            ],
            transshipment: [
                "bg-fuchsia-300"
            ],
            offline: [
                "bg-gray-300"
            ]
        },

    },
    defaultVariants: {
        state: 'offline',
    }
})
export type TransportState = "detour" | "delayed" | "strike" | "ok" | "transshipment" | "offline"

interface TransportStatesProps extends VariantProps<typeof stateVariant> {
    state: TransportState
}


export const TransportStateIcon = ({state}: TransportStatesProps) => {
    const svgRecord: Record<TransportState, ReactNode> = useMemo(() => {
        return {
            delayed: <ScheduleSVG width={37} height={37} color='#ECA485'/>,
            offline: <DisconnectedSVG width={37} height={37} color='rgba(91, 91, 91)'/>,
            ok: <OkSVG width={37} height={37} color='rgba(50, 203, 93)'/>,
            strike: <ReportSVG width={37} height={37} color='rgba(214, 64, 64)'/>,
            transshipment: <TrasbordoSVG width={37} height={37} color='rgba(193, 64, 214)'/>,
            detour: <AltRouteSVG width={37} height={37} color={theme.primary500}/>
        }
    }, [])


    return (
        <div className={stateVariant({state: state})}>
            {svgRecord[state]}
        </div>
    )
}

export default TransportStateIcon
