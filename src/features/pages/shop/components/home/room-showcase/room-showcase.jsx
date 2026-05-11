import React from 'react'
import { RoomShowcaseMosaic } from './room-showcase-mosaic'

export function RoomShowcase() {
    return (
        <section className='container mx-auto mt-15'>
            <h3 className='text-center font-["Poppins"] text-[20px] font-semibold text-gray-600'>Share your setup with</h3>
            <h2 className='text-center font-["Poppins"] text-[40px] font-bold text-gray-950'>#FuniroFurniture</h2>
            <RoomShowcaseMosaic />
        </section>
    )
}
