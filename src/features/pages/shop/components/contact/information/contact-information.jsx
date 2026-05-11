import React from 'react'

export function ContactInformation({ Icon, title, description}) {
    return (
        <div className='flex justify-center items-center w-80 gap-4 h-50 '>
            <Icon size={80} />
            <div>
                <p className='font-["Poppins"] font-medium text-2xl'>{title}</p>
                <p className='font-["Poppins"] font-normal text-base'>{description}</p>
            </div>
        </div>
    )
}
