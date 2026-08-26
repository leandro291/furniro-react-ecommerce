import { create } from "zustand"
import { persist } from "zustand/middleware"

// stock === null significa "desconocido/ilimitado" (Fake Store no lo trae)
const clampToStock = (quantity, stock) => (stock == null ? quantity : Math.min(quantity, stock))

export const AuthCartStore = create(
    persist(
        (set, get) => ({

        cart: [],

        addToCart: (product, quantity) => {
            const currentCart = get().cart
            const index = currentCart.findIndex((item) => item.id === product.id)

            if (index !== -1) {
                const newCart = [...currentCart]
                newCart[index] = {
                    ...newCart[index],
                    quantity: clampToStock(newCart[index].quantity + quantity, product.stock)
            }
            set({ cart: newCart })
            } else {
                set({ cart: [...currentCart, { ...product, quantity: clampToStock(quantity, product.stock) }] })
            }
        },

        removeFromCart: (productId) => {
            const currentCart = get().cart
            const removed = currentCart.filter((item) => item.id != productId)
            set({ cart: removed })
        },

        increaseQuantity: (productId) => {
            const currentCart = get().cart
            
            const updatedCart = currentCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: clampToStock(item.quantity + 1, item.stock) }
                    : item
            )
            
            set({ cart: updatedCart })
        },

        decreaseQuantity: (productId) => {
            const currentCart = get().cart

            const updatedCart = currentCart.map((item) => {
                if (item.id === productId) {
                    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1
                    return { ...item, quantity: newQuantity }
            }

            return item
            })

            set({ cart: updatedCart })
        },
        
        clearCart: () => {
            set({ cart: [] })
        },

        }
        ),

        {
        name: "cart-storage-v2"
        }
    )
)