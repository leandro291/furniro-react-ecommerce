import { apiClient } from "./api-client"

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

// Fake Store no expone categorías reales (los productos ya traen el nombre como string
// y las tarjetas de home son estáticas), así que este servicio solo aplica a Furniro.
export const GetCategories = async () => {
    if (API_SOURCE !== "furniro") return []

    const { data } = await apiClient.get("/api/catalog/categories/")

    return data.results ?? data
}
