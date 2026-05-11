import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartDisplayTotals } from './cart-display-totals'
import { CartDisplayProducts } from './cart-display-products'
import { useGetAuthCartStore } from '../../../hooks/use-get-auth-cart-store'

export function CartDisplay() {

    const { cart, totalPrice, removeFromCart, pricePerProduct, increaseQuantity, decreaseQuantity } = useGetAuthCartStore()

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/checkout")
    }

    return (
        <section className=' mx-4 md:mx-10 xl:mx-24 my-16 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10    '>

            <div className='w-full'>

                <div className='bg-amber-100/50 py-4 px-4 w-full'>
                    <h2 className='md:hidden font-["Poppins"] font-bold text-center'>The products in your cart</h2>
                    
                    <div className='hidden md:grid grid-cols-4 justify-items-center items-center gap-4 lg:px-30 lg:gap-20'>
                        <span className='font-["Poppins"] font-medium'>Product</span>
                        <span className='font-["Poppins"] font-medium'>Price</span>
                        <span className='font-["Poppins"] font-medium'>Quantity</span>
                        <span className='font-["Poppins"] font-medium'>Subtotal</span>
                    </div>
                </div>

                {
                    cart.map(({ id, image, price, quantity, title }) => (
                        <CartDisplayProducts 
                            key={id} 
                            id={id} 
                            image={image} 
                            price={price} 
                            quantity={quantity} 
                            title={title} 
                            removeFromCart={removeFromCart} 
                            pricePerProduct={pricePerProduct}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                    />
                    ))
                }

            </div>

            <CartDisplayTotals handleNavigate={handleNavigate} totalPrice={totalPrice} />

        </section>
    )
}
