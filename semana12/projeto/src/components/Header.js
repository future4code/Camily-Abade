import React, { useState } from "react";
import { useHistory } from "react-router";
import { goToLogin, goToFeed } from "../routes/cordinator";
import {BodyBar} from '../components/HeaderDispositionStyled'
import { ButtonsHeader } from "../components/HeaderColorStyled";


 const Header = ({buttonLoginLogOut, setButtonLoginLogOut}) => {
    const token = localStorage.getItem('token')
    const history = useHistory()
   
    const logOut = () => {
        localStorage.removeItem("token")
    }

     const buttonAction = () => {
        if(token){
            logOut()
            setButtonLoginLogOut('LogIn')
            goToLogin(history)
        }else{
            goToLogin(history)
        }
    }

    return(
        <BodyBar>
            <ButtonsHeader onClick={() => goToLogin (history)}>LabEddit</ButtonsHeader>
            <ButtonsHeader onClick={buttonAction}>{buttonLoginLogOut}</ButtonsHeader>
        </BodyBar>
    )
}
export default Header;