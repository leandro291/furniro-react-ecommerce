import React from 'react'
import { FooterLinksCard } from './footer-links-card'

export  function FooterLinks({ nav_links }) {
    return (
        <div className='flex flex-col gap-10 '>
            <h4 className='font-["Poppins"] text-gray-500 text-center'>Links</h4>
            <ul className='flex flex-col gap-10'>
                {
                    nav_links.map(({ id, path, name}) => (
                        <FooterLinksCard key={id} path={path} name={name} />
                    ))
                }
            </ul>
        </div>
    )
}
