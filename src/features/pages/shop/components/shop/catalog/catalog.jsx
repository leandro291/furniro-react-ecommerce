import { CatalogFilter } from './catalog-filter'
import React, { useEffect, useState } from 'react'
import { UseGetProducts } from '../../../hooks/use-get-products';
import { usePaginationShopStore } from '../../../store/pagination-shop';
import { Pagination } from '../../../shared/components/pagination/pagination';
import { ProductsCard } from '../../../shared/components/products/products-card';
import { SkeletonShopPage } from '../../../shared/components/skeleton/skeleton-shop-page';
import { getSortedPage } from '../../../utils/products/get-sorted-page';

export function Catalog() {

    const [ view, setView ] = useState("grid")
    const { page, setPage } = usePaginationShopStore()
    const [ showPerPage, setShowPerPage ] = useState(8)
    const [ sortMethod, setSortMethod ] = useState("default")

    const { products, loading, error} = UseGetProducts(20)

    const { displayedProducts, totalPages, start, end } = getSortedPage(products, { sortMethod, page, showPerPage })

    useEffect(() => {
        window.scrollTo({
            top: 0,             
            behavior: 'smooth'  
        });
    }, [page, sortMethod])

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
        <div className='container mx-auto flex flex-col '>
            <CatalogFilter
                view={view}
                setView={setView}
                totalProducts={products.length} 
                showPerPage={showPerPage} 
                setShowPerPage={setShowPerPage}     
                sortMethod={sortMethod} 
                setSortMethod={setSortMethod}
                currentStart={start}
                currentEnd={end}
            />
            <div className={
                view === "grid" ? 
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-70 sm:max-w-300 w-full gap-6 mt-10 mx-auto" 
                : 
                "flex flex-col justify-center gap-4 mt-10 mx-auto max-w-70 sm:max-w-80 w-full"
            }>
                {displayedProducts.map((product) => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
            
        </div>
    )
}
