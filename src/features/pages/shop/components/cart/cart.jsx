import React from 'react'
import { CartDisplay } from './display/cart-display'
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner'
import { ServiceBenefits } from '../../shared/components/service-benefits/service-benefits'

export function Cart() {

    return (
        <section>
            <HeroBanner title={"Cart"}/>
            <CartDisplay />
            <ServiceBenefits />
        </section>
    )
}
