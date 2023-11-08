import { cva } from 'class-variance-authority'
import React, { useState } from 'react'

const variants = cva(['w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer'],
    {
        variants: {
            variant:{
                enabled: ['bg-primary-500 text-white'],
                disabled: ['bg-greyScale-200 text-greyScale-900']
            }
        }
    }
)

interface BookmarkerProps{
    text: string;
    isBooked: boolean;
}    

const Bookmarker = ({ text, isBooked }: BookmarkerProps) => { 
    const [booked, setBooked] = useState(isBooked);

    return(
        <div className={variants({variant: booked ? 'enabled' : 'disabled'})} 
            onClick={() => setBooked(!booked)}>
            <p>{text}</p>
        </div>
    )
}

export default Bookmarker