import React from 'react'
import { CircleX } from 'lucide-react'

export function NavbarIconCartRender({ id, image, price, quantity, title, removeFromCart }) {

    return (
        <div className='flex items-center gap-4'>
            <img src={image} alt="Product" className='h-20 w-20 rounded-lg object-contain' />

            <div className='flex-1'>
                <p className='font-medium'>{title}</p>
                
                <div className='flex gap-2 text-sm'>
                    <span className='font-light'>{quantity} x</span>
                    <span className='text-brand'>Rs. {price}</span>
                </div>
            </div>
            <CircleX size={18} className='text-gray-400 cursor-pointer' onClick={() => removeFromCart(id)} />
        </div>
    )
}
