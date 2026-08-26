import { useEffect, useState } from "react"

export const useFetch = (fetcher, deps, initialValue = null) => {

    const [ data, setData ] = useState(initialValue)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetcher()
            .then(setData)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)

    return {
        data,
        loading,
        error,
    }
}
