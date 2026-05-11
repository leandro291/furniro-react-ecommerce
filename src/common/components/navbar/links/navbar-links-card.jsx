import React from 'react'
import { Link } from 'react-router-dom'

export function NavbarLinksCard({ path, name}) {
    return (
        <li className="font-['Poppins'] font-semibold">
            <Link to={path} >
                {name}
            </Link>
        </li>
    )
}
