import React, { useState } from 'react'
import { LogOut, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetAuthService } from '../../../../features/pages/shop/hooks/use-get-auth-service';

export function NavbarIconUser() {

    const { isAuthenticated, logout, user, setUser } = useGetAuthService()
    const [ isOpen, setIsOpen ] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        setUser("Invitado")
        logout()
    }

    const handleLogin = () => {
        navigate("/login", { state: { from: location.pathname } });
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative flex items-center gap-3 font-["Poppins"]'>
            <button className='flex' ><User /></button>
            {
                isAuthenticated ? (
                    <>
                        <button 
                            onClick={handleToggle}
                            className='flex items-center gap-1 cursor-pointer hover:text-gray-600 transition-colors font-medium text-sm'
                        >
                            Hola, {user}
                        </button>
                        {
                            isOpen && (
                                <div className='absolute left-0 top-10 z-20 bg-white border border-gray-100 w-48 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200' onClick={handleToggle}>
                                    <button className='w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:text-red-600 transition-all' >
                                        <p className="cursor-pointer" onClick={logout}>Logout</p>
                                        <LogOut className='fill-red-500 text-red-500' onClick={handleLogout} />
                                    </button>
                                </div>
                            )
                        }
                    </>
                ) : (
                    <div onClick={handleLogin} className='cursor-pointer'>Inicia sesión</div>
                )
            }
        </div>
    )
}
