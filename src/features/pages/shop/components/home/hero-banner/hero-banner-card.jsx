import React from 'react'
import { useNavigate } from 'react-router-dom'

export function HeroBannerCard() {

    const navigate = useNavigate()

    const handleBuyNow = () => {
        navigate("/shop")
    }


    return (
        <div className="bg-gray-100 max-w-100 sm:max-w-xl w-full flex flex-col mx-auto gap-4 px-12 py-12 absolute right-6 bottom-20 md:bottom-16 md:right-16 lg:bottom-20 lg:right-24">
            <span className="font-['Poppins'] font-semibold text-sm text-brand uppercase tracking-widest">New Arrival</span>
            <h2 className="font-['Poppins'] font-bold text-4xl sm:text-5xl text-brand">Discover Our New Collection</h2>
            <p className="font-['Poppins'] font-medium text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="max-w-56 w-full bg-brand text-white font-['Poppins'] font-bold text-base py-5 mt-7 rounded-lg cursor-pointer" onClick={handleBuyNow}>BUY NOW</button>
        </div>
    )
}
