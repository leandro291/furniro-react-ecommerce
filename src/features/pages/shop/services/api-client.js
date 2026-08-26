import axios from "axios"

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

const BASE_URLS = {
    fakestore: import.meta.env.VITE_FAKESTORE_BASE_URL,
    furniro: import.meta.env.VITE_FURNIRO_BASE_URL,
}

export const apiClient = axios.create({
    baseURL: BASE_URLS[API_SOURCE],
    timeout: 10000,
})
