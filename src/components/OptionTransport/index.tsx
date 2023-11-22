import { ReactNode } from 'react';
import Switch from '../Switch';

interface OptionTransportProps {
    icon: ReactNode;
    text: string;
}

const OptionTransport = ({icon, text,}: OptionTransportProps) => {

    return (
        <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-4">
                {icon}
                <p className="w-[203px] h-6 text-greyScale-600 text-base font-normal font-Manrope"> {text} </p>
            </div>
            <Switch isEnabled={false} />
        </div>
    )
}

export default OptionTransport