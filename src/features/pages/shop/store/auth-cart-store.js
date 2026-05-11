import { create } from "zustand"
import { persist } from "zustand/middleware"

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
                    quantity: newCart[index].quantity + quantity
            }
            set({ cart: newCart })
            } else {
                set({ cart: [...currentCart, { ...product, quantity }] })  
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
                    ? { ...item, quantity: item.quantity + 1 } 
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
        name: "cart-storage"
        }
    )
)