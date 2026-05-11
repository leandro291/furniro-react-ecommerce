import React from 'react'

export function SkeletonCategories() {
    return (
        <div className='grid grid-cols-3 gap-5 mt-15 max-w-300 w-full rounded-lg'>
            <div className='h-120 bg-gray-200/60 animate-pulse'></div>
            <div className='h-120 bg-gray-200/60 animate-pulse'></div>
            <div className='h-120 bg-gray-200/60 animate-pulse'></div>
        </div>
    )
}