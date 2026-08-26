import { create } from "zustand";
import { GetCategories } from "../services/get-categories";

// Cache simple en memoria: las categorías no cambian dentro de una sesión,
// así que se piden una sola vez y se comparten entre componentes.
export const useCategoriesStore = create((set, get) => ({
    categories: [],
    fetchedAt: null,

    fetchCategories: async () => {
        if (get().categories.length > 0) return get().categories

        const categories = await GetCategories()
        set({ categories, fetchedAt: Date.now() })
        return categories
    },
}))
