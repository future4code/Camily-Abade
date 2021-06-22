import React from 'react'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

const LoginPage = () => {
    useUnProtectedPage()
    return(
        <LoginForm/>
    )
}

export default LoginPage;