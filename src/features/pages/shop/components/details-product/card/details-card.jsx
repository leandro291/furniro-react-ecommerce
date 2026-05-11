import React, { useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { DetailsCardItem } from './details-card-item';
import { DetailsBanner } from '../banner/details-banner';
import { DETAILS_CARD } from '../../../constants/details/details-card';
import { DisplayTags } from '../../../utils/details-product/display-tags';
import { useGetAuthCartStore } from '../../../hooks/use-get-auth-cart-store';


export function DetailsCard({ product }) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useGetAuthCartStore()

    const { id, title, price, description, category, image } = product

    return (
        <div>

            <DetailsBanner title={title} />

            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-300 mx-auto mt-10'>

                <div className='w-80 sm:w-105 flex justify-center items-center bg-orange-50 h-125 mx-auto rounded-2xl'>
                    <img className='h-100 sm:w-full object-contain block px-20' src={image} alt="" />
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-10 md:w-150 lg:w-full min-h-150 h-full justify-between py-10'>
                        <div className='flex flex-col gap-4 px-8 sm:px-2'>
                            <h2 className='font-["Poppins"] text-[35px] font-bold text-center lg:text-left '>{title}</h2>
                            <p className='font-["Poppins"] text-2xl font-medium text-gray-400 px-'>Rs. {price}</p>
                            <p className='font-["Poppins"] text-[14px] font-medium '>{description} </p>
                        </div>

                        <div className="flex items-center gap-5 px-8 sm:px-2">

                            <div className='flex items-center justify-between border border-gray-400 rounded-xl px-4 py-3 w-30'>
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-lg hover:text-gray-500 transition-colors cursor-pointer"
                                >
                                -
                                </button>
                                <span className="text-md font-medium">{quantity}</span>
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-lg hover:text-gray-500 transition-colors cursor-pointer"
                                >
                                +
                                </button>
                            </div>

                            <div>
                                <button 
                                    className="border border-black rounded-xl px-10 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                                    onClick={() => addToCart(product, quantity)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        <hr />
                        
                        <ul className='flex flex-col gap-2 px-5 sm:px-2'>
                            <DetailsCardItem label={"Sku"} children={id}/>
                            <DetailsCardItem label={"Category"} children={category}/>
                            <DetailsCardItem label={"Tags"} children={<DisplayTags category={category} />}/>
                            <DetailsCardItem label={"Share"} children={<SquareArrowOutUpRight size={18} />}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
