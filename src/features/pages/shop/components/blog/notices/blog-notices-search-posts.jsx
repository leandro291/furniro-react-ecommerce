import React from 'react'

export function BlogNoticesSearchPosts({ image, title, date}) {
    return (
        <div className='flex items-center gap-4'>
            <img className='w-20 h-20 rounded' src={image} alt="" />
            <div className='flex flex-col w-45 gap-2'>
                <span className='font-["Poppins"] text-sm'>{title}</span>
                <span className='font-["Poppins"] text-xs text-gray-600'>{date}</span>
            </div>
        </div>
    )
}
