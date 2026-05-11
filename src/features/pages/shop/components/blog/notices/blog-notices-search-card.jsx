import React from 'react'

export function BlogNoticesSearchCard({ title, contar }) {
    return (
        <li className='flex capitalize font-["Poppins"] text-base font-normal text-gray-600'>
            <span className='flex-1'>{title}</span>
            <span>{contar(title)}</span>
        </li>
    )
}
