import { AlignVerticalSpaceAround, LayoutGrid, SlidersHorizontal } from 'lucide-react'
import React from 'react'

export function CatalogFilter({ view, setView, totalProducts, showPerPage, sortMethod, setSortMethod, currentStart, currentEnd }) {
    return (
        <div className='min-h-16 lg:min-h-24 bg-amber-100/50 flex lg:flex-row gap-6 lg:gap-10 justify-center lg:justify-around items-center py-5 px-4'>

            <div className='flex justify-between flex-row items-center gap-5 lg:gap-10 w-full lg:w-auto'>

                <div className='flex gap-10 lg:flex-row items-center'>

                    <div className='flex gap-3'>
                        <SlidersHorizontal />
                        <p className='font-["Poppins"] text-xl font-normal'>Filter</p>
                    </div>
                    <div className='gap-10 hidden sm:flex'>
                        <LayoutGrid 
                            className={`cursor-pointer transition-colors ${view === 'grid' ? 'text-brand' : 'text-black'}`}
                            onClick={() => setView("grid")}
                        />
                        <AlignVerticalSpaceAround
                            className={`cursor-pointer transition-colors ${view === 'list' ? 'text-brand' : 'text-black'}`} 
                            onClick={() => setView("list")}
                        />
                    </div>

                </div>      

                <div className=''>
                    <p className='font-["Poppins"] text-xl font-normal hidden sm:block'>Showing {currentStart}-{currentEnd} of {totalProducts} results</p>
                </div>

            </div>

            <div className='flex gap-3 lg:flex-row'>

                <div className='flex items-center flex-col gap-2 lg:flex-row'>
                    <p className='font-["Poppins"] text-xl font-normal'>Show</p>
                    <div className='w-14 h-14 bg-white flex justify-center items-center'>
                        <span className='text-center font-["Poppins"] text-gray-500 outline-none'>{showPerPage}</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 flex-col lg:flex-row'>
                    <p className='font-["Poppins"] text-xl font-normal'>Short by</p>
                    <select 
                        className='w-fit h-14 bg-white font-["Poppins"] text-gray-500 outline-none cursor-pointer'
                        value={sortMethod}
                        onChange={(e) => setSortMethod(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>

                </div>
            </div>
        </div>
    )
}
