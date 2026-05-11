import { useEffect, useState } from "react"
import { GetProductsById } from "../services/get-products-by-id"

export const UseGetProductsById = (id) => {

    const [ product, setProduct ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() =>{
        GetProductsById(id)
            .then(setProduct)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [id])

    return{
        product,
        loading,
        error
    }

}