import React, { useEffect } from 'react'
import { userAuth } from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const { user } = userAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user){
            navigate('/')
        }
    }, [])

    return (
        <div>LoginPage</div>
    )
}

export default LoginPage
