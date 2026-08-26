import { apiClient } from "./api-client"

export const authLoginService = async ({username, password}) => {

    const response = await apiClient.post('/auth/login', {
        username,
        password
    })

    return response.data.token

}
