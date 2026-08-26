import React from 'react'
import { HeroBannerCard } from "./hero-banner-card"

export function HeroBanner() {
    return (
        <div>
            <div style={{backgroundImage: `url(${"https://images.pexels.com/photos/6214365/pexels-photo-6214365.jpeg"})`}} 
                className="container w-full min-h-125 sm:min-h-150 lg:min-h-200 mx-auto bg-cover bg-no-repeat relative"
            >
                <HeroBannerCard />
            </div>
        </div>
    )
}
