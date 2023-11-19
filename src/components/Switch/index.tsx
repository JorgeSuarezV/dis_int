import { cva } from 'class-variance-authority';
import React, { useState } from 'react';

const variants = cva(['w-[55px] h-[30px] rounded-full flex items-center cursor-pointer p-1'],
    {
        variants: {
            variant:{
                enabled: ['bg-primary-500 text-white'],
                disabled: ['bg-greyScale-200 text-greyScale-900']
            }
        }
    }
);

interface SwitchProps {
    isEnabled: boolean;
}

const Switch = ({ isEnabled }: SwitchProps) => {
    const [enabled, setEnabled] = useState(isEnabled);

    return (
        <div className={variants({ variant: enabled ? 'enabled' : 'disabled' })} 
             onClick={() => setEnabled(!enabled)}>
            <div className={`w-[22px] h-[22px] rounded-full cursor-pointer bg-white transition-transform duration-300 ease-in-out 
                            ${enabled ? 'transform translate-x-full' : 'transform translate-x-0'}`}>
            </div>
        </div>
    );
};

export default Switch;
