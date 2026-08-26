import { useAuthStore } from "../store/auth-store"
import { authLoginService } from "../services/get-auth-service"

export const useGetAuthService = () => {

    const { token, setToken, logout, setUser, user } = useAuthStore()

    const loginStore = async ({ username, password }) => {
        const token = await authLoginService({ username, password})

        setUser(username)
        setToken(token)
    }

    return{
        token,
        loginStore,
        logout,
        isAuthenticated: token,
        user,
    }
}