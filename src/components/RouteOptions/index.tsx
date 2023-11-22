import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import DoneSVG from '../../assets/icons/DoneSVG';
import { theme } from '../../assets/theme';

const variants = cva(['overflow-hidden overflow-ellipsis whitespace-nowrap font-Manrope text-16 font-normal'],
    {
        variants: {
            variant:{
                enabled: ['text-active-700'],
                disabled: ['text-greyScale-600']
            }
        }
    }
);


interface RouteOptionsProps {
    isEnabled: boolean;
}

const RouteOptions = ({ isEnabled }: RouteOptionsProps) => {
    const [enabled, setEnabled] = useState(isEnabled);

    return (
        <div className="flex items-center w-340 justify-between cursor-pointer"
            onClick={() => setEnabled(!enabled)}>
            <div className={variants({ variant: enabled ? 'enabled' : 'disabled' })}>
                Mas Rapido
            </div>
            {enabled && <DoneSVG color={theme.active700} /> }
        </div>
    );
};

export default RouteOptions;
