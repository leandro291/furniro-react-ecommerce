import React from 'react'
import { Trash } from 'lucide-react'
import { QuantitySelector } from '../../../shared/components/quantity-selector/quantity-selector';

export function CartDisplayProducts({ id, image, price, quantity, title, removeFromCart, pricePerProduct, increaseQuantity, decreaseQuantity }) {

    return (

        <div className='grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-10 items-center py-6 border-b border-gray-100 w-full'>
            
            <div className='flex justify-center md:justify-start'>
                <img src={image} alt={title} className='h-20 w-20 md:h-25 md:w-25 rounded object-contain bg-gray-50' />
            </div>

            <div className='flex flex-col md:block'>
                <span className='font-["Poppins"] font-medium md:font-normal text-gray-800 md:text-gray-500/80 text-sm md:text-base'>
                    {title}
                </span>
                <span className='md:hidden text-xs text-gray-400 mt-1'>Unit: Rs {price}</span>
            </div>

            <span className='hidden md:block font-["Poppins"] font-normal text-gray-500/80 text-center'>
                Rs {price}
            </span>

            <div className='flex justify-center'>
                <QuantitySelector
                    quantity={quantity}
                    onIncrease={() => increaseQuantity(id)}
                    onDecrease={() => decreaseQuantity(id)}
                    variant="compact"
                />
            </div>
            
            <span className='font-["Poppins"] font-semibold md:font-normal text-center text-black'>
                Rs {pricePerProduct(id)}
            </span>

            <div className='flex justify-end md:justify-center'>
                <Trash 
                    className='fill-brand text-brand cursor-pointer hover:scale-110 transition-transform p-1 md:p-0' 
                    size={30}
                    onClick={() => removeFromCart(id)}
                />
            </div>
        </div>
    )
}