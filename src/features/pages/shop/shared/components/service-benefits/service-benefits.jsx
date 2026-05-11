import React from 'react'
import { ServiceBenefitsCard } from './service-benefits-card'
import { BENEFITS_LIST } from '../../../constants/benefits/benefits'

export function ServiceBenefits() {

    return (
        <div className='min-h-72 bg-amber-100/50 flex flex-col py-15 rounded lg:flex-row lg:justify-around items-center mt-20 gap-10'>
            {
                BENEFITS_LIST.map((benefits) => (
                    <ServiceBenefitsCard key={benefits.id} Icon={benefits.Icon} title={benefits.title} description={benefits.description} />
                ))
            }
        </div>
    )
}
