import React from 'react'
import { Catalog } from './catalog/catalog'
import { HeroBanner } from '../../shared/components/hero-banner/hero-banner'
import { ServiceBenefits } from '../../shared/components/service-benefits/service-benefits'

export function Shop() {
    return (
        <section>
            <HeroBanner title={"Shop"} />
            <Catalog />
            <ServiceBenefits />
        </section>
    )
}
