import React from 'react'
import { ProductsButton } from './products-button';
import { UseGetProducts } from '../../../hooks/use-get-products'
import { ProductsCard } from '../../../shared/components/products/products-card';
import { SkeletonShopPage } from '../../../shared/components/skeleton/skeleton-shop-page';

export function Products() {
    
    const { products, loading, error } = UseGetProducts({ limit: 8 });

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

    return (
        <section>
            <div className="container mx-auto mt-14 flex flex-col items-center">

                <h1 className="font-['Poppins'] font-bold text-[40px]" >Our Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-80 sm:max-w-300 w-full gap-6 mt-10">
                    {
                        products.map((product) => (
                            <ProductsCard key={product.id} product={product} withNavigation={true} />
                        ))
                    }
                </div>

                <ProductsButton />

            </div>
        </section>
    )
}
