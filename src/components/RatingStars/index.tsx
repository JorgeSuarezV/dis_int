import React, {useState} from 'react'
import StarSVG from '../../assets/icons/StarSVG'

export const RatingStarts = () => {
    const [rating, setRating] = useState(0)

    return (
        <div className='w-[136px] h-[24px] g-1 flex'>
            <div className='cursor-pointer' onClick={() => setRating(1)}><StarSVG
                color={rating >= 1 ? '#707070' : '#CBCFD3'}/></div>
            <div className='cursor-pointer' onClick={() => setRating(2)}><StarSVG
                color={rating >= 2 ? '#707070' : '#CBCFD3'}/></div>
            <div className='cursor-pointer' onClick={() => setRating(3)}><StarSVG
                color={rating >= 3 ? '#707070' : '#CBCFD3'}/></div>
            <div className='cursor-pointer' onClick={() => setRating(4)}><StarSVG
                color={rating >= 4 ? '#707070' : '#CBCFD3'}/></div>
            <div className='cursor-pointer' onClick={() => setRating(5)}><StarSVG
                color={rating >= 5 ? '#707070' : '#CBCFD3'}/></div>
        </div>
    )
}