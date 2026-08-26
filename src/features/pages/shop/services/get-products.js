import { apiClient } from './api-client';

export const GetProducts = async ({ limit }) => {

    const response = await apiClient.get('/products', {
        params: { limit }
    })

    return response.data

}
