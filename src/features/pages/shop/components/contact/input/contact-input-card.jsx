import React from 'react'

export function ContactInputCard({ type, title, placeholder, ref }) {
    return (
        <div className='flex flex-col gap-6'>
            <label className='font-["Poppins"] text-base font-medium' htmlFor="">{title}</label>
            <input className='border-2 border-gray-400 px-5 py-6 rounded-xl' type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
}
