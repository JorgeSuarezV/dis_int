import React from 'react'

export const States = ({type}:{type:string}) => {
    switch(type){
        case 'DESVIO':
            return <div className='w-[56px] h-[56px] rounded-full bg-blue-500' >

                </div>
            
        case 'DEMORA':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
        case 'PARO':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
        case 'OK':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
        case 'TRASBORDO':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
        case 'SIN_INTERNET':
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
        default:
            return(
                <div className='w-[56px] h-[56px] rounded-full bg-green-500' >

                </div>
            )
    }
}