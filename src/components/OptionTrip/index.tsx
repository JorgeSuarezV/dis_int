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
        <div className="flex justify-center items-center justify-between p-4">
            <div className="flex items-center gap-2 flex-shrink-0">
                <Button iconLeft={<NavigationSVG color={theme.white} />}> Iniciar </Button>
                <Button iconLeft={<ScheduleSVG color={theme.primary500} />} variant={'outlined'}> Programar </Button>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
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