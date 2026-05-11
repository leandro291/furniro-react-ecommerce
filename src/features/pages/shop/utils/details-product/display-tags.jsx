import React from 'react'

export function DisplayTags({ category }) {

    if (category == "men's clothing") return <span>Casual, Estilo, Tendencia, Confort</span>
    if (category == "jewelery") return <span>Elegante, Plata 925, Lujo, Hecho a Mano</span>
    if (category == "electronics") return <span>Tecnologia, Gadgets, Innovacion, Garantia</span>
    if (category == "women's clothing") return <span>Fashion, Chic, Temporada, Esenciales</span>

    return (
        <div></div>
    )
}
