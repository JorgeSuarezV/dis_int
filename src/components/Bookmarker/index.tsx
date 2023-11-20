import React, { useState } from 'react'
import BookmarkerSVG from '../../assets/icons/BookmarkerSVG';
import OutlineBookmarkerSVG from '../../assets/icons/OutlineBookmarkerSVG';

interface BookmarkerProps{
    isBooked: boolean;
}    

const Bookmarker = ({ isBooked }: BookmarkerProps) => { 
    const [booked, setBooked] = useState(isBooked);

    return(
        <div className='cursor-pointer' onClick={() => setBooked(!booked)}>
            {booked ? <BookmarkerSVG /> : <OutlineBookmarkerSVG /> }
        </div>
    )
}

export default Bookmarker