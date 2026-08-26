import React from 'react'
import { CarruselFunctions } from './carrusel-functions'
import { useNavigate } from 'react-router-dom'

export function Carrusel({ slides }) {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/shop")
    }

    return (
        <div className='container mx-auto h-167 bg-orange-100/30 mt-20'>

            <div className='grid grid-rows-[250px_auto] md:grid-rows-[180px_auto] gap-10 xl:grid-rows-none xl:grid-cols-[500px_auto] pl-20 h-full py-10 '>
                <div className='flex flex-col items-start lg:justify-center gap-3 w-full'>
                    <h2 className='font-["Poppins"] font-bold text-[40px] text-gray-950'>50+ Beautiful rooms inspiration</h2>
                    <p className='font-["Poppins"] text-gray-600 font-medium'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className='font-["Poppins"] font-semibold text-white py-3 px-10 bg-brand mt-3 cursor-pointer ' onClick={handleNavigate}>Explore More</button>
                </div>
                <CarruselFunctions slides={slides}/>
            </div>

        </div>
    )
}
