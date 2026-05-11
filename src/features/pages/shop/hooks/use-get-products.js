import { useEffect, useState } from "react"
import { GetProducts } from "../services/get-products"

export const UseGetProducts = (limit) => {

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        GetProducts({ limit })
        .then(setProducts)
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [limit])

    return {
        products,
        loading,
        error,
    }
}