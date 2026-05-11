import React from 'react'

export function DetailsCardItem({ label, children }) {
    return (
        <li className='flex items-center'>
            <span className='font-["Poppins"] text-base font-normal w-20 text-gray-700'>{label}</span>
            <span className='font-["Poppins"] text-base font-normal text-gray-700 flex gap-1 items-center'>: {children}</span>
        </li>
    )
}
