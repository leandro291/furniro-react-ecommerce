import { apiClient } from './api-client';

// ponytail: cache never invalidates (fine, fakestoreapi data is static);
// add a TTL or manual invalidation if products can change during a session.
const cache = new Map()

export const GetProducts = async ({ limit }) => {

    if (cache.has(limit)) {
        return cache.get(limit)
    }

    const promise = apiClient.get('/products', { params: { limit } })
        .then((response) => response.data)

    cache.set(limit, promise)
    promise.catch(() => cache.delete(limit))

    return promise

}
