import React, { useState } from 'react'
import { UseGetProducts } from '../../../hooks/use-get-products'
import { ProductsCard } from '../../../shared/components/products/products-card'
import { SkeletonShopPage } from '../../../shared/components/skeleton/skeleton-shop-page'

export function DetailsRelatedProducts({ product }) {

    const [ limit ] = useState(20)
    const { products, loading, error } = UseGetProducts(limit)

    if (loading){
        return (
            <div>
                <SkeletonShopPage />
            </div>
        )
    }

    if (error){
        return(
            <div>
                <h2>Ha ocurrido un error</h2>
            </div>
        )
    }

    const same_category = products.filter((prod) => prod.category == product.category)


    return (
        <div className='py-15 border-t mt-25'>
            <h2 className='text-center font-["Poppins"] font-medium text-4xl'>Related Products</h2>
            <div className='grid grid-cols-1 w-70 mx-auto sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
                {
                    same_category.map((product) => (
                        <ProductsCard product={product} key={product.id}/>
                    ))
                }
            </div>
        </div>

    )
}
