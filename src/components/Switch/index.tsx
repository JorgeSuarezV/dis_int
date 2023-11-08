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

interface SwitchProps{
    text: string;
    isEnabled: boolean;
}    

const Switch = ({ text, isEnabled }: SwitchProps) => { 
    const [enabled, setEnabled] = useState(isEnabled);

    return(
        <div className={variants({variant: enabled ? 'enabled' : 'disabled'})} 
            onClick={() => setEnabled(!enabled)}>
            <p>{text}</p>
        </div>
    )
}

export default Switch