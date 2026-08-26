import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CircleX, ShoppingCart } from 'lucide-react';
import { NavbarIconCartRender } from './navbar-icon-cart-render';
import { useGetAuthCartStore } from '../../../../features/pages/shop/hooks/use-get-auth-cart-store';

export function NavbarIconCart() {

    const { cart, removeFromCart, totalPrice, totalQuantity } = useGetAuthCartStore();

    const navigate = useNavigate()
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    
    const handleToCart = () => {
        setIsOpen(!isOpen);
        navigate("/cart");
    } 

    const handleToCheckout = () => {
        setIsOpen(!isOpen);
        navigate("/checkout")
    } 

    return (
        <div className='relative'>

            <button onClick={handleToggle}><ShoppingCart /></button>
            
                {isOpen && (
                    <>
                        <div 
                            className="fixed inset-0 z-40 bg-black/20" 
                            onClick={handleToggle} 
                        />

                            <div className="absolute left-0 -translate-x-1/2 sm:translate-x-0 sm:-left-15 md:left-1 lg:-left-50 top-full md:top-9 min-w-80 z-55 bg-white p-4 rounded-lg shadow-xl border border-gray-200">                            <div className='grid grid-rows-[auto_1fr_auto] h-125 gap-4 p-4'>

                                <div className='flex items-center justify-between border-b border-gray-200 py-4'>
                                    <h2 className='font-["Poppins"] text-xl font-semibold'>Shopping cart</h2>
                                    <CircleX size={24} className="cursor-pointer" onClick={handleToggle} />
                                </div>

                                <div className='flex flex-col overflow-y-auto gap-6 py-4'>

                                    {
                                        cart.map(({ id, image, price, quantity, title }) => (
                                            <NavbarIconCartRender key={id} id={id} image={image} price={price} quantity={quantity} title={title} removeFromCart={removeFromCart} />
                                        ))
                                    }
                                    
                                </div>

                                <div className='border-t border-gray-200 pt-4 bg-white'>
                                    
                                    <div className='flex justify-between mb-4'>
                                        <span className='font-normal'>Subtotal</span>
                                        <span className='font-semibold text-brand'>Rs. {totalPrice}</span>
                                    </div>

                                    <div className='flex gap-3'>

                                        <button className='w-full py-3 border border-black rounded-full hover:bg-black hover:text-white transition' onClick={handleToCart}>
                                            Cart
                                        </button>

                                        <button className='w-full py-3 border border-black rounded-full hover:bg-black hover:text-white transition' onClick={handleToCheckout}>
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            <div className='absolute bg-red-700 top-5 right-2 rounded-full text px-2 py-0.5'>
                <p className='text-white font-bold'>{totalQuantity}</p>
            </div>
        </div>
    )
}
