import React, { useState } from 'react'
import { RoomShowcaseSkeleton } from '../../../shared/components/skeleton/skeleton-room-showcase'

export function RoomShowcaseMosaic() {

    const [ loadingCount, setLoadingCount] = useState(0);

    const handleImageLoad = () => {
        setLoadingCount(next => next + 1);
    };

    const allLoading = loadingCount >= 9;

    return (
        <div className='relative'>

            {!allLoading && <RoomShowcaseSkeleton />}

            <div className={`container grid grid-cols-11 grid-rows-[repeat(10,60px)] gap-5 ${!allLoading ? 'hidden' : 'block'}`}>


                <div className='col-start-1 col-span-1 row-start-1 row-span-5'>
                    <img src="https://images.pexels.com/photos/33569933/pexels-photo-33569933.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad} />
                </div>

                <div className='col-start-1 col-span-1 row-start-6 row-span-5'>
                    <img src="https://images.pexels.com/photos/16283231/pexels-photo-16283231.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad} />
                </div>

                <div className='col-start-2 col-span-4 row-start-2 row-span-4'>
                    <img src="https://images.pexels.com/photos/8989592/pexels-photo-8989592.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad} />
                </div>

                <div className='col-start-3 col-span-3 row-start-6 row-span-4'>
                    <img src="https://images.pexels.com/photos/4581902/pexels-photo-4581902.jpeg" alt="" className='w-full h-full object-cover'  onLoad={handleImageLoad}/>
                </div>

                <div className='col-start-8 col-span-3 row-start-2 row-span-5'>
                    <img src="https://images.pexels.com/photos/32841967/pexels-photo-32841967.jpeg" alt="" className='w-full h-full object-cover'onLoad={handleImageLoad}/>
                </div>

                <div className='col-start-6 col-span-2 row-start-3 row-span-6'>
                    <img src="https://images.pexels.com/photos/2090786/pexels-photo-2090786.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad}/>
                </div>

                <div className='col-start-10 col-span-2 row-start-7 row-span-2'>
                    <img src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad}/>
                </div>

                <div className='col-start-11 col-span-1 row-start-1 row-span-6'>
                    <img src="https://images.pexels.com/photos/35820991/pexels-photo-35820991.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad}/>
                </div>

                <div className='col-start-8 col-span-2 row-start-7 row-span-3'>
                    <img src="https://images.pexels.com/photos/29043373/pexels-photo-29043373.jpeg" alt="" className='w-full h-full object-cover' onLoad={handleImageLoad}/>
                </div>
            </div>
        </div>
    )
}