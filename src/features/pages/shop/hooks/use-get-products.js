import { GetProducts } from "../services/get-products"
import { useFetch } from "./use-fetch"

const INITIAL_VALUE = { count: 0, next: null, previous: null, results: [] }

export const UseGetProducts = ({ page = 1, limit } = {}) => {

    const { data, loading, error } = useFetch(() => GetProducts({ page, limit }), [page, limit], INITIAL_VALUE)

    return {
        products: data.results,
        count: data.count,
        next: data.next,
        previous: data.previous,
        loading,
        error,
    }
}
