import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutOrderPay } from './checkout-order-pay'
import { CheckoutOrderBilling } from './checkout-order-billing'
import { useGetAuthCartStore } from '../../../hooks/use-get-auth-cart-store'

export function CheckoutOrder() {

    const navigate = useNavigate()

    const { cart, clearCart, totalPrice, pricePerProduct } = useGetAuthCartStore()

    const handleFinalPay = (e) => {
        e.preventDefault(); 

        clearCart()
        alert("Your purchase was completed successfully")
        navigate("/")
    };

    return (
        <section className='max-w-325 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-15'>

            <form id='checkout-form' onSubmit={handleFinalPay}>
                <CheckoutOrderBilling />
            </form>
            <CheckoutOrderPay cart={cart} clearCart={clearCart} totalPrice={totalPrice} pricePerProduct={pricePerProduct} />

        </section>
    )
}
