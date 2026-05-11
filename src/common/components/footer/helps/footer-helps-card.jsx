import React from 'react'
import { Link } from 'react-router-dom'

export function FooterHelpsCard({ name, path }) {
    return (
        <li className="font-['Poppins'] font-semibold text-center lg:text-now">
            <Link to={path}>{name}</Link>
        </li>               
    )
}
