import { apiClient } from "./api-client"
import { normalizeProduct } from "./normalize-product"

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

export const GetProductsById = async (id) => {
    const path = API_SOURCE === "furniro" ? `/api/catalog/products/${id}/` : `/products/${id}`
    const response = await apiClient.get(path)

    return normalizeProduct(response.data)
}
