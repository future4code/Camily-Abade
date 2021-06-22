import React from 'react'
import useUnProtectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
    useUnProtectedPage()
    return(
    <div>
        <SignUpForm/>
    </div>
    )
}

export default SignUpPage;