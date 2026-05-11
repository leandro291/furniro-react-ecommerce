import React from 'react'
import { AuthLogin } from './login/auth-login'
import { AuthHeader } from './header/auth-header'
import { AuthFooter } from './footer/auth-footer'

export function Auth() {
    return (
        <section className='container mx-auto h-screen grid grid-rows-[100px_1fr_100px]'>
            <AuthHeader />
            <AuthLogin />
            <AuthFooter />
        </section>
    )
}
