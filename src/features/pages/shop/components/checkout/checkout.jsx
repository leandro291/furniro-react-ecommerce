import React from 'react'
import { CheckoutOrder } from './order/checkout-order'
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner'
import { ServiceBenefits } from '../../shared/components/service-benefits/service-benefits'

export function Checkout() {
    return (
        <>
            <HeroBanner title={"Checkout"} />
            <CheckoutOrder />
            <ServiceBenefits />
        </>
    )
}
