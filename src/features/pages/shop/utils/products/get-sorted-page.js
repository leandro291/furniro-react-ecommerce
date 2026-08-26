export function getSortedPage(products, { sortMethod, page, showPerPage }) {

    const sortedProducts = [...products].sort((a, b) => {
        if (sortMethod === "price-asc") return a.price - b.price;
        if (sortMethod === "price-desc") return b.price - a.price;
        if (sortMethod === "name") return a.title.localeCompare(b.title);
        return 0;
    });

    const totalPages = Math.ceil(products.length / showPerPage);
    const start = (page - 1) * showPerPage;
    const end = Math.min(page * showPerPage, products.length);
    const displayedProducts = sortedProducts.slice(start, end);

    return { displayedProducts, totalPages, start, end };
}
