import React from 'react'
import { Link } from 'react-router-dom';

export function HeroBanner({ title }) {
    return (
        <section
            className='w-full h-80 flex flex-col justify-center items-center gap-4 mt-26 lg:mt-0'
            
        >
            <h2 className='font-["Poppins"] text-5xl font-medium'>{title}</h2>
            <p className='font-["Poppins"] font-medium'><Link to={"/"}>Home</Link>&gt; <span className='font-light font-["Poppins"]'>{title}</span> </p>

        </section>
    )
}
