import { GetProducts } from "../services/get-products"
import { useFetch } from "./use-fetch"

export const UseGetProducts = (limit) => {

    const { data: products, loading, error } = useFetch(() => GetProducts({ limit }), [limit], [])

    return {
        products,
        loading,
        error,
    }
}
