import ScheduleSVG from '../../assets/icons/ScheduleSVG';
import Button from '../Button';
import NavigationSVG from '../../assets/icons/NavigationSVG';
import { theme } from '../../assets/theme';
import DotSVG from '../../assets/icons/DotSVG';

interface OptionTripProps{
    arriveTime: string;
    duration: string;
}    

const OptionTrip = ({ arriveTime, duration, }: OptionTripProps) => {

    return(
        <div className="w-[412px] h-[72px] px-4 py-[15px] bg-white shadow justify-between items-center inline-flex"> 
            <div className="h-[42px] justify-start items-center gap-2 flex"> 
                <Button size={'small'} iconLeft={<NavigationSVG width={20} height={20} color={theme.white} />}> Iniciar </Button>
                <Button size={'medium'} iconLeft={<ScheduleSVG width={20} height={20} color={theme.primary500} />} variant={'outlined'}> Programar </Button>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
                <p className="overflow-hidden text-gray-600 truncate whitespace-nowrap font-Inter text-base font-normal">
                    {arriveTime}
                </p>
                <DotSVG color={theme.gray600} />
                <p className="overflow-hidden text-black truncate whitespace-nowrap font-Inter text-2xl font-normal">
                    {duration}
                </p>


            </div>
        </div>
    )
}

export default OptionTrip