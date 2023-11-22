import React, {useState} from 'react'
import BookmarkerSVG from '../../assets/icons/BookmarkerSVG';
import OutlineBookmarkerSVG from '../../assets/icons/OutlineBookmarkerSVG';

interface BookmarkerProps {
    isBooked: boolean;
    width?: number;
    height?: number;
}

const Bookmarker = ({isBooked, ...rest}: BookmarkerProps) => {
    const [booked, setBooked] = useState(isBooked);

    return (
        <div className='w-min h-min cursor-pointer' onClick={() => setBooked(!booked)}>
            {booked ? <BookmarkerSVG  {...rest}/> : <OutlineBookmarkerSVG {...rest} />}
        </div>
    )
}

export default Bookmarker