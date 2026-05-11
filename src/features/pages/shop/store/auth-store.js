import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create (
    persist(
        (set) => ({
            token: null,
            user: null,

            setUser: (user) => set({ user }),
            setToken: (token) => set({ token }),
            logout : () => set({ token: null}),
        }),
        
        {
            name: "auth-storage-login"
        }
    ),

)