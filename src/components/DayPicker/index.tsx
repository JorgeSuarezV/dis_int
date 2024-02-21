import {cva} from 'class-variance-authority'
import React, {useEffect, useState} from 'react'

const variants = cva(['w-[36px] h-[36px] rounded-full flex items-center justify-center cursor-pointer'],
    {
        variants: {
            variant: {
                enabled: ['bg-primary-500 text-white'],
                disabled: ['bg-greyScale-200 text-greyScale-900']
            }
        }
    }
)

interface DayPickerProps {
    text: string;
    isEnabled: boolean;
}

const DayPicker = ({text, isEnabled}: DayPickerProps) => {
    const [enabled, setEnabled] = useState(isEnabled);

    useEffect(() => {
        setEnabled(isEnabled)
    }, [isEnabled])

    return (
        <div className={variants({variant: enabled ? 'enabled' : 'disabled'})}
             onClick={() => setEnabled(!enabled)}>
            <p>{text}</p>
        </div>
    )
}

export default DayPicker