import React from 'react'

// Los 4 tags hardcodeados de Fake Store no tienen equivalente real en el catálogo
// de Furniro (pregunta abierta: qué tags reales existen por categoría). Mientras
// tanto se muestra el nombre de categoría ya resuelto como único tag disponible.
export function DisplayTags({ category }) {

    if (!category) return <div></div>

    return <span>{category}</span>
}
