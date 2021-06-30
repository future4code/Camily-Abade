import React from 'react'
import useUnProtectedPage from '../../hooks/useUnprotectedPage'
import LoginForm from './LoginForm'

const LoginPage = ({setButtonLoginLogOut}) => {
    useUnProtectedPage()
    return(
        <LoginForm setButtonLoginLogOut={setButtonLoginLogOut}/>
    )
}

export default LoginPage;