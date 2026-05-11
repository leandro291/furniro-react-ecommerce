import React from 'react'
import { SkeletonCategories } from '../../../shared/components/skeleton/skeleton-categories';

export function CategoriesCard({ img, name, handleLoading }) {
    

    return (
        <div className="relative flex flex-col items-center gap-4 sm:gap-10">

            <img 
                className={`w-full max-w-95 h-120 object-cover `} 
                src={img} 
                alt={name} 
                onLoad={handleLoading} 
            />

            
            <p className="font-['Poppins'] font-semibold text-xs sm:text-2xl">
                {name}
            </p>

        </div>
    )
}