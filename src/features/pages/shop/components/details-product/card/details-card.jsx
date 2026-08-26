import React, { useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import { DetailsCardItem } from './details-card-item';
import { DetailsBanner } from '../banner/details-banner';
import { DETAILS_CARD } from '../../../constants/details/details-card';
import { DisplayTags } from '../../../utils/details-product/display-tags';
import { useGetAuthCartStore } from '../../../hooks/use-get-auth-cart-store';
import { QuantitySelector } from '../../../shared/components/quantity-selector/quantity-selector';
import { OutlineButton } from '../../../shared/components/outline-button/outline-button';


export function DetailsCard({ product }) {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useGetAuthCartStore()

    const { id, title, price, description, category, image } = product

    return (
        <div>

            <DetailsBanner title={title} />

            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-300 mx-auto mt-10'>

                <div className='w-auto sm:w-105 flex justify-center items-center bg-orange-50 h-125 mx-auto rounded-2xl'>
                    <img className='h-100 sm:w-full object-contain block px-20' src={image} alt="" />
                </div>

                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-10 md:w-150 lg:w-full min-h-150 h-full justify-between py-10'>
                        <div className='flex flex-col gap-4 px-8 sm:px-2'>
                            <h2 className='font-["Poppins"] text-2xl lg:text-[35px] font-bold text-center lg:text-left '>{title}</h2>
                            <p className='font-["Poppins"] text-lg lg:text-2xl font-medium text-gray-400 px-'>Rs. {price}</p>
                            <p className='font-["Poppins"] text-xs lg:text-[14px] font-medium '>{description} </p>
                        </div>

                        <div className="flex items-center gap-2 lg:gap-5 px-8 sm:px-2">

                            <QuantitySelector
                                quantity={quantity}
                                onIncrease={() => setQuantity(q => q + 1)}
                                onDecrease={() => setQuantity(q => Math.max(1, q - 1))}
                            />

                            <div>
                                <OutlineButton
                                    className="rounded-xl px-1 lg:px-10 py-3"
                                    onClick={() => addToCart(product, quantity)}
                                >
                                    Add To Cart
                                </OutlineButton>
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
