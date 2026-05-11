import axios from "axios"

const API_URL = "https://fakestoreapi.com/products/"

export const GetProductsById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`)

    return response.data
}