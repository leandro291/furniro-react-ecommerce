import React from 'react'

export function ServiceBenefitsCard({ Icon, title, description }) {
    return (
        <div className='flex items-center justify-center gap-10 lg:gap-4'>
            <Icon size={60}/>
            <div className='w-45 sm:w-80 lg:w-full'>
                <p className='font-["Poppins"] text-2xl font-semibold'>{title}</p>
                <p className='font-["Poppins"] text-xl font-medium text-gray-400'>{description}</p>
            </div>
        </div>
    )
}
