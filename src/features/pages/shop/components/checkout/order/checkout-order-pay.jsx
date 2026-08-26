import React from 'react'
import { CheckoutOrderPayItem } from './checkout-order-pay-item'

export function CheckoutOrderPay({ cart, totalPrice, pricePerProduct }) {

    return (
        <div className='py-18 px-8 flex flex-col'>
            <div className='border-b border-gray-400 py-8 flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <span className='font-["Poppins"] font-medium text-2xl'>Product</span>
                    <span className='font-["Poppins"] font-medium text-2xl'>Subtotal</span>
                </div>
                
                {
                    cart.map(({ id, title, quantity }) => (
                        <CheckoutOrderPayItem key={id} id={id} title={title} quantity={quantity} pricePerProduct={pricePerProduct} />
                    ))
                }

                <div className='flex justify-between'>
                    <span className='font-["Poppins"]'>Subtotal</span>
                    <span className='font-["Poppins"] font-light'>Rs {totalPrice}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='font-["Poppins"]'>Total</span>
                    <span className='font-["Poppins"] font-bold text-2xl text-brand'>Rs {totalPrice}</span>
                </div>
            </div>

            <div className='mt-10 flex flex-col justify-center items-center gap-10'>
                <p className='font-["Poppins"] font-light text-base'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className=' font-bold'>privacy policy.</span></p>
                <button className='max-w-80 w-full py-5 border rounded-2xl cursor-pointer font-["Poppins"] text-xl font-medium' type='submit' form='checkout-form'>Place Order</button>
            </div>
        </div>
    )
}
