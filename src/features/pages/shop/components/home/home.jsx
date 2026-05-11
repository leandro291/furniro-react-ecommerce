import React from 'react'
import { Carrusel } from './carrusel/carrusel'
import { Products } from './products/products'
import { Categories } from './categories/categories'
import { HeroBanner } from './hero-banner/hero-banner'

import { RoomShowcase } from './room-showcase/room-showcase'
import { CARRUSEL_SLIDES } from '../../constants/home/home-carrusel'
import { CARDS_CATEGORIES } from '../../constants/home/home-categories'

export function Home() {
    return (
        <section>
            <HeroBanner />
            <Categories card_categories={CARDS_CATEGORIES} />
            <Products />
            <Carrusel slides={CARRUSEL_SLIDES} />
            <RoomShowcase />
        </section>
    )
}
