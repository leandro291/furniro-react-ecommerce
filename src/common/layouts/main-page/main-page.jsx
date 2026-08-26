import React from 'react'
import { Navbar } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer/footer'
import { Outlet } from 'react-router-dom'

export function MainPage() {

    return (
        <div className='w-full min-h-screen grid grid-rows-[auto_1fr_500px] bg-slate-50'>
            <Navbar />

            <main className='w-full min-h-screen container mx-auto bg-white'>
                <Outlet />
            </main>

            <Footer />
        </div>

    )
}
