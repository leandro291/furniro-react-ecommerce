import React from 'react'
import { NavbarLinksCard } from './navbar-links-card'

export function NavbarLinks({ nav_links }) {
    
    return (

        <ul className="flex gap-5 sm:gap-15 lg:gap-10 xl:gap-20">
            {
                nav_links.map(({ id, path, name }) => (
                    <NavbarLinksCard key={id} path={path} name={name}/>
                ))
            }
        </ul>

    )
}
