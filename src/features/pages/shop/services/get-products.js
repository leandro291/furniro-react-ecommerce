import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products"

export const GetProducts = async ({ limit }) => {
    
    const response = await axios.get(API_URL, {
        params: { limit }
    })

    return response.data

} 