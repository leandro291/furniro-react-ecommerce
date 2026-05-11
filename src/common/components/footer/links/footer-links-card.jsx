import React from 'react'
import { Link } from 'react-router-dom'

export function FooterLinksCard({ path, name }) {
    return (
        <li className='font-bold cursor-pointer text-center'>
            <Link to={path}>{name}</Link>
        </li>
    )
}
