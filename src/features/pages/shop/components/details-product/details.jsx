import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsCard } from './card/details-card'
import { UseGetProductsById } from '../../hooks/use-get-products-by-id'
import { DetailsRelatedProducts } from './related-products/details-related-products'
import { SkeletonDetailProduct } from '../../shared/components/skeleton/skeleton-detail-product'

export function Details() {

    const { productId } = useParams()

    const { product, loading, error } = UseGetProductsById(productId)

    useEffect(() => {
        window.scrollTo({
            top: 0,             
            behavior: 'smooth'  
        });
    }, [product])

    if (loading){
        return (
            <div>
                <SkeletonDetailProduct />
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

    return (
        <div className='container mx-auto w-fit'>
            <DetailsCard product={product} />
            <DetailsRelatedProducts product={product}/>
        </div>
    )
}
