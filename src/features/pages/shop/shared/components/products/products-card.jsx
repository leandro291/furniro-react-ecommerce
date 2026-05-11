import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DisplayRating } from '../../../utils/products/display-rating'

export function ProductsCard({ product, withNavigation = true }) {

    const { id, title, price, image, rating } = product

    const navigate = useNavigate()

    const handleNavigate = () => {
        if (!withNavigation) return

        
        navigate(`/products/${id}`)
    }

    return (
        <article 
            className={`flex flex-col gap-1 min-h-112.5 w-60 mx-auto lg:w-full bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:shadow-md ${withNavigation && "cursor-pointer"}`}
            onClick={handleNavigate}
        >

            <div className="h-64 flex items-center justify-center p-6 bg-gray-50 rounded-t-xl">
                <img className="max-h-full object-contain" src={image} alt={title} />
            </div>

            <div className="flex flex-col flex-1 p-5 gap-2">

                <h3 className="font-['Poppins'] font-semibold text-lg text-gray-800 line-clamp-2 h-14">
                    {title}
                </h3>
                
                <div className="mt-auto flex flex-col gap-2">
                    <p className="font-['Poppins'] font-bold text-xl text-gray-600">
                        Rp {price}
                    </p>
                    <DisplayRating rating={rating} />
                </div>
            </div>
        </article>
    )
}
