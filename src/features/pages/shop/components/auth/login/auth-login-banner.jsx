import React from 'react'

export function AuthLoginBanner() {
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='font-["Poppins] text-6xl sm:text-8xl tracking-widest font-bold'>Furniro</h1>
            <h2 className='font-["Poppins] text-xl sm:text-4xl text-center text-orange-400 font-medium px-8 sm:text-left'> Te damos la bienvenida</h2>
            <p className='font-["Poppins] text-lg sm:text-2xl text-gray-600 font-normal text-center sm:text-left'>Ingresa tu usuario y contraseña para inciar sesion</p>
        </div>
    )
}
