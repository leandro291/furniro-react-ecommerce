import React from 'react'
import logo from "../../assets/common/iconoLogo.png"
import { Link } from 'react-router-dom'

export function Logo() {
    return (
        <Link to={"/"} className="flex items-center gap-2">
            <img className="w-12 h-8" src={logo} alt="" />
            <h1 className="font-bold text-4xl">Furniro</h1>
        </Link>
    )
}
