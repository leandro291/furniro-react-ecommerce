import axios from "axios"

const API_URL = "https://fakestoreapi.com/auth/login"

export const authLoginService = async ({username, password}) => {

    const response = await axios.post(API_URL, {
        username,
        password
    })

    return response.data.token

}