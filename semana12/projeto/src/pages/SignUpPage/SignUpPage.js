import React from 'react'
import useUnProtectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SignUpForm';

const SignUpPage = ({setButtonLoginLogOut}) => {
    useUnProtectedPage()
    return(
    <div>
        <SignUpForm setButtonLoginLogOut={setButtonLoginLogOut}/>
    </div>
    )
}

export default SignUpPage;