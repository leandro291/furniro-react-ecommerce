import { Star } from 'lucide-react'
import React from 'react'

export function DisplayRating({ rating }) {

    const rate = rating.rate

    const starStyle = "fill-yellow-500 text-yellow-500"

    if (rate >= 0 && rate <= 1) return <div className='flex'><Star className={starStyle} /></div>
    if (rate > 1 && rate <= 2) return <div className='flex'><Star className={starStyle} /><Star className={starStyle} /></div>
    if (rate > 2 && rate <= 3) return <div className='flex'><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /></div>
    if (rate > 3 && rate <= 4) return <div className='flex'><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /></div>
    if (rate > 4 && rate <= 5) return <div className='flex'><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /><Star className={starStyle} /></div>

    return null
}
