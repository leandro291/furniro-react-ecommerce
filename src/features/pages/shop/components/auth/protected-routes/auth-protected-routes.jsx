import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useGetAuthService } from '../../../hooks/use-get-auth-service'

export function AuthProtectedRoutes() {

    const { isAuthenticated } = useGetAuthService();

    if (!isAuthenticated){
        return <Navigate to={"/login"} replace />
    }

    return (
        <Outlet />
    )
}
