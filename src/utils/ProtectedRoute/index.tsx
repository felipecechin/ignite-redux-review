import React, { useEffect, useState } from 'react'

import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

interface IProtectedRouteProps {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: IProtectedRouteProps) {
    const [cookies] = useCookies(['token'])
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const checkUserToken = () => {
            const userToken = cookies.token
            if (!userToken || userToken === 'undefined') {
                setIsLoggedIn(false)
                return navigate('/auth/login')
            }
            setIsLoggedIn(true)
        }
        checkUserToken()
    }, [navigate])

    return <React.Fragment>{isLoggedIn ? children : null}</React.Fragment>
}
