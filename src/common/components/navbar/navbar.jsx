import React from 'react'
import { Logo } from '../../ui/logo'
import { NavbarLinks } from './links/navbar-links'
import { NAV_LINKS } from '../../shared/navigation/navigation'
import { NavbarIconCart } from './icon/navbar-icon-cart'
import { NavbarIconUser } from './icon/navbar-icon-user'

export function Navbar() {
    return (
        <header className='mx-auto container '>
            <div className="container min-h-25 bg-white flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-center lg:px-24 py-6 fixed z-10 border-b border-b-gray-900/20 ">

                <Logo  />

                <NavbarLinks nav_links={NAV_LINKS} />
                <ul className='flex items-center gap-5  lg:gap-10 xl:gap-15'>
                    <NavbarIconUser />
                    <NavbarIconCart />
                </ul>

            </div>
        </header>
    )
}
