import React from 'react'

export function SkeletonDetailProduct() {
    return (
        <div>

            <div className='container mx-auto bg-gray-200/60 min-h-24 px-20 animate-pulse'></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-300 mx-auto mt-10 gap-5'>
                <div className="w-full h-125 mx-auto rounded-2xl bg-gray-200/60 animate-pulse"></div>
                <div className="w-full h-125 mx-auto rounded-2xl bg-gray-200/60 animate-pulse"></div>
            </div>

        </div>
    )
}
