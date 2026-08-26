// Punto único de normalización: Fake Store y la API propia de Furniro devuelven
// price/rating/stock en formas distintas. Todo el resto del código consume este shape.
export const normalizeProduct = (product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    image: product.image,
    price: typeof product.price === "string" ? parseFloat(product.price) : product.price,
    category: product.category,
    stock: product.stock ?? null,
    rating: product.rating ?? {
        rate: parseFloat(product.rating_rate ?? 0),
        count: product.rating_count ?? 0,
    },
})
