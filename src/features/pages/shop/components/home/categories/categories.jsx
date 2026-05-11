import React, { useState } from 'react'
import { CategoriesCard } from "./categories-card";
import { SkeletonCategories } from '../../../shared/components/skeleton/skeleton-categories';

export function Categories({ card_categories }) {

    const [ loadingCount, setLoadingCount ] = useState(0)

    const handleLoading = () =>{
        setLoadingCount( next => next +1)
    }

    const allLoading = loadingCount >= 3

    return (
        <div className="container mx-auto mt-14 flex flex-col items-center">
            <h2 className="font-['Poppins'] font-bold text-[32px]">Browse The Range</h2>
            <p className="font-['Poppins'] font-light text-[20px] text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            {!allLoading && <SkeletonCategories/>}

            <div className={`grid grid-cols-3 gap-5 mt-15 max-w-300 w-full ${!allLoading ? 'hidden' : 'grid'}`}>

                {card_categories.map(({ id, img, name }) => (
                    <CategoriesCard key={id} img={img} name={name} handleLoading={handleLoading} />
                ))}

            </div>
        </div>
    )
}
