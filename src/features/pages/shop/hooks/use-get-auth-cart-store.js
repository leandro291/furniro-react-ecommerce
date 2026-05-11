import { AuthCartStore } from "../store/auth-cart-store"

export const useGetAuthCartStore = () => {

    const { cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = AuthCartStore()

    const totalPrice = (cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)).toFixed(2);

    const pricePerProduct = (productId) => {
        const findProduct = cart.find((item) => item.id == productId)
        return (findProduct.quantity * findProduct.price).toFixed(2)
    }

    return{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        pricePerProduct,
        increaseQuantity,
        decreaseQuantity
    }
}