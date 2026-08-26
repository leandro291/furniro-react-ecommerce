// La paginación ahora es del servidor: acá solo se ordena la página ya recibida
// (el backend no expone un parámetro de ordering confirmado).
export function sortProducts(products, sortMethod) {
    return [...products].sort((a, b) => {
        if (sortMethod === "price-asc") return a.price - b.price;
        if (sortMethod === "price-desc") return b.price - a.price;
        if (sortMethod === "name") return a.title.localeCompare(b.title);
        return 0;
    });
}
