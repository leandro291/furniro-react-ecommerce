import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBlogSearch = create(
    persist(
        (set) => ({
            search: "",

            setSearch: (search) => set({ search }) 
        }),

        {
            name: "blog-search"
        }
    )
)