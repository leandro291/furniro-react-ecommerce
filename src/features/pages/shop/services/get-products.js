import { apiClient } from './api-client';
import { normalizeProduct } from './normalize-product';

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

export const GetProducts = async ({ page = 1, limit } = {}) => {

    if (API_SOURCE === "furniro") {
        // page_size: best-effort, se ignora si el backend no soporta override (GAP conocido)
        const { data } = await apiClient.get('/api/catalog/products/', { params: { page, page_size: limit } })

        return {
            count: data.count,
            next: data.next,
            previous: data.previous,
            results: data.results.map(normalizeProduct),
        }
    }

    const { data } = await apiClient.get('/products', { params: { limit } })

    return {
        count: data.length,
        next: null,
        previous: null,
        results: data.map(normalizeProduct),
    }
}
