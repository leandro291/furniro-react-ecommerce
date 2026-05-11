import React from 'react'
import { SkeletonProductItems } from './skeleton-product-items'

export function SkeletonShopPage() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-300 w-full gap-6 mt-10 hover:shadow-md mx-auto'>
            {
                Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonProductItems key={index} />
                ))
            }
        </div>
    )
}
