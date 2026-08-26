import { GetProductsById } from "../services/get-products-by-id"
import { useFetch } from "./use-fetch"

export const UseGetProductsById = (id) => {

    const { data: product, loading, error } = useFetch(() => GetProductsById(id), [id])

    return {
        product,
        loading,
        error,
    }
}
