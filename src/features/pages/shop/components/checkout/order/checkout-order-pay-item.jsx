import React from 'react'

export function CheckoutOrderPayItem({ id, title, quantity, pricePerProduct }) {

    return (
        <div className='flex justify-between'>
            <span className='font-["Poppins"] font-medium text-gray-500/80 w-full max-w-60 sm:max-w-150'>{title} x {quantity}</span>
            <span className='font-["Poppins"] font-light '>Rs {pricePerProduct(id)}</span>
        </div>
    )
}
