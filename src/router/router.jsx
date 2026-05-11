import React from 'react'
import { Home } from '../app/home/home'
import { Shop } from '../app/shop/shop'
import { Blog } from '../app/blog/blog'
import { Cart } from '../app/cart/cart'
import { Login } from '../app/auth/login'
import { Details } from '../app/details/details'
import { Contact } from '../app/contact/contact'
import { Checkout } from '../app/checkout/checkout'
import { createBrowserRouter } from "react-router-dom"
import { MainPage } from '../common/layouts/main-page/main-page'
import { AuthProtectedRoutes } from '../features/pages/shop/components/auth/protected-routes/auth-protected-routes'


export const router = createBrowserRouter([

    {
        path: "/login",
        Component: Login
    },

    {
        path: "/",
        Component: MainPage,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "shop",
                Component: Shop
            },
            {
                path: "blog",
                Component: Blog
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "cart",
                Component: Cart
            },
            {
                element: <AuthProtectedRoutes />,
                children: [
                    {
                        path: "checkout",
                        Component: Checkout
                    },

                ]
            },
            {
                path: "products/:productId",
                Component: Details
            },
        ]
    }

])