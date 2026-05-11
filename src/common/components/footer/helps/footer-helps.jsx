import React from 'react'
import {FooterHelpsCard} from './footer-helps-card'

export function FooterHelps({ nav_helps }) {

    return (
        <div className='flex flex-col gap-10'>
            <h4 className='font-["Poppins"] text-gray-500 text-center'>Helps</h4>
            <ul className='flex flex-col gap-10'>
                {
                    nav_helps.map(({ id, path, name}) => (
                        <FooterHelpsCard key={id} path={path} name={name} />
                    ))
                }
            </ul>
        </div>
    )
}
