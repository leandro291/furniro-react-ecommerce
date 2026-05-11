import React from 'react'
import { Calendar, Tag, User } from 'lucide-react'

export function BlogNoticesInformationCard({ image, user, date, category, title, description }) {
    return (
        <article className='max-w-210 w-full flex flex-col gap-4 '>
            <img src={image} alt="" className='rounded-2xl'/>
            <div className='flex items-center gap-8'>
                <p className='flex items-center gap-2'><User size={24} /> {user}</p>
                <p className='flex items-center gap-2'><Calendar size={24} /> {date}</p>
                <p className='flex items-center gap-2'><Tag size={24} /> {category}</p>
            </div>
            <div className='flex flex-col px-2'>
                <h2 className='font-["Poppins"] font-normal text-3xl'>{title}</h2>
                <p className='font-["Poppins"] font-normal text-[15px]'>{description}</p>
            </div>
            <button className='border-b-2 w-25 p-2 cursor-pointer'>Read more</button>
        </article>
    )
}
