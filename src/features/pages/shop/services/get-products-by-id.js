import { apiClient } from "./api-client"

export const GetProductsById = async (id) => {
    const response = await apiClient.get(`/products/${id}`)

    return response.data
}
