import React from 'react'
import { AuthLoginBanner } from './auth-login-banner'
import { AuthLoginInputs } from './auth-login-inputs'
import { ArrowLeft } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

export function AuthLogin() {

    const navigate = useNavigate()
    const location = useLocation()
    
    const previousRoute = location.state?.from || "/home"

    const handleBack = () => {
        navigate(previousRoute, { replace: true})
    }

    return (
        <div>
            <button className='flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-colors py-2 px-2' onClick={handleBack}>
                <ArrowLeft size={20} />
                <span className='text-xl text-black '>Volver atras</span>
            </button>
            <div className='grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10 py-20'>
                <AuthLoginBanner />
                <AuthLoginInputs />
            </div>
        </div>
    )
}
