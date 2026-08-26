import axios from "axios"

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

const BASE_URLS = {
    fakestore: import.meta.env.VITE_FAKESTORE_BASE_URL,
    furniro: import.meta.env.VITE_FURNIRO_BASE_URL,
}

// Render free tier duerme la instancia tras inactividad: el primer request en frío
// puede tardar 30-50s en responder, por eso Furniro necesita un timeout más alto.
const TIMEOUTS = {
    fakestore: 10000,
    furniro: 40000,
}

export const apiClient = axios.create({
    baseURL: BASE_URLS[API_SOURCE],
    timeout: TIMEOUTS[API_SOURCE],
})
